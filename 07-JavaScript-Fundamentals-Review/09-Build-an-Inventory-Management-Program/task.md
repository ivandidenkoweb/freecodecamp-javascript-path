# Build an Inventory Management Program

In this lab, you will build a state-management system to track a collection of products. This project focuses on **CRUD operations** (Create, Read, Update, Delete) within an array of objects, requiring careful index management and string normalization.

## Objective

Fulfill the user stories below to create a robust inventory system that handles adding, updating, and removing items while maintaining accurate logs.

## User Stories

### 1. Data Structure

- Declare an empty array named `inventory`.
- Each object in this array must have:
  - `name`: A lowercase string.
  - `quantity`: An integer.

### 2. Find Product Index

Create a function named `findProductIndex` that takes a `name` argument:

- Convert the input name to lowercase.
- Return the **index** of the product object if it exists in the `inventory` array.
- Return `-1` if the product is not found.

### 3. Add or Update Product

Create a function named `addProduct` that takes a product object `{ name, quantity }` as its argument:

- **If product exists**: Add the new quantity to the existing quantity. Log: `"[name] quantity updated"`.
- **If product is new**: Push the object to `inventory`. Log: `"[name] added to inventory"`.

### 4. Remove or Decrease Product

Create a function named `removeProduct` that takes `name` and `quantity` as arguments:

- **If product not found**: Log `"[name] not found"`.
- **If not enough stock**: If the inventory quantity is less than the requested removal, log: `"Not enough [name] available, remaining pieces: [current-quantity]"`.
- **If sufficient stock**: Subtract the quantity.
  - Log: `"Remaining [name] pieces: [new-quantity]"`.
  - **If new quantity is 0**: Completely remove the product object from the `inventory` array.

## Logic Visualization

| Action          | State                             | Input                           | Resulting Log                                |
| :-------------- | :-------------------------------- | :------------------------------ | :------------------------------------------- |
| `addProduct`    | Empty                             | `{name: "apple", quantity: 5}`  | `"apple added to inventory"`                 |
| `addProduct`    | `[{name: "apple", quantity: 5}]`  | `{name: "apple", quantity: 10}` | `"apple quantity updated"`                   |
| `removeProduct` | `[{name: "apple", quantity: 15}]` | `"apple", 10`                   | `"Remaining apple pieces: 5"`                |
| `removeProduct` | `[{name: "apple", quantity: 5}]`  | `"apple", 5`                    | `"Remaining apple pieces: 0"` (Item removed) |

## Tech Stack

`JavaScript` `Arrays of Objects` `Array.findIndex()` `Array.splice()` `String.toLowerCase()` `Conditional Logic` `Console Logging`

