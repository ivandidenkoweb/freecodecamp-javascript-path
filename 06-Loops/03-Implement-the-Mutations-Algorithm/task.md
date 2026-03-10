# Implement the Mutations Algorithm

In this lab, you will create a function that checks if one string contains all the letters of another string. This exercise focuses on string-to-array conversion, case-insensitive comparison, and logical iteration.

## Description

The goal is to determine if all characters in the second string of an array are present at least once in the first string of the array. The comparison must be **case-insensitive**.

**Example:** `["hello", "Hello"]` → `true` (all letters of "Hello" exist in "hello").

## Objective

Fulfill the user stories below and ensure the function handles mixed casing and different string lengths correctly.

## User Stories

1. **Function Definition**: Create a function named `mutation` that takes an array (`arr`) as its argument.
2. **Preprocessing**:
   - Access the first and second elements of the array.
   - Convert both strings to lowercase (using `.toLowerCase()`) to ensure the check is case-insensitive.
3. **Logic Implementation**:
   - Iterate through every letter of the **second** string.
   - Check if each letter exists within the **first** string (using `.indexOf()` or `.includes()`).
   - If any letter from the second string is **not** found in the first string, return `false`.
4. **Return Value**:
   - Return `true` if every letter is accounted for.
   - Return `false` otherwise.

## Logic Visualization

| Input Array         | Target Letters to Check | Found in First String? | Result  |
| :------------------ | :---------------------- | :--------------------- | :------ |
| `["hello", "hey"]`  | `h`, `e`, `y`           | `y` is missing         | `false` |
| `["Alien", "line"]` | `l`, `i`, `n`, `e`      | All found              | `true`  |
| `["floor", "for"]`  | `f`, `o`, `r`           | All found              | `true`  |
| `["voodoo", "no"]`  | `n`, `o`                | `n` is missing         | `false` |

## Tech Stack

`JavaScript` `Array Indexing` `String.toLowerCase()` `Loops (for)` `String.indexOf() / String.includes()`
