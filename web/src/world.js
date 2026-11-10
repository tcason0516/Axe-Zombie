// Abandoned suburban neighborhood at night.
// Everything is generated procedurally and merged by material to keep draw calls low.
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import {
  barkMaps, softSprite, moonTexture, fbm, rand, srand, metalMaps,
  asphaltMaps, concreteMaps, sidingMaps, shingleMaps, brickMaps, plankMaps, lawnMaps,
} from './textures.js';

export const HALF = 100;            // map is [-HALF, HALF] square
const ST = [-75, -25, 25, 75];      // street centre lines (both axes)
const SW = 4, SIDE = 6;             // street half-width, sidewalk outer edge
const STREET_END = 81;

// ---------------------------------------------------------------- geometry helpers
// Box with UVs in metres (so textures keep a constant real-world scale).
function box(w, h, d) {
  const g = new THREE.BoxGeometry(w, h, d);
  const uv = g.attributes.uv;
  const dims = [[d, h], [d, h], [w, d], [w, d], [w, h], [w, h]];
  for (let f = 0; f < 6; f++) for (let k = 0; k < 4; k++) {
    const i = f * 4 + k;
    uv.setXY(i, uv.getX(i) * dims[f][0], uv.getY(i) * dims[f][1]);
  }
  return g;
}
function cyl(rt, rb, h, seg = 8) { return new THREE.CylinderGeometry(rt, rb, h, seg); }

// buckets of geometry per material, merged at the end
class Builder {
  constructor() { this.b = {}; this.m = new THREE.Matrix4(); }
  add(mat, geo, matrix, color) {
    let g = geo.index ? geo.toNonIndexed() : geo;
    if (matrix) g.applyMatrix4(matrix);
    for (const k of Object.keys(g.attributes)) if (!['position', 'normal', 'uv'].includes(k)) g.deleteAttribute(k);
    if (!g.attributes.uv) g.setAttribute('uv', new THREE.Float32BufferAttribute(new Float32Array(g.attributes.position.count * 2), 2));
    const c = new THREE.Color(color === undefined ? 0xffffff : color);
    const n = g.attributes.position.count, arr = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) { arr[i * 3] = c.r; arr[i * 3 + 1] = c.g; arr[i * 3 + 2] = c.b; }
    g.setAttribute('color', new THREE.BufferAttribute(arr, 3));
    g.clearGroups();
    (this.b[mat] = this.b[mat] || []).push(g);
  }
  build(scene, mats, shadows) {
    const out = {};
    for (const [k, list] of Object.entries(this.b)) {
      const geo = mergeGeometries(list);
      const mesh = new THREE.Mesh(geo, mats[k]);
      mesh.castShadow = shadows[k] !== false; mesh.receiveShadow = true;
      mesh.matrixAutoUpdate = false;
      scene.add(mesh);
      out[k] = mesh;
    }
    return out;
  }
}
// split an ExtrudeGeometry into [caps, sides]
function splitGroups(geo) {
  const g = geo.index ? geo.toNonIndexed() : geo;
  const res = [];
  for (const grp of g.groups) {
    const ng = new THREE.BufferGeometry();
    for (const name of ['position', 'normal', 'uv']) {
      const a = g.attributes[name];
      ng.setAttribute(name, new THREE.BufferAttribute(a.array.slice(grp.start * a.itemSize, (grp.start + grp.count) * a.itemSize), a.itemSize));
    }
    res[grp.materialIndex] = res[grp.materialIndex] ? mergeGeometries([res[grp.materialIndex], ng]) : ng;
  }
  return res;
}

// ---------------------------------------------------------------- collision world
class Collision {
  constructor() { this.list = []; this.cells = new Map(); this.C = 10; }
  _key(i, j) { return i * 1000 + j; }
  add(c) {
    this.list.push(c);
    const [x0, x1, z0, z1] = c.type === 'box' ? [c.x0, c.x1, c.z0, c.z1] : [c.x - c.r, c.x + c.r, c.z - c.r, c.z + c.r];
    for (let i = Math.floor(x0 / this.C); i <= Math.floor(x1 / this.C); i++)
      for (let j = Math.floor(z0 / this.C); j <= Math.floor(z1 / this.C); j++) {
        const k = this._key(i, j);
        if (!this.cells.has(k)) this.cells.set(k, []);
        this.cells.get(k).push(c);
      }
    return c;
  }
  near(x, z, r = 1) {
    const out = new Set();
    for (let i = Math.floor((x - r) / this.C); i <= Math.floor((x + r) / this.C); i++)
      for (let j = Math.floor((z - r) / this.C); j <= Math.floor((z + r) / this.C); j++) {
        const l = this.cells.get(this._key(i, j));
        if (l) for (const c of l) out.add(c);
      }
    return out;
  }
  // push a circle (p.x,p.z,r) out of all solids
  collide(p, r) {
    for (const c of this.near(p.x, p.z, r + 1)) {
      if (c.type === 'cyl') {
        const dx = p.x - c.x, dz = p.z - c.z, d = Math.hypot(dx, dz), m = c.r + r;
        if (d < m && d > 1e-4) { p.x += dx / d * (m - d); p.z += dz / d * (m - d); }
      } else {
        const cx = Math.max(c.x0, Math.min(p.x, c.x1)), cz = Math.max(c.z0, Math.min(p.z, c.z1));
        const dx = p.x - cx, dz = p.z - cz, d = Math.hypot(dx, dz);
        if (d > 1e-4) {
          if (d < r) { p.x += dx / d * (r - d); p.z += dz / d * (r - d); }
        } else {
          // centre inside the box: leave by the nearest side
          const opts = [[p.x - c.x0, -1, 0], [c.x1 - p.x, 1, 0], [p.z - c.z0, 0, -1], [c.z1 - p.z, 0, 1]];
          opts.sort((a, b) => a[0] - b[0]);
          const [dd, sx, sz] = opts[0];
          p.x += sx * (dd + r); p.z += sz * (dd + r);
        }
      }
    }
    const lim = HALF - 1.5;
    p.x = Math.max(-lim, Math.min(lim, p.x)); p.z = Math.max(-lim, Math.min(lim, p.z));
  }
  solidAt(x, y, z) {
    for (const c of this.near(x, z, 0.5)) {
      if (y > c.h) continue;
      if (c.type === 'cyl') { if (Math.hypot(x - c.x, z - c.z) < c.r) return c; }
      else if (x > c.x0 && x < c.x1 && z > c.z0 && z < c.z1) return c;
    }
    return null;
  }
  blocked(x, z, r) {
    if (Math.abs(x) > HALF - 2 || Math.abs(z) > HALF - 2) return true;
    for (const c of this.near(x, z, r + 1)) {
      if (c.type === 'cyl') { if (Math.hypot(x - c.x, z - c.z) < c.r + r) return true; }
      else if (x > c.x0 - r && x < c.x1 + r && z > c.z0 - r && z < c.z1 + r) return true;
    }
    return false;
  }
  // does a house stand between a and b?
  sightBlocked(ax, az, bx, bz, ignore) {
    const L = Math.hypot(bx - ax, bz - az);
    for (let t = 1; t < L - 1; t += 0.75) {
      const x = ax + (bx - ax) * t / L, z = az + (bz - az) * t / L;
      for (const c of this.near(x, z, 0.1)) {
        if (c.kind === 'house' && c !== ignore && x > c.x0 && x < c.x1 && z > c.z0 && z < c.z1) return true;
      }
    }
    return false;
  }
}

