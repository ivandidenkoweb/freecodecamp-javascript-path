# Build a Favorite Icon Toggler

In this lab, you will build a dynamic user interface component common in social media and e-commerce apps: a "favorite" or "like" button. You will practice DOM manipulation, event listening, and CSS class toggling.

## Description

The goal is to create a list of items where each item has an interactive heart icon. Clicking the icon should provide immediate visual feedback by changing the heart from an empty outline to a solid shape and applying specific styles.

## Objective

Fulfill the user stories below to create a functional list where each icon maintains its own state independently.

## User Stories

### 1. HTML Structure

- Create an unordered list (`<ul>`) with the class `item-list`.
- Include **three** list items (`<li>`).
- Each item should contain:
  - The name of the item (text).
  - A `<button>` element with the class `favorite-icon`.
  - The initial content of the button must be the HTML entity `&#9825;` (♡).

### 2. CSS Styling

- Create a class selector for `.filled`.
- Inside this class, set CSS properties to change the button's appearance (e.g., `color: red;` or `transform: scale(1.2);`).

### 3. JavaScript Interaction

- Add a click event listener to the buttons.
- When a button is clicked:
  - **Toggle Class**: Add the `filled` class if it's missing; remove it if it's already there.
  - **Toggle Icon**:
    - If the button now has the `filled` class, change its text content to `&#10084;` (❤).
    - If it does not have the `filled` class, change it back to `&#9825;` (♡).

## Logic Visualization

| Action       | Class State | Heart Symbol | Result          |
| :----------- | :---------- | :----------- | :-------------- |
| Initial Load | (None)      | `&#9825;`    | Empty Heart     |
| First Click  | `.filled`   | `&#10084;`   | Red/Solid Heart |
| Second Click | (Removed)   | `&#9825;`    | Empty Heart     |

## Tech Stack

`HTML5` `CSS3` `JavaScript DOM` `addEventListener` `classList.toggle()` `HTML Entities`
