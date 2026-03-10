# Build a Prime Number Sum Calculator

In this lab, you will implement an algorithm to identify prime numbers and calculate their cumulative sum up to a specific limit. This challenge combines mathematical logic with efficient looping structures.

## Description

A **prime number** is a whole number greater than 1 whose only divisors are 1 and itself (e.g., 2, 3, 5, 7, 11). Your goal is to find all such numbers up to a given maximum value and return their total.

**Example:** `sumPrimes(10)`
The prime numbers up to 10 are: `2, 3, 5, 7`.
The sum is: $2 + 3 + 5 + 7 = 17$.

## Objective

Fulfill the user stories below to create a function that distinguishes primes from composite numbers and sums them accurately.

## User Stories

1. **Function Definition**: Create a function named `sumPrimes` that accepts a number (the limit).
2. **Handle Edge Cases**: If the input number is less than **2**, the function must return **0** (since 2 is the smallest prime number).
3. **Helper Logic (Is Prime?)**:
   - Create a way to check if a number is prime.
   - A number $n$ is prime if it is not divisible by any integer from 2 up to the square root of $n$ ($\sqrt{n}$).
4. **Accumulation Logic**:
   - Iterate through every number from 2 up to the provided limit.
   - If a number is identified as prime, add it to a running total.
5. **Return Value**: Return the final sum.

## Logic Visualization

| Number | Divisors   | Is Prime? | Cumulative Sum (Limit: 10) |
| :----- | :--------- | :-------- | :------------------------- |
| 2      | 1, 2       | **Yes**   | 2                          |
| 3      | 1, 3       | **Yes**   | 5                          |
| 4      | 1, 2, 4    | No        | 5                          |
| 5      | 1, 5       | **Yes**   | 10                         |
| 6      | 1, 2, 3, 6 | No        | 10                         |
| 7      | 1, 7       | **Yes**   | 17                         |

## Tech Stack

`JavaScript` `Nested Loops` `Math.sqrt()` `Arithmetic Addition` `Conditional Logic`
