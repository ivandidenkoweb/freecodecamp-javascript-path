# Build a Lunch Picker Program

In this lab, you will build a utility program to manage lunch options using an array. You will practice fundamental array operations including adding, removing, and randomly selecting elements.

## Objective

Fulfill the user stories below to create a complete lunch management system. You will implement functions that modify an array and provide console feedback for each action.

## User Stories

### 1. Data Structure

- Create a variable named `lunches` and initialize it as an **empty array**.

### 2. Adding Items

- **`addLunchToEnd(array, string)`**:
  - Add the string to the **end** of the array.
  - Log: `"[Lunch Item] added to the end of the lunch menu."`
  - Return the updated array.
- **`addLunchToStart(array, string)`**:
  - Add the string to the **start** of the array.
  - Log: `"[Lunch Item] added to the start of the lunch menu."`
  - Return the updated array.

### 3. Removing Items

- **`removeLastLunch(array)`**:
  - Remove the **last** element.
  - If successful, log: `"[Lunch Item] removed from the end of the lunch menu."`
  - If the array is empty, log: `"No lunches to remove."`
  - Return the updated array.
- **`removeFirstLunch(array)`**:
  - Remove the **first** element.
  - If successful, log: `"[Lunch Item] removed from the start of the lunch menu."`
  - If the array is empty, log: `"No lunches to remove."`
  - Return the updated array.

### 4. Selection & Display

- **`getRandomLunch(array)`**:
  - Select a **random** element from the array.
  - If successful, log: `"Randomly selected lunch: [Lunch Item]"`
  - If the array is empty, log: `"No lunches available."`
- **`showLunchMenu(array)`**:
  - If the array has items, log: `"Menu items: [Item1], [Item2], ..."` (in order).
  - If the array is empty, log: `"The menu is empty."`

## Logic Reference: Array Methods

| Action            | Method to Use |
| :---------------- | :------------ |
| Add to end        | `.push()`     |
| Add to start      | `.unshift()`  |
| Remove from end   | `.pop()`      |
| Remove from start | `.shift()`    |
| Join for display  | `.join(", ")` |

## Tech Stack

`JavaScript` `Arrays` `Functions` `Math.random()` `Template Literals`
