# Build a Password Generator App

In this lab, you will apply your knowledge of loops, string indexing, and the `Math` object to create a functional random password generator. This project simulates a common security feature used in many modern applications.

## Description

The goal is to write a function that picks characters at random from a predefined set of letters, numbers, and symbols to construct a string of a specific length.

## Objective

Fulfill the user stories below to create a generator that produces a unique string every time it is called.

## User Stories

1. **Function Definition**: Create a function named `generatePassword` that accepts one parameter (e.g., `length`).
2. **Character Set**: Inside your function, use the following source string to pick your characters:
   `"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()"`
3. **Logic Implementation**:
   - Initialize an empty string to store the password.
   - Use a `for` loop that runs as many times as the `length` parameter specifies.
   - In each iteration, use `Math.random()` and `Math.floor()` to select a random index from the character set string.
   - Append the character at that random index to your password string.
4. **Variable Assignment**: Define a variable called `password` and assign it the value returned by calling `generatePassword` with a number (e.g., `12`).
5. **Output**: Log the result to the console in the exact format: `Generated password: [your-password-here]`.

## Logic Visualization

| Component          | JavaScript Tool    | Purpose                                              |
| :----------------- | :----------------- | :--------------------------------------------------- |
| **Random Decimal** | `Math.random()`    | Generates a number between 0 and 1.                  |
| **Scaling**        | `* charset.length` | Scales the random number to the size of your string. |
| **Indexing**       | `Math.floor()`     | Rounds down to get a valid integer index.            |
| **Accumulation**   | `+=`               | Adds the new random character to the result.         |

## Tech Stack

`JavaScript` `Math.random()` `Math.floor()` `String Indexing` `Loops (for)` `String Concatenation`
