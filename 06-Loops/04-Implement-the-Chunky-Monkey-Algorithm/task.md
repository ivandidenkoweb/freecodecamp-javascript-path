# Implement the Chunky Monkey Algorithm

In this lab, you will practice advanced array manipulation by creating a function that "chunks" an array. This is a common task in programming when you need to display data in a grid or process information in specific batch sizes.

## Description

The goal is to take a single array and split it into several smaller sub-arrays based on a provided size. These sub-arrays are then collected into one large two-dimensional array.

**Example:** `chunkArrayInGroups(["a", "b", "c", "d"], 2)` should return `[["a", "b"], ["c", "d"]]`.

## Objective

Fulfill the user stories below and ensure that any remaining elements (if the array doesn't divide evenly) are placed in a final sub-array.

## User Stories

1. **Function Definition**: Write a function named `chunkArrayInGroups` that accepts two arguments:
   - `arr`: The array to be split.
   - `size`: A number representing the length of each chunk.
2. **Logic Implementation**:
   - Create an empty array to hold the "chunks".
   - Loop through the original array.
   - Use a method like `.slice()` to extract a segment of the array starting from the current index up to the current index plus `size`.
   - Push that segment into your holder array.
   - Increment your loop counter by `size` to move to the next chunk.
3. **Return Value**: The function should return a **two-dimensional array**.

## Logic Visualization

| Input Array          | Size | Expected Output            |
| :------------------- | :--- | :------------------------- |
| `[0, 1, 2, 3, 4, 5]` | `3`  | `[[0, 1, 2], [3, 4, 5]]`   |
| `[0, 1, 2, 3, 4, 5]` | `2`  | `[[0, 1], [2, 3], [4, 5]]` |
| `[0, 1, 2, 3, 4, 5]` | `4`  | `[[0, 1, 2, 3], [4, 5]]`   |

## Tech Stack

`JavaScript` `Arrays` `Loops (for/while)` `Array.slice()` `Array.push()`
