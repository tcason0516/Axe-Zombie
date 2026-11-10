import * as THREE from 'three';
import { buildWorld, MAP_R } from './world.js';
import { Zombie, buildZombieMaterials } from './zombie.js';
import { Audio3D } from './audio.js';
import { woodMaps, metalMaps, softSprite, bloodSplatTexture } from './textures.js';

const $ = (id) => document.getElementById(id);
const isMobile = /Android|iPhone|iPad|Mobile/i.test(navigator.userAgent) || 'ontouchstart' in window;
const QUALITY = isMobile
  ? { shadow: 1024, grass: 9000, trees: 42, graves: 0, mist: 40, pr: Math.min(window.devicePixelRatio, 1.5) }
  : { shadow: 2048, grass: 16000, trees: 52, graves: 0, mist: 55, pr: Math.min(window.devicePixelRatio, 2) };

const AXE_SPEED = 26, GRAVITY = 6.0, SPIN = 13; // m/s, m/s^2, rad/s
const MAX_AXES = 5, AXE_REGEN = 1.0, THROW_CD = 0.33;
const EYE = 1.65, WALK = 3.0, RUN = 4.6, PLAYER_R = 0.35;

const vibrate = (ms) => {
  try { if (window.AndroidBridge) window.AndroidBridge.vibrate(ms); else if (navigator.vibrate) navigator.vibrate(ms); } catch (_) {}
};

class Game {
  constructor() {
    this.audio = new Audio3D();
    this.state = 'loading';
    this.best = +(localStorage.getItem('axezombie_best') || 0);
  }

