# Design a Sum All Numbers Algorithm

In this lab, you will implement a function that calculates the cumulative sum of a range of integers. This challenge requires you to identify the boundaries of a range (minimum and maximum) and iterate through every number between them, including the boundaries themselves.

## Description

The goal is to take an array of two numbers and return the sum of those two numbers plus all the numbers in between. The input array won't always be sorted, so your first task is to determine which number is the start and which is the end.

**Example:** `sumAll([1, 4])` or `sumAll([4, 1])` → $1 + 2 + 3 + 4 = 10$.

## Objective

Fulfill the user stories below and ensure your logic correctly identifies the range regardless of the order of the input numbers.

## User Stories

1. **Function Definition**: Create a function named `sumAll` that accepts one argument: `arr` (an array containing two numbers).
2. **Logic Implementation**:
   - **Identify Boundaries**: Use `Math.min()` and `Math.max()` to find the lowest and highest numbers in the provided array.
   - **Accumulate Sum**: Initialize a variable (e.g., `sum = 0`).
   - **Iterate**: Use a `for` loop that starts at your minimum value and runs until it reaches (and includes) your maximum value.
   - **Add**: In each iteration, add the current number to your `sum` variable.
3. **Return Value**: Return the final total sum.

## Logic Visualization

| Input Array | Min | Max  | Sequence to Sum     | Result |
| :---------- | :-- | :--- | :------------------ | :----- |
| `[1, 4]`    | `1` | `4`  | $1, 2, 3, 4$        | `10`   |
| `[10, 5]`   | `5` | `10` | $5, 6, 7, 8, 9, 10$ | `45`   |
| `[3, 3]`    | `3` | `3`  | $3$                 | `3`    |

## Tech Stack

`JavaScript` `Math.min()` `Math.max()` `Loops (for)` `Arithmetic Addition`