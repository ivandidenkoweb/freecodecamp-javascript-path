# Build a Countdown

In this lab, you will build a `countdown` function that takes a starting number and generates a countdown list. This project focuses on **Functional Programming** and the concept of **Recursion**, requiring you to solve the problem without using traditional loops or iterative array methods.

## Description

A countdown is a sequence of integers in descending order. While most developers reach for a `for` or `while` loop to solve this, recursion offers a more mathematical approach by breaking the problem into a "base case" and a "recursive case." You will practice managing the call stack to build an array piece by piece until the countdown is complete.

## Objective

Fulfill the user stories below to create a recursive engine that independently generates countdown arrays based on a starting input.

## User Stories

### 1. Function Definition

- **The Function**: Create a function named `countdown`.
- **Argument**: The `countdown` function should take a single argument `n` (a number).

### 2. Base Case Logic

- **Lower Bound**: If `n` is less than **1**, `countdown` should return an empty array `[]`. This handles cases like `countdown(0)` or `countdown(-3)`.

### 3. Recursive Requirements

- **No Loops**: You must **not** use `for`, `while`, or array-iteration methods like `forEach`, `map`, `filter`, or `reduce`.
- **Self-Invocation**: The function must call itself (recursion) to build the result.
- **Progressive Reduction**: Each recursive call should use a smaller value than the previous call (e.g., `n - 1`) to ensure it reaches the base case.

### 4. State Management

- **Independence**: The solution should **not** use global variables to store or cache the result array.
- **Encapsulation**: Each call to `countdown` must produce its own independent result array.
- **Output Format**: For `n >= 1`, it should return an array starting at `n` and counting down by **1** until it reaches **1** (e.g., `countdown(5)` returns `[5, 4, 3, 2, 1]`).

## Logic Visualization

| Input          | Logic Step                            | Expected Return   |
| :------------- | :------------------------------------ | :---------------- |
| `countdown(0)` | $n < 1$ (Base Case)                   | `[]`              |
| `countdown(1)` | `[1]` combined with `countdown(0)`    | `[1]`             |
| `countdown(5)` | `[5]` combined with `countdown(4)...` | `[5, 4, 3, 2, 1]` |

## Tech Stack

`JavaScript ES6` `Recursion` `Array Concatenation` `Functional Programming` `Call Stack Management`