// ---------------------------------------------------------------- navigation (flow field)
class Nav {
  constructor(col) {
    this.cs = 2; this.n = Math.ceil((HALF * 2) / this.cs);
    const n = this.n;
    this.block = new Uint8Array(n * n);
    for (let j = 0; j < n; j++) for (let i = 0; i < n; i++) {
      const [x, z] = this.center(i, j);
      this.block[j * n + i] = col.blocked(x, z, 0.45) ? 1 : 0;
    }
    this.dist = new Float32Array(n * n).fill(1e9);
    this.queue = new Int32Array(n * n);
  }
  center(i, j) { return [-HALF + (i + 0.5) * this.cs, -HALF + (j + 0.5) * this.cs]; }
  cell(x, z) {
    const i = Math.max(0, Math.min(this.n - 1, Math.floor((x + HALF) / this.cs)));
    const j = Math.max(0, Math.min(this.n - 1, Math.floor((z + HALF) / this.cs)));
    return [i, j];
  }
  // breadth-first distance field from (x,z)
  compute(x, z, out = this.dist) {
    const n = this.n, D = out, Q = this.queue, B = this.block;
    D.fill(1e9);
    let [i0, j0] = this.cell(x, z);
    let s = j0 * n + i0;
    if (B[s]) { // start inside an obstacle: find nearest open cell
      let best = -1, bd = 1e9;
      for (let dj = -3; dj <= 3; dj++) for (let di = -3; di <= 3; di++) {
        const ii = i0 + di, jj = j0 + dj;
        if (ii < 0 || jj < 0 || ii >= n || jj >= n || B[jj * n + ii]) continue;
        const d = di * di + dj * dj; if (d < bd) { bd = d; best = jj * n + ii; }
      }
      if (best < 0) return D; s = best;
    }
    let h = 0, t = 0;
    D[s] = 0; Q[t++] = s;
    while (h < t) {
      const c = Q[h++], ci = c % n, cj = (c / n) | 0, nd = D[c] + 1;
      if (ci > 0) { const k = c - 1; if (!B[k] && D[k] > nd) { D[k] = nd; Q[t++] = k; } }
      if (ci < n - 1) { const k = c + 1; if (!B[k] && D[k] > nd) { D[k] = nd; Q[t++] = k; } }
      if (cj > 0) { const k = c - n; if (!B[k] && D[k] > nd) { D[k] = nd; Q[t++] = k; } }
      if (cj < n - 1) { const k = c + n; if (!B[k] && D[k] > nd) { D[k] = nd; Q[t++] = k; } }
    }
    return D;
  }
  // world point of the next step downhill in the field, or null
  next(x, z, D = this.dist) {
    const n = this.n, [i, j] = this.cell(x, z);
    let best = null, bd = D[j * n + i];
    for (let dj = -1; dj <= 1; dj++) for (let di = -1; di <= 1; di++) {
      if (!di && !dj) continue;
      const ii = i + di, jj = j + dj;
      if (ii < 0 || jj < 0 || ii >= n || jj >= n) continue;
      if (di && dj && (this.block[j * n + ii] || this.block[jj * n + i])) continue; // no corner cutting
      const d = D[jj * n + ii] + (di && dj ? 0.4 : 0);
      if (d < bd) { bd = d; best = [ii, jj]; }
    }
    return best ? this.center(best[0], best[1]) : null;
  }
  distAt(x, z, D = this.dist) { const [i, j] = this.cell(x, z); return D[j * this.n + i] * this.cs; }
  open(x, z) { const [i, j] = this.cell(x, z); return !this.block[j * this.n + i]; }
}

