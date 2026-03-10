# Implement a Spinal Case Converter

In this lab, you will build a string manipulation utility that converts various naming conventions into **Spinal Case** (also known as kebab-case). This is a standard format for URLs and CSS class names where words are lowercase and joined by hyphens.

## Description

The challenge of spinal case conversion is identifying the boundaries between words. Words might be separated by spaces, underscores, or simply by a change in capitalization (**PascalCase** or **camelCase**). Your function needs to recognize these different "break points," insert a hyphen, and normalize the casing.

**Example:**

- **Input:** `"The_Andy_Griffith_Show"` → **Output:** `"the-andy-griffith-show"`
- **Input:** `"Teletubbies say Eh-oh"` → **Output:** `"teletubbies-say-eh-oh"`
- **Input:** `"AllThe-small Things"` → **Output:** `"all-the-small-things"`

## Objective

Fulfill the user stories below to create a robust converter that handles spaces, underscores, and case changes simultaneously.

## User Stories

1. **Function Definition**: Create a function named `spinalCase` that accepts one string as an argument.
2. **Handle Word Boundaries**:
   - Replace underscores (`_`) and spaces (` `) with hyphens.
   - Identify places where a lowercase letter is followed by an uppercase letter (e.g., `atL`) and insert a space or hyphen between them before final processing.
3. **Normalization**:
   - Ensure all characters in the final string are **lowercase**.
   - Ensure all words are separated by exactly one **hyphen**.
4. **Return Value**: The function should return the newly formatted spinal-case string.

## Logic Visualization

| Input String             | Step 1: Handle Case/Symbols | Step 2: Lowercase & Join | Result                   |
| :----------------------- | :-------------------------- | :----------------------- | :----------------------- |
| `This Is Spinal Tap`     | `This Is Spinal Tap`        | `this-is-spinal-tap`     | `this-is-spinal-tap`     |
| `thisIsSpinalTap`        | `this Is Spinal Tap`        | `this-is-spinal-tap`     | `this-is-spinal-tap`     |
| `The_Andy_Griffith_Show` | `The Andy Griffith Show`    | `the-andy-griffith-show` | `the-andy-griffith-show` |

## Tech Stack

`JavaScript` `Regular Expressions (Regex)` `String.replace()` `String.toLowerCase()` `String.split()` `Array.join()`
