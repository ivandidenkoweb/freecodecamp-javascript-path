# Implement the Truncate a String Algorithm

In this lab, you will practice string manipulation by creating a function that truncates a string if it exceeds a specified length. This is a common UI pattern used to prevent long text from breaking layouts.

## Description

The goal is to check the length of a string against a given limit. If the string is too long, you must "cut" it and add an ellipsis (`...`) to indicates that there is more text.

**Example:** `truncateString("A-tisket a-tasket A green and yellow basket", 8)` → `"A-tisket..."`

## Objective

Fulfill the user stories below and ensure the function returns the correctly formatted string for all test cases.

## User Stories

1. **Function Definition**: Create a function called `truncateString` that accepts two arguments:
   - `str` (the string to be truncated).
   - `num` (the maximum allowed length).
2. **Truncation Logic**:
   - If `str.length` is **greater than** `num`:
     - Truncate the string to the length of `num`.
     - Append `...` to the end of the truncated string.
   - If `str.length` is **equal to or lower than** `num`:
     - Return the original string as is, without any changes or dots.

## Examples

| Input String                                     | Limit | Output                |
| :----------------------------------------------- | :---- | :-------------------- |
| `"Peter Piper picked a peck of pickled peppers"` | `11`  | `"Peter Piper..."`    |
| `"A-tisket a-tasket"`                            | `30`  | `"A-tisket a-tasket"` |
| `"Absolutely Longer"`                            | `2`   | `"Ab..."`             |

## Tech Stack

`JavaScript` `String.length` `String.slice()` `Conditional Logic`
