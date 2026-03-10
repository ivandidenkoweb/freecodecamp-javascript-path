# Build a Range of Numbers Generator

In this lab, you will build a `rangeOfNumbers` function that generates an array of numbers within a specified range. This project focuses on **Recursive Thinking** and **Functional Programming**, requiring you to solve the problem without using any iterative loops or higher-order array methods.

## Description

A range generator creates a sequence of integers starting from a specific point and ending at another. While this is typically done with a `for` loop, recursion allows you to build the array by breaking the range into smaller sub-problems. You will practice managing the base case (where the range is a single number) and the recursive step (where the range is expanded).

## Objective

Fulfill the user stories below to create a recursive function that generates an inclusive array of integers from `startNum` to `endNum`.

## User Stories

### 1. Function Definition

- **The Function**: Create a function named `rangeOfNumbers`.
- **Parameters**: The function should take two parameters: `startNum` and `endNum`.
- **Constraints**: You can assume that `startNum` will always be less than or equal to `endNum`.

### 2. Base Case Logic

- **Equality Check**: The function should handle the base case where `startNum` equals `endNum`.
- **Base Return**: In this case, the function must return an array containing just that single number (e.g., `rangeOfNumbers(5, 5)` returns `[5]`).

### 3. Recursive Requirements

- **No Loops**: You must **not** use any loop syntax (`for`, `while`) or higher-order functions (`forEach`, `map`, `filter`, `reduce`).
- **Self-Invocation**: The function must use recursion by calling itself.
- **Building the Array**: For the recursive case, the function should call itself with modified parameters (e.g., incrementing `startNum` or decrementing `endNum`) to build the array, then add the current number to the result.

### 4. State Management

- **Independence**: The function should not rely on global variables to cache or build the array.
- **Encapsulation**: Each call to the function must produce its own independent result array.
- **Inclusive Range**: The returned array must be inclusive of both the `startNum` and the `endNum`.

## Logic Visualization

| Input                  | Logic Step                                 | Expected Return |
| :--------------------- | :----------------------------------------- | :-------------- |
| `rangeOfNumbers(5, 5)` | `startNum === endNum`                      | `[5]`           |
| `rangeOfNumbers(4, 5)` | `[4]` combined with `rangeOfNumbers(5, 5)` | `[4, 5]`        |
| `rangeOfNumbers(3, 5)` | `[3]` combined with `rangeOfNumbers(4, 5)` | `[3, 4, 5]`     |

## Tech Stack

`JavaScript ES6` `Recursion` `Array Concatenation` `Functional Programming` `Call Stack Management`
