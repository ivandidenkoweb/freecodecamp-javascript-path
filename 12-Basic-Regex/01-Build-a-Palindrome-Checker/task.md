# Build a Palindrome Checker

In this lab, you will build a tool that identifies palindromes—words, phrases, or sequences that read the same backward as forward. This project focuses on **Regular Expressions (Regex)** for data cleaning and string manipulation techniques to compare reversed values.

## Description

A palindrome remains the same even after reversing its order, provided you ignore non-alphanumeric characters (like spaces, underscores, and punctuation) and case sensitivity. Your app will take a user's input, "clean" it, and determine if it meets the criteria.

**Example:** `"Race Car"`

1. Cleaned: `"racecar"`
2. Reversed: `"racecar"`
3. Result: **Match!**

## Objective

Fulfill the user stories below to create a robust checker that handles complex strings, symbols, and empty inputs.

## User Stories

### 1. HTML Structure

- Create an `<input>` element with `id="text-input"`.
- Create a `<button>` element with `id="check-btn"`.
- Create a `<div>`, `<span>`, or `<p>` with `id="result"` to display the outcome.

### 2. Validation & Alerting

- If the user clicks the check button while the input is empty, trigger a JavaScript `alert()` with the exact message: `Please input a value`.

### 3. Cleaning & Comparison Logic

To accurately check for a palindrome, your code must:

- **Remove non-alphanumeric characters**: Use a Regular Expression like `/[^a-z0-9]/gi` to strip away spaces, punctuation, and symbols (e.g., `_`, `-`, `.`, `/`).
- **Normalize Case**: Convert the entire string to lowercase so that `A` matches `a`.
- **The Comparison**: Compare this "cleaned" string with its reversed version.
  - **Hint**: To reverse a string, you can chain these methods: `.split('').reverse().join('')`.

### 4. Displaying Results

The `#result` element must show the **original input** followed by the determination.

- **If it is a palindrome**: `[original text] is a palindrome.`
- **If it is not**: `[original text] is not a palindrome.`

## Logic Visualization

| Raw Input                        | Cleaned String          | Is Palindrome? | Final Result Message                              |
| :------------------------------- | :---------------------- | :------------- | :------------------------------------------------ |
| `eye`                            | `eye`                   | **Yes**        | `eye is a palindrome.`                            |
| `_eye`                           | `eye`                   | **Yes**        | `_eye is a palindrome.`                           |
| `race car`                       | `racecar`               | **Yes**        | `race car is a palindrome.`                       |
| `nope`                           | `nope`                  | No             | `nope is not a palindrome.`                       |
| `A man, a plan, a canal. Panama` | `amanaplanacanalpanama` | **Yes**        | `A man, a plan, a canal. Panama is a palindrome.` |

## Tech Stack

`HTML5` `CSS3` `JavaScript` `Regular Expressions (Regex)` `String Methods` `Array.reverse()`