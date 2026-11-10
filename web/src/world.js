// Night-time graveyard environment.
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { groundMaps, barkMaps, stoneMaps, softSprite, moonTexture, fbm, rand, srand, woodMaps, metalMaps } from './textures.js';

export const MAP_R = 62;

export function buildWorld(scene, quality) {
  srand(4242);
  const colliders = []; // {type:'cyl'|'box', ...}

  scene.background = new THREE.Color(0x070a10);
  scene.fog = new THREE.FogExp2(0x0b1016, 0.042);

  // ---------- sky dome ----------
  const skyGeo = new THREE.SphereGeometry(400, 32, 16);
  const skyMat = new THREE.ShaderMaterial({
    side: THREE.BackSide, depthWrite: false, fog: false,
    uniforms: { flash: { value: 0 } },
    vertexShader: `varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0);} `,
    fragmentShader: `
      varying vec3 vP; uniform float flash;
      float h(vec3 p){ return fract(sin(dot(p, vec3(12.9898,78.233,45.164)))*43758.5453); }
      void main(){
        float y = clamp(vP.y, 0.0, 1.0);
        vec3 c = mix(vec3(0.045,0.06,0.075), vec3(0.008,0.012,0.025), pow(y,0.5));
        // stars
        vec3 q = floor(vP*350.0);
        float s = step(0.9975, h(q)) * smoothstep(0.05,0.3,y);
        c += vec3(s)*0.6;
        // clouds band
        float cl = sin(vP.x*9.0+sin(vP.z*7.0)*2.0)*sin(vP.z*6.0+vP.x*3.0);
        c = mix(c, vec3(0.05,0.06,0.07), smoothstep(0.2,0.9,cl)*smoothstep(0.05,0.35,y)*0.6);
        c += flash*vec3(0.5,0.55,0.7)*(0.3+y);
        gl_FragColor = vec4(c,1.0);
      }`,
  });
  const sky = new THREE.Mesh(skyGeo, skyMat);
  scene.add(sky);

  // moon
  const moon = new THREE.Sprite(new THREE.SpriteMaterial({ map: moonTexture(), fog: false, depthWrite: false, transparent: true }));
  moon.position.set(-120, 140, -220);
  moon.scale.setScalar(55);
  scene.add(moon);
  const halo = new THREE.Sprite(new THREE.SpriteMaterial({ map: softSprite(128, 150, 170, 210), fog: false, depthWrite: false, transparent: true, opacity: 0.35, blending: THREE.AdditiveBlending }));
  halo.position.copy(moon.position); halo.scale.setScalar(220);
  scene.add(halo);

  // ---------- lights ----------
  const hemi = new THREE.HemisphereLight(0x5a6a88, 0x1a150f, 0.8);
  scene.add(hemi);
  const moonLight = new THREE.DirectionalLight(0xa8bce0, 1.25);
  moonLight.position.set(-24, 30, -40);
  moonLight.castShadow = true;
  moonLight.shadow.mapSize.set(quality.shadow, quality.shadow);
  const sc = moonLight.shadow.camera;
  sc.left = -30; sc.right = 30; sc.top = 30; sc.bottom = -30; sc.near = 5; sc.far = 120;
  moonLight.shadow.bias = -0.0008;
  moonLight.shadow.normalBias = 0.03;
  scene.add(moonLight);
  scene.add(moonLight.target);

  // lantern near the player
  const lanternLight = new THREE.PointLight(0xff9a40, 9, 14, 1.8);
  lanternLight.position.set(1.4, 1.75, 0.6);
  scene.add(lanternLight);

  // ---------- ground ----------
  const gm = groundMaps();
  for (const t of [gm.map, gm.normalMap, gm.roughnessMap]) t.repeat.set(40, 40);
  const groundGeo = new THREE.PlaneGeometry(240, 240, 120, 120);
  groundGeo.rotateX(-Math.PI / 2);
  const gp = groundGeo.attributes.position;
  for (let i = 0; i < gp.count; i++) {
    const x = gp.getX(i), z = gp.getZ(i);
    const r = Math.hypot(x, z);
    const h = fbm(x / 240 + 0.5, z / 240 + 0.5, 6, 4) * 1.2 * Math.min(1, Math.max(0, (r - 8) / 25));
    gp.setY(i, h + (r > MAP_R + 3 ? (r - MAP_R - 3) * 0.25 : 0));
  }
  groundGeo.computeVertexNormals();
  const ground = new THREE.Mesh(groundGeo, new THREE.MeshStandardMaterial({ map: gm.map, normalMap: gm.normalMap, roughness: 0.96, normalScale: new THREE.Vector2(0.7, 0.7) }));
  ground.receiveShadow = true;
  scene.add(ground);
  const groundHeight = (x, z) => {
    const r = Math.hypot(x, z);
    return fbm(x / 240 + 0.5, z / 240 + 0.5, 6, 4) * 1.2 * Math.min(1, Math.max(0, (r - 8) / 25)) + (r > MAP_R + 3 ? (r - MAP_R - 3) * 0.25 : 0);
  };

  // ---------- grass tufts (instanced) ----------
  const bladeGeo = new THREE.PlaneGeometry(0.06, 0.45, 1, 3);
  bladeGeo.translate(0, 0.22, 0);
  const bp = bladeGeo.attributes.position;
  for (let i = 0; i < bp.count; i++) { const y = bp.getY(i); bp.setX(i, bp.getX(i) * (1 - y / 0.5)); bp.setZ(i, y * y * 0.4); }
  bladeGeo.computeVertexNormals();
  const grassMat = new THREE.MeshStandardMaterial({ color: 0x4a4a30, roughness: 1, side: THREE.DoubleSide });
  const grassCount = quality.grass;
  const grass = new THREE.InstancedMesh(bladeGeo, grassMat, grassCount);
  const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), e = new THREE.Euler(), sv = new THREE.Vector3(), pv = new THREE.Vector3();
  const gcol = new THREE.Color();
  for (let i = 0; i < grassCount; i++) {
    let x, z;
    do {
      const a = rand() * Math.PI * 2, r = 1.5 + Math.sqrt(rand()) * (MAP_R + 2);
      x = Math.cos(a) * r; z = Math.sin(a) * r;
    } while (fbm(x / 60 + 0.5, z / 60 + 0.5, 3, 3) < -0.15);
    e.set((rand() - 0.5) * 0.5, rand() * Math.PI * 2, (rand() - 0.5) * 0.5);
    q.setFromEuler(e);
    const s = 0.5 + rand() * 1.0;
    m4.compose(pv.set(x, groundHeight(x, z), z), q, sv.set(s, s, s));
    grass.setMatrixAt(i, m4);
    gcol.setHSL(0.13 + rand() * 0.06, 0.3 + rand() * 0.2, 0.12 + rand() * 0.12);
    grass.setColorAt(i, gcol);
  }
  grass.receiveShadow = true;
  scene.add(grass);

  // ---------- dead trees ----------
  const bark = barkMaps();
  const barkMat = new THREE.MeshStandardMaterial({ ...bark, roughness: 1, normalScale: new THREE.Vector2(2, 2) });
  function branch(geos, start, dir, len, rad, depth) {
    const end = start.clone().addScaledVector(dir, len);
    const g = new THREE.CylinderGeometry(rad * 0.65, rad, len, Math.max(4, 9 - depth * 2), 3);
    // gnarl
    const p = g.attributes.position;
    for (let i = 0; i < p.count; i++) {
      const y = p.getY(i);
      p.setX(i, p.getX(i) + Math.sin(y * 4 + depth) * rad * 0.3);
      p.setZ(i, p.getZ(i) + Math.cos(y * 3 + depth) * rad * 0.3);
    }
    g.translate(0, len / 2, 0);
    const quat = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir);
    g.applyQuaternion(quat);
    g.translate(start.x, start.y, start.z);
    geos.push(g);
    if (depth >= 4 || rad < 0.025) return;
    const n = depth === 0 ? 3 + Math.floor(rand() * 2) : 2 + Math.floor(rand() * 2);
    for (let i = 0; i < n; i++) {
      const nd = dir.clone();
      nd.x += (rand() - 0.5) * 1.6; nd.z += (rand() - 0.5) * 1.6; nd.y += (rand() - 0.2) * 0.6;
      nd.normalize();
      const at = start.clone().lerp(end, depth === 0 ? 0.55 + rand() * 0.45 : 1);
      branch(geos, at, nd, len * (0.55 + rand() * 0.2), rad * 0.55, depth + 1);
    }
  }
  const treeTemplates = [];
  for (let k = 0; k < 4; k++) {
    const geos = [];
    branch(geos, new THREE.Vector3(0, -0.3, 0), new THREE.Vector3((rand() - 0.5) * 0.2, 1, (rand() - 0.5) * 0.2).normalize(), 3 + rand() * 2.5, 0.28 + rand() * 0.15, 0);
    // roots
    for (let r = 0; r < 4; r++) {
      const a = r / 4 * Math.PI * 2 + rand();
      const g = new THREE.ConeGeometry(0.16, 1.1, 5);
      g.rotateZ(Math.PI / 2 + 0.35); g.translate(0.4, 0.05, 0); g.rotateY(a);
      geos.push(g);
    }
    treeTemplates.push(mergeGeometries(geos));
  }
  const trees = [];
  for (let i = 0; i < quality.trees; i++) {
    const a = rand() * Math.PI * 2, r = 7 + Math.sqrt(rand()) * (MAP_R - 5);
    const x = Math.cos(a) * r, z = Math.sin(a) * r;
    const t = new THREE.Mesh(treeTemplates[i % treeTemplates.length], barkMat);
    const s = 0.9 + rand() * 0.8;
    t.scale.setScalar(s);
    t.position.set(x, groundHeight(x, z), z);
    t.rotation.y = rand() * Math.PI * 2;
    t.castShadow = true; t.receiveShadow = true;
    scene.add(t);
    colliders.push({ type: 'cyl', x, z, r: 0.32 * s, h: 4 * s, kind: 'wood', obj: t });
    trees.push(t);
  }

  // ---------- gravestones ----------
  const stone = stoneMaps();
  const stoneMat = new THREE.MeshStandardMaterial({ ...stone, roughness: 1, normalScale: new THREE.Vector2(1.6, 1.6) });
  const shapes = [];
  {
    // rounded headstone
    const s = new THREE.Shape();
    s.moveTo(-0.3, 0); s.lineTo(-0.3, 0.6); s.absarc(0, 0.6, 0.3, Math.PI, 0, true); s.lineTo(0.3, 0); s.lineTo(-0.3, 0);
    shapes.push(new THREE.ExtrudeGeometry(s, { depth: 0.12, bevelEnabled: true, bevelSize: 0.02, bevelThickness: 0.02, bevelSegments: 2, curveSegments: 10 }));
    // cross
    const c = new THREE.Shape();
    c.moveTo(-0.07, 0); c.lineTo(-0.07, 0.65); c.lineTo(-0.3, 0.65); c.lineTo(-0.3, 0.8); c.lineTo(-0.07, 0.8);
    c.lineTo(-0.07, 1.1); c.lineTo(0.07, 1.1); c.lineTo(0.07, 0.8); c.lineTo(0.3, 0.8); c.lineTo(0.3, 0.65); c.lineTo(0.07, 0.65); c.lineTo(0.07, 0);
    shapes.push(new THREE.ExtrudeGeometry(c, { depth: 0.12, bevelEnabled: true, bevelSize: 0.015, bevelThickness: 0.015, bevelSegments: 1 }));
    // square slab
    const b = new THREE.Shape();
    b.moveTo(-0.32, 0); b.lineTo(-0.32, 0.7); b.lineTo(-0.2, 0.82); b.lineTo(0.2, 0.82); b.lineTo(0.32, 0.7); b.lineTo(0.32, 0);
    shapes.push(new THREE.ExtrudeGeometry(b, { depth: 0.14, bevelEnabled: true, bevelSize: 0.02, bevelThickness: 0.02, bevelSegments: 1 }));
    for (const g of shapes) {
      g.translate(0, 0, -0.06);
      // uv scale for stone texture
      const uv = g.attributes.uv;
      for (let i = 0; i < uv.count; i++) uv.setXY(i, uv.getX(i) * 0.8, uv.getY(i) * 0.8);
    }
  }
  const graveMounds = new THREE.MeshStandardMaterial({ ...groundMaps(), roughness: 1 });
  // cemetery laid out in rows across the whole map, in patches, using instancing
  const slots = [];
  for (let gz = -MAP_R; gz <= MAP_R; gz += 3.4) {
    for (let gx = -MAP_R; gx <= MAP_R; gx += 2.3) {
      const x = gx + (rand() - 0.5) * 0.5, z = gz + (rand() - 0.5) * 0.6;
      const r = Math.hypot(x, z);
      if (r < 4.5 || r > MAP_R - 2) continue;
      if (fbm(x / 130 + 0.5, z / 130 + 0.5, 3, 3) < -0.05 || rand() > 0.62) continue;
      if (colliders.some((c) => Math.hypot(c.x - x, c.z - z) < c.r + 1.2)) continue;
      slots.push([x, z]);
    }
  }
  const counts = [0, 0, 0];
  const picks = slots.map(() => { const k = Math.floor(rand() * 3); counts[k]++; return k; });
  const graveInst = shapes.map((g, k) => {
    const m = new THREE.InstancedMesh(g, stoneMat, Math.max(1, counts[k]));
    m.castShadow = true; m.receiveShadow = true; m.count = 0;
    scene.add(m); return m;
  });
  const moundInst = new THREE.InstancedMesh(new THREE.SphereGeometry(1, 12, 6, 0, Math.PI * 2, 0, Math.PI / 2), graveMounds, slots.length);
  moundInst.receiveShadow = true;
  scene.add(moundInst);
  const tq = new THREE.Quaternion(), te = new THREE.Euler(), ts = new THREE.Vector3(), tp = new THREE.Vector3(), tm = new THREE.Matrix4();
  slots.forEach(([x, z], i) => {
    const k = picks[i];
    const s = 0.8 + rand() * 0.6;
    const gy = groundHeight(x, z);
    const yaw = (rand() - 0.5) * 0.35;
    te.set((rand() - 0.5) * 0.3, yaw, (rand() - 0.5) * 0.25);
    tm.compose(tp.set(x, gy - 0.05, z), tq.setFromEuler(te), ts.set(s, s, s));
    graveInst[k].setMatrixAt(graveInst[k].count++, tm);
    colliders.push({ type: 'cyl', x, z, r: 0.33 * s, h: 0.95 * s, kind: 'stone' });
    te.set(0, yaw, 0);
    tm.compose(tp.set(x + Math.sin(yaw) * 0.9 * s, gy - 0.02, z + Math.cos(yaw) * 0.9 * s), tq.setFromEuler(te), ts.set(0.45 * s, 0.12, 0.9 * s));
    moundInst.setMatrixAt(i, tm);
  });
  graveInst.forEach((m) => { m.instanceMatrix.needsUpdate = true; m.computeBoundingSphere(); });
  moundInst.computeBoundingSphere();

  // ---------- lantern post next to player ----------
  const woodMat = new THREE.MeshStandardMaterial({ ...woodMaps(), roughness: 1 });
  const ironMat = new THREE.MeshStandardMaterial({ ...metalMaps(), color: 0x444444, metalness: 0.9, roughness: 0.6 });
  const post = new THREE.Mesh(new THREE.BoxGeometry(0.1, 2.0, 0.1), woodMat);
  post.position.set(1.7, 1.0, 0.6); post.castShadow = true; scene.add(post);
  const arm = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.07, 0.07), woodMat);
  arm.position.set(1.5, 1.95, 0.6); scene.add(arm);
  const lantern = new THREE.Group();
  lantern.position.set(1.35, 1.72, 0.6);
  const cage = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.1, 0.22, 6, 1, true), ironMat);
  lantern.add(cage);
  const cap = new THREE.Mesh(new THREE.ConeGeometry(0.11, 0.1, 6), ironMat); cap.position.y = 0.16; lantern.add(cap);
  const glass = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.085, 0.2, 6), new THREE.MeshStandardMaterial({ color: 0xffb060, emissive: 0xff8a30, emissiveIntensity: 2.5, transparent: true, opacity: 0.85 }));
  lantern.add(glass);
  scene.add(lantern);
  const glow = new THREE.Sprite(new THREE.SpriteMaterial({ map: softSprite(64, 255, 160, 80), blending: THREE.AdditiveBlending, transparent: true, depthWrite: false, opacity: 0.6 }));
  glow.position.copy(lantern.position); glow.scale.setScalar(1.2); scene.add(glow);

  // ---------- boundary: old iron fence ----------
  {
    const n = Math.floor((Math.PI * 2 * (MAP_R + 1.5)) / 1.6);
    const postGeo = new THREE.CylinderGeometry(0.025, 0.025, 1.7, 5);
    postGeo.translate(0, 0.85, 0);
    const tip = new THREE.ConeGeometry(0.05, 0.16, 4); tip.translate(0, 1.76, 0);
    const pg = mergeGeometries([postGeo, tip]);
    const posts = new THREE.InstancedMesh(pg, ironMat, n);
    const m = new THREE.Matrix4();
    for (let i = 0; i < n; i++) {
      const a = (i / n) * Math.PI * 2, R = MAP_R + 1.5;
      const x = Math.cos(a) * R, z = Math.sin(a) * R;
      m.makeRotationZ((rand() - 0.5) * 0.12);
      m.setPosition(x, groundHeight(x, z) - 0.05, z);
      posts.setMatrixAt(i, m);
    }
    posts.castShadow = true;
    scene.add(posts);
    for (const h of [0.35, 1.45]) {
      const rail = new THREE.Mesh(new THREE.TorusGeometry(MAP_R + 1.5, 0.022, 4, 260), ironMat);
      rail.rotation.x = Math.PI / 2; rail.position.y = h + 0.03;
      scene.add(rail);
    }
  }

  // ---------- goal: the crypt ----------
  const crypt = new THREE.Group();
  {
    const add = (geo, mat, x, y, z, cast = true) => { const m = new THREE.Mesh(geo, mat); m.position.set(x, y, z); m.castShadow = cast; m.receiveShadow = true; crypt.add(m); return m; };
    const cryptStone = stoneMat.clone();
    for (const k of ['map', 'normalMap', 'roughnessMap']) { cryptStone[k] = stoneMat[k].clone(); cryptStone[k].repeat.set(2.5, 2.5); cryptStone[k].needsUpdate = true; }
    add(new THREE.BoxGeometry(4.6, 0.35, 5), cryptStone, 0, 0.1, 0);
    add(new THREE.BoxGeometry(0.6, 0.18, 1.2), cryptStone, 0, 0.12, 2.9);           // step
    add(new THREE.BoxGeometry(1.3, 2.8, 3.8), cryptStone, -1.3, 1.65, 0);           // left wall block
    add(new THREE.BoxGeometry(1.3, 2.8, 3.8), cryptStone, 1.3, 1.65, 0);            // right wall block
    add(new THREE.BoxGeometry(1.4, 0.8, 3.8), cryptStone, 0, 2.65, 0);              // lintel
    add(new THREE.BoxGeometry(1.4, 2.1, 0.3), cryptStone, 0, 1.3, -1.75);           // back
    // pediment roof
    const tri = new THREE.Shape();
    tri.moveTo(-2.1, 0); tri.lineTo(2.1, 0); tri.lineTo(0, 1.3); tri.lineTo(-2.1, 0);
    const roof = add(new THREE.ExtrudeGeometry(tri, { depth: 4.4, bevelEnabled: false }), cryptStone, 0, 3.05, -2.2);
    add(new THREE.BoxGeometry(4.5, 0.2, 4.6), cryptStone, 0, 3.0, 0);
    // columns
    for (const sx of [-1, 1]) {
      add(new THREE.CylinderGeometry(0.17, 0.2, 2.6, 14), cryptStone, sx * 1.75, 1.6, 2.15);
      add(new THREE.BoxGeometry(0.5, 0.2, 0.5), cryptStone, sx * 1.75, 2.9, 2.15);
      add(new THREE.BoxGeometry(0.5, 0.2, 0.5), cryptStone, sx * 1.75, 0.37, 2.15);
    }
    // stone cross on top
    add(new THREE.BoxGeometry(0.16, 1.0, 0.16), cryptStone, 0, 4.75, 0);
    add(new THREE.BoxGeometry(0.6, 0.16, 0.16), cryptStone, 0, 4.95, 0);
    // glowing doorway (light spilling from inside)
    const dc = document.createElement('canvas'); dc.width = 64; dc.height = 128;
    const dctx = dc.getContext('2d');
    const gr = dctx.createLinearGradient(0, 128, 0, 0);
    gr.addColorStop(0, '#8dffc0'); gr.addColorStop(0.35, '#2a9a6a'); gr.addColorStop(1, '#03140c');
    dctx.fillStyle = gr; dctx.fillRect(0, 0, 64, 128);
    const doorTex = new THREE.CanvasTexture(dc); doorTex.colorSpace = THREE.SRGBColorSpace;
    const door = new THREE.Mesh(new THREE.PlaneGeometry(1.15, 2.2), new THREE.MeshBasicMaterial({ map: doorTex, fog: false }));
    door.position.set(0, 1.35, 1.0); crypt.add(door);
    // open iron gate leaf
    const gate = new THREE.Group(); gate.position.set(-0.6, 0.3, 1.9); gate.rotation.y = -1.1;
    for (let i = 0; i < 6; i++) { const b = new THREE.Mesh(new THREE.CylinderGeometry(0.015, 0.015, 2.1, 4), ironMat); b.position.set(0.1 + i * 0.19, 1.05, 0); gate.add(b); }
    for (const h of [0.2, 1.9]) { const b = new THREE.Mesh(new THREE.BoxGeometry(1.1, 0.04, 0.03), ironMat); b.position.set(0.6, h, 0); gate.add(b); }
    crypt.add(gate);
    // torches
    crypt.userData.flames = [];
    const flameTex = softSprite(64, 255, 190, 110);
    for (const sx of [-1, 1]) {
      add(new THREE.CylinderGeometry(0.04, 0.05, 1.3, 6), ironMat, sx * 1.75, 0.95, 3.1);
      add(new THREE.CylinderGeometry(0.13, 0.06, 0.18, 8), ironMat, sx * 1.75, 1.65, 3.1);
      const f = new THREE.Sprite(new THREE.SpriteMaterial({ map: flameTex, blending: THREE.AdditiveBlending, transparent: true, depthWrite: false, color: 0xffa040 }));
      f.position.set(sx * 1.75, 1.95, 3.1); f.scale.set(0.45, 0.8, 1);
      crypt.add(f); crypt.userData.flames.push(f);
    }
    // eerie light from inside
    const gl = new THREE.PointLight(0x7dffb0, 14, 16, 1.6);
    gl.position.set(0, 1.4, 2.6); crypt.add(gl); crypt.userData.light = gl;
    // beacon beam visible through the fog from anywhere
    const beamMat = new THREE.ShaderMaterial({
      transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide, fog: false,
      uniforms: { time: { value: 0 } },
      vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }',
      fragmentShader: `varying vec2 vUv; uniform float time;
        void main(){
          float a = (1.0 - vUv.y) * (1.0 - vUv.y);
          float ripple = 0.75 + 0.25 * sin(vUv.y * 40.0 - time * 3.0 + vUv.x * 12.566);
          gl_FragColor = vec4(vec3(0.35, 1.0, 0.65) * a * ripple * 0.35, 1.0);
        }`,
    });
    const beam = new THREE.Mesh(new THREE.CylinderGeometry(0.9, 1.4, 70, 24, 1, true), beamMat);
    beam.geometry.translate(0, 35, 0);
    beam.position.set(0, 0, 0.5); beam.renderOrder = 5;
    crypt.add(beam); crypt.userData.beam = beamMat;
    void roof;
  }
  scene.add(crypt);
  const cryptCollider = { type: 'cyl', x: 0, z: 0, r: 2.5, h: 5, kind: 'stone' };
  colliders.push(cryptCollider);
  crypt.visible = false;
  const goal = {
    obj: crypt,
    collider: cryptCollider,
    trigger: new THREE.Vector3(),
    place(x, z, faceX, faceZ) {
      crypt.position.set(x, groundHeight(x, z), z);
      crypt.rotation.y = Math.atan2(faceX - x, faceZ - z);
      crypt.visible = true;
      cryptCollider.x = x; cryptCollider.z = z;
      this.trigger.set(x + Math.sin(crypt.rotation.y) * 3.3, 0, z + Math.cos(crypt.rotation.y) * 3.3);
      this.trigger.y = groundHeight(this.trigger.x, this.trigger.z);
    },
  };

  // ---------- ground mist ----------
  const mistTex = softSprite(128, 170, 185, 200, true);
  const mist = [];
  for (let i = 0; i < quality.mist; i++) {
    const m = new THREE.Sprite(new THREE.SpriteMaterial({ map: mistTex, transparent: true, depthWrite: false, opacity: 0.08 + rand() * 0.1, fog: true }));
    const a = rand() * Math.PI * 2, r = 4 + rand() * 40;
    m.position.set(Math.cos(a) * r, 0.3 + rand() * 0.8, Math.sin(a) * r);
    m.scale.set(6 + rand() * 8, 1.5 + rand() * 1.5, 1);
    m.userData.v = new THREE.Vector2((rand() - 0.5) * 0.4, (rand() - 0.5) * 0.4);
    scene.add(m); mist.push(m);
  }

  // ---------- update ----------
  let flashT = 0, nextFlash = 12 + Math.random() * 20;
  function update(dt, time, audio, player) {
    if (player) {
      moonLight.position.set(player.x - 24, 30, player.z - 40);
      moonLight.target.position.set(player.x, 0, player.z);
    }
    if (crypt.visible) {
      crypt.userData.beam.uniforms.time.value = time;
      crypt.userData.flames.forEach((f, i) => { const k = 0.85 + Math.sin(time * 13 + i * 2) * 0.1 + Math.random() * 0.1; f.scale.set(0.45 * k, 0.8 * k, 1); });
      crypt.userData.light.intensity = 13 + Math.sin(time * 2.2) * 3;
    }
    // lantern flicker
    lanternLight.intensity = 8 + Math.sin(time * 17) * 0.6 + Math.sin(time * 7.3) * 0.8 + (Math.random() - 0.5) * 0.8;
    glow.material.opacity = 0.5 + (lanternLight.intensity - 8) * 0.05;
    lantern.rotation.z = Math.sin(time * 1.3) * 0.05;
    // mist drift
    for (const m of mist) {
      m.position.x += m.userData.v.x * dt; m.position.z += m.userData.v.y * dt;
      const px = player ? player.x : 0, pz = player ? player.z : 0;
      const dx = m.position.x - px, dz = m.position.z - pz;
      if (Math.hypot(dx, dz) > 42) { m.position.x = px - dx * 0.9; m.position.z = pz - dz * 0.9; }
    }
    // lightning
    nextFlash -= dt;
    if (nextFlash <= 0) {
      flashT = 0.6; nextFlash = 15 + Math.random() * 25;
      const dist = 1 + Math.random() * 2;
      setTimeout(() => audio && audio.ctx && audio.thunder(dist), 300 + dist * 900);
    }
    if (flashT > 0) {
      flashT -= dt;
      const f = flashT > 0 ? (Math.sin(flashT * 40) > 0 ? 1 : 0.3) * (flashT / 0.6) : 0;
      skyMat.uniforms.flash.value = f;
      hemi.intensity = 0.8 + f * 2.5;
    }
  }

  return { colliders, groundHeight, update, moonLight, goal };
}
