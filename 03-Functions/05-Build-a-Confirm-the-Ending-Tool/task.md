# Build a Confirm the Ending Tool

In this lab, you will implement a manual string comparison logic to determine if a string ends with a specific target. This exercise helps you understand how string indexing and substring methods work behind the scenes.

## Description

The goal is to determine if the first argument (a string) matches the second argument (the target string) at its very end.

**Constraint:** You are **strictly prohibited** from using the built-in `.endsWith()` method. You must use alternative JavaScript substring methods.

## Objective

Fulfill the user stories below and ensure the function handles various string lengths and characters correctly.

## User Stories

1. **Function Definition**: Create a function named `confirmEnding` that takes two parameters:
   - `str` (the string to check).
   - `target` (the string to check against).
2. **Logic Implementation**:
   - Use a substring method (like `.slice()`, `.substring()`, or `.substr()`) to extract the end of the first string.
   - The length of the extracted part should match the length of the `target`.
   - Compare the extracted part with the `target`.
3. **Return Value**:
   - Return `true` if they match.
   - Return `false` otherwise.

## Logic Visualization

## Examples

| String (str)                                                                                  | Target            | Result  |
| :-------------------------------------------------------------------------------------------- | :---------------- | :------ |
| `"Bastian"`                                                                                   | `"n"`             | `true`  |
| `"Congratulation"`                                                                            | `"on"`            | `true`  |
| `"Connor"`                                                                                    | `"n"`             | `false` |
| `"He has to give me a new name"`                                                              | `"name"`          | `true`  |
| `"Walking on water and developing software from a specification are easy if both are frozen"` | `"specification"` | `false` |

## Tech Stack

`JavaScript` `String.slice()` `String.length` `Comparison Operators`
