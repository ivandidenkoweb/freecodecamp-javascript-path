# Build a Permutation Generator

In this lab, you will build a `permuteString` function that calculates every possible rearrangement of characters in a given string. This project explores **Backtracking** and **Recursive String Manipulation**, which are key concepts in algorithmic problem-solving and combinatorics.

## Description

A permutation is a specific ordering of a set of items. For a string of length $n$ with unique characters, there are $n!$ (n-factorial) possible permutations. The recursive approach works by "fixing" one character as a prefix and then recursively finding all permutations of the remaining characters. This process continues until no characters are left to fix, signaling that a complete permutation has been formed.

## Objective

Fulfill the user stories below to create a recursive engine that generates an array of all unique permutations for any given input string.

## User Stories

### 1. Function Definition

- **The Function**: Create a function named `permuteString`.
- **Parameters**: The function should take one parameter (the string), and two additional parameters with default values:
  - `prefix`: Used to accumulate characters (default: `""`).
  - `results`: An array for storing and returning the results (default: `[]`).
- **Initial Call**: The function must be callable with a single argument, for example: `permuteString("cat")`.

### 2. Base Case Logic

- **Check Length**: Inside the function, check if the length of the passed string is **0**.
- **Record Result**: If the length is 0, push the current `prefix` to the `results` array and return the `results`.

### 3. Recursive Step

- **Iteration**: Iterate over each character in the input string using a loop.
- **Character Extraction**: For each iteration:
  - Remove the current character from the string.
  - Call the `permuteString` function recursively.
- **Updated Arguments**: Pass the remaining string (without the current character) and the updated prefix (current prefix + removed character) to the recursive call.

### 4. Data Integrity

- **Return Value**: The function should return the final `results` array containing all generated permutations.
- **Uniqueness**: You should ensure that the permutations are unique by removing any duplicates from the final array.

## Logic Visualization

For the string `"cat"`:
| Level | Prefix | Remaining | Action |
| :--- | :--- | :--- | :--- |
| 1 | `""` | `"cat"` | Pick 'c', 'a', or 't' |
| 2 | `"c"` | `"at"` | Pick 'a' or 't' |
| 3 | `"ca"` | `"t"` | Pick 't' |
| 4 (Base) | `"cat"` | `""` | **Push to results** |

## Tech Stack

`JavaScript ES6` `Recursion` `String Slicing (slice/substring)` `Default Parameters` `Set Object (for uniqueness)`
