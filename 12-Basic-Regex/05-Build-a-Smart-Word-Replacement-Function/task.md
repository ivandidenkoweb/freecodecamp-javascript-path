# Build a Smart Word Replacement Function

In this lab, you will implement a sophisticated "search and replace" utility. Unlike a basic replacement tool, your function must be "case-aware"—it should detect the capitalization of the word being replaced and apply that same style to the new word.

## Description

The goal is to swap a specific word (`before`) in a sentence with a new word (`after`). The critical requirement is that if `before` starts with an uppercase letter, `after` must also be converted to start with an uppercase letter. If it starts with a lowercase letter, the replacement should be lowercase.

**Example:**

- **Sentence:** `"He is Sleeping on the couch"`
- **Search for:** `"Sleeping"` (Uppercase 'S')
- **Replace with:** `"sitting"`
- **Result:** `"He is Sitting on the couch"` (Automatically capitalized)

## Objective

Fulfill the user stories below to create a function that maintains the grammatical integrity of a sentence during replacement.

## User Stories

1. **Function Definition**: Create a function named `myReplace` that accepts three arguments:
   - `str`: The full sentence.
   - `before`: The word to find and remove.
   - `after`: The word to insert.
2. **Case Detection**:
   - Check the first character of the `before` word.
   - **Hint**: You can use `before[0] === before[0].toUpperCase()` to check if it's capitalized.
3. **Case Application**:
   - If `before` is capitalized, capitalize the first letter of `after` before performing the replacement.
   - If `before` is lowercase, ensure the first letter of `after` is lowercase.
4. **Replacement**: Use the `.replace()` method to swap the words and return the modified sentence.

## Logic Visualization

| Original Sentence                | Word to Replace | Replacement Word | Final Result                |
| :------------------------------- | :-------------- | :--------------- | :-------------------------- |
| "Let us go to the **Store**"     | "Store"         | "mall"           | "Let us go to the **Mall**" |
| "I think **algorithms** are fun" | "algorithms"    | "Trees"          | "I think **trees** are fun" |
| "His name is **Tom**"            | "Tom"           | "john"           | "His name is **John**"      |

## Tech Stack

`JavaScript` `String.replace()` `String.toUpperCase()` `String.toLowerCase()` `String.slice()` `Conditional Logic`