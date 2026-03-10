# Implement a Value Remover Function

In this lab, you will build a utility function known as a "destroyer." This function is designed to "seek and destroy" specific values within a given array based on arguments provided dynamically.

## Description

The function receives an array as the first argument, followed by a variable number of additional arguments. Your goal is to return a version of the initial array that has been "cleaned" of any values matching the subsequent arguments.

**Example:** `destroyer([1, 2, 3, 1, 2, 3], 2, 3)`
The values `2` and `3` are targets.
**Result:** `[1, 1]`

## Objective

Fulfill the user stories below to handle an indeterminate number of arguments and return a filtered array.

## User Stories

1. **Function Definition**: Create a function named `destroyer`.
2. **Handle Variable Arguments**:
   - The function must accept an initial array plus any number of additional arguments.
   - **Tip**: Use the **Rest Parameter** syntax (`...args`) or the `arguments` object to capture the values to be removed.
3. **Filtering Logic**:
   - Identify all arguments passed _after_ the initial array.
   - Filter the initial array to keep only the elements that are **not** present in that list of target values.
   - **Hint**: Use the `.includes()` method inside a `.filter()` callback.
4. **Return Value**: Return a new array containing the remaining elements.

## Logic Visualization

| Initial Array               | Values to Remove | Comparison              | Result          |
| :-------------------------- | :--------------- | :---------------------- | :-------------- |
| `["tree", "hamburger", 53]` | `"tree", 53`     | Keep only `"hamburger"` | `["hamburger"]` |
| `[1, 2, 3, 5, 1, 2, 3]`     | `2, 3`           | Keep only `1` and `5`   | `[1, 5, 1]`     |
| `[3, 5, 1, 2, 2]`           | `2, 3, 5`        | All values match        | `[1]`           |

## Tech Stack

`JavaScript` `Rest Parameters (...)` `Array.filter()` `Array.includes()` `Higher-Order Functions`