// Procedurally modelled, animated zombie with detachable head.
import * as THREE from 'three';
import { fbm, skinMaps, clothMaps } from './textures.js';

let MATS = null;
export function buildZombieMaterials() {
  MATS = { skin: [], cloth: [], pants: [] };
  for (let i = 0; i < 4; i++) {
    MATS.skin.push(new THREE.MeshStandardMaterial({ ...skinMaps(i), roughness: 1, normalScale: new THREE.Vector2(0.9, 0.9) }));
  }
  for (let i = 0; i < 5; i++) {
    MATS.cloth.push(new THREE.MeshStandardMaterial({ ...clothMaps(i), roughness: 1, side: THREE.DoubleSide }));
    MATS.pants.push(new THREE.MeshStandardMaterial({ ...clothMaps(i + 7), roughness: 1, side: THREE.DoubleSide }));
  }
  MATS.eye = new THREE.MeshStandardMaterial({ color: 0xd8d2a0, emissive: 0x9a8a30, emissiveIntensity: 0.9, roughness: 0.15 });
  MATS.socket = new THREE.MeshStandardMaterial({ color: 0x120606, roughness: 0.9 });
  MATS.teeth = new THREE.MeshStandardMaterial({ color: 0x9c8f62, roughness: 0.5 });
  MATS.mouth = new THREE.MeshStandardMaterial({ color: 0x2a0303, roughness: 0.4 });
  MATS.gore = new THREE.MeshStandardMaterial({ color: 0x5a0505, roughness: 0.25, metalness: 0.05 });
  MATS.bone = new THREE.MeshStandardMaterial({ color: 0xd9ccaa, roughness: 0.6 });
  MATS.hair = new THREE.MeshStandardMaterial({ color: 0x1a1612, roughness: 1 });
}

// lumpy organic geometry: displace vertices along normal with noise
function lumpy(geo, amt = 0.015, freq = 3, seed = 0) {
  const p = geo.attributes.position, n = geo.attributes.normal;
  for (let i = 0; i < p.count; i++) {
    const x = p.getX(i), y = p.getY(i), z = p.getZ(i);
    const d = fbm(x * freq * 0.25 + seed, (y + z) * freq * 0.25 + seed * 0.3, 2, 3) * amt;
    p.setXYZ(i, x + n.getX(i) * d, y + n.getY(i) * d, z + n.getZ(i) * d);
  }
  geo.computeVertexNormals();
  return geo;
}

function limb(r, len, mat, seed) {
  const g = lumpy(new THREE.CapsuleGeometry(r, len, 6, 12), r * 0.15, 6, seed);
  g.translate(0, -len / 2 - r * 0.4, 0); // pivot at top
  const m = new THREE.Mesh(g, mat);
  m.castShadow = true;
  return m;
}
function joint() { return new THREE.Group(); }

// Shared geometries for heads (built once, cloned per zombie variant)
let HEAD_GEOS = null;
function headGeos() {
  if (HEAD_GEOS) return HEAD_GEOS;
  HEAD_GEOS = [];
  for (let v = 0; v < 3; v++) {
    const g = new THREE.SphereGeometry(0.13, 28, 22);
    const p = g.attributes.position;
    for (let i = 0; i < p.count; i++) {
      let x = p.getX(i), y = p.getY(i), z = p.getZ(i);
      // skull shape: taller, narrower face, sunken cheeks, brow ridge
      y *= 1.18;
      x *= 0.92;
      if (z > 0.04 && y < 0.0) { x *= 0.85 - (-y) * 0.6; }        // narrow jaw region
      if (z > 0.05 && y > 0.03 && y < 0.07) z += 0.012;           // brow ridge
      if (z > 0.05 && Math.abs(x) > 0.05 && y < 0.0 && y > -0.08) z -= 0.012; // sunken cheeks
      if (z > 0.1 && Math.abs(x) < 0.02 && y > -0.04 && y < 0.03) z += 0.022 * (1 - Math.abs(x) / 0.02); // nose
      p.setXYZ(i, x, y, z);
    }
    g.computeVertexNormals();
    lumpy(g, 0.008, 9, v * 7);
    HEAD_GEOS.push(g);
  }
  return HEAD_GEOS;
}

