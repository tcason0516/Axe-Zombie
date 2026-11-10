# Axe Zombie 🪓🧟

A first-person zombie survival game for Android. You stand in a moonlit graveyard while the dead close in from every direction. Throw axes at them, and remember that **only a headshot kills a zombie outright.**

## Install on your phone

1. Open the [**Releases**](../../releases/latest) page on your Android phone.
2. Download **AxeZombie.apk** and open it.
3. If Android asks, allow your browser or Files app to "install unknown apps".

A new APK is built automatically by GitHub Actions every time you push to `main`.

## How to play

| Action | Control |
|---|---|
| Look around | Drag anywhere on the screen |
| Throw an axe | Tap the screen or the axe button (bottom right) |
| Pause | ❚❚ button or the Android back button |

- **Headshot**: the zombie dies instantly and its head comes off. Back-to-back headshots raise a score multiplier up to **x5**.
- **Body hit**: the zombie staggers. It takes three body hits to bring one down, and a body hit resets your combo.
- You carry **5 axes**, and a new one appears every second.
- Red arrows at the screen edge point to zombies close behind you or to your side.
- **Runners** start showing up from wave 3.
- Clearing a wave restores 20 health.

Headphones are recommended because every zombie groan and footstep is positioned in 3D.

## Tech

- **3D engine:** [three.js](https://threejs.org), running in a full-screen hardware-accelerated Android WebView (`app/src/main/java/.../MainActivity.java`).
- **Graphics:** All graphics are generated in code when the game loads. Textures for rotting skin, torn bloody clothes, bark, mossy stone, dirt, wood and scratched steel are built from fractal noise, with color, normal and roughness maps. The scene uses physically based materials, ACES tone mapping, moonlight shadows, a flickering lantern, a head-lamp, ground mist, fog, lightning and blood particles with ground decals.
- **Audio:** All sound is synthesized live with the Web Audio API and spatialized with HRTF:
  - wind gusts, a low ominous drone, crickets, owls, crows and thunder
  - formant-synthesized zombie groans, snarls, runner screams, pain and death cries, and shuffling footsteps
  - the axe whoosh and spinning whir, a bone-crunching headshot with blood spray, a body thud, and thunks into wood, ground and stone
  - bites, player grunts, a low-health heartbeat, a wave bell and a game-over drone

## Project layout

```
web/            game source (ES modules) + esbuild bundler
  src/main.js     game loop, throwing, hits, waves, HUD
  src/zombie.js   procedural zombie model, animation, decapitation
  src/world.js    graveyard, trees, gravestones, lighting, weather
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

To try the game in a desktop browser, open `app/src/main/assets/index.html`. Drag with the mouse to look, and click or press Space to throw.

The APK is signed with `app/axezombie.keystore` (password `axezombie`), so each new build installs over the last one. If you ever publish to the Play Store, create a private keystore first.
