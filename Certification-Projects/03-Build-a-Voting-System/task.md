# Build a Voting System

In this lab, you will build a voting system that uses **Map** to create a poll and **Set** to prevent duplicate voting. This project focuses on managing structured data where keys map to unique collections of values, ensuring data integrity.

## Description

A voting system allows users to add options to a poll and cast unique votes. By using a `Map` to store the poll and a `Set` for each option's voters, the system automatically handles the logic of uniqueness—if a voter tries to vote for the same option twice, the `Set` will ensure only one entry exists.

## Objective

Fulfill the user stories below and get all the tests to pass to complete the lab.

## User Stories

### 1. Initialization

- **The Poll**: You should initialize a `poll` variable to a new `Map` object.
- **Initial Options**: You should have at least **three options** in your poll.
- **Initial Votes**: Your poll should have at least **three votes**.

### 2. The `addOption` Function

You should have a function `addOption` that accepts a parameter `option`.

- **Empty Check**: If you try to add an empty option, the function should return the message: `Option cannot be empty.`
- **New Option**: If the `option` does not already exist in the poll, it should be added to the poll with an empty `Set` as its value to track voters. You should also return the message: `Option "<option>" added to the poll.`
- **Duplicate Option**: If the `option` already exists, it should return the message: `Option "<option>" already exists.`

### 3. The `vote` Function

You should have a function `vote` that accepts two parameters: `option` (the option to vote for) and `voterId` (a unique ID for the voter).

- **Existence Check**: If the `option` does not exist in the poll, the function should return the message: `Option "<option>" does not exist.`
- **Duplicate Vote**: If the `voterId` has already voted for this `option`, the function should return the message: `Voter <voterId> has already voted for "<option>".`
- **Successful Vote**: If the voter has not voted, `voterId` should be added to the `Set` of voters for this option. The function should return the message: `Voter <voterId> voted for "<option>".`

### 4. Results Logic

- **Display Results**: You should have a function `displayResults` that returns the poll results in the following format:

**Example Output:**

```text
Poll Results:
Turkey: 2 votes
Morocco: 1 votes
```

## Tech Stack

`JavaScript` `ES6+` `Map Object` `Set Object` `Conditional Logic` `String Interpolation`