export class Zombie {
  constructor(scene, pos, opts) {
    this.scene = scene;
    this.speed = opts.speed;
    this.runner = opts.runner;
    this.alive = true;
    this.state = 'walk';
    this.t = Math.random() * 10;
    this.attackTimer = 0;
    this.stagger = 0;
    this.deathT = 0;
    this.stuckAxes = [];
    this.voiceTimer = 1 + Math.random() * 4;
    this.pitch = 0.8 + Math.random() * 0.45;
    this.limp = Math.random() * 0.6;
    this.lastStepPhase = 0;
    this.headPos = new THREE.Vector3();
    this.hp = 3; // body hits before falling

    const skin = MATS.skin[Math.floor(Math.random() * MATS.skin.length)];
    const cloth = MATS.cloth[Math.floor(Math.random() * MATS.cloth.length)];
    const pants = MATS.pants[Math.floor(Math.random() * MATS.pants.length)];
    const s = 0.92 + Math.random() * 0.18;
    const sd = Math.random() * 100;

    const root = this.root = new THREE.Group();
    root.rotation.order = 'YXZ';
    root.position.copy(pos);
    root.scale.setScalar(s);

    // hips
    const hips = this.hips = joint();
    hips.position.y = 0.98;
    root.add(hips);
    const pelvis = new THREE.Mesh(lumpy(new THREE.CapsuleGeometry(0.13, 0.1, 4, 12), 0.02, 5, sd), pants);
    pelvis.rotation.z = Math.PI / 2; pelvis.scale.set(1, 1.05, 0.72); pelvis.castShadow = true;
    hips.add(pelvis);

    // spine / torso
    const spine = this.spine = joint();
    spine.position.y = 0.05;
    hips.add(spine);
    const torsoGeo = lumpy(new THREE.CapsuleGeometry(0.15, 0.36, 6, 16), 0.022, 4, sd + 1);
    torsoGeo.translate(0, 0.3, 0);
    const torso = new THREE.Mesh(torsoGeo, cloth);
    torso.scale.set(1.08, 1, 0.66); torso.castShadow = true;
    spine.add(torso);
    // exposed ribs wound
    if (Math.random() < 0.5) {
      const wound = new THREE.Mesh(new THREE.SphereGeometry(0.07, 12, 8), MATS.gore);
      wound.scale.set(1, 1.3, 0.35); wound.position.set((Math.random() - 0.5) * 0.15, 0.32, 0.11);
      spine.add(wound);
      for (let i = 0; i < 3; i++) {
        const rib = new THREE.Mesh(new THREE.TorusGeometry(0.05, 0.007, 4, 10, Math.PI), MATS.bone);
        rib.position.set(wound.position.x, 0.28 + i * 0.035, 0.12); rib.rotation.x = Math.PI / 2 - 0.3;
        spine.add(rib);
      }
    }

    // neck + head
    const neck = this.neck = joint();
    neck.position.y = 0.62;
    spine.add(neck);
    const neckMesh = new THREE.Mesh(lumpy(new THREE.CylinderGeometry(0.055, 0.07, 0.12, 12), 0.008, 8, sd), skin);
    neckMesh.position.y = 0.04; neckMesh.castShadow = true;
    neck.add(neckMesh);
    this.neckMesh = neckMesh;

    const head = this.head = joint();
    head.position.y = 0.17;
    neck.add(head);
    const skull = new THREE.Mesh(headGeos()[Math.floor(Math.random() * 3)], skin);
    skull.castShadow = true;
    head.add(skull);
    // eyes: dark sockets with dim glowing eyeballs
    for (const sx of [-1, 1]) {
      const sock = new THREE.Mesh(new THREE.SphereGeometry(0.03, 10, 8), MATS.socket);
      sock.position.set(sx * 0.045, 0.02, 0.105); sock.scale.set(1.1, 0.8, 0.6);
      head.add(sock);
      const eye = new THREE.Mesh(new THREE.SphereGeometry(0.017, 10, 8), MATS.eye);
      eye.position.set(sx * 0.045 + (Math.random() - 0.5) * 0.008, 0.018, 0.112);
      head.add(eye);
    }
    // open mouth + jaw
    const mouth = new THREE.Mesh(new THREE.SphereGeometry(0.045, 12, 8), MATS.mouth);
    mouth.position.set(0, -0.075, 0.095); mouth.scale.set(1, 0.7, 0.5);
    head.add(mouth);
    const jaw = this.jaw = joint();
    jaw.position.set(0, -0.06, 0.02);
    head.add(jaw);
    const jawMesh = new THREE.Mesh(lumpy(new THREE.SphereGeometry(0.09, 16, 10, 0, Math.PI * 2, Math.PI * 0.5, Math.PI * 0.35), 0.006, 9, sd), skin);
    jawMesh.scale.set(0.95, 0.9, 1.05); jawMesh.position.set(0, 0.035, 0.015);
    jaw.add(jawMesh);
    const teethGeo = new THREE.BoxGeometry(0.009, 0.016, 0.006);
    for (let i = 0; i < 8; i++) {
      if (Math.random() < 0.25) continue;
      const a = (i / 7 - 0.5) * 1.6;
      const top = new THREE.Mesh(teethGeo, MATS.teeth);
      top.position.set(Math.sin(a) * 0.045, -0.06, 0.08 + Math.cos(a) * 0.03);
      top.rotation.z = (Math.random() - 0.5) * 0.4;
      head.add(top);
      const bot = new THREE.Mesh(teethGeo, MATS.teeth);
      bot.position.set(Math.sin(a) * 0.04, -0.015, 0.075 + Math.cos(a) * 0.028);
      jaw.add(bot);
    }
    // patchy hair
    if (Math.random() < 0.7) {
      const hair = new THREE.Mesh(lumpy(new THREE.SphereGeometry(0.138, 16, 10, 0, Math.PI * 2, 0, Math.PI * 0.42), 0.02, 12, sd + 9), MATS.hair);
      hair.scale.y = 1.15; hair.rotation.x = -0.25 + Math.random() * 0.2;
      head.add(hair);
    }

    // arms
    this.arms = [];
    for (const sx of [-1, 1]) {
      const sh = joint();
      sh.position.set(sx * 0.21, 0.52, 0);
      spine.add(sh);
      const upper = limb(0.055, 0.22, Math.random() < 0.5 ? cloth : skin, sd + sx);
      sh.add(upper);
      const el = joint(); el.position.y = -0.31; sh.add(el);
      const fore = limb(0.045, 0.22, skin, sd + sx * 3);
      el.add(fore);
      const hand = new THREE.Mesh(lumpy(new THREE.SphereGeometry(0.05, 10, 8), 0.01, 10, sd), skin);
      hand.scale.set(0.8, 1.3, 0.5); hand.position.y = -0.33; hand.castShadow = true;
      el.add(hand);
      // claw-like fingers
      for (let f = 0; f < 4; f++) {
        const fing = new THREE.Mesh(new THREE.CapsuleGeometry(0.008, 0.05, 2, 5), skin);
        fing.position.set((f - 1.5) * 0.016, -0.4, 0.008); fing.rotation.x = 0.4;
        el.add(fing);
      }
      this.arms.push({ sh, el, sx });
    }

    // legs
    this.legs = [];
    for (const sx of [-1, 1]) {
      const hip = joint(); hip.position.set(sx * 0.1, -0.02, 0); hips.add(hip);
      const thigh = limb(0.075, 0.33, pants, sd + sx * 5);
      hip.add(thigh);
      const knee = joint(); knee.position.y = -0.45; hip.add(knee);
      const shin = limb(0.06, 0.33, pants, sd + sx * 7);
      knee.add(shin);
      const foot = new THREE.Mesh(lumpy(new THREE.BoxGeometry(0.1, 0.07, 0.24, 2, 2, 3), 0.01, 8, sd), MATS.socket);
      foot.position.set(0, -0.47, 0.05); foot.castShadow = true;
      knee.add(foot);
      this.legs.push({ hip, knee, sx });
    }

    scene.add(root);
    this.collisionParts = [
      { obj: torso, r: 0.22, off: new THREE.Vector3(0, 0.3, 0), part: 'body' },
      { obj: pelvis, r: 0.18, off: new THREE.Vector3(), part: 'body' },
    ];
  }

