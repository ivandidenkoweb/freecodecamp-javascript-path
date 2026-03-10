# Build a Golf Score Translator

In the game of Golf, each hole has a **par**, which is the average number of **strokes** a golfer is expected to make. Depending on the difference between the actual strokes and the par, each score has a specific nickname.

## Objective

Write a function that translates the relationship between `par` and `strokes` into the correct golf terminology.

## User Stories

1. **Function Definition**: Create a function named `golfScore`.
2. **Parameters**: The function should take two numeric arguments: `par` and `strokes`.
3. **Return Value**: The function must return a **string** based on the logic below.

## Score Logic Table

| Strokes              | Return Value     |
| :------------------- | :--------------- |
| `strokes == 1`       | `"Hole-in-one!"` |
| `strokes <= par - 2` | `"Eagle"`        |
| `strokes == par - 1` | `"Birdie"`       |
| `strokes == par`     | `"Par"`          |
| `strokes == par + 1` | `"Bogey"`        |
| `strokes == par + 2` | `"Double Bogey"` |
| `strokes >= par + 3` | `"Go Home!"`     |

## Implementation Notes

- Since the conditions are checked in order, the order of your `if/else if` statements matters (e.g., check for a Hole-in-one first).
- The function should handle any numeric input for par and strokes.

## Tech Stack

`JavaScript` `Conditional Logic (if/else if)` `Comparison Operators` `Arithmetic Operators`
