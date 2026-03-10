# Implement the Slice and Splice Algorithm

In this lab, you will create the `frankenSplice` function. The goal is to "stitch" one array into another at a specific location without modifying the original data sets. This exercise focuses on array cloning and the difference between methods that mutate data and those that return new copies.

## Description

The goal is to take elements from the first array and insert them into the second array starting at index `n`. Crucially, you must ensure that the original arrays provided as arguments remain unchanged (immutability).

**Example:** `frankenSplice([1, 2], ["a", "b"], 1)` should return `["a", 1, 2, "b"]`.

## Objective

Fulfill the user stories below and ensure that you are working with a copy of the second array to avoid side effects.

## User Stories

1. **Function Definition**: Create a function named `frankenSplice` that accepts three arguments:
   - `arr1`: The array to be inserted.
   - `arr2`: The array to be inserted into.
   - `n`: The index in the second array where insertion should begin.
2. **Logic Implementation**:
   - Create a **copy** of `arr2` so the original remains untouched (you can use `.slice()` or the spread operator `[...]`).
   - Use the `.splice()` method on the copy of the second array to insert all elements of `arr1` at index `n`.
   - Ensure the elements are inserted in their original order.
3. **Return Value**: Return the new merged array.

## Logic Visualization

| Input arr1             | Input arr2                       | Index (n) | Resulting Array                                      |
| :--------------------- | :------------------------------- | :-------- | :--------------------------------------------------- |
| `[1, 2, 3]`            | `[4, 5]`                         | `1`       | `[4, 1, 2, 3, 5]`                                    |
| `["claw", "tentacle"]` | `["head", "shoulders", "knees"]` | `2`       | `["head", "shoulders", "claw", "tentacle", "knees"]` |
| `[1, 2]`               | `[3, 4]`                         | `0`       | `[1, 2, 3, 4]`                                       |

## Tech Stack

`JavaScript` `Array.slice()` `Array.splice()` `Spread Operator (...)` `Immutability`
