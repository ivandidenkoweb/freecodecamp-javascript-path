# Build a Record Collection

In this lab, you will create a management function for a musical album collection. This is a classic "CRUD" (Create, Read, Update, Delete) exercise that tests your ability to navigate and modify complex, nested JavaScript objects.

## Context

The collection is an object where each key is a unique `id` representing an album. Each album is its own object containing properties like `artist`, `albumTitle`, and an optional `tracks` array.

## Objective

Implement the `updateRecords` function to handle various update scenarios based on the provided parameters: `records`, `id`, `prop`, and `value`.

## User Stories

1. **Return Value**: The function must **always** return the entire `records` object after any modifications.
2. **Empty Value**: If `value` is an empty string (`""`), delete the specified `prop` from the album with the given `id`.
3. **Non-Track Property**: If `prop` is **not** `"tracks"` and `value` is **not** an empty string, update or set that album's `prop` to the new `value`.
4. **New Tracks**: If `prop` is `"tracks"` and `value` is **not** an empty string, but the album **does not** have a `"tracks"` property, create an empty array, add the `value` to it, and assign it to the property.
5. **Existing Tracks**: If `prop` is `"tracks"` and `value` is **not** an empty string, add the `value` to the **end** of the existing `"tracks"` array.

## Implementation Rules

- **No Direct Reference**: Do not use the global `recordCollection` variable inside your function. Use the `records` parameter provided.
- **Order of Logic**: Use `if/else if` statements to handle the specific conditions in the correct priority.

## Logic Decision Tree

| Condition                             | Action                               |
| :------------------------------------ | :----------------------------------- |
| `value === ""`                        | `delete records[id][prop]`           |
| `prop !== "tracks"` && `value !== ""` | `records[id][prop] = value`          |
| `prop === "tracks"` && `value !== ""` | Check for array, then `.push(value)` |

## Tech Stack

`JavaScript` `Objects` `Arrays` `Delete Operator` `Conditional Logic`
