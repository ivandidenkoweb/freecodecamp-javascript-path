# Implement a Matching Object Filter

In this lab, you will build a function that performs a "search and filter" operation on a collection of data. This simulates how search engines or database queries find specific records that meet a set of multiple criteria.

## Description

The goal is to look through an array of objects (the `collection`) and find which objects contain **all** the property-value pairs found in a second object (the `source`).

For an object to be a match, it doesn't just need to have the same keys; it must also have the identical values for those keys.

**Example:**

- **Collection:** `[{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }]`
- **Source:** `{ "apple": 1, "bat": 2 }`
- **Result:** `[{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }]`
  - _Note:_ The third object is a match even though it has an extra key (`cookie`), because it still contains everything the source required.

## Objective

Fulfill the user stories below to ensure your function correctly identifies objects that satisfy every condition in the source object.

## User Stories

1. **Function Definition**: Create a function named `whatIsInAName` that accepts two arguments: `collection` (array) and `source` (object).
2. **Key Extraction**:
   - Identify the keys present in the `source` object.
   - **Hint**: You can use `Object.keys(source)` to get an array of the property names you need to check.
3. **Filtering Logic**:
   - Use the `.filter()` method on the `collection` array.
   - Inside the filter, use the `.every()` method on the source keys array to ensure that **every** key in the source exists in the current object and has a matching value.
4. **Return Value**: Return a new array of matching objects. If no matches exist, return `[]`.

## Logic Visualization

| Object in Collection         | Source Requirement   | Match?  | Reason                      |
| :--------------------------- | :------------------- | :------ | :-------------------------- |
| `{ "a": 1, "b": 2 }`         | `{ "a": 1 }`         | **Yes** | Has `a: 1`.                 |
| `{ "a": 5, "b": 2 }`         | `{ "a": 1 }`         | No      | `a` is 5, not 1.            |
| `{ "b": 2 }`                 | `{ "a": 1, "b": 2 }` | No      | Missing key `a`.            |
| `{ "a": 1, "b": 2, "c": 3 }` | `{ "a": 1, "b": 2 }` | **Yes** | Has both `a: 1` and `b: 2`. |

## Tech Stack

`JavaScript` `Object.keys()` `Array.filter()` `Array.every()` `Bracket Notation (obj[key])`
