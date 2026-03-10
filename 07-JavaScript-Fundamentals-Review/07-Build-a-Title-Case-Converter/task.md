# Build a Title Case Converter

In this lab, you will create a function that reformats a string into title case. This is a common task in data processing and web development to ensure consistent text presentation regardless of the user's input style.

## Description

Title case formatting requires that the first character of every word is capitalized, while all subsequent characters in that word are converted to lowercase.

**Example:** `"sHoRt AnD sToUt"` → `"Short And Stout"`

## Objective

Fulfill the user stories below and ensure the function handles mixed-case strings by normalizing them before applying capitalization.

## User Stories

1. **Function Definition**: You should have a `titleCase` function that takes a string as an argument.
2. **Logic Implementation**:
   - **Step 1**: Convert the entire string to lowercase to clear any existing irregular capitalization.
   - **Step 2**: Split the string into an array of individual words.
   - **Step 3**: Iterate through the array and capitalize the first character of each word.
   - **Step 4**: Join the words back together into a single string.
3. **Return Value**: The function should return a string where the first letter of each word is capitalized and the rest are lowercase.

## Logic Visualization

| Input String          | Normalized (Lowercase) | Word Array                       | Final Output          |
| :-------------------- | :--------------------- | :------------------------------- | :-------------------- |
| `"I like to code"`    | `"i like to code"`     | `["i", "like", "to", "code"]`    | `"I Like To Code"`    |
| `"javaScript is fun"` | `"javascript is fun"`  | `["javascript", "is", "fun"]`    | `"Javascript Is Fun"` |
| `"HERE IS MY HANDLE"` | `"here is my handle"`  | `["here", "is", "my", "handle"]` | `"Here Is My Handle"` |

## Tech Stack

`JavaScript` `String.toLowerCase()` `String.split()` `Array.map()` `String.replace()` `Array.join()`
