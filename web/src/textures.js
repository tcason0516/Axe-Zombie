// Procedural texture generation: builds realistic-looking color, normal and
// roughness maps at load time so the APK needs no image assets.
import * as THREE from 'three';

// ---------- noise ----------
let seed = 1337;
export function rand() {
  seed = (seed * 16807) % 2147483647;
  return (seed - 1) / 2147483646;
}
export function srand(s) { seed = s >>> 0 || 1; }

const PERM = new Uint8Array(512);
(function () {
  const p = [];
  for (let i = 0; i < 256; i++) p[i] = i;
  for (let i = 255; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [p[i], p[j]] = [p[j], p[i]];
  }
  for (let i = 0; i < 512; i++) PERM[i] = p[i & 255];
})();
const GRAD = new Float32Array(256);
for (let i = 0; i < 256; i++) GRAD[i] = rand() * 2 - 1;

// tileable value noise (period in cells)
function vnoise(x, y, period) {
  const xi = Math.floor(x), yi = Math.floor(y);
  const xf = x - xi, yf = y - yi;
  const u = xf * xf * (3 - 2 * xf), v = yf * yf * (3 - 2 * yf);
  const x0 = ((xi % period) + period) % period, y0 = ((yi % period) + period) % period;
  const x1 = (x0 + 1) % period, y1 = (y0 + 1) % period;
  const a = GRAD[PERM[PERM[x0] + y0]], b = GRAD[PERM[PERM[x1] + y0]];
  const c = GRAD[PERM[PERM[x0] + y1]], d = GRAD[PERM[PERM[x1] + y1]];
  return a + (b - a) * u + (c - a) * v + (a - b - c + d) * u * v;
}
// fractal brownian motion, tileable over [0,1)
export function fbm(u, v, base = 4, oct = 5, gain = 0.5) {
  let amp = 1, sum = 0, norm = 0, f = base;
  for (let o = 0; o < oct; o++) {
    sum += amp * vnoise(u * f, v * f, f);
    norm += amp; amp *= gain; f *= 2;
  }
  return sum / norm; // ~[-1,1]
}
export function ridged(u, v, base = 4, oct = 4) {
  let amp = 1, sum = 0, norm = 0, f = base;
  for (let o = 0; o < oct; o++) {
    sum += amp * (1 - Math.abs(vnoise(u * f, v * f, f)));
    norm += amp; amp *= 0.5; f *= 2;
  }
  return sum / norm;
}

// ---------- helpers ----------
function canvas(w, h = w) {
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  return c;
}
const clamp = (x, a = 0, b = 1) => (x < a ? a : x > b ? b : x);
const lerp = (a, b, t) => a + (b - a) * t;

// Generate color + height (Float32) from a per-pixel function, then derive a normal map.
function generate(size, fn, opts = {}) {
  const col = canvas(size), ctx = col.getContext('2d');
  const img = ctx.createImageData(size, size);
  const height = new Float32Array(size * size);
  const rough = opts.rough ? new Uint8ClampedArray(size * size) : null;
  const out = { r: 0, g: 0, b: 0, h: 0, rough: 0.8 };
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      fn(x / size, y / size, out, x, y);
      const i = (y * size + x);
      img.data[i * 4] = clamp(out.r) * 255;
      img.data[i * 4 + 1] = clamp(out.g) * 255;
      img.data[i * 4 + 2] = clamp(out.b) * 255;
      img.data[i * 4 + 3] = 255;
      height[i] = out.h;
      if (rough) rough[i] = clamp(out.rough) * 255;
    }
  }
  ctx.putImageData(img, 0, 0);
  return { col, height, rough, size, ctx };
}

