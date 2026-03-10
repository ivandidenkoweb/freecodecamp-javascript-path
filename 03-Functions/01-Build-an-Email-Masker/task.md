# Build an Email Masker

In this lab, you will create a function to mask the username part of an email address. Masking is used to protect sensitive information by replacing characters with asterisks (`*`).

## Description

The goal is to transform the username part of an email while keeping the first character, the last character of the username, and the entire domain intact.

**Example:** `myEmail@email.com` → `m*****l@email.com`

## Objective

Fulfill the user stories below and ensure the function handles various email lengths correctly to pass the lab.

## User Stories

1. **Create a function** named `maskEmail` that takes `email` as an argument.
2. **Logic inside the function**:
   - Identify the username and the domain parts (using `indexOf` or `split`).
   - Mask the middle of the username, preserving only the first and last characters.
   - Use methods like `slice`, `repeat`, or `replace` to construct the masked string.
   - Append the original domain name to the masked username.
3. **External Variable**: Outside the function, declare a variable named `email` to store the input address.
4. **Output**: Call the `maskEmail` function with the variable and log the result to the console.

## Test Cases / Examples

| Input                      | Output                     |
| :------------------------- | :------------------------- |
| `apple.pie@example.com`    | `a*******e@example.com`    |
| `freecodecamp@example.com` | `f**********p@example.com` |
| `info@test.dev`            | `i**o@test.dev`            |
| `user@domain.org`          | `u**r@domain.org`          |

## Tech Stack

`JavaScript` `String Methods` `Indexing` `Masking Logic`
