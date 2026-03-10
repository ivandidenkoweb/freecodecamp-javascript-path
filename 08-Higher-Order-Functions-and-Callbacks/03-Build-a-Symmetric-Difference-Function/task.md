# Build a Symmetric Difference Function

In this lab, you will implement a function to find the **symmetric difference** between two collections. This is a fundamental concept in set theory that identifies elements unique to each set while excluding elements they have in common.

## Description

The symmetric difference consists of all elements that are in the first array but NOT the second, plus all elements that are in the second array but NOT the first. Essentially, you are filtering out the "overlap" or intersection.

**Example:**

- **Set A:** `["apple", "banana"]`
- **Set B:** `["banana", "cherry"]`
- **Difference:** `["apple", "cherry"]` (Since "banana" is in both).

## Objective

Fulfill the user stories below to create a function that effectively compares two arrays using functional programming techniques.

## User Stories

1. **Function Definition**: Create a function named `diffArray` that accepts two arrays as arguments.
2. **Use Filter Method**: Your solution must utilize the built-in JavaScript `.filter()` method to identify unique items.
3. **Logic Implementation**:
   - **Check A against B**: Filter the first array to find elements not present in the second.
   - **Check B against A**: Filter the second array to find elements not present in the first.
   - **Combine**: Merge the two filtered results into a single new array.
   - **Hint**: Use `.includes()` inside your filter callback to check for existence.
4. **Edge Cases**: If the two arrays are identical, the function must return an empty array `[]`.

## Logic Visualization

| Array A             | Array B             | Unique in A | Unique in B | Resulting Array |
| :------------------ | :------------------ | :---------- | :---------- | :-------------- |
| `[1, 2, 3]`         | `[1, 3, 5]`         | `[2]`       | `[5]`       | `[2, 5]`        |
| `["grass", "dirt"]` | `["grass", "dirt"]` | `[]`        | `[]`        | `[]`            |
| `[1, "calf"]`       | `[1, "calf", 3]`    | `[]`        | `[3]`       | `[3]`           |

## Tech Stack

`JavaScript` `Array.filter()` `Array.includes()` `Array.concat()` `Spread Operator (...)`