  async init() {
    const setProg = (p, t) => { $('loadbar').style.width = p + '%'; $('loadtxt').textContent = t; return new Promise((r) => setTimeout(r, 16)); };
    await setProg(5, 'Preparing renderer');
    const renderer = this.renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
    renderer.setPixelRatio(QUALITY.pr);
    renderer.setSize(innerWidth, innerHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    $('game').appendChild(renderer.domElement);

    const scene = this.scene = new THREE.Scene();
    const camera = this.camera = new THREE.PerspectiveCamera(70, innerWidth / innerHeight, 0.05, 500);
    camera.rotation.order = 'YXZ';
    this.player = new THREE.Vector3(0, 0, 0);
    this.move = { x: 0, y: 0 }; this.look = { x: 0, y: 0 }; this.keys = {};
    camera.position.set(0, EYE, 0);
    scene.add(camera);
    // dim head-lamp so approaching zombies' faces are readable
    const lamp = new THREE.SpotLight(0xd8d0c0, 14, 30, 0.75, 0.9, 1.3);
    lamp.position.set(0, 0.1, 0);
    lamp.target.position.set(0, -0.15, -1);
    camera.add(lamp); camera.add(lamp.target);

    await setProg(15, 'Digging graves');
    this.world = buildWorld(scene, QUALITY);
    await setProg(55, 'Raising the dead');
    buildZombieMaterials();
    await setProg(80, 'Sharpening axes');
    this._buildAxe();
    this._buildParticles();
    await setProg(95, 'Lighting the lantern');

    this.zombies = [];
    this.flying = [];
    this.stuck = [];
    this.decals = [];
    this.yaw = 0; this.pitch = 0;
    this.shake = 0;
    this.time = 0;
    this._bindInput();
    addEventListener('resize', () => this._resize());
    this._resize();

    // warm-up render (compiles shaders) with a dummy zombie
    const z = new Zombie(scene, new THREE.Vector3(0, 0, -8), { speed: 0, runner: false });
    renderer.render(scene, camera);
    z.dispose();

    await setProg(100, 'Ready');
    $('loading').classList.add('hidden');
    $('menu').classList.remove('hidden');
    $('bestMenu').textContent = this.best;
    this.state = 'menu';
    this._last = performance.now();
    renderer.setAnimationLoop(() => this._frame());

    // Android lifecycle hooks
    window.onAppPause = () => this.pause();
    window.onAppResume = () => this.audio.resume();
    document.addEventListener('visibilitychange', () => { if (document.hidden) this.pause(); });
  }

  // ---------- axe ----------
  _buildAxe() {
    const wood = new THREE.MeshStandardMaterial({ ...woodMaps(), roughness: 1 });
    const metal = new THREE.MeshStandardMaterial({ ...metalMaps(), metalness: 0.92, roughness: 1, envMapIntensity: 1 });
    // quick env map so steel reflects the moonlit sky
    const pm = new THREE.PMREMGenerator(this.renderer);
    const envScene = new THREE.Scene();
    envScene.background = new THREE.Color(0x111822);
    const l1 = new THREE.Mesh(new THREE.SphereGeometry(1, 8, 8), new THREE.MeshBasicMaterial({ color: 0x8899bb }));
    l1.position.set(-3, 4, -3); envScene.add(l1);
    const l2 = new THREE.Mesh(new THREE.SphereGeometry(0.6, 8, 8), new THREE.MeshBasicMaterial({ color: 0xff9944 }));
    l2.position.set(3, 1, 2); envScene.add(l2);
    metal.envMap = pm.fromScene(envScene, 0.04).texture;
    const edgeMat = new THREE.MeshStandardMaterial({ color: 0xd8dde4, metalness: 1, roughness: 0.18, envMap: metal.envMap });
    this.axeBlood = new THREE.MeshStandardMaterial({ color: 0x4a0202, roughness: 0.2, metalness: 0.2 });

    const g = new THREE.Group();
    // handle (origin placed near the centre of mass, close to the head)
    const handleGeo = new THREE.CylinderGeometry(0.017, 0.021, 0.62, 10, 6);
    const hp = handleGeo.attributes.position;
    for (let i = 0; i < hp.count; i++) { const y = hp.getY(i); const s = 1 + Math.sin(y * 9) * 0.06 + (y < -0.25 ? 0.25 : 0); hp.setX(i, hp.getX(i) * s); hp.setZ(i, hp.getZ(i) * s * 1.25); }
    handleGeo.computeVertexNormals();
    const handle = new THREE.Mesh(handleGeo, wood);
    handle.position.y = -0.17;
    g.add(handle);
    // leather grip wrap
    const grip = new THREE.Mesh(new THREE.CylinderGeometry(0.024, 0.024, 0.16, 10), new THREE.MeshStandardMaterial({ color: 0x2a1a10, roughness: 0.8 }));
    grip.position.y = -0.38; g.add(grip);
    // axe head: bearded blade profile
    const s = new THREE.Shape();
    s.moveTo(-0.035, 0.05); s.lineTo(0.03, 0.05);
    s.quadraticCurveTo(0.08, 0.06, 0.13, 0.11);
    s.lineTo(0.145, 0.105);
    s.quadraticCurveTo(0.16, 0.0, 0.135, -0.1);
    s.lineTo(0.12, -0.105);
    s.quadraticCurveTo(0.07, -0.03, 0.03, -0.03);
    s.lineTo(-0.035, -0.03); s.lineTo(-0.035, 0.05);
    const headGeo = new THREE.ExtrudeGeometry(s, { depth: 0.022, bevelEnabled: true, bevelThickness: 0.006, bevelSize: 0.004, bevelSegments: 2, curveSegments: 12 });
    headGeo.translate(0, 0, -0.011);
    // taper toward the edge
    const ap = headGeo.attributes.position;
    for (let i = 0; i < ap.count; i++) { const x = ap.getX(i); const k = Math.max(0.12, 1 - Math.max(0, x - 0.02) / 0.13); ap.setZ(i, ap.getZ(i) * k); }
    headGeo.computeVertexNormals();
    const head = new THREE.Mesh(headGeo, metal);
    head.rotation.y = -Math.PI / 2; // blade points to +Z
    head.position.y = 0.1;
    g.add(head);
    // polished edge
    const edge = new THREE.Mesh(new THREE.TorusGeometry(0.11, 0.0035, 4, 20, 1.75), edgeMat);
    edge.rotation.y = -Math.PI / 2; edge.rotation.x = 0; edge.position.set(0, 0.105, 0.035); edge.rotation.z = -0.87;
    g.add(edge);
    // poll (back of head)
    const poll = new THREE.Mesh(new THREE.BoxGeometry(0.034, 0.075, 0.045), metal);
    poll.position.set(0, 0.11, -0.03); g.add(poll);
    g.traverse((o) => { if (o.isMesh) o.castShadow = true; });
    this.axeTemplate = g;

    // first-person view model
    const vm = this.viewAxe = new THREE.Group();
    const vmAxe = g.clone();
    vmAxe.rotation.set(-0.15, Math.PI + 0.35, 0.35);
    vm.add(vmAxe);
    // forearm + hand holding the axe
    const skin = new THREE.MeshStandardMaterial({ color: 0x8a6a55, roughness: 0.7 });
    const sleeve = new THREE.MeshStandardMaterial({ color: 0x2a2f26, roughness: 1 });
    const hand = new THREE.Mesh(new THREE.SphereGeometry(0.045, 12, 10), skin);
    hand.scale.set(1, 1.2, 1.1); hand.position.set(0.0, -0.36, 0.0); vmAxe.add(hand);
    const arm = new THREE.Mesh(new THREE.CapsuleGeometry(0.045, 0.35, 4, 10), sleeve);
    arm.position.set(0.05, -0.45, 0.22); arm.rotation.x = 1.3; vmAxe.add(arm);
    vm.position.set(0.34, -0.2, -0.72);
    vm.traverse((o) => { if (o.isMesh) { o.castShadow = false; o.renderOrder = 10; } });
    this.camera.add(vm);
    this.vmBase = vm.position.clone();
    this.vmAnim = { t: 1, phase: 'idle' };
  }

  // ---------- particles ----------
  _buildParticles() {
    const N = 900;
    this.pN = N;
    const geo = new THREE.BufferGeometry();
    this.pPos = new Float32Array(N * 3);
    this.pCol = new Float32Array(N * 3);
    this.pVel = new Float32Array(N * 3);
    this.pLife = new Float32Array(N);
    this.pKind = new Uint8Array(N); // 0 blood, 1 dust
    for (let i = 0; i < N; i++) this.pPos[i * 3 + 1] = -100;
    geo.setAttribute('position', new THREE.BufferAttribute(this.pPos, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(this.pCol, 3));
    const mat = new THREE.PointsMaterial({ size: 0.06, map: softSprite(32), vertexColors: true, transparent: true, depthWrite: false, sizeAttenuation: true, alphaTest: 0.05 });
    this.points = new THREE.Points(geo, mat);
    this.points.frustumCulled = false;
    this.scene.add(this.points);
    this.pIdx = 0;
    this.splatTex = bloodSplatTexture();
  }
  emit(pos, vel, spread, n, kind = 0) {
    for (let k = 0; k < n; k++) {
      const i = this.pIdx = (this.pIdx + 1) % this.pN;
      this.pPos[i * 3] = pos.x; this.pPos[i * 3 + 1] = pos.y; this.pPos[i * 3 + 2] = pos.z;
      this.pVel[i * 3] = vel.x + (Math.random() - 0.5) * spread;
      this.pVel[i * 3 + 1] = vel.y + (Math.random() - 0.3) * spread;
      this.pVel[i * 3 + 2] = vel.z + (Math.random() - 0.5) * spread;
      this.pLife[i] = 0.8 + Math.random() * 1.2;
      this.pKind[i] = kind;
      if (kind === 0) { const d = 0.25 + Math.random() * 0.25; this.pCol[i * 3] = d; this.pCol[i * 3 + 1] = 0.0; this.pCol[i * 3 + 2] = 0.0; }
      else { const d = 0.15 + Math.random() * 0.1; this.pCol[i * 3] = d; this.pCol[i * 3 + 1] = d * 0.8; this.pCol[i * 3 + 2] = d * 0.6; }
    }
  }
  _updateParticles(dt) {
    const P = this.pPos, V = this.pVel;
    for (let i = 0; i < this.pN; i++) {
      if (this.pLife[i] <= 0) continue;
      this.pLife[i] -= dt;
      V[i * 3 + 1] -= 9.8 * dt * (this.pKind[i] ? 0.4 : 1);
      P[i * 3] += V[i * 3] * dt; P[i * 3 + 1] += V[i * 3 + 1] * dt; P[i * 3 + 2] += V[i * 3 + 2] * dt;
      const gy = this.world.groundHeight(P[i * 3], P[i * 3 + 2]) + 0.02;
      if (P[i * 3 + 1] < gy) {
        if (this.pKind[i] === 0 && Math.random() < 0.05) this.splat(P[i * 3], P[i * 3 + 2], 0.15 + Math.random() * 0.25);
        P[i * 3 + 1] = -100; this.pLife[i] = 0;
      }
      if (this.pLife[i] <= 0) P[i * 3 + 1] = -100;
    }
    this.points.geometry.attributes.position.needsUpdate = true;
    this.points.geometry.attributes.color.needsUpdate = true;
  }
  splat(x, z, size) {
    const m = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), new THREE.MeshStandardMaterial({ map: this.splatTex, transparent: true, depthWrite: false, roughness: 0.2, polygonOffset: true, polygonOffsetFactor: -2 }));
    m.rotation.x = -Math.PI / 2; m.rotation.z = Math.random() * 6.28;
    m.scale.setScalar(size);
    m.position.set(x, this.world.groundHeight(x, z) + 0.015, z);
    m.receiveShadow = true;
    this.scene.add(m);
    this.decals.push({ m, t: 25 });
    if (this.decals.length > 70) { const d = this.decals.shift(); this.scene.remove(d.m); d.m.material.dispose(); d.m.geometry.dispose(); }
  }

