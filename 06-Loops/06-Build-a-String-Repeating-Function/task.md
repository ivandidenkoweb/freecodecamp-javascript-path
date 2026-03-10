# Build a String Repeating Function

In this lab, you will implement a function to repeat a string a specified number of times. This exercise focuses on using loops and string concatenation to reconstruct data manually.

## Description

The goal is to take an input string and a multiplier (number). You must build a new string that contains the original string repeated "n" times.

**Constraint:** You are **strictly prohibited** from using the built-in `.repeat()` method.

## Objective

Fulfill the user stories below and ensure the function handles edge cases, such as zero or negative numbers, correctly.

## User Stories

1. **Function Definition**: Create a function named `repeatStringNumTimes` that takes two parameters:
   - `str`: The string to be repeated.
   - `num`: The number of times to repeat the string.
2. **Logic Implementation**:
   - Initialize an empty string variable to store the accumulated result.
   - Use a loop (such as `for` or `while`) that runs `num` times.
   - In each iteration, append the original string to your result variable.
3. **Edge Case Handling**:
   - If `num` is less than or equal to `0`, the function must return an empty string (`""`).
4. **Return Value**: Return the final accumulated string.

## Logic Visualization

| Input String | Multiplier (num) | Expected Output |
| :----------- | :--------------- | :-------------- |
| `"*"`        | `3`              | `"***"`         |
| `"abc"`      | `3`              | `"abcabcabc"`   |
| `"abc"`      | `1`              | `"abc"`         |
| `"abc"`      | `0`              | `""`            |
| `"abc"`      | `-2`             | `""`            |

## Tech Stack

`JavaScript` `String Concatenation` `Loops (for/while)` `Conditional Logic`
