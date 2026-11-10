// Night-time graveyard environment.
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { groundMaps, barkMaps, stoneMaps, softSprite, moonTexture, fbm, rand, srand, woodMaps, metalMaps } from './textures.js';

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
    gp.setY(i, h + (r > 70 ? (r - 70) * 0.08 : 0));
  }
  groundGeo.computeVertexNormals();
  const ground = new THREE.Mesh(groundGeo, new THREE.MeshStandardMaterial({ map: gm.map, normalMap: gm.normalMap, roughness: 0.96, normalScale: new THREE.Vector2(0.7, 0.7) }));
  ground.receiveShadow = true;
  scene.add(ground);
  const groundHeight = (x, z) => {
    const r = Math.hypot(x, z);
    return fbm(x / 240 + 0.5, z / 240 + 0.5, 6, 4) * 1.2 * Math.min(1, Math.max(0, (r - 8) / 25)) + (r > 70 ? (r - 70) * 0.08 : 0);
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
      const a = rand() * Math.PI * 2, r = 1.5 + Math.pow(rand(), 0.7) * 45;
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
    const a = rand() * Math.PI * 2, r = 11 + Math.pow(rand(), 0.8) * 50;
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
  for (let i = 0; i < quality.graves; i++) {
    const row = Math.floor(i / 8), col = i % 8;
    const ring = 7 + row * 3.2 + rand() * 1.2;
    const a = (col / 8) * Math.PI * 2 + row * 0.4 + (rand() - 0.5) * 0.3;
    const x = Math.cos(a) * ring, z = Math.sin(a) * ring;
    const g = new THREE.Mesh(shapes[Math.floor(rand() * shapes.length)], stoneMat);
    const s = 0.8 + rand() * 0.6;
    g.scale.setScalar(s);
    const gy = groundHeight(x, z);
    g.position.set(x, gy - 0.05, z);
    g.rotation.set((rand() - 0.5) * 0.3, -a + Math.PI / 2 + (rand() - 0.5) * 0.4, (rand() - 0.5) * 0.25);
    g.castShadow = true; g.receiveShadow = true;
    scene.add(g);
    colliders.push({ type: 'cyl', x, z, r: 0.33 * s, h: 0.95 * s, kind: 'stone', obj: g });
    // dirt mound
    const mound = new THREE.Mesh(new THREE.SphereGeometry(1, 12, 6, 0, Math.PI * 2, 0, Math.PI / 2), graveMounds);
    mound.scale.set(0.45 * s, 0.12, 0.9 * s);
    const dir = new THREE.Vector3(Math.cos(a), 0, Math.sin(a));
    mound.position.set(x + dir.x * 0.9 * s, gy - 0.02, z + dir.z * 0.9 * s);
    mound.rotation.y = -a + Math.PI / 2;
    mound.receiveShadow = true;
    scene.add(mound);
  }

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
  function update(dt, time, audio) {
    // lantern flicker
    lanternLight.intensity = 8 + Math.sin(time * 17) * 0.6 + Math.sin(time * 7.3) * 0.8 + (Math.random() - 0.5) * 0.8;
    glow.material.opacity = 0.5 + (lanternLight.intensity - 8) * 0.05;
    lantern.rotation.z = Math.sin(time * 1.3) * 0.05;
    // mist drift
    for (const m of mist) {
      m.position.x += m.userData.v.x * dt; m.position.z += m.userData.v.y * dt;
      const r = Math.hypot(m.position.x, m.position.z);
      if (r > 45) { m.position.x *= -0.9; m.position.z *= -0.9; }
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

  return { colliders, groundHeight, update, moonLight };
}