  // ---------- input ----------
  _bindInput() {
    const touch = $('touch');
    const ptrs = new Map();
    touch.addEventListener('pointerdown', (e) => {
      ptrs.set(e.pointerId, { x: e.clientX, y: e.clientY, sx: e.clientX, sy: e.clientY, t: performance.now() });
      touch.setPointerCapture(e.pointerId);
    });
    touch.addEventListener('pointermove', (e) => {
      const p = ptrs.get(e.pointerId);
      if (!p || this.state !== 'playing') return;
      const sens = 2.4 / Math.max(innerWidth, 1) * (this.sens || 1);
      this.yaw -= (e.clientX - p.x) * sens;
      this.pitch -= (e.clientY - p.y) * sens;
      this.pitch = Math.max(-1.1, Math.min(1.0, this.pitch));
      p.x = e.clientX; p.y = e.clientY;
    });
    const up = (e) => {
      const p = ptrs.get(e.pointerId);
      ptrs.delete(e.pointerId);
      if (!p) return;
      // quick tap anywhere = throw
      if (performance.now() - p.t < 220 && Math.hypot(e.clientX - p.sx, e.clientY - p.sy) < 12) this.throwAxe();
    };
    touch.addEventListener('pointerup', up);
    touch.addEventListener('pointercancel', (e) => ptrs.delete(e.pointerId));

    const tb = $('throwBtn');
    tb.addEventListener('pointerdown', (e) => { e.preventDefault(); e.stopPropagation(); this.throwAxe(); tb.classList.add('down'); });
    tb.addEventListener('pointerup', () => tb.classList.remove('down'));
    tb.addEventListener('pointerleave', () => tb.classList.remove('down'));

    this._joystick($('moveZone'), $('moveBase'), $('moveKnob'), this.move, true);
    this._joystick($('lookZone'), $('lookBase'), $('lookKnob'), this.look, false);

    addEventListener('keyup', (e) => { this.keys[e.code] = false; });
    addEventListener('keydown', (e) => {
      this.keys[e.code] = true;
      if (e.code === 'Space') this.throwAxe();
      if (e.code === 'Escape' || e.code === 'KeyP') this.state === 'playing' ? this.pause() : this.state === 'paused' && this.resume();
    });

    $('playBtn').onclick = () => this.start();
    $('againBtn').onclick = () => this.start();
    $('pauseBtn').onclick = (e) => { e.stopPropagation(); this.pause(); };
    $('resumeBtn').onclick = () => this.resume();
    $('quitBtn').onclick = () => this.toMenu();
    $('menuBtn').onclick = () => this.toMenu();
    const sl = $('sens');
    this.sens = +(localStorage.getItem('axezombie_sens') || 1);
    sl.value = this.sens;
    sl.oninput = () => { this.sens = +sl.value; localStorage.setItem('axezombie_sens', sl.value); };
  }

  // virtual analog stick. floating=true: the stick re-centres wherever the thumb lands in its zone
  _joystick(zone, base, knob, out, floating) {
    let id = null, cx = 0, cy = 0;
    const R = 55;
    const home = () => { base.style.left = ''; base.style.top = ''; base.classList.remove('active'); knob.style.transform = 'translate(-50%,-50%)'; };
    const setKnob = (x, y) => {
      let dx = x - cx, dy = y - cy;
      const d = Math.hypot(dx, dy);
      if (d > R) { dx *= R / d; dy *= R / d; }
      knob.style.transform = `translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px))`;
      out.x = dx / R; out.y = dy / R;
    };
    zone.addEventListener('pointerdown', (e) => {
      if (id !== null) return;
      e.preventDefault(); e.stopPropagation();
      id = e.pointerId; zone.setPointerCapture(id);
      const zr = zone.getBoundingClientRect();
      if (floating) {
        cx = e.clientX; cy = e.clientY;
        base.style.left = (cx - zr.left) + 'px'; base.style.top = (cy - zr.top) + 'px';
      } else {
        const br = base.getBoundingClientRect(); cx = br.left + br.width / 2; cy = br.top + br.height / 2;
      }
      base.classList.add('active');
      setKnob(e.clientX, e.clientY);
    });
    zone.addEventListener('pointermove', (e) => { if (e.pointerId === id) setKnob(e.clientX, e.clientY); });
    const end = (e) => { if (e.pointerId !== id) return; id = null; out.x = 0; out.y = 0; home(); };
    zone.addEventListener('pointerup', end);
    zone.addEventListener('pointercancel', end);
    this._resetSticks = (this._resetSticks || []).concat(() => { id = null; out.x = 0; out.y = 0; home(); });
  }

