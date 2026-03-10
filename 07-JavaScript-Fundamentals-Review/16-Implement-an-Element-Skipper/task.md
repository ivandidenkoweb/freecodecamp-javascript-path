# Implement an Element Skipper

In this lab, you will create a function that filters an array based on a starting condition. This is often called a "drop while" operation, where elements are discarded from the beginning of a collection until a specific criterion is met.

## Description

The goal is to iterate through an array from left to right. As long as the provided test function returns `false`, you "drop" (ignore) the current element. The moment the test function returns `true`, you stop dropping and return the rest of the array, including the element that passed the test.

**Example:** `dropElements([1, 2, 3, 4], function(n) {return n >= 3;})`

1. Is `1 >= 3`? No (Drop)
2. Is `2 >= 3`? No (Drop)
3. Is `3 >= 3`? **Yes!** (Stop dropping)
   **Result:** `[3, 4]`

## Objective

Fulfill the user stories below to ensure your function correctly identifies the "cut-off" point and preserves the remaining sequence.

## User Stories

1. **Function Definition**: Create a function named `dropElements` that accepts two arguments:
   - `arr`: The array to process.
   - `func`: A function that returns a Boolean (the test).
2. **Iteration Logic**:
   - Start at the first element (index 0).
   - If `func(element)` is `false`, remove it and move to the next.
   - Continue this until `func(element)` is `true` OR the array is empty.
3. **Short-Circuiting**: Once an element passes the test, the function should stop checking further elements and return everything left in the array.
4. **Edge Cases**: If no elements satisfy the function, the result must be an empty array `[]`.

## Logic Visualization

| Input Array       | Test Function | Process                      | Output      |
| :---------------- | :------------ | :--------------------------- | :---------- |
| `[1, 2, 3, 7, 4]` | `n > 3`       | Drop 1, 2, 3 -> Stop at 7    | `[7, 4]`    |
| `[0, 1, 0, 1]`    | `n === 1`     | Drop 0 -> Stop at 1          | `[1, 0, 1]` |
| `[1, 2, 3]`       | `n > 5`       | Drop 1, 2, 3 -> End of array | `[]`        |

## Tech Stack

`JavaScript` `Array.shift()` `Array.slice()` `Array.findIndex()` `Loops (for/while)` `Higher-Order Functions`
