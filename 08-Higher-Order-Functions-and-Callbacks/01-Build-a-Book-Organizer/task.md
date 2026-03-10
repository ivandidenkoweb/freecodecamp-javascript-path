# Build a Book Organizer

In this lab, you will practice managing collections of data using arrays of objects. You will focus on two fundamental data manipulation techniques: **filtering** to narrow down a dataset and **sorting** to organize it based on specific criteria.

## Description

The goal is to manage a library of book objects. Each book has a title, an author, and a release year. You will extract a specific subset of these books (those published in 1950 or earlier) and then arrange them chronologically.

## Objective

Fulfill the user stories below to create a structured data set and the logic required to organize it.

## User Stories

### 1. Data Structure

- Declare an array named `books`.
- Populate it with at least **three** objects. Each object must contain:
  - `title`: (string)
  - `authorName`: (string)
  - `releaseYear`: (number)

### 2. The Sorting Callback

Create a function named `sortByYear` that takes two book objects as parameters:

- The function should return `-1` if the `releaseYear` of the first book is smaller than the second.
- The function should return `1` if the `releaseYear` of the first book is bigger than the second.
- The function should return `0` if both `releaseYear` values are equal.

### 3. Filtering Logic

- Filter out books written after a certain year (e.g., 1950) from the `books` array.
- Save the result in a new array named `filteredBooks`.

### 4. Sorting the Result

- Sort the books in the `filteredBooks` array using your `sortByYear` callback.
- Note: The `.sort()` method mutates the array in place, meaning `filteredBooks` will be updated directly.

## Logic Visualization

| Book Title             | Release Year | Step 1: Filter (<= 1950) | Step 2: Sort (Ascending) |
| :--------------------- | :----------- | :----------------------- | :----------------------- |
| The Great Gatsby       | 1925         | Keep                     | 1st                      |
| The Hobbit             | 1937         | Keep                     | 2nd                      |
| 1984                   | 1949         | Keep                     | 3rd                      |
| The Catcher in the Rye | 1951         | Discard                  | -                        |

## Tech Stack

`JavaScript` `Arrays of Objects` `Array.filter()` `Array.sort()` `Callback Functions` `Comparison Logic`