  _resize() {
    this.camera.aspect = innerWidth / innerHeight;
    this.camera.fov = innerWidth > innerHeight ? 65 : 80;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(innerWidth, innerHeight);
  }

  // ---------- flow ----------
  start() {
    this.audio.init();
    this.audio.click();
    for (const z of this.zombies) z.dispose();
    for (const a of this.flying) { this.scene.remove(a.obj); a.snd && a.snd.stop(); }
    for (const s of this.stuck) s.obj.parent && s.obj.parent.remove(s.obj);
    this.zombies = []; this.flying = []; this.stuck = [];
    this.health = 100; this.score = 0; this.kills = 0; this.headshots = 0; this.combo = 0; this.thrown = 0;
    this.axes = MAX_AXES; this.regen = 0; this.cd = 0;
    this.level = 0; this.yaw = 0; this.pitch = 0;
    this.player.set(0, 0, 0); this.stepPh = 0;
    (this._resetSticks || []).forEach((f) => f());
    this.audio.heartbeatOn = false;
    ['menu', 'over', 'paused'].forEach((id) => $(id).classList.add('hidden'));
    $('hud').classList.remove('hidden');
    this.state = 'playing';
    this._startLevel();
    this._hud();
  }
  pause() {
    if (this.state !== 'playing') return;
    this.state = 'paused';
    $('paused').classList.remove('hidden');
    this.audio.suspend();
  }
  resume() {
    this.state = 'playing';
    $('paused').classList.add('hidden');
    this.audio.resume();
    this._last = performance.now();
  }
  toMenu() {
    this.audio.resume();
    this.state = 'menu';
    ['over', 'paused', 'hud'].forEach((id) => $(id).classList.add('hidden'));
    $('menu').classList.remove('hidden');
    $('bestMenu').textContent = this.best;
  }
  _startLevel() {
    this.level++;
    const L = this.level;
    this.maxAlive = Math.min(16, 3 + L * 2);
    this.spawnInterval = Math.max(0.6, 3.0 - L * 0.3);
    this.spawnT = 2;
    this.levelDone = 0;
    // choose a crypt location far enough from the player, clear of obstacles, inside the fence
    const want = Math.min(55, 32 + L * 6);
    let best = null, bestScore = -1;
    for (let i = 0; i < 400; i++) {
      const a = Math.random() * Math.PI * 2, r = Math.sqrt(Math.random()) * (MAP_R - 7);
      const x = Math.cos(a) * r, z = Math.sin(a) * r;
      const d = Math.hypot(x - this.player.x, z - this.player.z);
      if (this.world.colliders.some((c) => c !== this.world.goal.collider && Math.hypot(c.x - x, c.z - z) < c.r + 3.6)) continue;
      if (Math.hypot(x, z) < 6) continue;
      const score = -Math.abs(d - want);
      if (score > bestScore) { bestScore = score; best = [x, z]; }
    }
    this.world.goal.place(best[0], best[1], this.player.x, this.player.z);
    this.hum = this.audio.goalHum();
    this.hum.setPos({ x: best[0], y: 1.5, z: best[1] });
    this.hum.on(true);
    this.audio.bell();
    const dist = Math.round(Math.hypot(best[0] - this.player.x, best[1] - this.player.z));
    this._hud();
    this._msg(`LEVEL ${L}`, `Reach the glowing crypt · ${dist}m${L >= 3 ? ' · runners!' : ''}`);
  }
  _levelComplete() {
    this.levelDone = 0.001;
    const bonus = 500 * this.level;
    this.score += bonus;
    this.health = Math.min(100, this.health + 30);
    this.audio.heartbeatOn = this.health < 35;
    this.audio.levelComplete();
    this.hum.on(false);
    // the dead collapse as the crypt's light washes over them
    for (const z of this.zombies) if (z.alive) z.die(this, false);
    this._msg(`LEVEL ${this.level} COMPLETE`, `+${bonus} · +30 health`);
    this._hud();
  }
  _spawn() {
    let pos, tries = 0;
    do {
      const g = this.world.goal.trigger;
      const toGoal = Math.atan2(g.x - this.player.x, g.z - this.player.z);
      const a = Math.random() < 0.55 ? toGoal + (Math.random() - 0.5) * 1.6 : Math.random() * Math.PI * 2;
      const r = 20 + Math.random() * 10;
      pos = new THREE.Vector3(this.player.x + Math.sin(a) * r, 0, this.player.z + Math.cos(a) * r);
      const pr = Math.hypot(pos.x, pos.z);
      if (pr > MAP_R - 1) { pos.x *= (MAP_R - 1) / pr; pos.z *= (MAP_R - 1) / pr; }
      tries++;
    } while (tries < 12 && (this.world.colliders.some((c) => Math.hypot(c.x - pos.x, c.z - pos.z) < c.r + 0.8) || Math.hypot(pos.x - this.player.x, pos.z - this.player.z) < 14));
    pos.y = this.world.groundHeight(pos.x, pos.z);
    const w = this.level;
    const runner = w >= 3 && Math.random() < Math.min(0.45, (w - 2) * 0.09);
    const speed = runner ? 2.4 + Math.random() * 0.8 + w * 0.05 : Math.min(1.5, 0.55 + w * 0.07 + Math.random() * 0.25);
    const z = new Zombie(this.scene, pos, { speed, runner });
    z.root.rotation.y = Math.atan2(this.player.x - pos.x, this.player.z - pos.z);
    z.onFall = () => { const p = new THREE.Vector3(); z.root.getWorldPosition(p); this.audio.bodyFall(p); };
    z.onHeadBounce = (p) => this.audio.squelch(p, 0.5);
    this.zombies.push(z);
  }

