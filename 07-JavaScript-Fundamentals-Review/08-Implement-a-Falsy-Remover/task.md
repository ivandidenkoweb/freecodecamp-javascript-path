# Implement a Falsy Remover

In this lab, you will create a function that filters out "falsy" values from an array. This is a crucial skill for data cleaning, ensuring that your logic only processes "truthy" or meaningful data.

## Description

In JavaScript, a value is considered **falsy** if it evaluates to `false` when converted to a Boolean. Everything else is **truthy**. Your task is to "bounce" these values out of the collection.

## Objective

Fulfill the user stories below and ensure that the original array remains unmodified (immutability).

## User Stories

1. **Function Definition**: You should have a `bouncer` function that takes an array as an argument.
2. **Logic Implementation**:
   - Iterate through the input array.
   - Check if each element is "truthy" or "falsy".
   - **Hint**: You can convert a value to a Boolean using `Boolean(value)` or the double-bang operator `!!value`.
3. **Immutability**: The function should not change the original array. Instead, it should build and return a **new array**.
4. **Return Value**: Return a new array containing only the elements that are not falsy.

## The 6 Falsy Values in JavaScript

If an element is any of these, it must be removed:

- `false`
- `null`
- `0`
- `""` (empty string)
- `undefined`
- `NaN` (Not a Number)

## Logic Visualization

| Input Array                | Logic Check                                     | Resulting Array   |
| :------------------------- | :---------------------------------------------- | :---------------- |
| `[7, "ate", "", false, 9]` | `7`(T), `"ate"`(T), `""`(F), `false`(F), `9`(T) | `[7, "ate", 9]`   |
| `["a", "b", "c"]`          | All Truthy                                      | `["a", "b", "c"]` |
| `[false, null, 0, NaN]`    | All Falsy                                       | `[]`              |

## Tech Stack

`JavaScript` `Boolean Conversion` `Array.filter()` `Loops (for)` `Array.push()`
