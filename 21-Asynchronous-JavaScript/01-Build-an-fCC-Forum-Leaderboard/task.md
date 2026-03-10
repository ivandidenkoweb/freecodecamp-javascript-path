# Build an fCC Forum Leaderboard

In this lab, you will build a freeCodeCamp forum leaderboard that displays the latest topics, users, and replies. This project focuses on **Asynchronous JavaScript**, **Data Processing**, and **Dynamic DOM Manipulation**, requiring you to transform raw API data into a structured, user-friendly interface.

## Description

A forum leaderboard acts as a real-time dashboard for community activity. You will fetch data from the freeCodeCamp forum API and use various helper functions to format timestamps, normalize view counts, and map category IDs to human-readable labels. This project will sharpen your skills in handling complex nested objects and template literals for HTML generation.

## Objective

Fulfill the user stories below to create a responsive leaderboard that provides auditory and visual feedback.

## User Stories

### 1. Formatting Helpers

- **Time Calculation**: Create a `timeAgo(timestamp)` function that returns:
  - `xm ago` if minutes < 60.
  - `xh ago` if hours < 24.
  - `xd ago` otherwise.
- **View Normalization**: Create a `viewCount(views)` function. If views ≥ 1000, return the value divided by 1000, rounded down, with a `k` appended (e.g., `1.2k`). Otherwise, return the raw number.
- **Category Mapping**: Create a `forumCategory(id)` function that returns an anchor element using the `allCategories` object. It should handle missing IDs by defaulting to "General".

### 2. Avatar Logic

- **Avatar Generation**: Create an `avatars(posters, users)` function.
- **Processing**: For each user in the `posters` array, find the matching user in the `users` array by ID.
- **Formatting**: Replace `{size}` in the `avatar_template` with `30`. Ensure relative paths are prefixed with the base `<avatarUrl>`.
- **Output**: Return a string of `img` elements with appropriate `alt` text and `src` attributes.

### 3. Display Logic

- **Latest Posts**: Create a `showLatestPosts(data)` function to extract `users` and `topics` from the API response.
- **Table Generation**: Set the inner HTML of `#posts-container` to a series of `tr` elements. Each row must contain five `td` elements:
  1. **Post Details**: Title (link) and Category (link from `forumCategory`).
  2. **Users**: A `div` with class `avatar-container` containing the avatars.
  3. **Replies**: The `posts_count - 1`.
  4. **Views**: The formatted view count.
  5. **Activity**: The time passed since the last bump.

### 4. Data Acquisition

- **Fetch Data**: Create an `async` function named `fetchData`.
- **API Request**: Request data from `forumLatest`, parse it as JSON, and pass it to `showLatestPosts`.
- **Error Handling**: If the fetch fails, log the error specifically using `console.log`.

## Tech Stack

`JavaScript ES6+` `Async/Await` `Fetch API` `DOM Manipulation` `Template Literals` `Regular Expressions`