  // ---------- throwing ----------
  throwAxe() {
    if (this.state !== 'playing' || this.cd > 0 || this.axes <= 0) {
      if (this.state === 'playing' && this.axes <= 0) $('axes').classList.add('empty');
      return;
    }
    this.axes--; this.cd = THROW_CD; this.thrown++;
    this.vmAnim = { t: 0, phase: 'throw' };
    this.audio.whoosh();
    vibrate(15);

    const dir = new THREE.Vector3(0, 0, -1).applyQuaternion(this.camera.quaternion);
    const right = new THREE.Vector3(1, 0, 0).applyQuaternion(this.camera.quaternion);
    const start = this.camera.position.clone().addScaledVector(right, 0.18).addScaledVector(dir, 0.4);
    start.y -= 0.08;
    // find what's under the crosshair, then solve a ballistic arc that lands exactly there
    const target = this._aimPoint(dir);
    const T = target.distanceTo(start) / AXE_SPEED;
    const v = target.clone().sub(start).divideScalar(T);
    v.y += 0.5 * GRAVITY * T;

    const obj = new THREE.Group();
    const spinner = this.axeTemplate.clone();
    obj.add(spinner);
    obj.position.copy(start);
    obj.lookAt(start.clone().add(v));
    this.scene.add(obj);
    const snd = this.audio.spinLoop(start, SPIN / (Math.PI * 2));
    this.flying.push({ obj, spinner, vel: v, prev: start.clone(), life: 3, snd, dist: 0 });
    this._hud();
  }

  _aimPoint(dir) {
    const o = this.camera.position, tmp = new THREE.Vector3();
    let best = 60;
    const ray = (c, r) => {
      const oc = o.clone().sub(c), b = oc.dot(dir), cc = oc.dot(oc) - r * r, disc = b * b - cc;
      if (disc < 0) return;
      const t = -b - Math.sqrt(disc);
      if (t > 0.5 && t < best) best = t;
    };
    for (const z of this.zombies) {
      if (!z.alive) continue;
      const s = z.root.scale.x;
      ray(z.getHeadWorld(tmp), 0.15 * s);
      for (const cp of z.collisionParts) { cp.obj.getWorldPosition(tmp); if (cp.off.y) tmp.y += cp.off.y * s; ray(tmp, cp.r * s); }
    }
    // march against the ground
    for (let t = 0.5; t < best; t += 0.5) {
      const x = o.x + dir.x * t, y = o.y + dir.y * t, z = o.z + dir.z * t;
      if (y < this.world.groundHeight(x, z)) { best = t; break; }
    }
    return o.clone().addScaledVector(dir, best);
  }

  _segSphere(a, b, c, r) {
    // returns t in [0,1] of first intersection of segment ab with sphere(c,r) or -1
    const d = b.clone().sub(a), f = a.clone().sub(c);
    const A = d.dot(d), B = 2 * f.dot(d), C = f.dot(f) - r * r;
    if (C < 0) return 0;
    const disc = B * B - 4 * A * C;
    if (disc < 0) return -1;
    const t = (-B - Math.sqrt(disc)) / (2 * A);
    return t >= 0 && t <= 1 ? t : -1;
  }

  _updateAxes(dt) {
    const tmp = new THREE.Vector3(), hp = new THREE.Vector3();
    for (let i = this.flying.length - 1; i >= 0; i--) {
      const a = this.flying[i];
      a.prev.copy(a.obj.position);
      a.vel.y -= GRAVITY * dt;
      a.obj.position.addScaledVector(a.vel, dt);
      a.dist += a.vel.length() * dt;
      a.obj.lookAt(tmp.copy(a.obj.position).add(a.vel));
      a.spinner.rotation.x += SPIN * dt;
      a.snd && a.snd.update(a.obj.position);
      a.life -= dt;

      const p0 = a.prev, p1 = a.obj.position;
      let best = null;
      // zombies
      for (const z of this.zombies) {
        if (!z.alive) continue;
        const s = z.root.scale.x;
        z.getHeadWorld(hp);
        let t = this._segSphere(p0, p1, hp, 0.17 * s);
        if (t >= 0 && (!best || t < best.t)) best = { t, z, part: 'head' };
        for (const cp of z.collisionParts) {
          cp.obj.getWorldPosition(tmp);
          if (cp.off.y) tmp.y += cp.off.y * s;
          t = this._segSphere(p0, p1, tmp, cp.r * s);
          if (t >= 0 && (!best || t < best.t)) best = { t, z, part: 'body' };
        }
        // legs
        z.root.getWorldPosition(tmp); tmp.y += 0.45 * s;
        t = this._segSphere(p0, p1, tmp, 0.2 * s);
        if (t >= 0 && (!best || t < best.t)) best = { t, z, part: 'legs' };
      }
      if (best) {
        const hit = p0.clone().lerp(p1, best.t);
        this._hitZombie(a, best.z, best.part, hit);
        this.flying.splice(i, 1);
        continue;
      }
      // world colliders
      let col = null;
      for (const c of this.world.colliders) {
        const gy = this.world.groundHeight(c.x, c.z);
        if (Math.hypot(p1.x - c.x, p1.z - c.z) < c.r && p1.y < gy + c.h) { col = c; break; }
      }
      const gy = this.world.groundHeight(p1.x, p1.z);
      if (col || p1.y <= gy + 0.05) {
        if (!col) p1.y = gy + 0.05;
        this._stick(a, this.scene, col ? (col.kind === 'stone' ? 'stone' : 'wood') : 'ground');
        if (col && col.kind === 'stone') this.audio.stoneClang(p1); else if (col) this.audio.woodThunk(p1); else this.audio.groundThunk(p1);
        this.emit(p1, new THREE.Vector3(0, 1.2, 0), 1.2, 14, 1);
        this.combo = 0;
        this.flying.splice(i, 1);
        continue;
      }
      if (a.life <= 0 || a.dist > 70) { this.scene.remove(a.obj); a.snd && a.snd.stop(); this.flying.splice(i, 1); this.combo = 0; }
    }
  }

