# Implement a Unique Sorted Union

In this lab, you will build a function that merges multiple arrays into a single collection of unique values. This exercise focuses on handling a variable number of arguments and preserving the original order of elements while filtering out duplicates.

## Description
The goal is to take two or more arrays and produce a "Unique Union." If a value appears multiple times across different arrays, only its first occurrence should be included in the final result.

**Example:** `uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1])` → `[1, 2, 3, 5, 4]`



## Objective
Fulfill the user stories below and ensure that the final array maintains the "order of first appearance."

## User Stories
1. **Function Definition**: Create a function named `uniteUnique`.
2. **Handle Multiple Arguments**:
    * The function must accept **two or more** arrays. 
    * Since the number of arguments can vary, you should use the `arguments` object or the rest parameter syntax `(...arrays)`.
3. **Logic Implementation**:
    * Flatten the nested arrays into a single list or iterate through them sequentially.
    * Track which values have already been added to your result to avoid duplicates.
    * **Note**: Do not sort the final array; the elements must remain in the order they were first encountered.
4. **Return Value**: Return a new array containing only the unique elements.

## Logic Visualization


| Input Arguments | Flattened Sequence | Unique Output (Preserving Order) |
| :--- | :--- | :--- |
| `[1, 3, 2], [5, 2, 1], [4]` | `1, 3, 2, 5, 2, 1, 4` | `[1, 3, 2, 5, 4]` |
| `[1, 2, 3], [5, 2, 1]` | `1, 2, 3, 5, 2, 1` | `[1, 2, 3, 5]` |
| `["a", "b"], ["c", "a"]` | `"a", "b", "c", "a"` | `["a", "b", "c"]` |

## Tech Stack
`JavaScript` `Rest Parameters (...)` `The Arguments Object` `Array.prototype.concat()` `Array.prototype.includes()` `Set Object`
