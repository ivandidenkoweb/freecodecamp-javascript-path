# Create a Deep Flattening Tool

In this lab, you will implement an algorithm to "flatten" deeply nested arrays. This is a fundamental data manipulation task used to normalize data structures when you need to process every element regardless of how many layers of nesting they are hidden behind.

## Description

Flattening is the process of unwrapping nested arrays into a single-level array. Your tool should be "recursive" in nature, meaning it doesn't matter if an array is nested one level deep or ten levels deep—the function should reach in and pull out the raw elements.

**Example:** `steamrollArray([1, [2], [3, [[4]]]])`

- The numbers `1, 2, 3, 4` are extracted.
- The structure becomes a simple list: `[1, 2, 3, 4]`.

## Objective

Fulfill the user stories below to create a robust flattening utility. To truly master this logic, you are restricted from using the built-in modern flattening methods.

## User Stories

1. **Function Definition**: Create a function named `steamrollArray` that accepts a single argument (the nested array).
2. **Deep Flattening**:
   - The function must account for varying levels of nesting (e.g., `[[[a]]]` should become `[a]`).
   - Empty arrays `[]` should be removed entirely, as they contain no elements to flatten.
3. **Preservation of Non-Arrays**:
   - Only arrays should be flattened. Objects, strings, and numbers should remain exactly as they are.
   - _Example:_ `[1, {}, [3]]` becomes `[1, {}, 3]`.
4. **Method Restrictions**:
   - **Do not** use `Array.prototype.flat()` or `Array.prototype.flatMap()`.
5. **No Global Variables**: All logic and storage must exist within the function scope to ensure the function is "pure."

## Logic Visualization

| Input Array      | Nested Elements Found         | Action             | Result           |
| :--------------- | :---------------------------- | :----------------- | :--------------- |
| `[1, [2]]`       | `1`, `[2]`                    | Unwrap `[2]`       | `[1, 2]`         |
| `[[["a"]]]`      | `[["a"]]` -> `["a"]` -> `"a"` | Recursively unwrap | `["a"]`          |
| `[1, [], 3]`     | `1`, empty, `3`               | Ignore empty array | `[1, 3]`         |
| `[1, {x: 1}, 2]` | `1`, Object, `2`              | Keep Object as is  | `[1, {x: 1}, 2]` |

## Tech Stack

`JavaScript` `Recursion` `Array.isArray()` `Array.forEach()` `Array.push()` `Spread Operator (...)`