  _stick(a, parent, kind) {
    a.snd && a.snd.stop();
    // freeze spin with blade embedded forward
    a.spinner.rotation.x = Math.PI / 2 - 0.35 + (Math.random() - 0.5) * 0.3;
    if (kind === 'stone') {
      // bounce off stone and drop
      a.spinner.rotation.x = Math.random() * 6;
      a.obj.position.y = this.world.groundHeight(a.obj.position.x, a.obj.position.z) + 0.04;
      a.obj.rotation.x = Math.PI / 2;
    } else {
      a.obj.position.addScaledVector(a.vel.clone().normalize(), 0.06);
    }
    parent.attach(a.obj);
    this.stuck.push({ obj: a.obj, t: 10 });
    if (this.stuck.length > 14) { const s = this.stuck.shift(); s.obj.parent && s.obj.parent.remove(s.obj); }
  }

  _hitZombie(a, z, part, hit) {
    const dir = a.vel.clone().normalize();
    if (part === 'head') {
      this.audio.headHit(hit);
      this.audio.zombieVoice(hit, 'die', z.pitch);
      z.die(this, true, a.vel);
      this._stick(a, z.head, 'flesh');
      // gore burst
      this.emit(hit, dir.clone().multiplyScalar(2.5).add(new THREE.Vector3(0, 1.5, 0)), 3.5, 70, 0);
      z.spurt = 1.4;
      this.kills++; this.headshots++;
      this.combo++;
      const mult = Math.min(5, this.combo);
      const pts = 100 * mult;
      this.score += pts;
      this._popup(mult > 1 ? `HEADSHOT! x${mult}` : 'HEADSHOT!', `+${pts}`, true);
      this.shake = Math.max(this.shake, 0.12);
      vibrate(40);
      this._hitmarker(true);
    } else {
      this.audio.bodyHit(hit);
      this.emit(hit, dir.clone().multiplyScalar(1.5), 1.8, 25, 0);
      const spine = part === 'legs' ? z.hips : z.spine;
      this._stick(a, spine, 'flesh');
      const killed = z.hitBody(this, dir);
      this.audio.zombieVoice(hit, killed ? 'die' : 'pain', z.pitch);
      if (killed) {
        this.kills++; this.score += 40;
        this._popup('KILL', '+40', false);
      } else this._popup('', 'Body hit — go for the head', false, true);
      this.combo = 0;
      vibrate(20);
      this._hitmarker(false);
    }
    this._hud();
  }

  playerHit(dmg, z) {
    if (this.state !== 'playing') return;
    this.health -= dmg;
    this.audio.bite();
    this.audio.playerHurt();
    this.shake = 0.35;
    vibrate(120);
    const d = $('damage');
    d.style.transition = 'none'; d.style.opacity = 1;
    requestAnimationFrame(() => { d.style.transition = 'opacity 0.9s'; d.style.opacity = 0; });
    const p = new THREE.Vector3(); z.getHeadWorld(p);
    this.emit(this.camera.position.clone().lerp(p, 0.5), new THREE.Vector3(0, 0.5, 0), 2, 20, 0);
    this.audio.heartbeatOn = this.health < 35;
    if (this.health <= 0) this._gameOver();
    this._hud();
  }

  _gameOver() {
    this.state = 'over';
    this.health = 0;
    this.audio.heartbeatOn = false;
    this.audio.gameOver();
    if (this.score > this.best) { this.best = this.score; localStorage.setItem('axezombie_best', this.best); $('newBest').classList.remove('hidden'); }
    else $('newBest').classList.add('hidden');
    $('finalScore').textContent = this.score;
    $('finalWave').textContent = this.level;
    $('finalKills').textContent = this.kills;
    $('finalHead').textContent = this.headshots;
    $('finalAcc').textContent = this.thrown ? Math.round(this.kills / this.thrown * 100) + '%' : '0%';
    $('bestOver').textContent = this.best;
    setTimeout(() => { $('hud').classList.add('hidden'); $('over').classList.remove('hidden'); }, 1200);
  }

  // ---------- HUD ----------
  _hud() {
    $('hpfill').style.width = Math.max(0, this.health) + '%';
    $('hpfill').className = this.health < 35 ? 'low' : '';
    $('score').textContent = this.score;
    $('wave').textContent = 'LEVEL ' + this.level;
    let h = '';
    for (let i = 0; i < MAX_AXES; i++) h += `<i class="${i < this.axes ? 'on' : ''}"></i>`;
    $('axes').innerHTML = h;
    $('axes').classList.toggle('empty', this.axes === 0);
    $('lowhp').style.opacity = this.health < 35 ? 1 : 0;
  }
  _msg(big, small) {
    const m = $('msg');
    m.innerHTML = `<b>${big}</b><span>${small || ''}</span>`;
    m.classList.remove('show'); void m.offsetWidth; m.classList.add('show');
  }
  _popup(big, small, red, hint) {
    const p = document.createElement('div');
    p.className = 'popup' + (red ? ' red' : '') + (hint ? ' hint' : '');
    p.innerHTML = `${big ? `<b>${big}</b>` : ''}<span>${small}</span>`;
    $('popups').appendChild(p);
    setTimeout(() => p.remove(), 1300);
  }
  _hitmarker(head) {
    const h = $('hitmark');
    h.className = head ? 'head' : 'body';
    void h.offsetWidth; h.classList.add('show');
  }
  _indicators() {
    const box = $('indicators');
    const fwdYaw = this.yaw;
    const half = Math.atan(Math.tan(this.camera.fov * Math.PI / 360) * this.camera.aspect);
    let html = '';
    for (const z of this.zombies) {
      if (!z.alive) continue;
      const dx = z.root.position.x - this.player.x, dz = z.root.position.z - this.player.z;
      const dist = Math.hypot(dx, dz);
      if (dist > 18) continue;
      let ang = Math.atan2(-dx, -dz) - fwdYaw;
      while (ang > Math.PI) ang -= Math.PI * 2;
      while (ang < -Math.PI) ang += Math.PI * 2;
      if (Math.abs(ang) < half * 0.92) continue;
      const k = 1 - dist / 18;
      // position around a circle on screen
      const x = 50 - Math.sin(ang) * 42, y = 50 - Math.cos(ang) * 40;
      html += `<div class="ind" style="left:${x}%;top:${y}%;opacity:${0.35 + k * 0.65};transform:translate(-50%,-50%) rotate(${-ang}rad) scale(${0.7 + k * 0.6})"></div>`;
    }
    box.innerHTML = html;
    // goal compass
    const g = this.world.goal.trigger;
    const gx = g.x - this.player.x, gz = g.z - this.player.z;
    let ga = Math.atan2(-gx, -gz) - fwdYaw;
    while (ga > Math.PI) ga -= Math.PI * 2;
    while (ga < -Math.PI) ga += Math.PI * 2;
    $('goalArrow').style.transform = `rotate(${-ga}rad)`;
    $('goalDist').textContent = Math.round(Math.hypot(gx, gz)) + 'm';
  }

