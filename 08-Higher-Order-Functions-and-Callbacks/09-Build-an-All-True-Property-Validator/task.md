# Build an All-True Property Validator

In this lab, you will implement a validation utility that checks if a specific property is "truthy" across an entire collection of data. This is a common real-world task for form validation, API response checking, and ensuring data integrity before processing.

## Description
A value is **truthy** if it is not one of the JavaScript **falsy** values: `false`, `0`, `""` (empty string), `null`, `undefined`, and `NaN`. Your function needs to inspect every object in an array and verify that a specific key exists and holds a truthy value.

**Example:**
* **Collection:** `[{user: "Tinky-Winky", sex: "male"}, {user: "Dipsy", sex: "male"}]`
* **Preperty to check:** `"sex"`
* **Result:** `true` (Both objects have a valid string for the "sex" key).



## Objective
Fulfill the user stories below to create a function that returns a single boolean indicating if the entire collection passes the "truthy" test for a specific key.

## User Stories
1. **Function Definition**: Create a function named `truthCheck` that accepts two arguments:
    * `collection`: An array of objects.
    * `pre`: A string representing the property name (predicate) to check.
2. **Truthy Verification**: 
    * For every object in the `collection`, check if `object[pre]` evaluates to `true` in a boolean context.
3. **Short-Circuiting Logic**: 
    * If **any** object in the collection has a falsy value for that property (or the property is missing), the function must return `false`.
    * If **all** objects contain a truthy value for that property, return `true`.
4. **Implementation Tip**: 
    * Use the built-in `.every()` array method. It is designed specifically to check if all elements in an array pass a certain test.



## Logic Visualization
| Object Key Value | Status | Why? |
| :--- | :--- | :--- |
| `"Hello"` | **Truthy** | Non-empty strings are true. |
| `42` | **Truthy** | Non-zero numbers are true. |
| `0` | **Falsy** | The number zero is false. |
| `""` | **Falsy** | Empty strings are false. |
| `null` / `undefined` | **Falsy** | These represent "no value" and are false. |

## Tech Stack
`JavaScript` `Array.every()` `Truthy/Falsy Evaluation` `Bracket Notation (obj[key])`