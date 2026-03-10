# Implement an HTML Entity Converter

In this lab, you will build a function that converts special characters in a string into their corresponding HTML entities. This is a critical practice for web security and ensuring that browsers render special characters as text rather than executable code.

## Description

The goal is to scan a string for specific characters like `&` or `<` and swap them out for their "escaped" versions. HTML entities always start with an ampersand (`&`) and end with a semicolon (`;`).

**Example:** `"Hamburgers & Fries"` → `"Hamburgers &amp; Fries"`

## Objective

Fulfill the user stories below to create a robust converter that handles multiple special characters within a single string and passes all laboratory tests.

## User Stories

1. **Function Definition**:
   Create a function named `convertHTML` that accepts a string `str` as an argument.

2. **Entity Mapping**:
   Use the following conversion table for your logic:
   - `&` → `&amp;`
   - `<` → `&lt;`
   - `>` → `&gt;`
   - `"` → `&quot;`
   - `'` → `&apos;`

3. **Implementation Strategy**:
   - **Step 1**: Identify the characters within the string that match the list above.
   - **Step 2**: Replace each occurrence with the appropriate HTML entity.
   - **Step 3**: Ensure the function handles strings with multiple different special characters.

4. **Return Value**:
   The function must return a **new string** containing the converted entities. If no special characters are found, it should return the original string.

## Logic Visualization

| Input Character | HTML Entity | Purpose                    |
| :-------------- | :---------- | :------------------------- |
| `&`             | `&amp;`     | Ampersand                  |
| `<`             | `&lt;`      | Less Than (Opening Tag)    |
| `>`             | `&gt;`      | Greater Than (Closing Tag) |
| `"`             | `&quot;`    | Double Quote               |
| `'`             | `&apos;`    | Apostrophe / Single Quote  |

## Tech Stack

`JavaScript` `String.split()` `Array.map()` `Regular Expressions (RegEx)` `Object Lookup` `String.replace()`