  // ---------- main loop ----------
  _frame(fixedDt) {
    const now = performance.now(); const dt = fixedDt || Math.min(0.05, (now - this._last) / 1000); this._last = now;
    this.time += dt;
    const playing = this.state === 'playing';
    const over = this.state === 'over';

    if (this.state === 'menu') {
      // slow cinematic look-around on menu
      this.yaw = Math.sin(this.time * 0.08) * 1.4;
      this.pitch = 0.02 + Math.sin(this.time * 0.13) * 0.04;
    }

    if (playing) {
      this.cd = Math.max(0, this.cd - dt);
      if (this.axes < MAX_AXES) {
        this.regen += dt;
        if (this.regen >= AXE_REGEN) { this.regen = 0; this.axes++; this.audio.pickup(); this._hud(); }
      } else this.regen = 0;
      $('regen').style.width = (this.axes < MAX_AXES ? (this.regen / AXE_REGEN) * 100 : 0) + '%';

      // ---- look (right stick, rate based, with response curve) ----
      const sens = this.sens || 1;
      const lx = this.look.x * Math.abs(this.look.x), ly = this.look.y * Math.abs(this.look.y);
      this.yaw -= lx * 2.8 * sens * dt;
      this.pitch = Math.max(-1.1, Math.min(1.0, this.pitch - ly * 1.7 * sens * dt));
      if (this.keys.ArrowLeft) this.yaw += 2 * dt;
      if (this.keys.ArrowRight) this.yaw -= 2 * dt;

      // ---- movement (left stick or WASD) ----
      let mx = this.move.x, my = this.move.y;
      if (this.keys.KeyW) my -= 1; if (this.keys.KeyS) my += 1;
      if (this.keys.KeyA) mx -= 1; if (this.keys.KeyD) mx += 1;
      const ml = Math.hypot(mx, my);
      if (ml > 1) { mx /= ml; my /= ml; }
      const mag = Math.min(1, ml);
      this.moving = mag > 0.12;
      if (this.moving && this.levelDone === 0) {
        const running = mag > 0.9 || this.keys.ShiftLeft;
        const sp = (running ? RUN : WALK) * Math.min(1, mag * 1.15);
        const sy = Math.sin(this.yaw), cy = Math.cos(this.yaw);
        // forward is -Z rotated by yaw
        const vx = (-sy * -my + cy * mx) * sp, vz = (-cy * -my - sy * mx) * sp;
        const P = this.player;
        P.x += vx * dt; P.z += vz * dt;
        for (const c of this.world.colliders) {
          const dx = P.x - c.x, dz = P.z - c.z, d = Math.hypot(dx, dz), m = c.r + PLAYER_R;
          if (d < m && d > 0.0001) { P.x += dx / d * (m - d); P.z += dz / d * (m - d); }
        }
        for (const z of this.zombies) {
          if (!z.alive) continue;
          const dx = P.x - z.root.position.x, dz = P.z - z.root.position.z, d = Math.hypot(dx, dz), m = 0.75;
          if (d < m && d > 0.0001) { P.x += dx / d * (m - d); P.z += dz / d * (m - d); }
        }
        const pr = Math.hypot(P.x, P.z);
        if (pr > MAP_R) { P.x *= MAP_R / pr; P.z *= MAP_R / pr; }
        this.stepPh += dt * sp * 1.9;
        if (this.stepPh > Math.PI) { this.stepPh -= Math.PI; this.audio.playerStep(running); }
        this.bobAmt = Math.min(1, (this.bobAmt || 0) + dt * 4) * (running ? 1.4 : 1);
      } else this.bobAmt = Math.max(0, (this.bobAmt || 0) - dt * 4);
      this.player.y = this.world.groundHeight(this.player.x, this.player.z);

      // ---- level: keep zombies coming until the crypt is reached ----
      const alive = this.zombies.filter((z) => z.alive).length;
      if (this.levelDone === 0) {
        this.spawnT -= dt;
        if (this.spawnT <= 0 && alive < this.maxAlive) { this._spawn(); this.spawnT = this.spawnInterval * (0.6 + Math.random() * 0.8); }
        const g = this.world.goal.trigger;
        if (Math.hypot(g.x - this.player.x, g.z - this.player.z) < 1.6) this._levelComplete();
      } else {
        this.levelDone += dt;
        if (this.levelDone > 5) this._startLevel();
      }
      // recycle zombies left far behind
      for (const z of this.zombies) {
        if (z.alive && Math.hypot(z.root.position.x - this.player.x, z.root.position.z - this.player.z) > 45) z._despawn = true;
      }
      for (let i = this.zombies.length - 1; i >= 0; i--) if (this.zombies[i]._despawn) { this.zombies[i].dispose(); this.zombies.splice(i, 1); }
    }

    if (playing || over || this.state === 'menu') {
      // zombies
      const pp = this.player;
      for (let i = this.zombies.length - 1; i >= 0; i--) {
        const z = this.zombies[i];
        const r = z.update(dt, pp, this);
        if (z.alive) {
          // separation & obstacle avoidance
          const p = z.root.position;
          for (const o of this.zombies) {
            if (o === z || !o.alive) continue;
            const dx = p.x - o.root.position.x, dz = p.z - o.root.position.z, d = Math.hypot(dx, dz);
            if (d < 0.7 && d > 0.001) { p.x += dx / d * (0.7 - d) * 0.5; p.z += dz / d * (0.7 - d) * 0.5; }
          }
          for (const c of this.world.colliders) {
            const dx = p.x - c.x, dz = p.z - c.z, d = Math.hypot(dx, dz), m = c.r + 0.35;
            if (d < m && d > 0.001) { p.x += dx / d * (m - d); p.z += dz / d * (m - d); }
          }
          p.y = this.world.groundHeight(p.x, p.z);
        }
        if (z.spurt > 0) {
          z.spurt -= dt;
          const np = new THREE.Vector3(); z.neck.getWorldPosition(np); np.y += 0.1;
          const up = new THREE.Vector3(0, 1, 0).applyQuaternion(z.neck.getWorldQuaternion(new THREE.Quaternion()));
          this.emit(np, up.multiplyScalar(2.2 * z.spurt), 0.8, 3, 0);
        }
        if (r === 'remove') { z.dispose(); this.zombies.splice(i, 1); }
      }
    }
    if (playing || over) this._updateAxes(dt);
    this._updateParticles(dt);
    for (const s of this.stuck) s.t -= dt;
    for (let i = this.decals.length - 1; i >= 0; i--) {
      const d = this.decals[i];
      d.t -= dt;
      if (d.t < 3) d.m.material.opacity = Math.max(0, d.t / 3);
      if (d.t <= 0) { this.scene.remove(d.m); d.m.material.dispose(); d.m.geometry.dispose(); this.decals.splice(i, 1); }
    }
    for (let i = this.stuck.length - 1; i >= 0; i--) {
      const s = this.stuck[i];
      if (s.t <= 0 && s.obj.parent === this.scene) { this.scene.remove(s.obj); this.stuck.splice(i, 1); }
      else if (!s.obj.parent) this.stuck.splice(i, 1);
    }

    // camera
    this.shake = Math.max(0, this.shake - dt);
    const sh = this.shake * this.shake * 0.4;
    const cam = this.camera;
    const bobY = Math.abs(Math.sin(this.stepPh || 0)) * 0.05 * (this.bobAmt || 0);
    const bobX = Math.cos(this.stepPh || 0) * 0.025 * (this.bobAmt || 0);
    const sy = Math.sin(this.yaw), cy = Math.cos(this.yaw);
    cam.position.set(this.player.x + cy * bobX + (Math.random() - 0.5) * sh, this.player.y + EYE + bobY + Math.sin(this.time * 1.6) * 0.008 + (Math.random() - 0.5) * sh, this.player.z - sy * bobX);
    if (over) { this.overT = (this.overT || 0) + dt; this.pitch += (0.45 - this.pitch) * dt * 2; cam.position.y -= Math.min(1.25, this.overT * 1.6); }
    else this.overT = 0;
    cam.rotation.set(this.pitch, this.yaw, over ? 0.3 : 0);

    // view model animation
    const vm = this.viewAxe, A = this.vmAnim;
    vm.visible = playing;
    A.t += dt;
    const bob = Math.sin(this.time * 2) * 0.006;
    if (A.phase === 'throw') {
      // wind-up then release
      const t = A.t;
      if (t < 0.08) { vm.rotation.x = t / 0.08 * 0.9; vm.position.set(this.vmBase.x + 0.05, this.vmBase.y + t * 0.6, this.vmBase.z + 0.1); }
      else if (t < 0.2) { const k = (t - 0.08) / 0.12; vm.rotation.x = 0.9 - k * 2.6; vm.position.set(this.vmBase.x - k * 0.15, this.vmBase.y + 0.05 - k * 0.4, this.vmBase.z - k * 0.15); }
      else { A.phase = 'draw'; A.t = 0; }
      vm.children[0].visible = A.t < 0.12 || A.phase === 'draw';
    } else if (A.phase === 'draw') {
      const k = Math.min(1, A.t / 0.25);
      const hasAxe = this.axes > 0;
      vm.children[0].visible = hasAxe;
      vm.rotation.x = -0.3 * (1 - k);
      vm.position.set(this.vmBase.x, this.vmBase.y - 0.35 * (1 - k), this.vmBase.z);
      if (k >= 1 && hasAxe) A.phase = 'idle';
    } else {
      vm.children[0].visible = true;
      vm.rotation.x = Math.sin(this.time * 1.1) * 0.02;
      vm.position.set(this.vmBase.x, this.vmBase.y + bob, this.vmBase.z);
    }

    // audio listener
    if (this.audio.ctx) {
      const f = new THREE.Vector3(0, 0, -1).applyQuaternion(cam.quaternion);
      const u = new THREE.Vector3(0, 1, 0).applyQuaternion(cam.quaternion);
      this.audio.listener(cam.position, f, u);
    }

    // shadows follow player area
    this.world.update(dt, this.time, this.audio.ctx ? this.audio : null, this.player);
    if (playing) this._indicators(); else $('indicators').innerHTML = '';
    if (!this._noRender) this.renderer.render(this.scene, cam);
  }
  // test hook: advance the simulation deterministically
  simulate(seconds, step = 1 / 30) {
    this._noRender = true;
    for (let t = 0; t < seconds; t += step) this._frame(step);
    this._noRender = false;
  }
}

const game = new Game();
window.__game = game;
game.init().catch((e) => {
  $('loadtxt').textContent = 'Error: ' + e.message;
  console.error(e);
});
