# Build a Theme Switcher

In this lab, you will build an accessible theme switcher. This project emphasizes **ARIA (Accessible Rich Internet Applications)** attributes to ensure that users with assistive technologies can navigate your dropdown menu as easily as anyone else.

## Description

The goal is to create a "dropdown" menu that allows users to toggle the visual state of the entire page. Beyond just changing colors, you will use an `aria-live` region to announce the change to screen readers, ensuring a truly inclusive user experience.

## Objective

Fulfill the user stories below to create a menu that toggles visibility, updates accessibility states, and applies theme-specific classes to the body.

## User Stories

### 1. HTML Structure & ARIA

- **The Toggle Button**: Create a `<button>` with the text "Switch Theme".
  - Required IDs/Attributes: `id="theme-switcher-button"`, `aria-haspopup="true"`, `aria-expanded="false"`, and `aria-controls="theme-dropdown"`.
- **The Menu**: Create a `<ul>` with the ID `theme-dropdown`.
  - Required IDs/Attributes: `role="menu"`, `aria-labelledby="theme-switcher-button"`, and the `hidden` attribute.
- **The Menu Items**: Include at least two `<li>` elements.
  - Each must have `role="menuitem"`.
  - IDs must follow the pattern `theme-[name]` (e.g., `theme-dark`, `theme-neon`).
- **The Status Area**: Include an element with `aria-live="polite"` to display theme messages.

### 2. The Data Model

Create a `themes` array containing objects. Each object needs:

- `name`: Should match the theme name used in your `li` IDs.
- `message`: A custom string that will appear when the theme is activated.

### 3. JavaScript Interaction

- **Toggling the Menu**:
  - Clicking the button should toggle the `hidden` attribute on the `<ul>`.
  - Update `aria-expanded` to `"true"` when the menu is open and `"false"` when closed.
- **Switching Themes**:
  - When a theme `li` is clicked:
    1. Remove any previous theme classes from the `document.body`.
    2. Add the new class (e.g., `theme-dark`) to the `body`.
    3. Find the matching message in your `themes` array and update the `aria-live` element's text.
    4. Close the menu.

## Logic Visualization

| Action        | `aria-expanded` | `hidden` Attribute | Body Class    | Live Region Text       |
| :------------ | :-------------- | :----------------- | :------------ | :--------------------- |
| Initial State | `false`         | Present            | (none)        | (empty)                |
| Click Button  | `true`          | Removed            | (none)        | (empty)                |
| Click "Dark"  | `false`         | Present            | `.theme-dark` | "Dark mode activated!" |

## Tech Stack

`HTML5 ARIA` `CSS Variables` `JavaScript DOM` `Element.classList` `Event Listeners`
