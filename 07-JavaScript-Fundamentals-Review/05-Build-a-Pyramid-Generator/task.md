# Build a Pyramid Generator

In this lab, you will build a function that generates a visual pyramid pattern using strings. This exercise focuses on calculating character alignment and managing string concatenation with specific formatting requirements.

## Objective

Fulfill the user stories below and ensure the function returns a string that correctly represents a centered pyramid in the requested orientation.

## User Stories

1. **Function Definition**: You should have a function named `pyramid` that takes three arguments:
   - A **string** representing the pattern character.
   - An **integer** representing the number of rows.
   - A **Boolean** value for inversion.
2. **Pyramid Shape**:
   - The vertex row must have a **single** pattern character.
   - Each subsequent row must have **two pattern characters more** than the previous one.
3. **Alignment & Formatting**:
   - Each row should start with enough spaces to align the center characters of all rows in the same column.
   - There should be **no spaces** at the end of each row.
   - The entire returned string must **start and end with a newline character** (`\n`).
4. **Orientation**:
   - If the third argument is `false`: The pyramid vertex faces **upwards**.
   - If the third argument is `true`: The pyramid vertex faces **downwards**.

## Logic Visualization

| Row (i) | Spaces | Characters | Example (count=3, char="o") |
| :------ | :----- | :--------- | :-------------------------- |
| 1       | 2      | 1          | `  o`                       |
| 2       | 1      | 3          | ` ooo`                      |
| 3       | 0      | 5          | `ooooo`                     |

## Tech Stack

`JavaScript` `String Manipulation` `Loops` `Conditional Logic` `Math Operations`
