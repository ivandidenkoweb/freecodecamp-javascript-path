# Build a Real Time Character Counter

In this lab, you will develop a dynamic character counter for a text area. This project emphasizes real-time DOM updates, input handling, and implementing custom logic constraints using JavaScript rather than relying solely on HTML attributes.

## Description

The goal is to monitor a `textarea` and provide immediate feedback to the user regarding how many characters they have typed out of a maximum of 50. You will also implement a "hard limit" where the software prevents more than 50 characters from being stored or displayed.

## Objective

Fulfill the user stories below to create a responsive interface that tracks input length and changes style when the limit is reached.

## User Stories

### 1. HTML Structure

- Create a `<textarea>` element with the ID `text-input`.
- Create a `<p>` element with the ID `char-count`.
- **Initial State**: The paragraph should display: `Character Count: 0/50`.

### 2. Real-Time Tracking

- Attach an event listener to the `textarea` (e.g., `input` or `keyup`).
- As the user types, calculate the length of the string currently inside the `textarea`.
- Update the text inside `#char-count` to reflect the current count in the format: `Character Count: [count]/50`.

### 3. Logic & Constraints

- **The 50-Character Limit**: If the user attempts to enter more than 50 characters:
  - Trim the string to exactly 50 characters using `.substring(0, 50)` or `.slice(0, 50)`.
  - Update the `textarea` value so the extra characters disappear.
- **Visual Feedback**: When the count reaches exactly 50:
  - Change the color of the `#char-count` text to **red** using CSS or inline styles (`element.style.color`).

## Logic Visualization

| User Input                      | String Length | Counter Text             | Counter Color |
| :------------------------------ | :------------ | :----------------------- | :------------ |
| `hello coder`                   | 11            | `Character Count: 11/50` | Default       |
| `i am a programmer`             | 17            | `Character Count: 17/50` | Default       |
| `I am learning a...` (50 chars) | 50            | `Character Count: 50/50` | **Red**       |
| (Typed 51st char)               | 50 (Trimmed)  | `Character Count: 50/50` | **Red**       |

## Tech Stack

`HTML5` `CSS3` `JavaScript` `DOM Events` `String.length` `String.substring()`