# Axe Zombie 🪓🧟

A first-person zombie survival game for Android. Each level, you have to find a safe house hidden somewhere in an abandoned suburban neighborhood at night, then hold its door while you break in. Throw axes at the dead, and remember that **only a headshot kills a zombie outright.**

## Install on your phone

1. Open the [**Releases**](../../releases/latest) page on your Android phone.
2. Download **AxeZombie.apk** and open it.
3. If Android asks, allow your browser or Files app to "install unknown apps".

A new APK is built automatically by GitHub Actions every time you push to `main`.

## How to play

| Action | Control |
|---|---|
| Move | Left joystick (it appears wherever your left thumb lands; push all the way to run) |
| Look around | Right joystick, or drag anywhere on the screen |
| Throw an axe | Axe button, or tap the screen |
| Pause | ❚❚ button or the Android back button |
| Desktop | WASD to move, Shift to run, drag the mouse or use the arrow keys to look, Space to throw |

**The goal:** each level, a safe house is chosen somewhere in the neighborhood. Houses always block your view of it from where you start. The green arrow at the top points straight at it, but streets, houses, fences and wrecked cars are in the way, so you have to find a route. When you get close, look for the green porch light, the glowing door and the spray-painted SAFE sign.

**Getting in:** stand in the green ring at the door until the bar fills (about 5 seconds on level 1, longer on later levels). The pounding brings every zombie nearby. If you leave the ring, progress slowly drains. Once you're inside, the level ends: you get a score bonus, 35 health back, and the next level starts from that house.

**Why you can't just run for it:**
- Running uses stamina (the yellow bar). When it runs out you can only walk until it recovers.
- Zombies lunge when they get within a few meters.
- Runners show up from level 2, and they're faster than you are at full sprint.
- A pack of zombies hangs around every safe house.
- New zombies spawn out of sight, mostly between you and the goal.
- Zombies find their way to you around houses and fences.

- **Headshot**: the zombie dies instantly and its head comes off. Back-to-back headshots raise a score multiplier up to **x5**.
- **Body hit**: the zombie staggers. It takes three body hits to bring one down, and a body hit resets your combo.
- You carry **5 axes**, and a new one appears every second.
- Red arrows at the screen edge point to zombies close behind you or to your side.

Headphones are recommended because every zombie groan and footstep is positioned in 3D.

## Tech

- **3D engine:** [three.js](https://threejs.org), running in a full-screen hardware-accelerated Android WebView (`app/src/main/java/.../MainActivity.java`).
- **Graphics:** All graphics are generated in code when the game loads. Textures for rotting skin, torn bloody clothes, house siding, roof shingles, brick, asphalt, concrete, lawns, wooden planks, bark and scratched steel are built from fractal noise, with color, normal and roughness maps. The scene uses physically based materials, ACES tone mapping, moonlight shadows, sodium streetlights (some flickering or broken), blinking hazard lights on abandoned cars, a head-lamp, ground mist, fog, lightning and blood particles with ground decals.
- **Audio:** All sound is synthesized live with the Web Audio API and spatialized with HRTF:
  - wind gusts, a low ominous drone, crickets, owls, crows and thunder
  - formant-synthesized zombie groans, snarls, runner screams, pain and death cries, and shuffling footsteps
  - the axe whoosh and spinning whir, a bone-crunching headshot with blood spray, a body thud, and thunks into wood, ground and stone
  - bites, player grunts, your own footsteps, a ghostly hum from the safe house, pounding on its door, heavy breathing when you're out of stamina, a level-start bell, a level-complete chord, a low-health heartbeat and a game-over drone

## Project layout

```
web/            game source (ES modules) + esbuild bundler
  src/main.js     game loop, movement, joysticks, throwing, hits, levels, HUD
  src/zombie.js   procedural zombie model, animation, decapitation
  src/world.js    neighborhood generator, collision, pathfinding, safe house, lighting, weather
  src/audio.js    synthesized 3D audio engine
  src/textures.js procedural texture generator
app/            Android app (WebView shell); bundled game lives in app/src/main/assets
.github/workflows/build.yml   CI: bundles the game, builds + releases the APK
```

## Building locally

```bash
cd web && npm install && npm run build   # bundles into app/src/main/assets
cd .. && ./gradlew assembleRelease       # needs the Android SDK (or open in Android Studio)
```

To try the game in a desktop browser, open `app/src/main/assets/index.html`. Use WASD to move, drag to look, and Space to throw.

The APK is signed with `app/axezombie.keystore` (password `axezombie`), so each new build installs over the last one. If you ever publish to the Play Store, create a private keystore first.
