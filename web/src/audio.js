// Fully synthesized 3D audio: no sound files needed.
// Every sound is generated with the Web Audio API and positioned in 3D (HRTF).

export class Audio3D {
  constructor() {
    this.ctx = null;
    this.enabled = true;
  }

  init() {
    if (this.ctx) { this.ctx.resume(); return; }
    const AC = window.AudioContext || window.webkitAudioContext;
    const ctx = this.ctx = new AC({ latencyHint: 'interactive' });

    this.master = ctx.createGain();
    this.master.gain.value = 0.9;
    const comp = ctx.createDynamicsCompressor();
    comp.threshold.value = -14; comp.ratio.value = 4;
    this.master.connect(comp).connect(ctx.destination);

    // outdoor reverb (synthetic impulse response)
    this.reverb = ctx.createConvolver();
    this.reverb.buffer = this._impulse(2.8, 2.5);
    this.reverbSend = ctx.createGain();
    this.reverbSend.gain.value = 0.35;
    this.reverbSend.connect(this.reverb).connect(this.master);

    this.sfx = ctx.createGain(); this.sfx.gain.value = 1;
    this.sfx.connect(this.master);
    this.sfx.connect(this.reverbSend);

    this.noiseBuf = this._noise(2);
    this.brownBuf = this._brown(4);
    this._ambient();
    this.heartbeatOn = false;
    this._heartLoop();
  }

  suspend() { this.ctx && this.ctx.suspend(); }
  resume() { this.ctx && this.ctx.resume(); }