  getHeadWorld(out) {
    return this.head.getWorldPosition(out);
  }

  faceTowards(target, dt, rate = 3) {
    const dx = target.x - this.root.position.x, dz = target.z - this.root.position.z;
    const want = Math.atan2(dx, dz);
    let d = want - this.root.rotation.y;
    while (d > Math.PI) d -= Math.PI * 2;
    while (d < -Math.PI) d += Math.PI * 2;
    this.root.rotation.y += d * Math.min(1, dt * rate);
  }

  update(dt, playerPos, game) {
    this.t += dt;
    if (!this.alive) return this._updateDead(dt);

    const p = this.root.position;
    const dist = Math.hypot(playerPos.x - p.x, playerPos.z - p.z);
    this.faceTowards(this.steer || playerPos, dt, this.steer ? 5 : 3);
    this.stagger = Math.max(0, this.stagger - dt);

    // voice
    this.voiceTimer -= dt;
    if (this.voiceTimer <= 0 && (!this.dormant || Math.random() < 0.3)) {
      this.getHeadWorld(this.headPos);
      game.audio.zombieVoice(this.headPos, this.runner && Math.random() < 0.5 ? 'scream' : (dist < 4 ? 'snarl' : 'groan'), this.pitch);
      this.voiceTimer = 2.5 + Math.random() * 5;
    }

    const effSpeed = this.speed * (this.speedMul === undefined ? 1 : this.speedMul);
    const ph = this.t * (this.runner ? 9 : 3.6) * (0.6 + Math.min(this.speed, effSpeed + 0.3) * 0.5);
    if (dist > 1.15) {
      this.state = 'walk';
      const sp = this.speed * (this.speedMul === undefined ? 1 : this.speedMul) * (this.stagger > 0 ? 0.1 : 1) * (this.runner ? 1 : 1 - this.limp * 0.3 * Math.max(0, Math.sin(ph)));
      p.x += Math.sin(this.root.rotation.y) * sp * dt;
      p.z += Math.cos(this.root.rotation.y) * sp * dt;
    } else {
      this.state = 'attack';
      this.attackTimer -= dt;
      if (this.attackTimer <= 0) {
        this.attackTimer = 1.3;
        this.attackAnim = 0.5;
        game.playerHit(this.runner ? 14 : 11, this);
      }
    }
    if (this.attackAnim > 0) this.attackAnim -= dt;

    // ---------- animation ----------
    const sw = Math.sin(ph), cw = Math.cos(ph);
    const walk = this.state === 'walk' ? 1 : 0.2;
    const lean = this.runner ? 0.35 : 0.12;
    this.hips.position.y = 0.98 - Math.abs(cw) * 0.04 * walk;
    this.hips.rotation.z = sw * 0.08 * walk + this.limp * 0.08;
    this.hips.rotation.y = sw * 0.12 * walk;
    this.spine.rotation.x = lean + Math.sin(this.t * 1.3) * 0.04 - this.stagger * 0.8;
    this.spine.rotation.z = -sw * 0.1 * walk + Math.sin(this.t * 0.7) * 0.05;
    this.neck.rotation.x = -lean * 0.6 + Math.sin(this.t * 2.1) * 0.08;
    this.neck.rotation.z = Math.sin(this.t * 0.9 + this.limp * 5) * 0.25; // lolling head
    this.jaw.rotation.x = 0.25 + Math.abs(Math.sin(this.t * 3.3)) * 0.35;

    for (const L of this.legs) {
      const s = L.sx * sw;
      const drag = L.sx > 0 ? this.limp : 0;
      L.hip.rotation.x = -s * (this.runner ? 0.8 : 0.45) * walk * (1 - drag * 0.6);
      L.knee.rotation.x = Math.max(0, -Math.cos(ph + (L.sx > 0 ? 0 : Math.PI)) ) * (this.runner ? 1.3 : 0.7) * walk + 0.05;
      L.hip.rotation.z = L.sx * 0.04;
    }
    for (const A of this.arms) {
      if (this.runner) {
        A.sh.rotation.x = A.sx * sw * 0.9 - 0.3;
        A.el.rotation.x = -1.2;
      } else {
        // classic outstretched zombie arms, reaching
        const reach = this.attackAnim > 0 ? -1.9 + Math.sin(this.attackAnim * 12) * 0.4 : -1.35;
        A.sh.rotation.x = reach + Math.sin(this.t * 2 + A.sx) * 0.12 + A.sx * sw * 0.08;
        A.el.rotation.x = -0.25 + Math.sin(this.t * 3 + A.sx * 2) * 0.1;
      }
      A.sh.rotation.z = -A.sx * 0.08;
    }

    // footstep sound
    const stepPh = Math.floor(ph / Math.PI);
    if (stepPh !== this.lastStepPhase && this.state === 'walk') {
      this.lastStepPhase = stepPh;
      if (dist < 12) { this.root.getWorldPosition(this.headPos); game.audio.zombieStep(this.headPos); }
    }
  }

