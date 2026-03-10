# Build a Bank Account Management Program

In this lab, you will develop a **Bank Account Management** system using JavaScript classes. You will focus on state management, data persistence within an object, and implementing logic for financial transactions like deposits and withdrawals.

## Description

A bank account program needs to track a running balance and maintain a history of every transaction. You will use a class structure to encapsulate the account's data (balance and transactions) and provide methods to interact with that data safely, ensuring that withdrawals don't exceed the available balance.

## Objective

Fulfill the user stories below and get all the tests to pass to complete the bank account management system.

## User Stories

### 1. Class Initialization

- **The Constructor**: Define a class named `BankAccount`. The constructor must:
  - Set a default `balance` to **0**.
  - Initialize an empty array named `transactions` to store transaction records as objects.
- **Transaction Structure**: Each transaction stored in the `transactions` array should be an object with two properties: `type` and `amount`. The `type` property should be either `deposit` or `withdraw`.

### 2. Deposit Method

Define a method named `deposit` that takes the deposit amount as a parameter.

- **Valid Deposit**: When the amount is greater than **0**:
  - Push a new object to the `transactions` array with a type of `deposit` and the amount deposited.
  - Update the `balance`.
  - Return: `"Successfully deposited $[amount]. New balance: $[balance]"`.
- **Invalid Deposit**: If the amount is less than or equal to **0**, return: `"Deposit amount must be greater than zero."`.

### 3. Withdrawal Method

Define a method named `withdraw` that takes an amount as a parameter.

- **Valid Withdrawal**: When the amount is greater than **0** and less than or equal to the current balance:
  - Push a new object to the `transactions` array with a type of `withdraw` and the amount withdrawn.
  - Update the `balance`.
  - Return: `"Successfully withdrew $[amount]. New balance: $[balance]"`.
- **Invalid Withdrawal**: If the amount is less than or equal to **0** or greater than the current balance, return: `"Insufficient balance or invalid amount."`.

### 4. Reporting & History

- **Check Balance**: Define a method `checkBalance` that returns: `"Current balance: $[balance]"`.
- **List Deposits**: Define a method `listAllDeposits` that iterates through the `transactions` array and returns all deposits in the format: `"Deposits: amount,amount,..."`.
- **List Withdrawals**: Define a method `listAllWithdrawals` that iterates through the `transactions` array and returns all withdrawals in the format: `"Withdrawals: amount,amount,..."`.

### 5. Implementation Requirements

- Create a new instance of `BankAccount` named `myAccount`.
- **Testing Constraints**: Your `myAccount` instance must fulfill the following:
  - Have at least **five** transactions total.
  - Have at least **two** deposits.
  - Have at least **two** withdrawals.
  - Maintain a final balance greater than **$100**.

## Tech Stack

`JavaScript ES6 Classes` `Array.prototype.push` `Array.prototype.filter` `Template Literals` `Object-Oriented Programming`