function normalFromHeight(height, size, strength = 2) {
  const c = canvas(size), ctx = c.getContext('2d');
  const img = ctx.createImageData(size, size);
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const l = height[y * size + ((x - 1 + size) % size)];
      const r = height[y * size + ((x + 1) % size)];
      const t = height[((y - 1 + size) % size) * size + x];
      const b = height[((y + 1) % size) * size + x];
      let nx = (l - r) * strength, ny = (t - b) * strength, nz = 1;
      const len = Math.hypot(nx, ny, nz);
      const i = (y * size + x) * 4;
      img.data[i] = (nx / len * 0.5 + 0.5) * 255;
      img.data[i + 1] = (ny / len * 0.5 + 0.5) * 255;
      img.data[i + 2] = (nz / len * 0.5 + 0.5) * 255;
      img.data[i + 3] = 255;
    }
  }
  ctx.putImageData(img, 0, 0);
  return c;
}
function grayCanvas(arr, size) {
  const c = canvas(size), ctx = c.getContext('2d');
  const img = ctx.createImageData(size, size);
  for (let i = 0; i < size * size; i++) {
    img.data[i * 4] = img.data[i * 4 + 1] = img.data[i * 4 + 2] = arr[i];
    img.data[i * 4 + 3] = 255;
  }
  ctx.putImageData(img, 0, 0);
  return c;
}
function tex(c, repeat = 1, color = false) {
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.repeat.set(repeat, repeat);
  t.anisotropy = 4;
  if (color) t.colorSpace = THREE.SRGBColorSpace;
  return t;
}
function pack(g, strength, repeat = 1) {
  return {
    map: tex(g.col, repeat, true),
    normalMap: tex(normalFromHeight(g.height, g.size, strength), repeat),
    roughnessMap: g.rough ? tex(grayCanvas(g.rough, g.size), repeat) : null,
  };
}

// ---------- materials ----------
export function groundMaps() {
  const g = generate(512, (u, v, o) => {
    const n = fbm(u, v, 4, 6);
    const m = fbm(u + 0.3, v + 0.7, 2, 4);
    const pebbles = Math.pow(clamp(ridged(u, v, 16, 2) - 0.55) * 2.2, 2);
    const grass = clamp((m + 0.1) * 2.5) * clamp(fbm(u * 3, v * 3, 32, 2) * 0.5 + 0.7);
    // muddy brown dirt
    let r = 0.16 + n * 0.05, gg = 0.12 + n * 0.04, b = 0.085 + n * 0.03;
    // dead grass patches
    r = lerp(r, 0.24 + n * 0.05, grass * 0.8);
    gg = lerp(gg, 0.23 + n * 0.06, grass * 0.8);
    b = lerp(b, 0.12, grass * 0.8);
    // pebbles
    r += pebbles * 0.25; gg += pebbles * 0.24; b += pebbles * 0.22;
    o.r = r; o.g = gg; o.b = b;
    o.h = n * 0.6 + pebbles * 1.2 + grass * fbm(u, v, 64, 2) * 0.6;
    o.rough = 0.97 - pebbles * 0.15;
  }, { rough: true });
  return pack(g, 3, 1);
}

export function barkMaps() {
  const g = generate(256, (u, v, o) => {
    const stretch = fbm(u * 1, v * 0.15, 8, 4);
    const grooves = ridged(u + stretch * 0.15, v * 0.12, 8, 3);
    const n = fbm(u, v, 16, 4);
    const k = Math.pow(grooves, 3);
    o.r = 0.10 + k * 0.14 + n * 0.03;
    o.g = 0.085 + k * 0.11 + n * 0.025;
    o.b = 0.07 + k * 0.08 + n * 0.02;
    // lichen
    const lich = clamp((fbm(u + 5, v + 2, 4, 4) - 0.25) * 4);
    o.r = lerp(o.r, 0.25, lich * 0.35); o.g = lerp(o.g, 0.28, lich * 0.35); o.b = lerp(o.b, 0.2, lich * 0.35);
    o.h = k + n * 0.2;
    o.rough = 0.95;
  }, { rough: true });
  return pack(g, 5);
}

export function stoneMaps() {
  const g = generate(256, (u, v, o) => {
    const n = fbm(u, v, 4, 6);
    const crack = Math.pow(clamp(1 - Math.abs(fbm(u, v, 3, 5)) * 12), 3);
    const moss = clamp((fbm(u + 1.3, v + 4.1, 3, 5) + (v - 0.3) * 0.8) * 2);
    let c = 0.36 + n * 0.12 - crack * 0.2;
    o.r = lerp(c, 0.17, moss * 0.7); o.g = lerp(c, 0.22, moss * 0.7); o.b = lerp(c * 0.97, 0.12, moss * 0.7);
    o.h = n * 0.6 - crack * 1.5 + moss * fbm(u, v, 32, 2) * 0.5;
    o.rough = 0.85 + moss * 0.1;
  }, { rough: true });
  return pack(g, 4);
}

