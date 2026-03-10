# Build a Bookmark Manager App

In this lab, you will build a Bookmark Manager application that allows users to save, view, and delete website bookmarks. This project focuses on **State Management** and **Persistence** using the browser's Local Storage to ensure data survives page refreshes.

## Description

A bookmark manager is a practical tool for organizing web resources. You will use JavaScript to handle form toggling, dynamic DOM updates based on categories, and storage logic. The app will store a collection of bookmark objects, each containing a name, category, and URL, providing a seamless way to manage personal links.

## Objective

Fulfill the user stories below to complete the Bookmark Manager app so that it can store and read data from local storage.

## User Stories

### 1. Data Management

- **Get Bookmarks**: You should have a `getBookmarks` function that returns the `bookmarks` array from local storage. If the key is missing or invalid, return an empty array.
- **Data Structure**: The `bookmarks` key in local storage must be an array of objects. Each object should have three keys: `name`, `category`, and `url`.

### 2. Form Navigation

- **Toggle Form**: You should have a function named `displayOrCloseForm` that toggles the `hidden` class on `#main-section` and `#form-section`.
- **Add Button**: When clicking `#add-bookmark-button`, update the inner text of `.category-name` with the selected value from `#category-dropdown` and call `displayOrCloseForm`.
- **Close Form**: When clicking `#close-form-button`, run the function to hide the form section and show the main section.

### 3. Storing Bookmarks

- **Form Submission**: When clicking `#add-bookmark-button-form`, add a new bookmark object to the end of the local storage array using values from `#name`, `#category-dropdown`, and `#url`.
- **Reset**: After updating storage, reset the values of `#name` and `#url` to empty strings and return to the main section.

### 4. Viewing & Deleting Categories

- **Toggle List**: You should have a function named `displayOrHideCategory` that toggles the `hidden` class on `#main-section` and `#bookmark-list-section`.
- **View Category**: When clicking `#view-category-button`, update `.category-name` and modify the inner HTML of `#category-list`:
  - If no bookmarks match the category, show a `<p>` with text `No Bookmarks Found`.
  - If bookmarks exist, create a radio button and a label (containing an `<a>` tag) for each. Radio buttons must share the same `name` attribute.
- **Close List**: Clicking `#close-list-button` should hide the list and show the main section.
- **Delete**: When clicking `#delete-bookmark-button`, remove the bookmark corresponding to the selected radio button from local storage and refresh the list.

## Tech Stack

`JavaScript ES6` `Web Storage API (localStorage)` `JSON.parse / JSON.stringify` `DOM Manipulation` `Event Listeners`