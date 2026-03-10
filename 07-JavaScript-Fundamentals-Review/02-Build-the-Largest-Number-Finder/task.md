# Build the Largest Number Finder

In this lab, you will develop a function that processes a multi-dimensional array (an array containing other arrays) to identify the maximum value in each group. This exercise focuses on nested iteration and comparative logic.

## Description

The goal is to navigate through a "parent" array, inspect each "child" sub-array, and extract the single largest number from each.

**Example:** `[[4, 5, 1], [13, 27, 18], [32, 35, 37]]` → `[5, 27, 37]`

## Objective

Fulfill the user stories below and ensure your function handles sub-arrays containing both positive and negative integers.

## User Stories

1. **Function Definition**: Create a function named `largestOfAll` that accepts one argument: `arr` (an array of arrays).
2. **Logic Implementation**:
   - Initialize an empty array (e.g., `results`) to store the largest numbers.
   - Use a outer loop to iterate through each sub-array of the parent array.
   - Inside the outer loop, initialize a variable to keep track of the largest number in the current sub-array (hint: start with the first element of that sub-array).
   - Use an inner loop to compare each number in the sub-array to your current largest number.
   - After the inner loop finishes, push the largest number into your `results` array.
3. **Return Value**: The function must return a **single array** containing the maximum values from each sub-array.

## Logic Visualization

| Input Array of Arrays        | Sub-array Maxima | Final Returned Array |
| :--------------------------- | :--------------- | :------------------- |
| `[[1, 2], [3, 4]]`           | `2`, `4`         | `[2, 4]`             |
| `[[10, 5], [7, 20], [3, 1]]` | `10`, `20`, `3`  | `[10, 20, 3]`        |
| `[[-7, -2], [-10, -15]]`     | `-2`, `-10`      | `[-2, -10]`          |

## Tech Stack

`JavaScript` `Nested Loops` `Multi-dimensional Arrays` `Comparison Operators` `Array.push()`
