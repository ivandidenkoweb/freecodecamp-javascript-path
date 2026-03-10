# Build a Profile Lookup

In this lab, you will build a profile lookup utility that searches for information about people in a contacts list. This exercise simulates a real-world scenario where you need to verify both the existence of a record and the specific data fields within that record.

## Description

The goal is to search through a `contacts` list for a specific person by their first name. If found, you must check if a requested property (like `lastName`, `number`, or `likes`) exists for that person and return the associated value.

**Example:** `lookUpProfile("Akira", "lastName")` → `"Laine"`

## Objective

Fulfill the user stories below and ensure the function returns the correct error strings for missing names or missing properties.

## User Stories

1. **Function Definition**: Create a function named `lookUpProfile` that takes two arguments:
   - `name`: The first name to search for.
   - `prop`: The property to look up.
2. **Retrieval Logic**:
   - Iterate through the `contacts` array (the array of objects).
   - Match the `firstName` of each object against the `name` argument.
3. **Condition Handling**:
   - **If both the name and the property match**: Return the value of that property.
   - **If the name matches but the property does not exist**: Return the string `"No such property"`.
   - **If the name does not match any contact** after checking the entire list: Return the string `"No such contact"`.

## Tech Stack

`JavaScript` `Array of Objects` `Loops` `Conditional Logic` `Property Access`
