# Build a Date Conversion Program

In this lab, you will work with the JavaScript `Date` object to extract, format, and display time information in various human-readable strings. You will practice using built-in methods to handle localization, ensuring the output matches specific regional standards (en-US).

## Description

The JavaScript `Date` object is a powerful tool that tracks time internally as a single number (milliseconds since the Unix Epoch). Your task is to take that raw data and transform it into two specific formats: a short numerical format and a long-form written format.

**Example:**

- **Input:** `Fri Sep 27 2024 ...`
- **Format 1 (MM/DD/YYYY):** `9/27/2024`
- **Format 2 (Long):** `September 27, 2024`

## Objective

Fulfill the user stories below to create a script that captures the current time and provides two distinct formatting functions.

## User Stories

### 1. Initial Setup

- Create a variable named `currentDate` and assign it a new `Date` object instance.
- Create a variable named `currentDateFormat` containing the string: `Current Date and Time: [currentDate]`.
- Log `currentDateFormat` to the console.

### 2. Numerical Format Function

- Create a function named `formatDateMMDDYYYY` that accepts a date object as a parameter.
- **Logic**: Extract the month, day, and year using `.getMonth()`, `.getDate()`, and `.getFullYear()`.
- **Note**: Remember that JavaScript months are **zero-indexed** (January is 0, September is 8). You must add `1` to the month for the correct display.
- **Return**: `Formatted Date (MM/DD/YYYY): [month]/[day]/[year]`

### 3. Long Format Function

- Create a function named `formatDateLong` that accepts a date object as a parameter.
- **Logic**: Use the `toLocaleDateString()` method with the `en-US` locale.
- **Configuration**: Use an options object to ensure the month is "long" (e.g., `{ month: 'long', day: 'numeric', year: 'numeric' }`).
- **Return**: `Formatted Date (Month Day, Year): [formatted date]`

## Logic Visualization

| Date Method                                     | Output for Sep 27, 2024 | Requirement                     |
| :---------------------------------------------- | :---------------------- | :------------------------------ |
| `.getMonth()`                                   | `8`                     | Must add `1` for display        |
| `.getDate()`                                    | `27`                    | Represents the day of the month |
| `.getFullYear()`                                | `2024`                  | Returns the 4-digit year        |
| `.toLocaleDateString('en-US', {month: 'long'})` | `September`             | Ensures "long" name format      |

## Tech Stack

`JavaScript` `Date Object` `toLocaleDateString()` `Template Literals` `Console Logging`
