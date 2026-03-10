# Build a Lightbox Viewer

In this lab, you will create an interactive image gallery using a "Lightbox" pattern. This UI component enhances the user experience by allowing visitors to focus on high-resolution images within a modal window without leaving the current page.

## Description

The goal is to display a set of thumbnails that, when clicked, trigger a full-screen overlay (the lightbox). This overlay will dynamically load the high-resolution version of the specific image selected and provide a simple way to close the view.

## Objective

Fulfill the user stories below to build a functional, responsive gallery with a dynamic modal overlay.

## User Stories

### 1. HTML Structure

- **The Gallery**: Create a `div` with the class `gallery`. Inside, place three `<img>` elements with the class `gallery-item`. Use the provided `-thumbnail.jpg` links.
- **The Lightbox**: Create a `div` with the class `lightbox`. Inside it, include:
  - A `<button>` with the ID `close-btn` (use `&times;` or "X" as text).
  - An `<img>` with the ID `lightbox-image`.

### 2. CSS Styling (The Modal)

- Set the `.lightbox` to `position: fixed` with `top: 0` and `left: 0`.
- Ensure it covers the entire viewport (`width: 100%`, `height: 100%`).
- Set a background color (usually semi-transparent black).
- **Initial State**: Set `display: none` to keep the lightbox hidden until an image is clicked.

### 3. JavaScript Logic

- **Opening the Lightbox**:
  - Add click event listeners to all `.gallery-item` elements.
  - When clicked, change the `.lightbox` display to `flex`.
  - **Dynamic Source**: Capture the `src` of the clicked thumbnail. Remove the string `-thumbnail` from that URL and assign the result to the `#lightbox-image` source.
- **Closing the Lightbox**:
  - Add click event listeners to the `#close-btn` and the `.lightbox` background.
  - When triggered, set the `.lightbox` display back to `none`.

## Logic Visualization

| Action        | Thumbnail Source (`src`)   | Lightbox Source (`src`) |
| :------------ | :------------------------- | :---------------------- |
| Click Image 1 | `stonehenge-thumbnail.jpg` | `stonehenge.jpg`        |
| Click Image 2 | `storm-thumbnail.jpg`      | `storm.jpg`             |
| Click Close   | N/A                        | (Lightbox Hidden)       |

## Tech Stack

`HTML5` `CSS Flexbox` `JavaScript DOM` `String.replace()` `Event Listeners`