  // ---------- buffers ----------
  _noise(sec) {
    const b = this.ctx.createBuffer(1, this.ctx.sampleRate * sec, this.ctx.sampleRate);
    const d = b.getChannelData(0);
    for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
    return b;
  }
  _brown(sec) {
    const b = this.ctx.createBuffer(1, this.ctx.sampleRate * sec, this.ctx.sampleRate);
    const d = b.getChannelData(0);
    let last = 0;
    for (let i = 0; i < d.length; i++) {
      last = (last + 0.02 * (Math.random() * 2 - 1)) / 1.02;
      d[i] = last * 3.5;
    }
    return b;
  }
  _impulse(sec, decay) {
    const rate = this.ctx.sampleRate, len = rate * sec;
    const b = this.ctx.createBuffer(2, len, rate);
    for (let c = 0; c < 2; c++) {
      const d = b.getChannelData(c);
      for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, decay);
    }
    return b;
  }

  // ---------- routing ----------
  listener(pos, fwd, up) {
    if (!this.ctx) return;
    const l = this.ctx.listener, t = this.ctx.currentTime;
    if (l.positionX) {
      l.positionX.setValueAtTime(pos.x, t); l.positionY.setValueAtTime(pos.y, t); l.positionZ.setValueAtTime(pos.z, t);
      l.forwardX.setValueAtTime(fwd.x, t); l.forwardY.setValueAtTime(fwd.y, t); l.forwardZ.setValueAtTime(fwd.z, t);
      l.upX.setValueAtTime(up.x, t); l.upY.setValueAtTime(up.y, t); l.upZ.setValueAtTime(up.z, t);
    } else {
      l.setPosition(pos.x, pos.y, pos.z);
      l.setOrientation(fwd.x, fwd.y, fwd.z, up.x, up.y, up.z);
    }
  }
  panner(pos) {
    const p = this.ctx.createPanner();
    p.panningModel = 'HRTF';
    p.distanceModel = 'inverse';
    p.refDistance = 2; p.rolloffFactor = 1.1; p.maxDistance = 80;
    this.setPos(p, pos);
    p.connect(this.sfx);
    return p;
  }
  setPos(p, pos) {
    if (p.positionX) {
      const t = this.ctx.currentTime;
      p.positionX.setValueAtTime(pos.x, t); p.positionY.setValueAtTime(pos.y, t); p.positionZ.setValueAtTime(pos.z, t);
    } else p.setPosition(pos.x, pos.y, pos.z);
  }
  _out(pos) { return pos ? this.panner(pos) : this.sfx; }

  _noiseSrc(buf = this.noiseBuf, loop = false) {
    const s = this.ctx.createBufferSource();
    s.buffer = buf; s.loop = loop;
    s.loopStart = 0; s.playbackRate.value = 1;
    return s;
  }
  _env(g, t, a, peak, d, sustain = 0.0001) {
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(peak, t + a);
    g.gain.exponentialRampToValueAtTime(Math.max(sustain, 0.0001), t + a + d);
  }

  // ---------- ambience ----------
  _ambient() {
    const ctx = this.ctx;
    // wind: looping brown + white noise through moving band-pass
    const wind = this._noiseSrc(this.brownBuf, true);
    const wbp = ctx.createBiquadFilter(); wbp.type = 'bandpass'; wbp.Q.value = 0.7; wbp.frequency.value = 400;
    const wg = ctx.createGain(); wg.gain.value = 0.25;
    wind.connect(wbp).connect(wg).connect(this.master);
    wind.start();
    const whistle = this._noiseSrc(this.noiseBuf, true);
    const hbp = ctx.createBiquadFilter(); hbp.type = 'bandpass'; hbp.Q.value = 12; hbp.frequency.value = 900;
    const hg = ctx.createGain(); hg.gain.value = 0.015;
    whistle.connect(hbp).connect(hg).connect(this.master);
    whistle.start();
    const gust = () => {
      const t = ctx.currentTime, dur = 2 + Math.random() * 4;
      wbp.frequency.setTargetAtTime(200 + Math.random() * 600, t, dur / 2);
      wg.gain.setTargetAtTime(0.12 + Math.random() * 0.35, t, dur / 2);
      hbp.frequency.setTargetAtTime(600 + Math.random() * 900, t, dur / 2);
      hg.gain.setTargetAtTime(Math.random() * 0.03, t, dur / 2);
      setTimeout(gust, dur * 1000);
    };
    gust();

    // ominous low drone
    const dg = ctx.createGain(); dg.gain.value = 0.0;
    const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 220;
    dg.connect(lp).connect(this.master);
    [41.2, 41.5, 61.7, 82.1].forEach((f, i) => {
      const o = ctx.createOscillator(); o.type = i < 2 ? 'sawtooth' : 'triangle';
      o.frequency.value = f;
      const og = ctx.createGain(); og.gain.value = i < 2 ? 0.25 : 0.15;
      o.connect(og).connect(dg); o.start();
    });
    const swell = () => {
      const t = ctx.currentTime, d = 6 + Math.random() * 8;
      dg.gain.setTargetAtTime(0.03 + Math.random() * 0.07, t, d / 3);
      lp.frequency.setTargetAtTime(120 + Math.random() * 200, t, d / 3);
      setTimeout(swell, d * 1000);
    };
    swell();

    // crickets
    const cricket = () => {
      const t = ctx.currentTime;
      const f = 4200 + Math.random() * 600;
      const pos = this._randAround(15, 30);
      const out = this.panner(pos);
      const chirps = 2 + Math.floor(Math.random() * 4);
      for (let i = 0; i < chirps; i++) {
        const o = ctx.createOscillator(); o.frequency.value = f;
        const g = ctx.createGain();
        const st = t + i * 0.09;
        g.gain.setValueAtTime(0, st);
        for (let k = 0; k < 4; k++) {
          g.gain.setValueAtTime(0.05, st + k * 0.012);
          g.gain.setValueAtTime(0, st + k * 0.012 + 0.006);
        }
        o.connect(g).connect(out); o.start(st); o.stop(st + 0.06);
      }
      setTimeout(cricket, 400 + Math.random() * 1800);
    };
    cricket(); setTimeout(cricket, 700);

    // owl and crows
    const fauna = () => {
      if (Math.random() < 0.55) this.owl(this._randAround(25, 45));
      else this.crow(this._randAround(25, 50));
      setTimeout(fauna, 9000 + Math.random() * 16000);
    };
    setTimeout(fauna, 5000);
  }
  _randAround(r0, r1) {
    const a = Math.random() * Math.PI * 2, r = r0 + Math.random() * (r1 - r0);
    return { x: Math.cos(a) * r, y: 4 + Math.random() * 6, z: Math.sin(a) * r };
  }

  owl(pos) {
    const ctx = this.ctx, out = this.panner(pos);
    const hoot = (st, len, f) => {
      const o = ctx.createOscillator(); o.type = 'sine';
      o.frequency.setValueAtTime(f * 0.9, st);
      o.frequency.linearRampToValueAtTime(f, st + 0.05);
      o.frequency.linearRampToValueAtTime(f * 0.94, st + len);
      const g = ctx.createGain(); this._env(g, st, 0.05, 0.25, len);
      o.connect(g).connect(out); o.start(st); o.stop(st + len + 0.1);
    };
    const t = ctx.currentTime;
    hoot(t, 0.35, 380); hoot(t + 0.6, 0.15, 400); hoot(t + 0.8, 0.15, 400); hoot(t + 1.1, 0.6, 370);
  }
  crow(pos) {
    const ctx = this.ctx, out = this.panner(pos);
    const n = 2 + Math.floor(Math.random() * 3);
    for (let i = 0; i < n; i++) {
      const st = ctx.currentTime + i * 0.38;
      const o = ctx.createOscillator(); o.type = 'sawtooth';
      o.frequency.setValueAtTime(520, st); o.frequency.linearRampToValueAtTime(380, st + 0.25);
      const ns = this._noiseSrc(); const ng = ctx.createGain(); ng.gain.value = 0.4;
      const f1 = ctx.createBiquadFilter(); f1.type = 'bandpass'; f1.frequency.value = 1300; f1.Q.value = 3;
      const f2 = ctx.createBiquadFilter(); f2.type = 'bandpass'; f2.frequency.value = 2400; f2.Q.value = 4;
      const g = ctx.createGain(); this._env(g, st, 0.02, 0.3, 0.26);
      o.connect(f1); ns.connect(ng).connect(f1); o.connect(f2);
      f1.connect(g); f2.connect(g); g.connect(out);
      o.start(st); o.stop(st + 0.32); ns.start(st); ns.stop(st + 0.32);
    }
  }

  thunder(distance = 1) {
    const ctx = this.ctx, t = ctx.currentTime;
    const s = this._noiseSrc(this.brownBuf);
    const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 300 / distance + 80;
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(1.2 / distance, t + 0.08);
    g.gain.exponentialRampToValueAtTime(0.5 / distance, t + 0.8);
    g.gain.exponentialRampToValueAtTime(0.7 / distance, t + 1.4);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 4.5);
    s.connect(lp).connect(g).connect(this.master);
    g.connect(this.reverbSend);
    s.start(t); s.stop(t + 4.6);
  }

  // ---------- zombie voice ----------
  // Formant-synthesized groan. type: 'groan' | 'snarl' | 'scream' | 'pain' | 'die'
  zombieVoice(pos, type = 'groan', pitch = 1) {
    if (!this.ctx) return;
    const ctx = this.ctx, t = ctx.currentTime;
    const out = pos ? this.panner(pos) : this.sfx;
    const dur = { groan: 1.1 + Math.random() * 1.2, snarl: 0.5, scream: 0.9, pain: 0.45, die: 1.6 }[type];
    const base = { groan: 85, snarl: 120, scream: 210, pain: 150, die: 95 }[type] * pitch * (0.85 + Math.random() * 0.3);

    const src = ctx.createOscillator(); src.type = 'sawtooth';
    src.frequency.setValueAtTime(base, t);
    if (type === 'die') src.frequency.exponentialRampToValueAtTime(base * 0.45, t + dur);
    else if (type === 'scream') { src.frequency.linearRampToValueAtTime(base * 1.4, t + 0.2); src.frequency.linearRampToValueAtTime(base * 0.8, t + dur); }
    else src.frequency.linearRampToValueAtTime(base * (0.8 + Math.random() * 0.4), t + dur);
    // vocal fry / roughness via fast random FM
    const jit = ctx.createOscillator(); jit.type = 'square'; jit.frequency.value = 23 + Math.random() * 20;
    const jg = ctx.createGain(); jg.gain.value = base * 0.18;
    jit.connect(jg).connect(src.frequency);

    const breath = this._noiseSrc(); breath.playbackRate.value = 0.7;
    const bg = ctx.createGain(); bg.gain.value = type === 'snarl' ? 0.9 : 0.35;

    const mix = ctx.createGain(); mix.gain.value = 1;
    src.connect(mix); breath.connect(bg).connect(mix);

    // vowel formants morphing from "oo" -> "aa" -> "uh"
    const vowels = [[300, 870, 2240], [730, 1090, 2440], [520, 1190, 2390], [570, 840, 2410]];
    const v0 = vowels[Math.floor(Math.random() * 4)], v1 = vowels[Math.floor(Math.random() * 4)];
    const sum = ctx.createGain();
    [0, 1, 2].forEach((k) => {
      const f = ctx.createBiquadFilter(); f.type = 'bandpass'; f.Q.value = k === 0 ? 5 : 8;
      f.frequency.setValueAtTime(v0[k] * pitch, t);
      f.frequency.linearRampToValueAtTime(v1[k] * pitch, t + dur * 0.7);
      const fg = ctx.createGain(); fg.gain.value = [1, 0.6, 0.25][k];
      mix.connect(f).connect(fg).connect(sum);
    });
    // tremolo for gurgling
    const trem = ctx.createGain(); trem.gain.value = 0.7;
    const lfo = ctx.createOscillator(); lfo.frequency.value = 5 + Math.random() * 9;
    const lg = ctx.createGain(); lg.gain.value = 0.3;
    lfo.connect(lg).connect(trem.gain);

    const env = ctx.createGain();
    const vol = { groan: 0.9, snarl: 1.1, scream: 1.0, pain: 1.2, die: 1.0 }[type];
    env.gain.setValueAtTime(0.0001, t);
    env.gain.exponentialRampToValueAtTime(vol, t + 0.08);
    env.gain.setValueAtTime(vol * 0.8, t + dur * 0.6);
    env.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    sum.connect(trem).connect(env).connect(out);

    [src, jit, breath, lfo].forEach((n) => { n.start(t); n.stop(t + dur + 0.05); });
  }

  zombieStep(pos) {
    const ctx = this.ctx, t = ctx.currentTime, out = this.panner(pos);
    const s = this._noiseSrc(); const f = ctx.createBiquadFilter();
    f.type = 'lowpass'; f.frequency.setValueAtTime(900, t); f.frequency.exponentialRampToValueAtTime(200, t + 0.25);
    const g = ctx.createGain(); this._env(g, t, 0.03, 0.25, 0.25);
    s.connect(f).connect(g).connect(out); s.start(t, Math.random()); s.stop(t + 0.3);
  }

  // ---------- axe ----------
  whoosh() {
    const ctx = this.ctx, t = ctx.currentTime;
    const s = this._noiseSrc(); const f = ctx.createBiquadFilter();
    f.type = 'bandpass'; f.Q.value = 2.5;
    f.frequency.setValueAtTime(300, t); f.frequency.exponentialRampToValueAtTime(2200, t + 0.12);
    f.frequency.exponentialRampToValueAtTime(500, t + 0.3);
    const g = ctx.createGain(); this._env(g, t, 0.07, 0.8, 0.25);
    s.connect(f).connect(g).connect(this.sfx); s.start(t, Math.random()); s.stop(t + 0.35);
    // grunt of effort
    const o = ctx.createOscillator(); o.type = 'sawtooth'; o.frequency.setValueAtTime(130, t); o.frequency.linearRampToValueAtTime(100, t + 0.15);
    const bp = ctx.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = 600; bp.Q.value = 3;
    const og = ctx.createGain(); this._env(og, t, 0.02, 0.12, 0.15);
    o.connect(bp).connect(og).connect(this.sfx); o.start(t); o.stop(t + 0.2);
  }

  // a spinning axe "whup-whup" that follows the axe; returns handle with update/stop
  spinLoop(pos, rate) {
    const ctx = this.ctx, t = ctx.currentTime;
    const p = this.panner(pos);
    const s = this._noiseSrc(this.noiseBuf, true);
    const f = ctx.createBiquadFilter(); f.type = 'bandpass'; f.frequency.value = 1100; f.Q.value = 1.5;
    const am = ctx.createGain(); am.gain.value = 0;
    const lfo = ctx.createOscillator(); lfo.type = 'sine'; lfo.frequency.value = rate;
    const lg = ctx.createGain(); lg.gain.value = 0.35;
    lfo.connect(lg).connect(am.gain);
    s.connect(f).connect(am).connect(p);
    s.start(t, Math.random()); lfo.start(t);
    return {
      update: (pp) => this.setPos(p, pp),
      stop: () => { const e = ctx.currentTime; try { s.stop(e + 0.02); lfo.stop(e + 0.02); } catch (_) {} },
    };
  }

  // decapitating head hit: crack + squelch + spray
  headHit(pos) {
    const ctx = this.ctx, t = ctx.currentTime, out = this.panner(pos);
    // bone crack: several sharp clicks
    for (let i = 0; i < 5; i++) {
      const st = t + i * 0.012 + Math.random() * 0.01;
      const s = this._noiseSrc(); const hp = ctx.createBiquadFilter(); hp.type = 'highpass'; hp.frequency.value = 1800;
      const g = ctx.createGain(); this._env(g, st, 0.001, 1.4, 0.03);
      s.connect(hp).connect(g).connect(out); s.start(st, Math.random()); s.stop(st + 0.05);
    }
    // meaty thump
    const o = ctx.createOscillator(); o.frequency.setValueAtTime(140, t); o.frequency.exponentialRampToValueAtTime(45, t + 0.2);
    const og = ctx.createGain(); this._env(og, t, 0.004, 1.5, 0.25);
    o.connect(og).connect(out); o.start(t); o.stop(t + 0.3);
    this.squelch(pos, 1.3);
    // blood spray hiss
    const s = this._noiseSrc(); const bp = ctx.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = 3000; bp.Q.value = 0.8;
    const g = ctx.createGain(); g.gain.setValueAtTime(0.0001, t + 0.05); g.gain.exponentialRampToValueAtTime(0.35, t + 0.1); g.gain.exponentialRampToValueAtTime(0.0001, t + 1.3);
    s.connect(bp).connect(g).connect(out); s.start(t + 0.05, Math.random()); s.stop(t + 1.4);
  }
  squelch(pos, vol = 1) {
    const ctx = this.ctx, t = ctx.currentTime, out = pos ? this.panner(pos) : this.sfx;
    const s = this._noiseSrc(); const f = ctx.createBiquadFilter(); f.type = 'lowpass'; f.Q.value = 9;
    f.frequency.setValueAtTime(2500, t); f.frequency.exponentialRampToValueAtTime(250, t + 0.22);
    const g = ctx.createGain(); this._env(g, t, 0.005, 0.9 * vol, 0.28);
    s.connect(f).connect(g).connect(out); s.start(t, Math.random()); s.stop(t + 0.32);
  }
  bodyHit(pos) {
    const ctx = this.ctx, t = ctx.currentTime, out = this.panner(pos);
    const o = ctx.createOscillator(); o.frequency.setValueAtTime(110, t); o.frequency.exponentialRampToValueAtTime(50, t + 0.15);
    const og = ctx.createGain(); this._env(og, t, 0.003, 1.2, 0.2);
    o.connect(og).connect(out); o.start(t); o.stop(t + 0.25);
    this.squelch(pos, 0.8);
  }
  groundThunk(pos) {
    const ctx = this.ctx, t = ctx.currentTime, out = this.panner(pos);
    const o = ctx.createOscillator(); o.frequency.setValueAtTime(90, t); o.frequency.exponentialRampToValueAtTime(40, t + 0.15);
    const og = ctx.createGain(); this._env(og, t, 0.002, 1.0, 0.18);
    o.connect(og).connect(out); o.start(t); o.stop(t + 0.2);
    const s = this._noiseSrc(); const f = ctx.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = 1400;
    const g = ctx.createGain(); this._env(g, t, 0.002, 0.6, 0.2);
    s.connect(f).connect(g).connect(out); s.start(t, Math.random()); s.stop(t + 0.25);
  }
  woodThunk(pos) {
    const ctx = this.ctx, t = ctx.currentTime, out = this.panner(pos);
    [180, 410, 730].forEach((fr, i) => {
      const o = ctx.createOscillator(); o.frequency.value = fr * (0.95 + Math.random() * 0.1);
      const g = ctx.createGain(); this._env(g, t, 0.002, [0.9, 0.4, 0.2][i], 0.18 - i * 0.04);
      o.connect(g).connect(out); o.start(t); o.stop(t + 0.25);
    });
    const s = this._noiseSrc(); const f = ctx.createBiquadFilter(); f.type = 'bandpass'; f.frequency.value = 2500;
    const g = ctx.createGain(); this._env(g, t, 0.001, 0.6, 0.05);
    s.connect(f).connect(g).connect(out); s.start(t, Math.random()); s.stop(t + 0.08);
    // handle vibration "boing"
    const v = ctx.createOscillator(); v.frequency.value = 95;
    const vg = ctx.createGain(); this._env(vg, t, 0.01, 0.25, 0.5);
    const am = ctx.createOscillator(); am.frequency.value = 18; const amg = ctx.createGain(); amg.gain.value = 0.2;
    am.connect(amg).connect(vg.gain);
    v.connect(vg).connect(out); v.start(t); v.stop(t + 0.6); am.start(t); am.stop(t + 0.6);
  }
  stoneClang(pos) {
    const ctx = this.ctx, t = ctx.currentTime, out = this.panner(pos);
    [1250, 2710, 3980, 5600].forEach((fr, i) => {
      const o = ctx.createOscillator(); o.frequency.value = fr * (0.97 + Math.random() * 0.06);
      const g = ctx.createGain(); this._env(g, t, 0.001, 0.35 / (i + 1), 0.5 - i * 0.08);
      o.connect(g).connect(out); o.start(t); o.stop(t + 0.6);
    });
    const s = this._noiseSrc(); const f = ctx.createBiquadFilter(); f.type = 'highpass'; f.frequency.value = 2000;
    const g = ctx.createGain(); this._env(g, t, 0.001, 0.8, 0.07);
    s.connect(f).connect(g).connect(out); s.start(t, Math.random()); s.stop(t + 0.1);
  }
  bodyFall(pos) {
    const ctx = this.ctx, t = ctx.currentTime, out = this.panner(pos);
    [0, 0.12].forEach((d, i) => {
      const o = ctx.createOscillator(); o.frequency.setValueAtTime(70, t + d); o.frequency.exponentialRampToValueAtTime(35, t + d + 0.2);
      const g = ctx.createGain(); this._env(g, t + d, 0.005, i ? 0.6 : 1.0, 0.3);
      o.connect(g).connect(out); o.start(t + d); o.stop(t + d + 0.35);
    });
    const s = this._noiseSrc(this.brownBuf); const g = ctx.createGain(); this._env(g, t, 0.01, 0.7, 0.4);
    s.connect(g).connect(out); s.start(t, Math.random() * 2); s.stop(t + 0.45);
  }

  // ---------- player ----------
  bite() {
    const ctx = this.ctx, t = ctx.currentTime;
    this.zombieVoice(null, 'snarl', 1);
    for (let i = 0; i < 3; i++) {
      const st = t + 0.08 + i * 0.02;
      const s = this._noiseSrc(); const hp = ctx.createBiquadFilter(); hp.type = 'highpass'; hp.frequency.value = 1500;
      const g = ctx.createGain(); this._env(g, st, 0.001, 0.9, 0.04);
      s.connect(hp).connect(g).connect(this.sfx); s.start(st, Math.random()); s.stop(st + 0.06);
    }
    this.squelch(null, 0.9);
  }
  playerHurt() {
    const ctx = this.ctx, t = ctx.currentTime + 0.05;
    const o = ctx.createOscillator(); o.type = 'sawtooth';
    o.frequency.setValueAtTime(160, t); o.frequency.linearRampToValueAtTime(110, t + 0.3);
    const mix = ctx.createGain();
    [[650, 6], [1080, 8]].forEach(([fr, q]) => {
      const f = ctx.createBiquadFilter(); f.type = 'bandpass'; f.frequency.value = fr; f.Q.value = q;
      o.connect(f).connect(mix);
    });
    const g = ctx.createGain(); this._env(g, t, 0.02, 0.9, 0.35);
    mix.connect(g).connect(this.sfx); o.start(t); o.stop(t + 0.4);
  }
  _beat(t, vol) {
    const ctx = this.ctx;
    const o = ctx.createOscillator(); o.frequency.setValueAtTime(60, t); o.frequency.exponentialRampToValueAtTime(35, t + 0.12);
    const g = ctx.createGain(); this._env(g, t, 0.01, vol, 0.15);
    o.connect(g).connect(this.master); o.start(t); o.stop(t + 0.2);
  }
  _heartLoop() {
    if (this.heartbeatOn) {
      const t = this.ctx.currentTime;
      this._beat(t, 0.9); this._beat(t + 0.22, 0.6);
    }
    setTimeout(() => this._heartLoop(), this.heartbeatOn ? 750 : 300);
  }

  bell() {
    const ctx = this.ctx, t = ctx.currentTime;
    [1, 2.01, 2.76, 4.07, 5.43].forEach((m, i) => {
      const o = ctx.createOscillator(); o.frequency.value = 98 * m;
      const g = ctx.createGain(); this._env(g, t, 0.005, 0.35 / (i + 1), 5 - i * 0.7);
      o.connect(g); g.connect(this.master); g.connect(this.reverbSend);
      o.start(t); o.stop(t + 5.2);
    });
  }
  gameOver() {
    const ctx = this.ctx, t = ctx.currentTime;
    [55, 58.3, 82.4, 110].forEach((f) => {
      const o = ctx.createOscillator(); o.type = 'sawtooth';
      o.frequency.setValueAtTime(f, t); o.frequency.exponentialRampToValueAtTime(f * 0.5, t + 4);
      const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 400;
      const g = ctx.createGain(); this._env(g, t, 0.3, 0.2, 4);
      o.connect(lp).connect(g); g.connect(this.master); g.connect(this.reverbSend);
      o.start(t); o.stop(t + 4.5);
    });
  }
  // player's own footsteps on dirt and dead grass
  playerStep(run) {
    const ctx = this.ctx, t = ctx.currentTime;
    const s = this._noiseSrc(); const f = ctx.createBiquadFilter();
    f.type = 'bandpass'; f.Q.value = 0.9; f.frequency.value = 700 + Math.random() * 500;
    const g = ctx.createGain(); this._env(g, t, 0.008, run ? 0.4 : 0.28, 0.13);
    s.connect(f).connect(g).connect(this.sfx); s.start(t, Math.random()); s.stop(t + 0.17);
    // crunch of dry grass
    const c = this._noiseSrc(); const hp = ctx.createBiquadFilter(); hp.type = 'highpass'; hp.frequency.value = 3500;
    const cg = ctx.createGain(); this._env(cg, t + 0.02, 0.004, 0.07, 0.07);
    c.connect(hp).connect(cg).connect(this.sfx); c.start(t + 0.02, Math.random()); c.stop(t + 0.1);
    const o = ctx.createOscillator(); o.frequency.setValueAtTime(75, t); o.frequency.exponentialRampToValueAtTime(40, t + 0.08);
    const og = ctx.createGain(); this._env(og, t, 0.004, 0.25, 0.09);
    o.connect(og).connect(this.sfx); o.start(t); o.stop(t + 0.12);
  }

  // looping ghostly choir-like hum coming from the goal crypt
  goalHum() {
    if (this._hum) return this._hum;
    const ctx = this.ctx, t = ctx.currentTime;
    const p = this.ctx.createPanner();
    p.panningModel = 'HRTF'; p.distanceModel = 'inverse'; p.refDistance = 4; p.rolloffFactor = 0.8; p.maxDistance = 120;
    const out = ctx.createGain(); out.gain.value = 0;
    p.connect(out); out.connect(this.master); out.connect(this.reverbSend);
    const mix = ctx.createGain(); mix.gain.value = 0.12;
    mix.connect(p);
    [220, 261.6, 329.6, 440.8, 221.3].forEach((f, i) => {
      const o = ctx.createOscillator(); o.type = i === 4 ? 'triangle' : 'sine'; o.frequency.value = f;
      const g = ctx.createGain(); g.gain.value = 0.25;
      const l = ctx.createOscillator(); l.frequency.value = 0.15 + i * 0.07;
      const lg = ctx.createGain(); lg.gain.value = 0.18;
      l.connect(lg).connect(g.gain);
      o.connect(g).connect(mix); o.start(t); l.start(t);
    });
    // airy shimmer
    const n = this._noiseSrc(this.noiseBuf, true); const bp = ctx.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = 2600; bp.Q.value = 6;
    const ng = ctx.createGain(); ng.gain.value = 0.15; n.connect(bp).connect(ng).connect(mix); n.start(t);
    this._hum = {
      setPos: (pos) => this.setPos(p, pos),
      on: (v) => out.gain.setTargetAtTime(v ? 1 : 0, ctx.currentTime, 0.6),
    };
    return this._hum;
  }

  levelComplete() {
    const ctx = this.ctx, t = ctx.currentTime;
    [261.6, 329.6, 392, 523.2].forEach((f, i) => {
      const st = t + i * 0.18;
      [1, 2.01, 3.02].forEach((m, k) => {
        const o = ctx.createOscillator(); o.frequency.value = f * m;
        const g = ctx.createGain(); this._env(g, st, 0.01, 0.22 / (k + 1), 2.5);
        o.connect(g); g.connect(this.master); g.connect(this.reverbSend);
        o.start(st); o.stop(st + 2.6);
      });
    });
  }

  pickup() {
    const ctx = this.ctx, t = ctx.currentTime;
    const s = this._noiseSrc(); const f = ctx.createBiquadFilter(); f.type = 'bandpass'; f.frequency.value = 3500; f.Q.value = 3;
    const g = ctx.createGain(); this._env(g, t, 0.003, 0.15, 0.08);
    s.connect(f).connect(g).connect(this.sfx); s.start(t, Math.random()); s.stop(t + 0.1);
  }
  click() {
    const ctx = this.ctx, t = ctx.currentTime;
    const o = ctx.createOscillator(); o.frequency.value = 220; o.type = 'square';
    const g = ctx.createGain(); this._env(g, t, 0.002, 0.08, 0.06);
    o.connect(g).connect(this.sfx); o.start(t); o.stop(t + 0.08);
  }
}
