# Implement a Range-Based LCM Calculator

In this lab, you will develop an algorithm to find the **Least Common Multiple (LCM)** for a range of numbers. This is a classic computational problem that requires understanding how to find a number that is perfectly divisible by multiple integers without leaving a remainder.

## Description

The goal is to identify the smallest positive integer that is a multiple of every number within a specified range (inclusive). For example, the LCM of 1, 2, and 3 is 6. If the input is `[1, 5]`, you need to find the smallest number divisible by 1, 2, 3, 4, and 5.

**Example:** `smallestCommons([1, 5])` → `60`

- 60 is divisible by 1, 2, 3, 4, and 5.
- No number smaller than 60 satisfies this for all five numbers.

## Objective

Fulfill the user stories below to create a robust calculator. Efficiency is key here, as the LCM of larger ranges can grow very quickly.

## User Stories

1. **Function Definition**: Create a function named `smallestCommons` that accepts an array of two numbers.
2. **Range Normalization**:
   - Identify the minimum and maximum values from the input array.
   - Handle inputs regardless of order (e.g., `[1, 5]` and `[5, 1]` should behave identically).
3. **LCM Calculation**:
   - Implement a formula or loop to find the LCM of two numbers.
   - **Hint**: The LCM of two numbers $a$ and $b$ is often calculated using their **Greatest Common Divisor (GCD)** with the formula:
     $$\text{LCM}(a, b) = \frac{|a \cdot b|}{\text{GCD}(a, b)}$$
4. **Sequential Range Logic**:
   - Iterate through the entire range (e.g., from `min` to `max`).
   - Progressively calculate the LCM: Find the LCM of the first two numbers, then find the LCM of _that_ result and the third number, and so on.
5. **Return Value**: Return the final smallest common multiple as a number.

## Logic Visualization

| Range    | Sequential Numbers | Step-by-Step LCM                                  | Final Result |
| :------- | :----------------- | :------------------------------------------------ | :----------- |
| `[1, 3]` | 1, 2, 3            | LCM(1,2)=2; LCM(2,3)=6                            | `6`          |
| `[5, 1]` | 1, 2, 3, 4, 5      | LCM(1,2)=2; LCM(2,3)=6; LCM(6,4)=12; LCM(12,5)=60 | `60`         |

## Tech Stack

`JavaScript` `Euclidean Algorithm` `Loops (for)` `Arithmetic Math` `GCD and LCM Logic`