export function woodMaps() {
  const g = generate(256, (u, v, o) => {
    const w = fbm(u * 0.2, v, 4, 4) * 6;
    const rings = Math.sin((u * 30 + w) * Math.PI) * 0.5 + 0.5;
    const n = fbm(u, v, 32, 3);
    const grime = clamp(fbm(u + 3, v, 4, 3) + 0.2);
    o.r = (0.27 + rings * 0.08 + n * 0.04) * (1 - grime * 0.4);
    o.g = (0.17 + rings * 0.05 + n * 0.03) * (1 - grime * 0.4);
    o.b = (0.12 + rings * 0.03) * (1 - grime * 0.4);
    o.h = rings * 0.4 + n * 0.3;
    o.rough = 0.7 - grime * 0.1;
  }, { rough: true });
  return pack(g, 2);
}

export function metalMaps() {
  const g = generate(256, (u, v, o) => {
    const n = fbm(u, v, 8, 5);
    let scratch = 0;
    const s = Math.abs(Math.sin((u * 0.9 + v * 0.4) * 300 + fbm(u, v, 4, 2) * 40));
    if (s > 0.985) scratch = 1;
    const rust = clamp((fbm(u + 2, v + 7, 4, 5) - 0.4) * 2.5) * 0.7;
    o.r = lerp(0.55 + n * 0.08 + scratch * 0.2, 0.35, rust);
    o.g = lerp(0.56 + n * 0.08 + scratch * 0.2, 0.17, rust);
    o.b = lerp(0.58 + n * 0.08 + scratch * 0.2, 0.08, rust);
    o.h = n * 0.3 - scratch * 0.4 + rust * fbm(u, v, 64, 2);
    o.rough = 0.35 + n * 0.1 - scratch * 0.15 + rust * 0.5;
  }, { rough: true });
  return pack(g, 1.5);
}

// Rotting skin. variant tints change hue between zombies.
export function skinMaps(variant = 0) {
  const tints = [
    [0.40, 0.43, 0.33], // grey-green
    [0.45, 0.41, 0.37], // pale grey
    [0.33, 0.36, 0.29], // dark green
    [0.47, 0.38, 0.33], // fresh-ish
  ];
  const t = tints[variant % tints.length];
  const off = variant * 3.7;
  const g = generate(512, (u, v, o) => {
    const n = fbm(u + off, v, 6, 6);
    const blotch = clamp((fbm(u + off * 2, v + 1, 3, 4) + 0.05) * 2.5);
    const veins = Math.pow(clamp(1 - Math.abs(fbm(u + off, v + 9, 5, 5)) * 18), 2);
    const sores = Math.pow(clamp((fbm(u + off, v + 4, 10, 3) - 0.45) * 5), 2);
    const blood = clamp((fbm(u - off, v + 2, 4, 5) - 0.42) * 3);
    const pores = fbm(u, v, 128, 1);
    let r = t[0] + n * 0.07, gg = t[1] + n * 0.07, b = t[2] + n * 0.06;
    // bruised purple / yellowish rot patches
    r = lerp(r, 0.36, blotch * 0.5); gg = lerp(gg, 0.32, blotch * 0.5); b = lerp(b, 0.36, blotch * 0.5);
    // dark veins
    r -= veins * 0.18; gg -= veins * 0.16; b -= veins * 0.06;
    // open sores
    r = lerp(r, 0.35, sores); gg = lerp(gg, 0.08, sores); b = lerp(b, 0.06, sores);
    // dried blood
    r = lerp(r, 0.2, blood * 0.7); gg = lerp(gg, 0.04, blood * 0.7); b = lerp(b, 0.03, blood * 0.7);
    o.r = r; o.g = gg; o.b = b;
    o.h = n * 0.5 + veins * 0.5 - sores * 1.2 + pores * 0.15;
    o.rough = 0.62 - sores * 0.35 - blood * 0.2;
  }, { rough: true });
  return pack(g, 3);
}

