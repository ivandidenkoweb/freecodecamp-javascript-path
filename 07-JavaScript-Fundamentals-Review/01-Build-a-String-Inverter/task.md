# Build a String Inverter

In this lab, you will build a simple string inverter that reverses the characters of a given string. This is a fundamental algorithmic challenge that tests your ability to manipulate strings and arrays or work with iterative loops.

## Description

The goal is to take an input string and return a new string where the characters appear in the opposite order.

**Example:** `"hello"` → `"olleh"`

## Objective

Fulfill the user stories below and ensure the function correctly handles strings of various lengths, including empty strings or strings with special characters.

## User Stories

1. **Function Definition**: Create a function named `reverseString` that takes one argument: `str` (the string to be inverted).
2. **Logic Implementation**:
   - **Step 1**: Split the string into an array of individual characters using `.split('')`.
   - **Step 2**: Reverse the order of elements in the array using `.reverse()`.
   - **Step 3**: Join the array elements back into a single string using `.join('')`.
   - _Alternative_: Use a decrementing `for` loop to build the string character by character from end to start.
3. **Return Value**: The function must return the fully reversed **string**.

## Logic Visualization

| Input String  | Internal Steps (Array Method)                     | Final Result  |
| :------------ | :------------------------------------------------ | :------------ |
| `"Greetings"` | `['G','r','e',...]` → `['s','g','n',...]`         | `"sgniteerG"` |
| `"12345"`     | `['1','2','3','4','5']` → `['5','4','3','2','1']` | `"54321"`     |
| `"Racecar"`   | `['R','a','c',...]` → `['r','a','c',...]`         | `"racecaR"`   |

## Tech Stack

`JavaScript` `String.split()` `Array.reverse()` `Array.join()` `For Loops` `String Concatenation`
