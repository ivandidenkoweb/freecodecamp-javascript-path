# Build a Longest Word Finder App

In this lab, you will implement an algorithm to identify the longest word within a given sentence and calculate its character count. This exercise focuses on string splitting, array iteration, and comparison logic.

## Description

The goal is to process a string (a sentence), break it down into individual words, and find the maximum length among them.

**Example:** `"The quick brown fox jumped over the lazy dog"` → The longest word is `"jumped"`, so the function returns `6`.

## Objective

Fulfill the user stories below and ensure your function accurately calculates the length for any provided string, regardless of its length.

## User Stories

1. **Function Definition**: Create a function named `findLongestWordLength` that takes one argument: `str` (the sentence to analyze).
2. **Logic Implementation**:
   - Split the string into an array of words (using `.split(' ')`).
   - Initialize a variable to track the maximum length found so far (starting at `0`).
   - Loop through the array of words and compare each word's length to the current maximum.
   - If a word's length is greater than the current maximum, update the maximum value.
3. **Return Value**: The function must return a **number** representing the length of the longest word.

## Logic Visualization

| Input String                                                    | Words Array                    | Longest Word | Return Value |
| :-------------------------------------------------------------- | :----------------------------- | :----------- | :----------- |
| `"May the force be with you"`                                   | `["May", "the", "force", ...]` | `"force"`    | `5`          |
| `"Google do a barrel roll"`                                     | `["Google", "do", "a", ...]`   | `"Google"`   | `6`          |
| `"What is the average airspeed velocity of an unladen swallow"` | `[...]`                        | `"velocity"` | `8`          |

## Tech Stack

`JavaScript` `String.split()` `Array Loops (for or forOf)` `Math.max()` `Comparison Operators`
