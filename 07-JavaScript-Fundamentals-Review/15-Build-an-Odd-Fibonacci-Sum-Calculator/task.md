# Build an Odd Fibonacci Sum Calculator

In this lab, you will create a function that generates Fibonacci numbers and selectively sums the odd ones. This exercise focuses on sequence generation, conditional logic, and boundary management in loops.

## Description

The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones, usually starting with `0` and `1`. Your task is to calculate the sum of all **odd** numbers in this sequence that do not exceed a given limit.

**Example:** `sumFibs(10)`
The Fibonacci numbers up to 10 are: `0, 1, 1, 2, 3, 5, 8`.
The odd numbers are: `1, 1, 3, 5`.
The sum is: $1 + 1 + 3 + 5 = 10$.

## Objective

Fulfill the user stories below to create a robust calculator that accurately identifies and sums odd Fibonacci values.

## User Stories

1. **Function Definition**: Create a function named `sumFibs` that accepts a single number as an argument (the limit).
2. **Sequence Generation**:
   - Start the sequence with `0` and `1`.
   - Each new number is calculated by adding the two previous numbers ($F_n = F_{n-1} + F_{n-2}$).
3. **Filtering & Summing**:
   - Only include a Fibonacci number in your total if it is **odd** (not divisible by 2).
   - Stop generating or adding numbers once the current Fibonacci number exceeds the provided argument.
4. **Return Value**: The function should return the final sum as an integer.

## Logic Visualization

| Fibonacci Number ($F_n$) | Is Odd? | Cumulative Sum (Limit: 10) |
| :----------------------- | :------ | :------------------------- |
| 0                        | No      | 0                          |
| 1                        | **Yes** | 1                          |
| 1                        | **Yes** | 2                          |
| 2                        | No      | 2                          |
| 3                        | **Yes** | 5                          |
| 5                        | **Yes** | 10                         |
| 8                        | No      | 10                         |

## Tech Stack

`JavaScript` `While Loops` `Arithmetic Operators` `Modulo Operator (%)` `Conditional Logic`
