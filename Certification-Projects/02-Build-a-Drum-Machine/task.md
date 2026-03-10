# Build a Drum Machine

In this lab, you will build an interactive Drum Machine. This project combines HTML5 multimedia elements with JavaScript event handling for both mouse clicks and keyboard inputs. You will practice managing state to update a display and controlling audio playback programmatically.

## Description

A drum machine allows users to trigger short audio samples (clips) by interacting with a set of pads. Each pad is mapped to a specific key on the keyboard ($Q, W, E, A, S, D, Z, X, C$). Your goal is to ensure that whether a user clicks a button or presses a key, the correct sound plays and a description of that sound appears on the screen.

## Objective

Fulfill the user stories below to create a responsive, accessible instrument that provides both auditory and visual feedback.

## User Stories

### 1. HTML Structure

- **The Container**: Wrap everything in a `div` with `id="drum-machine"`.
- **The Pads**: Inside a `div` with `id="pad-bank"`, create **nine** clickable elements with the class `drum-pad`.
  - Each pad needs a unique `id` that describes its sound (e.g., `id="heater-1"`).
  - The inner text of each pad must be one of the following keys: **Q, W, E, A, S, D, Z, X, C**.
- **The Audio**: Each `.drum-pad` must contain an `<audio>` element with:
  - `class="clip"`
  - `id` matching the pad's inner text (e.g., `id="Q"`).
  - `src` pointing to an audio file.
- **The Display**: Include a `<p>` element with `id="display"` to show the name of the sound being played.

### 2. Audio Interaction

- **Click Trigger**: When a `.drum-pad` is clicked, its child `<audio>` element should play.
- **Keyboard Trigger**: When the corresponding key is pressed (e.g., the 'Q' key), the drum pad containing "Q" should trigger its audio.
  - **Tip**: Use the `keydown` event listener and check the `event.key` or `event.keyCode`.

### 3. Display Logic

- When a sound is triggered, update the text inside `#display` with a unique string describing the clip (e.g., "Heater 1", "Kick-n'-Hat", "Clap").

## Audio Assets

You can use these samples from FreeCodeCamp:
`https://cdn.freecodecamp.org/curriculum/drum/[fileName]`

| Key   | Sample Name | File Name        |
| :---- | :---------- | :--------------- |
| **Q** | Heater 1    | `Heater-1.mp3`   |
| **W** | Heater 2    | `Heater-2.mp3`   |
| **E** | Heater 3    | `Heater-3.mp3`   |
| **A** | Heater 4    | `Heater-4_1.mp3` |
| **S** | Clap        | `Heater-6.mp3`   |
| **D** | Open-HH     | `Dsc_Oh.mp3`     |
| **Z** | Kick-n'-Hat | `Kick_n_Hat.mp3` |
| **X** | Kick        | `RP4_KICK_1.mp3` |
| **C** | Closed-HH   | `Cev_H2.mp3`     |

## Tech Stack

`HTML5 Audio` `JavaScript Events` `DOM Manipulation` `Keyboard Event Handling`