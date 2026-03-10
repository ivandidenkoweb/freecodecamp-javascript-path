# Build a Card Counting Assistant

In the casino game Blackjack, a player can gain an advantage over the house by keeping track of the relative number of high and low cards remaining in the deck. This strategy is known as **Card Counting**.

## Context

- **High cards** (10, J, Q, K, A) remaining in the deck favor the player.
- **Low cards** (2-6) remaining favor the house.
- When the count is **positive**, the player should bet **high**.
- When the count is **zero or negative**, the player should bet **low**.

## Objective

Fulfill the user stories below to create a logic that tracks the "running count" and provides betting advice.

## User Stories

1.  **Global Variable**: Use `let` to declare a global variable named `count` and initialize it to `0`.
2.  **Function Definition**: Create a function called `cardCounter` that receives a `card` parameter (number or string).
3.  **Parameter Handling**:
    - For values `2` through `10`, the `card` will be a **number**.
    - For all other values ("J", "Q", "K", "A"), the `card` will be a **string**.
4.  **Counting Logic**: Modify the global `count` based on the card received:
    - **+1**: for cards `2`, `3`, `4`, `5`, or `6`.
    - **0 (No change)**: for cards `7`, `8`, or `9`.
    - **-1**: for cards `10`, `"J"`, `"Q"`, `"K"`, or `"A"`.
5.  **Return Value**: The function must return a string containing the current count and a decision separated by a space:
    - If `count > 0` → return `"[count] Bet"` (e.g., `"5 Bet"`)
    - If `count <= 0` → return `"[count] Hold"` (e.g., `"-3 Hold"`)

## Logic Reference Table

| Card Type         | Values                 | Count Change |
| :---------------- | :--------------------- | :----------- |
| **Low Cards**     | 2, 3, 4, 5, 6          | +1           |
| **Neutral Cards** | 7, 8, 9                | 0            |
| **High Cards**    | 10, 'J', 'Q', 'K', 'A' | -1           |

## Tech Stack

`JavaScript` `Global Scope` `Switch/Case or If/Else` `String Concatenation`
