# Axe Zombie 🪓🧟

A first-person zombie survival game for Android. Each level, you have to fight your way across a moonlit graveyard to a glowing crypt while the dead close in. Throw axes at them, and remember that **only a headshot kills a zombie outright.**

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

**The goal:** every level hides a crypt somewhere in the graveyard. Follow the green arrow, the distance counter, the green light beam in the sky and the ghostly hum to find it. Reach its doorway to clear the level, earn bonus points and get 30 health back. Each level puts the crypt farther away and sends more zombies, and more of them, from wave 3 on, are fast runners. Most zombies spawn between you and the crypt, so you have to fight through them.

- **Headshot**: the zombie dies instantly and its head comes off. Back-to-back headshots raise a score multiplier up to **x5**.
- **Body hit**: the zombie staggers. It takes three body hits to bring one down, and a body hit resets your combo.
- You carry **5 axes**, and a new one appears every second.
- Red arrows at the screen edge point to zombies close behind you or to your side.
- **Runners** start showing up from level 3, and they're as fast as you are when running.
- Gravestones, trees and the crypt block your path, and an iron fence marks the edge of the graveyard.

Headphones are recommended because every zombie groan and footstep is positioned in 3D.

## Tech

- **3D engine:** [three.js](https://threejs.org), running in a full-screen hardware-accelerated Android WebView (`app/src/main/java/.../MainActivity.java`).
- **Graphics:** All graphics are generated in code when the game loads. Textures for rotting skin, torn bloody clothes, bark, mossy stone, dirt, wood and scratched steel are built from fractal noise, with color, normal and roughness maps. The scene uses physically based materials, ACES tone mapping, moonlight shadows, a flickering lantern, a head-lamp, ground mist, fog, lightning and blood particles with ground decals.
- **Audio:** All sound is synthesized live with the Web Audio API and spatialized with HRTF:
  - wind gusts, a low ominous drone, crickets, owls, crows and thunder
  - formant-synthesized zombie groans, snarls, runner screams, pain and death cries, and shuffling footsteps
  - the axe whoosh and spinning whir, a bone-crunching headshot with blood spray, a body thud, and thunks into wood, ground and stone
  - bites, player grunts, your own footsteps, a ghostly hum from the crypt, a level-start bell, a level-complete chord, a low-health heartbeat and a game-over drone

## Project layout

```
web/            game source (ES modules) + esbuild bundler
  src/main.js     game loop, movement, joysticks, throwing, hits, levels, HUD
  src/zombie.js   procedural zombie model, animation, decapitation
  src/world.js    graveyard, trees, gravestones, goal crypt, fence, lighting, weather
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
