# Implement a Pig Latin Translator

In this lab, you will build a translator that converts English words into **Pig Latin**. This exercise is a classic demonstration of string manipulation, requiring you to identify character types (vowels vs. consonants) and rearrange strings based on specific linguistic rules.

## Description

Pig Latin transformation depends entirely on the location of the **first vowel** in a word. You will need to treat words differently based on whether they start with a vowel, start with a cluster of consonants, or contain no vowels at all.

**Example:**

- **"apple"** starts with a vowel $\rightarrow$ **"appleway"**
- **"glove"** starts with consonants "gl" $\rightarrow$ **"oveglay"**
- **"rhythm"** has no vowels $\rightarrow$ **"rhythmay"**

## Objective

Fulfill the user stories below to create a function that handles the various "shifts" required for a correct translation.

## User Stories

1. **Function Definition**: Create a function named `translatePigLatin` that accepts a single string.
2. **The Vowel Rule**:
   - If the word starts with a vowel (`a, e, i, o, u`), simply append `way` to the end.
   - _Example:_ `algorithm` becomes `algorithmway`.
3. **The Consonant Rule**:
   - If the word starts with consonants, find the first vowel.
   - Move all characters _before_ that vowel to the end of the word.
   - Append `ay` to the end.
   - _Example:_ `schwartz` becomes `artzschway`.
4. **The No-Vowel Rule**:
   - If the word contains no vowels at all (like `rhythm` or `my`), simply append `ay` to the end.
5. **Implementation Hint**:
   - Use a **Regular Expression** to find the index of the first vowel.
   - Use `.slice()` to grab the consonant cluster at the start and the remainder of the word.

## Logic Visualization

| Input Word   | First Vowel Index | Action                       | Result         |
| :----------- | :---------------- | :--------------------------- | :------------- |
| `eight`      | 0                 | Starts with vowel: add `way` | `eightway`     |
| `california` | 1                 | Move `c`, add `ay`           | `aliforniacay` |
| `glove`      | 2                 | Move `gl`, add `ay`          | `oveglay`      |
| `strength`   | 5                 | Move `streng`, add `ay`      | `thstrengay`   |
| `fly`        | None              | No vowel: add `ay`           | `flyay`        |

## Tech Stack

`JavaScript` `Regular Expressions` `String.indexOf()` `String.slice()` `String.match()`