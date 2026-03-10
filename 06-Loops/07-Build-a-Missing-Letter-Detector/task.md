# Build a Missing Letter Detector

In this lab, you will build a function that identifies a missing character from a sequence of letters. This exercise focuses on character codes (ASCII/Unicode) and using loops to detect gaps in a sequential data set.

## Description

The goal is to examine a string of letters provided in alphabetical order and determine if a letter is missing from the sequence.

**Example:** If the input is `"abce"`, the function should detect that `"d"` is missing and return it.

## Objective

Fulfill the user stories below and ensure the function correctly handles both incomplete sequences and perfect sequences.

## User Stories

1. **Function Definition**: Create a function named `fearNotLetter` that takes one argument: a string of letters.
2. **Logic Implementation**:
   - Iterate through the string starting from the first character.
   - Compare the character code of the current character with the character code of the next character.
   - Use `.charCodeAt()` to get the numeric Unicode value of the characters.
3. **Missing Letter Detection**:
   - If the difference between the character code of the next letter and the current letter is greater than 1, a letter is missing.
   - Calculate the missing character by adding 1 to the current character's code and convert it back to a string using `String.fromCharCode()`.
4. **Return Value**:
   - Return the missing letter as a string.
   - If no letters are missing in the range (the sequence is perfect), return `undefined`.

## Logic Visualization

| Input String | Character Codes           | Gap Detected              | Return Value |
| :----------- | :------------------------ | :------------------------ | :----------- |
| `"abce"`     | `97, 98, 99, 101`         | Yes (between 99 and 101)  | `"d"`        |
| `"stvwx"`    | `115, 116, 118, 119, 120` | Yes (between 116 and 118) | `"u"`        |
| `"abcdefgh"` | `97, 98, 99, 100...`      | No                        | `undefined`  |

## Tech Stack

`JavaScript` `String.charCodeAt()` `String.fromCharCode()` `Loops (for)` `Conditional Logic`
