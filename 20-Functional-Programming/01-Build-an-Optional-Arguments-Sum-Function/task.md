# Build an Optional Arguments Sum Function

In this lab, you will build the `addTogether` function, which demonstrates **Currying** and **Closure** in JavaScript. This project focuses on handling dynamic arguments and returning functions to create a flexible addition engine.

## Description

Optional arguments allow a function to be executed in stages. If both numbers are provided at once, the function executes immediately. If only one is provided, the function "remembers" that first number (via a closure) and returns a new function that waits for the second number. This is a fundamental concept in functional programming known as currying.

## Objective

Fulfill the user stories below to create a robust addition function that handles both immediate and delayed execution while validating data types.

## User Stories

### 1. Function Definition

- **The Function**: Create a function named `addTogether`.
- **Validation**: If either argument passed to the function (at any stage) is not a valid **number**, the function must return `undefined`.

### 2. Immediate Execution

- **Two Arguments**: If the function receives two arguments, it should return the sum of the two arguments.
- **Example**: `addTogether(2, 3)` should return `5`.

### 3. Delayed Execution

- **One Argument**: If only one argument is provided, `addTogether` should return a function.
- **Wait for Second**: When the returned function is called with a single argument, it should return the sum of the original argument and the new one.

- **Example**:

  ```javascript
  const sumTwoAnd = addTogether(2);
  sumTwoAnd(3); // Returns 5
  ```

  ## Tech Stack

`JavaScript ES6` `Closures` `Currying` `Type Checking (typeof)` `Higher-Order Functions`
