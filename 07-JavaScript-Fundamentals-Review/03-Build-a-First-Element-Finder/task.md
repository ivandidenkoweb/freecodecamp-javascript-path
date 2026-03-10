# Build a First Element Finder

In this lab, you will implement a function that acts as a search utility. It iterates through an array and uses a provided "truth test" function to find the first element that satisfies a specific condition.

## Description

The goal is to evaluate elements in an array one by one until you find one that returns `true` when passed into a callback function. This is a manual implementation of the logic found in the built-in `.find()` method.

**Example:** Finding the first even number in `[1, 3, 5, 8, 9]` using `num => num % 2 === 0` would return `8`.

## Objective

Fulfill the user stories below and ensure the function handles cases where no elements meet the criteria.

## User Stories

1. **Function Definition**: Create a function named `findElement` that accepts two arguments:
   - `arr`: The array to iterate through.
   - `func`: The test function (callback) that returns a boolean.
2. **Logic Implementation**:
   - Loop through each element of the array `arr`.
   - For each element, pass it as an argument into the function `func`.
   - If `func(element)` evaluates to `true`, immediately return that element.
3. **Return Value**:
   - Return the first element that passes the test.
   - If the loop completes and no elements have passed the test, return `undefined`.

## Logic Visualization

| Input Array        | Truth Test (func)   | Step-by-Step Check           | Return Value |
| :----------------- | :------------------ | :--------------------------- | :----------- |
| `[1, 2, 3]`        | `x => x > 1`        | `1 > 1` (F), `2 > 1` (T)     | `2`          |
| `["apple", "bat"]` | `s => s.length > 5` | `"apple"` (F), `"bat"` (F)   | `undefined`  |
| `[10, 20, 30]`     | `x => x % 3 === 0`  | `10` (F), `20` (F), `30` (T) | `30`         |

## Tech Stack

`JavaScript` `Higher-Order Functions` `Loops (for)` `Callback Functions` `Conditional Logic`