// ---------------------------------------------------------------- world
export function buildWorld(scene, quality) {
  srand(9001);
  const col = new Collision();
  const B = new Builder();
  const M = new THREE.Matrix4(), Q = new THREE.Quaternion(), V = new THREE.Vector3(), S = new THREE.Vector3(1, 1, 1);
  const at = (x, y, z, ry = 0) => M.compose(V.set(x, y, z), Q.setFromAxisAngle(new THREE.Vector3(0, 1, 0), ry), S.set(1, 1, 1)).clone();

  scene.background = new THREE.Color(0x070a10);
  scene.fog = new THREE.FogExp2(0x0a0e14, 0.036);

  // ---------- sky ----------
  const skyMat = new THREE.ShaderMaterial({
    side: THREE.BackSide, depthWrite: false, fog: false,
    uniforms: { flash: { value: 0 } },
    vertexShader: 'varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0);} ',
    fragmentShader: `
      varying vec3 vP; uniform float flash;
      float h(vec3 p){ return fract(sin(dot(p, vec3(12.9898,78.233,45.164)))*43758.5453); }
      void main(){
        float y = clamp(vP.y, 0.0, 1.0);
        vec3 c = mix(vec3(0.06,0.065,0.075), vec3(0.008,0.012,0.025), pow(y,0.5));
        c += vec3(0.05,0.03,0.01) * pow(1.0 - y, 6.0); // distant city glow
        vec3 q = floor(vP*350.0);
        c += vec3(step(0.998, h(q)) * smoothstep(0.08,0.3,y)) * 0.5;
        float cl = sin(vP.x*9.0+sin(vP.z*7.0)*2.0)*sin(vP.z*6.0+vP.x*3.0);
        c = mix(c, vec3(0.05,0.055,0.06), smoothstep(0.2,0.9,cl)*smoothstep(0.05,0.35,y)*0.6);
        c += flash*vec3(0.5,0.55,0.7)*(0.3+y);
        gl_FragColor = vec4(c,1.0);
      }`,
  });
  const sky = new THREE.Mesh(new THREE.SphereGeometry(400, 32, 16), skyMat);
  scene.add(sky);
  const moon = new THREE.Sprite(new THREE.SpriteMaterial({ map: moonTexture(), fog: false, depthWrite: false, transparent: true }));
  moon.position.set(-120, 150, -220); moon.scale.setScalar(50); scene.add(moon);
  const halo = new THREE.Sprite(new THREE.SpriteMaterial({ map: softSprite(128, 150, 170, 210), fog: false, depthWrite: false, transparent: true, opacity: 0.3, blending: THREE.AdditiveBlending }));
  halo.position.copy(moon.position); halo.scale.setScalar(200); scene.add(halo);

  // ---------- lights ----------
  const hemi = new THREE.HemisphereLight(0x55657f, 0x1a1712, 0.75);
  scene.add(hemi);
  const moonLight = new THREE.DirectionalLight(0xa8bce0, 1.1);
  moonLight.castShadow = true;
  moonLight.shadow.mapSize.set(quality.shadow, quality.shadow);
  Object.assign(moonLight.shadow.camera, { left: -35, right: 35, top: 35, bottom: -35, near: 5, far: 140 });
  moonLight.shadow.bias = -0.0008; moonLight.shadow.normalBias = 0.04;
  scene.add(moonLight); scene.add(moonLight.target);

  // ---------- materials ----------
  const tex = (maps, tile) => { for (const t of Object.values(maps)) if (t) t.repeat.set(1 / tile, 1 / tile); return maps; };
  const mats = {
    lawn: new THREE.MeshStandardMaterial({ ...tex(lawnMaps(), 6), roughness: 1 }),
    asphalt: new THREE.MeshStandardMaterial({ ...tex(asphaltMaps(), 8), roughness: 1 }),
    concrete: new THREE.MeshStandardMaterial({ ...tex(concreteMaps(), 2), roughness: 1 }),
    siding: new THREE.MeshStandardMaterial({ ...tex(sidingMaps(), 1.6), roughness: 1, vertexColors: true }),
    shingle: new THREE.MeshStandardMaterial({ ...tex(shingleMaps(), 2.5), roughness: 1 }),
    brick: new THREE.MeshStandardMaterial({ ...tex(brickMaps(), 1.2), roughness: 1 }),
    plank: new THREE.MeshStandardMaterial({ ...tex(plankMaps(), 1.5), roughness: 1, vertexColors: true }),
    trim: new THREE.MeshStandardMaterial({ roughness: 0.75, vertexColors: true }),
    glass: new THREE.MeshStandardMaterial({ color: 0x0b0f14, roughness: 0.08, metalness: 0.6 }),
    lit: new THREE.MeshStandardMaterial({ color: 0x000000, emissive: 0xffb466, emissiveIntensity: 1.1, roughness: 0.3 }),
    paint: new THREE.MeshStandardMaterial({ roughness: 0.35, metalness: 0.55, vertexColors: true }),
    rubber: new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.9 }),
    iron: new THREE.MeshStandardMaterial({ ...metalMaps(), color: 0x555555, metalness: 0.8, roughness: 0.7 }),
    bush: new THREE.MeshStandardMaterial({ color: 0x1d2a17, roughness: 1, vertexColors: true }),
    hazard: new THREE.MeshStandardMaterial({ color: 0x331800, emissive: 0xff8a10, emissiveIntensity: 2 }),
    bulb: new THREE.MeshStandardMaterial({ color: 0x221a10, emissive: 0xffc070, emissiveIntensity: 2.5 }),
    paintLine: new THREE.MeshStandardMaterial({ color: 0x9a8a40, roughness: 0.8 }),
  };
  const bark = barkMaps();
  mats.bark = new THREE.MeshStandardMaterial({ ...bark, roughness: 1, normalScale: new THREE.Vector2(2, 2) });

  // ---------- ground ----------
  const ground = new THREE.Mesh(new THREE.PlaneGeometry(HALF * 2 + 60, HALF * 2 + 60), mats.lawn);
  ground.rotation.x = -Math.PI / 2;
  // planar UVs in metres
  { const uv = ground.geometry.attributes.uv, p = ground.geometry.attributes.position; for (let i = 0; i < uv.count; i++) uv.setXY(i, p.getX(i), p.getY(i)); }
  ground.receiveShadow = true;
  scene.add(ground);
  const groundHeight = () => 0;

  // ---------- streets & sidewalks ----------
  const planeXZ = (x0, x1, z0, z1, y) => {
    const g = new THREE.PlaneGeometry(x1 - x0, z1 - z0);
    g.rotateX(-Math.PI / 2); g.translate((x0 + x1) / 2, y, (z0 + z1) / 2);
    const uv = g.attributes.uv, p = g.attributes.position;
    for (let i = 0; i < uv.count; i++) uv.setXY(i, p.getX(i), p.getZ(i)); // world UVs -> seamless overlaps
    return g;
  };
  const isStreet = (x, z) => ST.some((s) => (Math.abs(x - s) < SIDE && Math.abs(z) < STREET_END) || (Math.abs(z - s) < SIDE && Math.abs(x) < STREET_END));
  for (const s of ST) {
    B.add('asphalt', planeXZ(s - SW, s + SW, -STREET_END, STREET_END, 0.02));
    B.add('asphalt', planeXZ(-STREET_END, STREET_END, s - SW, s + SW, 0.02));
    for (const side of [-1, 1]) {
      const o = s + side * (SW + 1);
      // sidewalks as slabs (with world UVs so overlaps at corners are seamless)
      const swX = box(2, 0.12, STREET_END * 2); { const uv = swX.attributes.uv, p = swX.attributes.position; for (let i = 0; i < uv.count; i++) uv.setXY(i, p.getX(i) + o, p.getZ(i)); }
      B.add('concrete', swX, at(o, 0.06, 0));
      const swZ = box(STREET_END * 2, 0.12, 2); { const uv = swZ.attributes.uv, p = swZ.attributes.position; for (let i = 0; i < uv.count; i++) uv.setXY(i, p.getX(i), p.getZ(i) + o); }
      B.add('concrete', swZ, at(0, 0.061, o));
    }
    // faded centre-line dashes (skip intersections)
    for (let t = -STREET_END + 2; t < STREET_END - 2; t += 6) {
      if (ST.some((c) => Math.abs(t - c) < SIDE + 1)) continue;
      B.add('paintLine', box(0.15, 0.01, 2.5), at(s, 0.03, t));
      B.add('paintLine', box(2.5, 0.01, 0.15), at(t, 0.03, s));
    }
  }

  // ---------- houses ----------
  const wallColors = [0xb9ad98, 0x8e9a9c, 0x9aa38a, 0xc9c3b4, 0xa8967a, 0x7f8c99, 0xbfb59a, 0x96877a];
  const doorColors = [0x4a1e18, 0x1f2e3a, 0x2a3324, 0x3a2a1e, 0x202020];
  const trimWhite = 0xd8d4c8;
  const houses = [];

  // builds a house in local space (front facing +z, front wall at z=0, centred on x=0)
  function house(cx, cz, ry) {
    const w = 9.5 + rand() * 2.5, d = 8 + rand() * 2.5, floors = rand() < 0.5 ? 2 : 1;
    const H = floors * 2.7, base = 0.45;
    const wall = wallColors[Math.floor(rand() * wallColors.length)];
    const T = (x, y, z, r = 0) => new THREE.Matrix4().makeRotationY(ry).setPosition(cx, 0, cz).multiply(new THREE.Matrix4().makeRotationY(r).setPosition(x, y, z));
    const add = (mat, g, x, y, z, color, r = 0) => B.add(mat, g, T(x, y, z, r), color);

    add('brick', box(w + 0.15, base, d + 0.15), 0, base / 2, -d / 2);
    add('siding', box(w, H, d), 0, base + H / 2, -d / 2, wall);
    // gable roof
    const rh = 1.6 + rand() * 1.2, oh = 0.5;
    const tri = new THREE.Shape();
    tri.moveTo(-d / 2 - oh, 0); tri.lineTo(d / 2 + oh, 0); tri.lineTo(0, rh); tri.lineTo(-d / 2 - oh, 0);
    const roof = new THREE.ExtrudeGeometry(tri, { depth: w + oh * 2, bevelEnabled: false });
    roof.rotateY(Math.PI / 2); roof.translate(-(w + oh * 2) / 2, 0, 0);
    const [caps, slopes] = splitGroups(roof);
    // gable ends get siding, slopes get shingles; shrink the gable triangle under the overhang
    add('siding', caps, 0, base + H, -d / 2, wall);
    add('shingle', slopes, 0, base + H, -d / 2);
    add('trim', box(w + 0.2, 0.18, d + 0.2), 0, base + H, -d / 2, trimWhite); // fascia band
    if (rand() < 0.6) add('brick', box(0.9, rh + 1.6, 0.9), (rand() < 0.5 ? -1 : 1) * (w / 2 - 1.2), base + H + rh / 2 + 0.3, -d / 2 - 0.6);

    // windows
    const win = (x, y, z, rot) => {
      const r = rand();
      const glassMat = r < 0.12 ? 'lit' : 'glass';
      const m = new THREE.Matrix4().makeRotationY(rot).setPosition(x, y, z);
      const put = (mat, g, lx, ly, lz, color) => B.add(mat, g, T(0, 0, 0).multiply(m.clone().multiply(new THREE.Matrix4().makeTranslation(lx, ly, lz))), color);
      put(glassMat, box(1.05, 1.3, 0.04), 0, 0, 0.01);
      put('trim', box(1.25, 0.1, 0.1), 0, 0.7, 0.04, trimWhite);
      put('trim', box(1.35, 0.08, 0.2), 0, -0.7, 0.08, trimWhite);
      put('trim', box(0.1, 1.4, 0.1), -0.6, 0, 0.04, trimWhite);
      put('trim', box(0.1, 1.4, 0.1), 0.6, 0, 0.04, trimWhite);
      put('trim', box(0.05, 1.3, 0.05), 0, 0, 0.04, trimWhite);
      if (r > 0.7) { // boarded up
        for (let k = 0; k < 3; k++) {
          const pl = box(1.5, 0.2, 0.04);
          const pm = new THREE.Matrix4().makeRotationZ((rand() - 0.5) * 0.6).setPosition(0, -0.45 + k * 0.45, 0.12);
          B.add('plank', pl, T(0, 0, 0).multiply(m.clone().multiply(pm)), 0xffffff);
        }
      }
    };
    const doorX = (rand() - 0.5) * (w - 4);
    for (let f = 0; f < floors; f++) {
      const y = base + f * 2.7 + 1.45;
      const n = Math.floor((w - 1.5) / 2.6);
      for (let k = 0; k < n; k++) {
        const x = -w / 2 + 1.3 + k * ((w - 2.6) / Math.max(1, n - 1));
        if (f === 0 && Math.abs(x - doorX) < 1.4) continue;
        win(x, y, 0, 0);
      }
      for (const sx of [-1, 1]) if (rand() < 0.8) win(sx * w / 2, y, -d / 2 + (rand() - 0.5) * 2, sx * Math.PI / 2);
      if (rand() < 0.6) win((rand() - 0.5) * (w - 3), y, -d, Math.PI);
    }
    // door, porch, steps
    const doorCol = doorColors[Math.floor(rand() * doorColors.length)];
    const open = rand() < 0.25;
    add('trim', box(1.0, 2.1, 0.08), doorX + (open ? -0.45 : 0), base + 1.05, open ? 0.45 : 0.03, doorCol, open ? -1.3 : 0);
    if (open) add('glass', box(0.95, 2.05, 0.02), doorX, base + 1.05, 0.0);
    add('trim', box(1.3, 0.12, 0.12), doorX, base + 2.16, 0.06, trimWhite);
    add('trim', box(0.12, 2.2, 0.12), doorX - 0.6, base + 1.1, 0.06, trimWhite);
    add('trim', box(0.12, 2.2, 0.12), doorX + 0.6, base + 1.1, 0.06, trimWhite);
    add('concrete', box(2.8, base - 0.05, 1.9), doorX, (base - 0.05) / 2, 0.95);
    add('concrete', box(1.6, 0.22, 0.5), doorX, 0.11, 2.1);
    if (rand() < 0.5) { // porch roof
      add('shingle', box(3.2, 0.15, 2.2), doorX, base + 2.7, 1.0);
      for (const sx of [-1, 1]) add('trim', box(0.14, 2.6, 0.14), doorX + sx * 1.35, base + 1.3, 1.85, trimWhite);
    }
    // porch light
    add('bulb', box(0.12, 0.18, 0.08), doorX + 0.95, base + 1.9, 0.08);

    // garage or side driveway
    const gSide = 1; // garages always on the same side so neighbours never overlap
    const gw = 5.6, gx = gSide * (w / 2 + gw / 2), hasGarage = rand() < 0.6;
    const boxes = [[-w / 2, w / 2, -d, 0]];
    if (hasGarage) {
      const gd = d * 0.85;
      add('siding', box(gw, 2.8, gd), gx, 1.4, -gd / 2, wall);
      add('shingle', box(gw + 0.6, 0.25, gd + 0.6), gx, 2.9, -gd / 2);
      add('trim', box(gw - 1.2, 2.2, 0.06), gx, 1.1, 0.02, rand() < 0.5 ? trimWhite : 0x9a9a92);
      for (let k = 1; k < 4; k++) add('trim', box(gw - 1.2, 0.04, 0.08), gx, 0.03 + k * 0.55, 0.05, 0x6f6f68);
      boxes.push([gx - gw / 2, gx + gw / 2, -gd, 0]);
    }
    // driveway + front walk to the sidewalk (setback 6m)
    add('concrete', box(5, 0.04, 6.2), hasGarage ? gx : gSide * (w / 2 + 3), 0.02, 3.1);
    add('concrete', box(1.2, 0.04, 3.6), doorX, 0.02, 4.2);
    // mailbox
    const mbx = (hasGarage ? gx : gSide * (w / 2 + 3)) - gSide * 3.2;
    add('plank', box(0.1, 1.05, 0.1), mbx, 0.52, 5.6, 0xffffff);
    add('iron', box(0.25, 0.25, 0.5), mbx, 1.12, 5.6);
    // bushes along the front
    for (let k = 0; k < 3 + Math.floor(rand() * 3); k++) {
      const bx = -w / 2 + 0.8 + rand() * (w - 1.6);
      if (Math.abs(bx - doorX) < 1.6) continue;
      const g = new THREE.IcosahedronGeometry(0.55 + rand() * 0.35, 1);
      const p = g.attributes.position;
      for (let i = 0; i < p.count; i++) { const s = 0.8 + rand() * 0.4; p.setXYZ(i, p.getX(i) * s, p.getY(i) * s * 0.85, p.getZ(i) * s); }
      g.computeVertexNormals();
      add('bush', g, bx, 0.45, 0.6, new THREE.Color().setHSL(0.25 + rand() * 0.06, 0.3, 0.22 + rand() * 0.12).getHex());
    }

    // world-space collider boxes
    const toWorld = (lx, lz) => new THREE.Vector3(lx, 0, lz).applyAxisAngle(new THREE.Vector3(0, 1, 0), ry).add(new THREE.Vector3(cx, 0, cz));
    const hb = [];
    for (const [x0, x1, z0, z1] of boxes) {
      const a = toWorld(x0, z0), b = toWorld(x1, z1);
      hb.push(col.add({ type: 'box', x0: Math.min(a.x, b.x), x1: Math.max(a.x, b.x), z0: Math.min(a.z, b.z), z1: Math.max(a.z, b.z), h: base + H + rh, kind: 'house' }));
    }
    const door = toWorld(doorX, 0.1);
    const trigger = toWorld(doorX, 1.6);
    const facing = new THREE.Vector3(Math.sin(ry), 0, Math.cos(ry));
    houses.push({ door, trigger, facing, ry, box: hb[0], doorY: base, w });
  }

  // lots: block interiors (two rows facing the streets) + outer ring facing inward
  const lotsFor = (a0, a1) => { const span = a1 - a0, n = Math.max(1, Math.round(span / 19)); return Array.from({ length: n }, (_, k) => a0 + (k + 0.5) * span / n); };
  for (let bi = 0; bi < 3; bi++) for (let bj = 0; bj < 3; bj++) {
    const x0 = ST[bi] + SIDE, x1 = ST[bi + 1] - SIDE, z0 = ST[bj] + SIDE, z1 = ST[bj + 1] - SIDE;
    for (const x of lotsFor(x0, x1)) {
      house(x, z0 + 6, Math.PI);  // faces the street on the -z side (6m front yard)
      house(x, z1 - 6, 0);        // faces the street on the +z side
    }
    // back fence down the middle of the block
    const zm = (z0 + z1) / 2;
    B.add('plank', box(x1 - x0 - 2, 1.7, 0.08), at((x0 + x1) / 2, 0.85, zm), 0xb8b0a0);
    col.add({ type: 'box', x0: x0 + 1, x1: x1 - 1, z0: zm - 0.1, z1: zm + 0.1, h: 1.7, kind: 'wood' });
  }
  // outer ring of houses facing inward toward the ring road
  for (const s of [-1, 1]) {
    for (const z of lotsFor(-70, 70)) house(s * (STREET_END + 6), z, s > 0 ? -Math.PI / 2 : Math.PI / 2);
    for (const x of lotsFor(-92, 92)) house(x, s * (STREET_END + 6), s > 0 ? Math.PI : 0);
  }

  // ---------- boundary privacy fence ----------
  for (const s of [-1, 1]) {
    B.add('plank', box(HALF * 2, 2.4, 0.1), at(0, 1.2, s * HALF), 0x9c9080);
    B.add('plank', box(0.1, 2.4, HALF * 2), at(s * HALF, 1.2, 0), 0x9c9080);
  }

  // ---------- streetlights ----------
  const lamps = [];
  for (const s of ST) {
    for (let t = -70; t <= 70; t += 23.3) {
      if (ST.some((c) => Math.abs(t - c) < SIDE + 2)) continue;
      for (const axis of [0, 1]) {
        const side = ((Math.round(t / 23.3) + axis) % 2 === 0) ? 1 : -1;
        const px = axis ? t : s + side * (SW + 1.6), pz = axis ? s + side * (SW + 1.6) : t;
        const ax = axis ? 0 : -side, az = axis ? -side : 0; // arm points over the street
        B.add('iron', cyl(0.07, 0.1, 6.5, 8), at(px, 3.25, pz));
        B.add('iron', box(Math.abs(ax) * 1.6 + 0.08, 0.08, Math.abs(az) * 1.6 + 0.08), at(px + ax * 0.8, 6.4, pz + az * 0.8));
        const hx = px + ax * 1.6, hz = pz + az * 1.6;
        B.add('iron', box(0.5, 0.15, 0.5), at(hx, 6.35, hz));
        const broken = rand() < 0.3;
        if (!broken) B.add('bulb', box(0.36, 0.06, 0.36), at(hx, 6.25, hz));
        col.add({ type: 'cyl', x: px, z: pz, r: 0.15, h: 6.5, kind: 'metal' });
        lamps.push({ x: hx, z: hz, broken, flicker: !broken && rand() < 0.2 });
      }
    }
  }
  const glowTex = softSprite(64, 255, 190, 120);
  const poolTex = softSprite(128, 255, 170, 90);
  const lampFx = [];
  for (const l of lamps) {
    if (l.broken) continue;
    const g = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTex, blending: THREE.AdditiveBlending, transparent: true, depthWrite: false, opacity: 0.55 }));
    g.position.set(l.x, 6.15, l.z); g.scale.setScalar(2.2); scene.add(g);
    const pool = new THREE.Mesh(new THREE.PlaneGeometry(11, 11), new THREE.MeshBasicMaterial({ map: poolTex, blending: THREE.AdditiveBlending, transparent: true, depthWrite: false, opacity: 0.12 }));
    pool.rotation.x = -Math.PI / 2; pool.position.set(l.x, 0.05, l.z); scene.add(pool);
    lampFx.push({ l, g, pool });
  }
  // a few real lights follow the nearest working lamps
  const lampLights = [0, 1, 2].map(() => { const p = new THREE.PointLight(0xffb070, 18, 18, 1.5); scene.add(p); return p; });

  // ---------- abandoned cars ----------
  const carColors = [0x6a1a14, 0x1d2c44, 0x8a8a86, 0x222222, 0x3b4a3a, 0xc8c4b8, 0x4a3b28];
  const hazards = [];
  const car = (x, z, ry) => {
    const c = carColors[Math.floor(rand() * carColors.length)];
    const T = (lx, ly, lz) => new THREE.Matrix4().makeRotationY(ry).setPosition(x, 0, z).multiply(new THREE.Matrix4().makeTranslation(lx, ly, lz));
    B.add('paint', box(1.8, 0.65, 4.4), T(0, 0.62, 0), c);
    B.add('paint', box(1.6, 0.55, 2.3), T(0, 1.2, -0.2), c);
    B.add('glass', box(1.62, 0.45, 2.1), T(0, 1.2, -0.2));
    for (const sx of [-1, 1]) for (const sz of [-1.35, 1.35]) {
      const wg = cyl(0.36, 0.36, 0.25, 12); wg.rotateZ(Math.PI / 2);
      B.add('rubber', wg, T(sx * 0.85, 0.36, sz));
    }
    for (const sx of [-0.6, 0.6]) {
      B.add('trim', box(0.35, 0.15, 0.05), T(sx, 0.75, 2.2), 0xdddddd);
      const hz = box(0.3, 0.12, 0.05);
      B.add('hazard', hz, T(sx, 0.78, -2.21));
    }
    const fp = new THREE.Box3().setFromBufferAttribute(new THREE.BufferAttribute(new Float32Array([-0.95, 0, -2.25, 0.95, 0, 2.25, -0.95, 0, 2.25, 0.95, 0, -2.25]), 3));
    const pts = [[-0.95, -2.25], [0.95, -2.25], [-0.95, 2.25], [0.95, 2.25]].map(([a, b]) => new THREE.Vector3(a, 0, b).applyAxisAngle(new THREE.Vector3(0, 1, 0), ry));
    void fp;
    col.add({ type: 'box', x0: x + Math.min(...pts.map((p) => p.x)), x1: x + Math.max(...pts.map((p) => p.x)), z0: z + Math.min(...pts.map((p) => p.z)), z1: z + Math.max(...pts.map((p) => p.z)), h: 1.5, kind: 'metal' });
  };
  for (let i = 0; i < 18; i++) {
    const s = ST[Math.floor(rand() * 4)], t = -70 + rand() * 140;
    if (ST.some((c) => Math.abs(t - c) < SIDE + 3)) continue;
    const lane = (rand() < 0.5 ? -1 : 1) * 2;
    const crash = rand() < 0.3 ? (rand() - 0.5) * 1.6 : (rand() - 0.5) * 0.2;
    if (rand() < 0.5) car(s + lane, t, (lane > 0 ? 0 : Math.PI) + crash); else car(t, s + lane, (lane > 0 ? Math.PI / 2 : -Math.PI / 2) + crash);
  }

  // ---------- yard trees ----------
  function branch(geos, start, dir, len, rad, depth) {
    const end = start.clone().addScaledVector(dir, len);
    const g = new THREE.CylinderGeometry(rad * 0.65, rad, len, Math.max(4, 8 - depth * 2), 2);
    g.translate(0, len / 2, 0);
    g.applyQuaternion(new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir));
    g.translate(start.x, start.y, start.z);
    geos.push(g);
    if (depth >= 3 || rad < 0.03) return;
    const n = 2 + Math.floor(rand() * 2);
    for (let i = 0; i < n; i++) {
      const nd = dir.clone(); nd.x += (rand() - 0.5) * 1.5; nd.z += (rand() - 0.5) * 1.5; nd.y += rand() * 0.4; nd.normalize();
      branch(geos, start.clone().lerp(end, depth === 0 ? 0.6 + rand() * 0.4 : 1), nd, len * (0.6 + rand() * 0.2), rad * 0.55, depth + 1);
    }
  }
  let treeCount = 0;
  for (let i = 0; i < 400 && treeCount < quality.trees; i++) {
    const x = (rand() - 0.5) * (HALF * 2 - 8), z = (rand() - 0.5) * (HALF * 2 - 8);
    if (isStreet(x, z) || col.blocked(x, z, 2.5)) continue;
    const geos = [];
    const s = 0.7 + rand() * 0.6;
    branch(geos, new THREE.Vector3(0, -0.2, 0), new THREE.Vector3((rand() - 0.5) * 0.2, 1, (rand() - 0.5) * 0.2).normalize(), (3 + rand() * 2) * s, 0.22 * s, 0);
    for (const g of geos) B.add('bark', g, at(x, 0, z, rand() * 6));
    col.add({ type: 'cyl', x, z, r: 0.25 * s, h: 4 * s, kind: 'wood' });
    treeCount++;
  }

  // ---------- litter: trash cans ----------
  for (let i = 0; i < 40; i++) {
    const h = houses[Math.floor(rand() * houses.length)];
    const p = h.door.clone().addScaledVector(h.facing, 5 + rand() * 0.5).add(new THREE.Vector3(h.facing.z, 0, -h.facing.x).multiplyScalar((rand() - 0.5) * 8));
    if (col.blocked(p.x, p.z, 0.5)) continue;
    const down = rand() < 0.4;
    const g = cyl(0.3, 0.27, 0.95, 10);
    const m = new THREE.Matrix4().compose(new THREE.Vector3(p.x, down ? 0.3 : 0.48, p.z), new THREE.Quaternion().setFromEuler(new THREE.Euler(down ? Math.PI / 2 : 0, rand() * 6, 0)), new THREE.Vector3(1, 1, 1));
    B.add('paint', g, m, [0x2a3a2a, 0x333333, 0x1f2a3a][Math.floor(rand() * 3)]);
  }

  // ---------- merge everything ----------
  const built = B.build(scene, mats, { asphalt: false, paintLine: false, lawn: false, concrete: true, glass: false, lit: false, bulb: false, hazard: false });
  void built;

  // ---------- overgrown lawn grass (instanced) ----------
  const bladeGeo = new THREE.PlaneGeometry(0.06, 0.5, 1, 3);
  bladeGeo.translate(0, 0.25, 0);
  { const bp = bladeGeo.attributes.position; for (let i = 0; i < bp.count; i++) { const y = bp.getY(i); bp.setX(i, bp.getX(i) * (1 - y / 0.55)); bp.setZ(i, y * y * 0.4); } }
  bladeGeo.computeVertexNormals();
  const grass = new THREE.InstancedMesh(bladeGeo, new THREE.MeshStandardMaterial({ color: 0x4a5032, roughness: 1, side: THREE.DoubleSide }), quality.grass);
  const gm = new THREE.Matrix4(), ge = new THREE.Euler(), gq = new THREE.Quaternion(), gs = new THREE.Vector3(), gp = new THREE.Vector3(), gc = new THREE.Color();
  let gi = 0;
  for (let t = 0; t < quality.grass * 4 && gi < quality.grass; t++) {
    const x = (rand() - 0.5) * HALF * 2, z = (rand() - 0.5) * HALF * 2;
    if (isStreet(x, z) || col.blocked(x, z, 0.3)) continue;
    ge.set((rand() - 0.5) * 0.5, rand() * 6.28, (rand() - 0.5) * 0.5);
    const s = 0.6 + rand();
    gm.compose(gp.set(x, 0, z), gq.setFromEuler(ge), gs.set(s, s, s));
    grass.setMatrixAt(gi, gm);
    gc.setHSL(0.15 + rand() * 0.08, 0.3, 0.12 + rand() * 0.12);
    grass.setColorAt(gi++, gc);
  }
  grass.count = gi;
  grass.receiveShadow = true;
  scene.add(grass);

  // ---------- mist ----------
  const mistTex = softSprite(128, 170, 185, 200, true);
  const mist = [];
  for (let i = 0; i < quality.mist; i++) {
    const m = new THREE.Sprite(new THREE.SpriteMaterial({ map: mistTex, transparent: true, depthWrite: false, opacity: 0.06 + rand() * 0.08 }));
    m.position.set((rand() - 0.5) * 80, 0.3 + rand() * 0.8, (rand() - 0.5) * 80);
    m.scale.set(6 + rand() * 8, 1.5 + rand() * 1.5, 1);
    m.userData.v = new THREE.Vector2((rand() - 0.5) * 0.4, (rand() - 0.5) * 0.4);
    scene.add(m); mist.push(m);
  }

  // ---------- goal: the safe house marker ----------
  const marker = new THREE.Group();
  {
    const flareTex = softSprite(64, 120, 255, 170);
    const flare = new THREE.Sprite(new THREE.SpriteMaterial({ map: flareTex, blending: THREE.AdditiveBlending, transparent: true, depthWrite: false }));
    flare.scale.setScalar(1.4); flare.position.set(0.9, 0.55, 0.9);
    marker.add(flare); marker.userData.flare = flare;
    const stick = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.3, 6), new THREE.MeshStandardMaterial({ color: 0x113322, emissive: 0x44ff99, emissiveIntensity: 2 }));
    stick.position.set(0.9, 0.5, 0.9); stick.rotation.z = 0.5; marker.add(stick);
    // spray-painted sign
    const c = document.createElement('canvas'); c.width = 256; c.height = 128;
    const x = c.getContext('2d');
    x.fillStyle = '#6b5a44'; x.fillRect(0, 0, 256, 128);
    for (let i = 0; i < 4; i++) { x.fillStyle = 'rgba(0,0,0,0.25)'; x.fillRect(0, i * 32 + 30, 256, 3); }
    x.font = 'bold 74px Impact, Arial Black, sans-serif'; x.fillStyle = '#3dff8f'; x.textAlign = 'center'; x.textBaseline = 'middle';
    x.shadowColor = '#3dff8f'; x.shadowBlur = 8; x.fillText('SAFE', 128, 66);
    const signTex = new THREE.CanvasTexture(c); signTex.colorSpace = THREE.SRGBColorSpace;
    const sign = new THREE.Mesh(new THREE.PlaneGeometry(1.3, 0.65), new THREE.MeshStandardMaterial({ map: signTex, emissiveMap: signTex, emissive: 0x335533, roughness: 0.9 }));
    sign.position.set(-1.25, 0.3, 0.75); sign.rotation.set(-0.35, 0.25, 0); sign.scale.setScalar(0.8);
    marker.add(sign);
    // glowing door frame
    const frameMat = new THREE.MeshBasicMaterial({ color: 0x55ffaa });
    for (const [w, h, px, py] of [[1.3, 0.06, 0, 2.2], [0.06, 2.2, -0.65, 1.1], [0.06, 2.2, 0.65, 1.1]]) {
      const f = new THREE.Mesh(new THREE.BoxGeometry(w, h, 0.05), frameMat); f.position.set(px, py, 0.14); marker.add(f);
    }
    const light = new THREE.PointLight(0x66ffaa, 12, 14, 1.6);
    light.position.set(0, 1.6, 1.6); marker.add(light); marker.userData.light = light;
    // zone ring on the ground where you must hold out
    const ring = new THREE.Mesh(new THREE.RingGeometry(1.75, 1.95, 48), new THREE.MeshBasicMaterial({ color: 0x55ffaa, transparent: true, opacity: 0.5, depthWrite: false }));
    ring.rotation.x = -Math.PI / 2; ring.position.set(0, 0.06 - 0.45, 1.5); marker.add(ring); marker.userData.ring = ring;
  }
  marker.visible = false;
  scene.add(marker);
  const goal = {
    obj: marker, trigger: new THREE.Vector3(), house: null,
    place(h) {
      this.house = h;
      marker.position.set(h.door.x, h.doorY, h.door.z);
      marker.rotation.y = h.ry;
      marker.visible = true;
      this.trigger.set(h.trigger.x, 0, h.trigger.z);
    },
  };

  const nav = new Nav(col);
  const goalField = new Float32Array(nav.n * nav.n);

  // pick a safe house that is out of sight and roughly `want` metres of walking away
  function pickGoal(px, pz, want) {
    const D = nav.compute(px, pz, goalField);
    let best = null, bestScore = -1e9;
    for (const h of houses) {
      if (h === goal.house) continue;
      const [i, j] = nav.cell(h.trigger.x, h.trigger.z);
      const d = D[j * nav.n + i] * nav.cs;
      if (d > 1e8) continue;
      const hidden = col.sightBlocked(px, pz, h.trigger.x, h.trigger.z, h.box);
      const score = -Math.abs(d - want) + (hidden ? 1000 : 0) + rand() * 6;
      if (score > bestScore) { bestScore = score; best = { h, d, hidden }; }
    }
    return best;
  }

  // ---------- update ----------
  let flashT = 0, nextFlash = 15 + Math.random() * 20, hz = 0;
  const lampSort = [];
  function update(dt, time, audio, player) {
    const px = player ? player.x : 0, pz = player ? player.z : 0;
    moonLight.position.set(px - 24, 30, pz - 40);
    moonLight.target.position.set(px, 0, pz);
    // move the few real lamp lights to the nearest working lamps
    lampSort.length = 0;
    for (const f of lampFx) { f.d = Math.hypot(f.l.x - px, f.l.z - pz); lampSort.push(f); }
    lampSort.sort((a, b) => a.d - b.d);
    lampLights.forEach((L, i) => {
      const f = lampSort[i];
      if (!f) { L.intensity = 0; return; }
      L.position.set(f.l.x, 6.0, f.l.z);
      L.intensity = f.l.flicker ? (Math.sin(time * 23 + i) > -0.2 || Math.random() < 0.3 ? 18 : 2) : 18;
    });
    for (const f of lampFx) if (f.l.flicker) { const on = Math.sin(time * 23) > -0.2 || Math.random() < 0.3; f.g.material.opacity = on ? 0.55 : 0.1; f.pool.material.opacity = on ? 0.12 : 0.02; }
    // hazard lights blink
    hz += dt; mats.hazard.emissiveIntensity = (hz % 1.1) < 0.55 ? 2.2 : 0.05;
    // goal marker
    if (marker.visible) {
      const k = 0.8 + Math.sin(time * 9) * 0.1 + Math.random() * 0.15;
      marker.userData.flare.scale.setScalar(1.4 * k);
      marker.userData.light.intensity = 10 * k;
      marker.userData.ring.material.opacity = 0.35 + Math.sin(time * 4) * 0.15;
    }
    for (const m of mist) {
      m.position.x += m.userData.v.x * dt; m.position.z += m.userData.v.y * dt;
      const dx = m.position.x - px, dz = m.position.z - pz;
      if (Math.hypot(dx, dz) > 42) { m.position.x = px - dx * 0.9; m.position.z = pz - dz * 0.9; }
    }
    nextFlash -= dt;
    if (nextFlash <= 0) {
      flashT = 0.6; nextFlash = 18 + Math.random() * 25;
      const dist = 1 + Math.random() * 2;
      setTimeout(() => audio && audio.ctx && audio.thunder(dist), 300 + dist * 900);
    }
    if (flashT > 0) {
      flashT -= dt;
      const f = flashT > 0 ? (Math.sin(flashT * 40) > 0 ? 1 : 0.3) * (flashT / 0.6) : 0;
      skyMat.uniforms.flash.value = f;
      hemi.intensity = 0.75 + f * 2.5;
    }
  }

  const start = new THREE.Vector3(-25, 0, -25 - SW - 1); // on the sidewalk at an intersection
  return { col, nav, groundHeight, update, moonLight, goal, houses, pickGoal, start, isStreet };
}