  // ---------- damage ----------
  hitBody(game, dir) {
    this.stagger = 0.6;
    this.hp--;
    this.root.position.x += dir.x * 0.35;
    this.root.position.z += dir.z * 0.35;
    if (this.hp <= 0) { this.die(game, false); return true; }
    return false;
  }

  die(game, decap, axeVel) {
    if (!this.alive) return;
    this.alive = false;
    this.deathT = 0;
    this.fallDir = Math.random() < 0.6 ? -1 : 1; // backward or forward
    this.decap = decap;
    if (decap) {
      // detach head and launch it
      const hp = new THREE.Vector3(), hq = new THREE.Quaternion(), hs = new THREE.Vector3();
      this.head.getWorldPosition(hp);
      this.head.getWorldQuaternion(hq);
      this.head.getWorldScale(hs);
      this.neck.remove(this.head);
      this.head.position.copy(hp);
      this.head.quaternion.copy(hq);
      this.head.scale.copy(hs);
      this.scene.add(this.head);
      const v = axeVel ? axeVel.clone().multiplyScalar(0.25) : new THREE.Vector3();
      v.y += 2.5 + Math.random() * 1.5;
      this.headVel = v;
      this.headSpin = new THREE.Vector3((Math.random() - 0.5) * 12, (Math.random() - 0.5) * 12, (Math.random() - 0.5) * 12);
      this.headRest = false;
      // bloody stump
      const stump = new THREE.Mesh(new THREE.CircleGeometry(0.058, 14), MATS.gore);
      stump.rotation.x = -Math.PI / 2; stump.position.y = 0.105;
      this.neck.add(stump);
      const bone = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.012, 0.03, 6), MATS.bone);
      bone.position.y = 0.115; this.neck.add(bone);
    }
  }

  _updateDead(dt) {
    this.deathT += dt;
    const k = Math.min(1, this.deathT / 0.9);
    const e = k * k * (3 - 2 * k);
    // knees buckle then fall over
    for (const L of this.legs) { L.knee.rotation.x = e * 1.2; L.hip.rotation.x = -e * 0.6; }
    this.hips.position.y = 0.98 - e * 0.55 + (k >= 1 ? 0 : 0);
    this.root.rotation.x = this.fallDir * -e * (Math.PI / 2 - 0.15) * (k > 0.4 ? 1 : k / 0.4);
    for (const A of this.arms) { A.sh.rotation.x = -e * 2.6 * (this.fallDir > 0 ? 0.3 : 1); A.el.rotation.x = -0.4; }
    if (this.deathT > 0.4 && !this.fallen) { this.fallen = true; this.onFall && this.onFall(); }
    if (this.headVel && !this.headRest) {
      const h = this.head;
      this.headVel.y -= 9.8 * dt;
      h.position.addScaledVector(this.headVel, dt);
      h.rotation.x += this.headSpin.x * dt; h.rotation.y += this.headSpin.y * dt; h.rotation.z += this.headSpin.z * dt;
      if (h.position.y < 0.12) {
        h.position.y = 0.12;
        if (Math.abs(this.headVel.y) > 1.5) {
          this.headVel.y *= -0.35; this.headVel.x *= 0.5; this.headVel.z *= 0.5; this.headSpin.multiplyScalar(0.4);
          this.onHeadBounce && this.onHeadBounce(h.position);
        } else { this.headRest = true; }
      }
    }
    // sink into ground and remove
    if (this.deathT > 6) {
      const s = (this.deathT - 6) * 0.35;
      this.root.position.y = -s;
      if (this.decap) this.head.position.y -= dt * 0.35;
      if (this.deathT > 8.5) return 'remove';
    }
    return null;
  }

  dispose() {
    this.scene.remove(this.root);
    if (this.decap) this.scene.remove(this.head);
  }
}
