# Build a Quiz Game

In this lab, you will create the foundational logic for a Quiz Game. You will practice working with nested data structures (arrays of objects) and implementing functions to handle random selection and result validation.

## Objective

Fulfill the user stories below to create a functioning quiz engine that can store questions, pick them randomly, and evaluate answers.

## User Stories

### 1. Data Structure

- Create an array named `questions`.
- The array must contain at least **five objects**. Each object must have the following keys:
  - `category`: A string (e.g., "Science", "History").
  - `question`: A string (the actual question text).
  - `choices`: An array containing **three strings** (potential answers).
  - `answer`: A string (the correct answer).
  - _Note: The `answer` must be one of the items inside the `choices` array._

### 2. Random Selection Functions

- **`getRandomQuestion(questionsArray)`**:
  - Takes the array of questions as a parameter.
  - Returns one **random question object** from that array.
- **`getRandomComputerChoice(choicesArray)`**:
  - Takes an array of choices (from a specific question) as a parameter.
  - Returns one **random string** from those choices (simulating a computer's "guess").

### 3. Result Validation

- **`getResults(questionObject, computerChoice)`**:
  - Compares the `computerChoice` against the `questionObject.answer`.
  - If correct, returns: `"The computer's choice is correct!"`
  - If wrong, returns: `"The computer's choice is wrong. The correct answer is: <correct-answer>"`

## Logic Flow

| Function                  | Input                    | Output                |
| :------------------------ | :----------------------- | :-------------------- |
| `getRandomQuestion`       | `questions` array        | Single `{object}`     |
| `getRandomComputerChoice` | `question.choices` array | Single `"string"`     |
| `getResults`              | `{object}`, `"string"`   | Validation `"string"` |

## Tech Stack

`JavaScript` `Arrays of Objects` `Math.random()` `Function Parameters` `Template Literals`
