# Build a Factorial Calculator

In this lab, you will implement a mathematical algorithm to calculate the **factorial** of a number. A factorial (denoted as $n!$) is the product of all positive integers less than or equal to $n$.

## Description

The factorial of a number is calculated by multiplying it by every integer below it down to 1.
**Example:** $5! = 5 \times 4 \times 3 \times 2 \times 1 = 120$.

## Objective

Fulfill the user stories below to create a functional calculator using loops. Ensure your logic correctly handles the inclusive range of numbers.

## User Stories

1. **Input Variable**: Declare a variable `num` and assign it a number between **1 and 20** inclusive.
2. **Function Definition**: Create a function named `factorialCalculator` that takes a single number as an argument.
3. **Calculation Logic**:
   - Inside the function, initialize a `result` variable with the value of `1`.
   - Use a loop (`for`, `while`, or `do...while`) to iterate from `1` up to the input number (inclusive).
   - In each iteration, multiply the `result` by the current loop index.
   - Return the final `result`.
4. **Execution**: Call `factorialCalculator(num)` and store the returned value in a variable named `factorial`.
5. **Message Formatting**: Create a string variable `resultMsg` in the format: `"Factorial of [num] is [factorial]"`.
6. **Output**: Log the value of `resultMsg` to the console.

## Quick Reference Table

| Input (n) | Calculation                             | Output (n!) |
| :-------- | :-------------------------------------- | :---------- |
| `3`       | $3 \times 2 \times 1$                   | `6`         |
| `5`       | $5 \times 4 \times 3 \times 2 \times 1$ | `120`       |
| `10`      | $10 \times 9 \times \dots \times 1$     | `3628800`   |

## Tech Stack

`JavaScript` `Loops (For/While)` `Arithmetic Operators (*=)` `String Template Literals`