export function clothMaps(variant = 0) {
  const cols = [[0.18, 0.2, 0.26], [0.32, 0.28, 0.22], [0.25, 0.12, 0.1], [0.2, 0.22, 0.17], [0.27, 0.26, 0.24]];
  const c = cols[variant % cols.length];
  const off = variant * 5.1;
  const g = generate(256, (u, v, o) => {
    const weave = (Math.sin(u * 256 * Math.PI) * Math.sin(v * 256 * Math.PI)) * 0.5 + 0.5;
    const n = fbm(u + off, v, 4, 5);
    const grime = clamp(fbm(u + off, v + 3, 3, 4) * 1.5 + 0.3);
    const blood = clamp((fbm(u - off, v + 7, 3, 5) - 0.38) * 3);
    const tear = clamp((fbm(u + off, v + 11, 6, 4) - 0.5) * 8);
    let k = 1 - grime * 0.45 + weave * 0.06 + n * 0.08;
    o.r = lerp(c[0] * k, 0.2, blood * 0.85);
    o.g = lerp(c[1] * k, 0.01, blood * 0.85);
    o.b = lerp(c[2] * k, 0.01, blood * 0.85);
    o.r *= 1 - tear * 0.6; o.g *= 1 - tear * 0.6; o.b *= 1 - tear * 0.6;
    o.h = weave * 0.3 + n * 0.5 - tear;
    o.rough = 0.95 - blood * 0.3;
  }, { rough: true });
  return pack(g, 3);
}

// ---------- sprites ----------
export function softSprite(size = 128, r = 255, g = 255, b = 255, noisy = false) {
  const c = canvas(size), ctx = c.getContext('2d');
  const img = ctx.createImageData(size, size);
  for (let y = 0; y < size; y++) for (let x = 0; x < size; x++) {
    const dx = x / size - 0.5, dy = y / size - 0.5;
    let a = clamp(1 - Math.hypot(dx, dy) * 2);
    a = a * a * (3 - 2 * a);
    if (noisy) a *= clamp(fbm(x / size, y / size, 3, 4) * 1.2 + 0.6);
    const i = (y * size + x) * 4;
    img.data[i] = r; img.data[i + 1] = g; img.data[i + 2] = b; img.data[i + 3] = a * 255;
  }
  ctx.putImageData(img, 0, 0);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

export function bloodSplatTexture() {
  const size = 256;
  const c = canvas(size), ctx = c.getContext('2d');
  ctx.fillStyle = 'rgba(70,0,0,0.95)';
  const blob = (x, y, r) => { ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fill(); };
  blob(128, 128, 40);
  for (let i = 0; i < 30; i++) {
    const a = rand() * Math.PI * 2, d = 30 + rand() * 80;
    blob(128 + Math.cos(a) * d, 128 + Math.sin(a) * d, 3 + rand() * 14 * (1 - d / 130));
  }
  for (let i = 0; i < 10; i++) {
    const a = rand() * Math.PI * 2;
    ctx.strokeStyle = 'rgba(70,0,0,0.9)'; ctx.lineWidth = 3 + rand() * 5;
    ctx.beginPath(); ctx.moveTo(128, 128);
    ctx.lineTo(128 + Math.cos(a) * (60 + rand() * 50), 128 + Math.sin(a) * (60 + rand() * 50)); ctx.stroke();
  }
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

export function moonTexture() {
  const g = generate(256, (u, v, o) => {
    const dx = u - 0.5, dy = v - 0.5;
    const d = Math.hypot(dx, dy) * 2;
    const n = fbm(u, v, 3, 6);
    const crater = clamp((fbm(u + 3, v, 5, 3) - 0.2) * 3);
    const k = 0.85 + n * 0.12 - crater * 0.2;
    const disk = d < 0.9 ? 1 : 0;
    const glow = Math.pow(clamp(1 - d), 2) * 0.5;
    o.r = disk ? k * 0.95 : glow * 0.7; o.g = disk ? k * 0.97 : glow * 0.75; o.b = disk ? k : glow * 0.9;
    o.h = 0;
  });
  // convert to alpha-blended
  const ctx = g.ctx, img = ctx.getImageData(0, 0, 256, 256);
  for (let i = 0; i < img.data.length; i += 4) {
    img.data[i + 3] = Math.max(img.data[i], img.data[i + 1], img.data[i + 2]);
  }
  ctx.putImageData(img, 0, 0);
  const t = new THREE.CanvasTexture(g.col);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}
