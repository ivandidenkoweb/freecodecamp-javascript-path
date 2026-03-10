# Build a Set of Football Team Cards

In this lab, you will build a dynamic sports roster. This project focuses on managing complex data structures (nested objects and arrays) and implementing real-time UI updates based on user selection via a dropdown menu.

## Description

The goal is to store football team information in a central JavaScript object and render that data onto the web page. You will also implement a filter system that allows users to view players by their specific positions (forward, midfielder, defender, or goalkeeper).

## Objective

Fulfill the user stories below to create a structured data model and a responsive filtering system.

## User Stories

### 1. The Data Structure

Create a `footballTeam` object containing:

- `team`: (string) e.g., "Argentina"
- `year`: (number) e.g., 1986
- `headCoach`: (string) e.g., "Carlos Bilardo"
- `players`: An array of at least **four** objects. Each player object must have:
  - `name`: (string)
  - `position`: (must be "forward", "midfielder", "defender", or "goalkeeper")
  - `isCaptain`: (boolean) **Note:** Exactly one player must be `true`.

### 2. Initial Rendering

- Display the `headCoach`, `team`, and `year` in the HTML elements with IDs `#head-coach`, `#team`, and `#year`.
- Render the players inside the `#player-cards` container. Each player needs a `<div class="player-card">` containing:
  - An `<h2>`: Should display the name. If `isCaptain` is true, it must show `(Captain) Player Name`.
  - A `<p>`: Should display `Position: [position]`.

### 3. Dropdown Filtering

- Implement a `<select>` dropdown menu.
- When a specific position is selected, use the `.filter()` method on your `players` array to only show matching cards.
- If "All Players" is selected, the page should reset to show the entire roster.

## Logic Visualization

| Player Name    | Position   | isCaptain | Rendered Heading                    |
| :------------- | :--------- | :-------- | :---------------------------------- |
| Diego Maradona | midfielder | true      | `<h2>(Captain) Diego Maradona</h2>` |
| Sergio Batista | midfielder | false     | `<h2>Sergio Batista</h2>`           |
| Oscar Ruggeri  | defender   | false     | `<h2>Oscar Ruggeri</h2>`            |

## Tech Stack

`JavaScript Objects` `Array.filter()` `Array.map()` `Template Literals` `DOM Manipulation` `Change Event Listener`
