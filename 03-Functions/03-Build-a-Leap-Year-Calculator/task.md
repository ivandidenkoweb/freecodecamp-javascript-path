# Build a Leap Year Calculator

In this lab, you will implement the logic to determine whether a given year is a leap year. A leap year contains an extra day, February 29th, to keep the calendar year synchronized with the astronomical year.

## Logic Overview

A year is a leap year if it is divisible by **4**, with two specific exceptions:

1. If the year is also divisible by **100**, it is **NOT** a leap year...
2. ...**UNLESS** the year is also divisible by **400**, in which case it **IS** a leap year.

## Objective

Fulfill the user stories below and ensure the function correctly identifies leap years like 2000 while excluding years like 1900.

## User Stories

1. **Function Definition**: Define a function called `isLeapYear` that takes a `year` (number) as an argument.
2. **External Variable**: Outside the function, declare a variable named `year` to store the value you want to check.
3. **Internal Logic**: Inside the function, use an `if/else` statement or a ternary operator to verify the leap year conditions:
   - Divisible by 4? → **Potential Leap Year**.
   - Divisible by 100? → **Not a Leap Year** (Exception 1).
   - Divisible by 400? → **Leap Year** (Exception 2).
4. **Return String**:
   - If it is a leap year, return: `"[year] is a leap year."`
   - Otherwise, return: `"[year] is not a leap year."`
5. **Execution**: Call the `isLeapYear` function with your `year` variable and assign the returned value to a variable named `result`.
6. **Output**: Log the `result` variable to the console.

## Examples

| Input  | Output                       |
| :----- | :--------------------------- |
| `2000` | `"2000 is a leap year."`     |
| `1900` | `"1900 is not a leap year."` |
| `2024` | `"2024 is a leap year."`     |
| `2023` | `"2023 is not a leap year."` |

## Tech Stack

`JavaScript` `Modulo Operator (%)` `Conditional Logic` `String Template Literals`
