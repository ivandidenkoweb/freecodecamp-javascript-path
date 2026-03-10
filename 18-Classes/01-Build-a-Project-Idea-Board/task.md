# Build a Project Idea Board

In this lab, you will build a Project Idea Board using Object-Oriented Programming (OOP) principles in JavaScript. You will practice creating classes, managing state through object constants, and implementing methods to organize and track the lifecycle of various project ideas.

## Description

A Project Idea Board helps teams track creative concepts from inception to execution. You will implement a system where each "Idea" is an object with a specific status, and the "Board" acts as a container that can pin, unpin, and summarize these ideas. This lab emphasizes the use of classes, constructors, and array manipulation.

## Objective

Fulfill the user stories below to create a functional Project Idea Board system that manages project states and collections.

## User Stories

### 1. Status Configuration

- **Project Status Constants**: Define an object constant named `projectStatus` with three keys: `PENDING`, `SUCCESS`, and `FAILURE`.
- Each key should map to an object with a `description` property:
  - `PENDING`: "Pending Execution"
  - `SUCCESS`: "Executed Successfully"
  - `FAILURE`: "Execution Failed"

### 2. The ProjectIdea Class

- **Constructor**: Create a `ProjectIdea` class that takes `title` and `description` as parameters.
- **Properties**: Initialize `title` and `description`. Set a `status` property to `projectStatus.PENDING` by default.
- **Status Updates**: Define a method `updateProjectStatus(newStatus)` inside the class to update the current status of the idea.

### 3. The ProjectIdeaBoard Class

- **Constructor**: Create a `ProjectIdeaBoard` class that accepts a `title` and initializes an empty array named `ideas`.
- **Pinning Logic**: Define a `pin(idea)` method that adds a `ProjectIdea` instance to the `ideas` array.
- **Unpinning Logic**: Define an `unpin(idea)` method that removes a specific `ProjectIdea` instance from the `ideas` array.

### 4. Reporting and Formatting

- **Count Method**: Define a `count()` method that returns the total number of project ideas currently on the board.
- **String Formatting**: Define a `formatToString()` method that returns a string representation of the board, including the title, description, and status of all ideas.

## Logic Visualization

| Method                       | Action              | Expected Result                |
| :--------------------------- | :------------------ | :----------------------------- |
| `idea.updateProjectStatus()` | Changes `status`    | Updates to SUCCESS or FAILURE  |
| `board.pin(newIdea)`         | Array Push          | `ideas.length` increases by 1  |
| `board.unpin(oldIdea)`       | Array Splice/Filter | `ideas.length` decreases by 1  |
| `board.count()`              | Array Length        | Returns integer count of ideas |

## Tech Stack

`JavaScript ES6` `Classes & Constructors` `Object Constants` `Array Manipulation` `String Interpolation`

---

Would you like me to show you how to implement the `unpin` method using `indexOf` and `splice` to precisely remove the correct object from your array?
