# Build a Gradebook App

In this lab, you will build a small application to manage student grades. This project focuses on functional decomposition—breaking a larger problem into smaller, reusable functions that work together.

## Objective

Fulfill the user stories below to create a system that calculates averages, assigns letter grades, and generates personalized student messages.

## User Stories

### 1. Calculate Average

You should have a function named `getAverage` that:

- Takes an array of test scores as a parameter.
- Returns the **average** score of the entire array.

### 2. Determine Letter Grade

You should have a function named `getGrade` that takes a student score and returns a string based on the following scale:

| Score Range | Grade |
| :---------- | :---- |
| 100         | "A+"  |
| 90 - 99     | "A"   |
| 80 - 89     | "B"   |
| 70 - 79     | "C"   |
| 60 - 69     | "D"   |
| 0 - 59      | "F"   |

### 3. Check Passing Status

You should have a function named `hasPassingGrade` that:

- Takes a score as a parameter.
- **Uses the `getGrade` function** to retrieve the letter grade.
- Returns `true` if the grade is anything other than "F", and `false` otherwise.

### 4. Generate Student Message

You should have a function named `studentMsg` that takes an array of class scores and a specific student's score.

- Use `getAverage` and `getGrade` within this function.
- **Return Format (Pass):** `"Class average: [avg]. Your grade: [grade]. You passed the course."`
- **Return Format (Fail):** `"Class average: [avg]. Your grade: [grade]. You failed the course."`

## Logic Visualization

| Function          | Input           | Dependency               | Output Example                                               |
| :---------------- | :-------------- | :----------------------- | :----------------------------------------------------------- |
| `getAverage`      | `[80, 90, 100]` | None                     | `90`                                                         |
| `getGrade`        | `85`            | None                     | `"B"`                                                        |
| `hasPassingGrade` | `55`            | `getGrade`               | `false`                                                      |
| `studentMsg`      | `[...], 75`     | `getAverage`, `getGrade` | `"Class average: 82. Your grade: C. You passed the course."` |

## Tech Stack

`JavaScript` `Function Composition` `Arrays` `Arithmetic Operators` `Conditional Logic (if/else / switch)` `String Template Literals`
