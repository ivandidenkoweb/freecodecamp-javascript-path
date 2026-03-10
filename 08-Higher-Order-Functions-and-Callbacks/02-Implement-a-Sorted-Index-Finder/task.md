# Implement a Sorted Index Finder

In this lab, you will create a function that determines the correct "position" for a new number within a sorted list. This is a common algorithmic task used in maintaining ordered data structures and binary search preparations.

## Description

The goal is to find the lowest index where a value should be inserted into an array to keep the array sorted in ascending order. You will need to sort the existing data first and then identify the first element that is greater than or equal to the input value.

**Example:** `getIndexToIns([10, 20, 30, 40], 25)`

1. The array is already sorted: `[10, 20, 30, 40]`.
2. 25 is greater than 10 (index 0) and 20 (index 1).
3. 25 is less than 30 (index 2).
   **Result:** `2`

## Objective

Fulfill the user stories below and ensure your function handles both middle-of-the-array insertions and end-of-the-array placements.

## User Stories

1. **Function Definition**: Create a function named `getIndexToIns` that takes two arguments: an `arr` (array) and a `num` (number).
2. **Sorting Logic**:
   - Use the `.sort()` method to arrange the array in **ascending order** (lowest to highest).
   - _Note:_ Remember that the default `.sort()` treats elements as strings, so you must use a compare function: `(a, b) => a - b`.
3. **Finding the Index**:
   - Use the `.findIndex()` method to locate the first element in the sorted array that is **greater than or equal to** the input `num`.
   - If `findIndex` does not find a match (meaning the `num` is larger than everything in the array), it returns `-1`. In this specific case, your function should return the length of the array (the last position).
4. **Return Value**: The function must always return a number representing the index.

## Logic Visualization

| Input Array    | Input Num | Sorted Array   | Logic             | Output |
| :------------- | :-------- | :------------- | :---------------- | :----- |
| `[1, 2, 3, 4]` | `1.5`     | `[1, 2, 3, 4]` | 1.5 < 2 (Index 1) | `1`    |
| `[20, 3, 5]`   | `19`      | `[3, 5, 20]`   | 19 < 20 (Index 2) | `2`    |
| `[2, 5, 10]`   | `15`      | `[2, 5, 10]`   | 15 > all (End)    | `3`    |

## Tech Stack

`JavaScript` `Array.sort()` `Array.findIndex()` `Higher-Order Functions` `Compare Functions`
