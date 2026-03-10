# Build a Customer Complaint Form

In this lab, you will implement comprehensive form validation for a customer service portal. This project focuses on **Data Integrity**, using JavaScript to ensure that every piece of information—from email addresses to complex product codes—meets specific business requirements before the form can be submitted.

## Description

The goal is to provide real-time feedback to users as they fill out the form and a final check upon submission. You will use **Regular Expressions** for pattern matching, logical operators for conditional requirements (like the "Other" description fields), and DOM manipulation to visually "green-light" or "red-flag" user input.

## Objective

Fulfill the user stories below to create a robust validation engine using the provided HTML and CSS structure.

## User Stories

### 1. Validation Logic

Your validation should enforce the following rules:

- **Full Name**: Cannot be empty.
- **Email**: Must be a valid email format (e.g., `name@domain.com`).
- **Order Number**: Exactly 10 digits, starting with `2024`.
- **Product Code**: Must follow the pattern `XX##-X###-XX#` (X = letter, # = number).
- **Quantity**: Must be a positive integer.
- **Groups**: At least one checkbox in `#complaints-group` and one radio in `#solutions-group` must be selected.
- **Conditional Logic**: If "Other" is selected in either group, the corresponding description box must have at least 20 characters.

### 2. Required Functions

- **`validateForm()`**: Returns an object where each key (e.g., `email`, `quantity`) has a value of `true` (valid) or `false` (invalid).
- **`isValid(validationObject)`**: Takes the object from `validateForm` and returns a single boolean: `true` if **every** field is valid, otherwise `false`.

### 3. Visual Feedback (Real-Time)

- Listen for the `change` event on form fields.
- **Valid**: Set the border color to **green**.
- **Invalid**: Set the border color to **red**.
- **Note**: For checkboxes and radio buttons, apply the border color to the parent `<fieldset>`.

### 4. Submission Handling

- When the user attempts to submit:
  1. Prevent the default form submission (using `event.preventDefault()`).
  2. Call `isValid()`.
  3. If invalid, highlight all failing fields/fieldsets in **red**.

## Validation Patterns Reference

| Field            | Requirement                 | Regex Suggestion                                   |
| :--------------- | :-------------------------- | :------------------------------------------------- |
| **Order No**     | Starts with 2024, 10 digits | `/^2024\d{6}$/`                                    |
| **Product Code** | `XX##-X###-XX#`             | `/^[a-zA-Z]{2}\d{2}-[a-zA-Z]\d{3}-[a-zA-Z]{2}\d$/` |
| **Email**        | Standard Format             | `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`                     |

## Tech Stack

`JavaScript` `Regular Expressions` `Event Listeners (change, submit)` `DOM Styling` `Logical Operators`
