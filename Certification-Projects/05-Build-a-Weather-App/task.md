# Build a Weather App

In this lab, you will build a dynamic **Weather App** that fetches real-time meteorological data from a proxy API. You will practice handling asynchronous requests, managing DOM updates, and implementing error handling to ensure a smooth user experience.

## Description

A weather application translates complex climate data into a readable format for users. You will implement a city selection system that triggers a fetch request to a REST API. The app will then parse the JSON response—covering temperature, wind, and humidity—and update the interface dynamically, while gracefully handling missing data and network errors.

## Objective

Fulfill the user stories below and get all the tests to pass to complete the Weather App.

## User Stories

### 1. HTML Structure & Selection

- **The Trigger**: You must have a `button` element with an `id` of `get-weather-btn`.
- **City Selection**: You must have a `select` element containing exactly **seven** `option` elements:
  - The first option must have an empty string for both text and `value`.
  - The remaining six options must be: **New York, Los Angeles, Chicago, Paris, Tokyo, London** (values must be lowercase).
- **Selection Logic**: If no city is selected (empty string value), clicking the button should perform no action.

### 2. Data Display Elements

Once a city is selected, the following elements must appear or be updated to display weather information:

- `id="weather-icon"`: An `img` element for the weather icon.
- `id="main-temperature"`: Displays the current temperature (Celsius).
- `id="feels-like"`: Displays the "feels like" temperature.
- `id="humidity"`: Displays the humidity percentage.
- `id="wind"`: Displays wind speed (m/s).
- `id="wind-gust"`: Displays wind gust speed.
- `id="weather-main"`: Displays the primary weather condition (e.g., Clouds, Rain).
- `id="location"`: Displays the name of the selected location.

### 3. Asynchronous Data Fetching

- **The `getWeather` Function**: Create an `async` function that accepts a `city` as an argument.
- **API Integration**: Fetch data from `https://weather-proxy.freecodecamp.rocks/api/city/<CITY>`.
- **Error Handling**: Use `try...catch` to handle errors within this function and log them to the console.

### 4. Application Logic

- **The `showWeather` Function**: Create an `async` function that accepts a `city` parameter and calls `getWeather`.
- **Error UI**: If the fetch fails, display an `alert` with the exact message: `Something went wrong, please try again later.`
- **Data Rendering**:
  - If the data is valid, populate the elements listed in User Story 2.
  - If any specific value from the API is `undefined`, the corresponding element must display `N/A`.

## Tech Stack

`JavaScript ES6+` `Async/Await` `Fetch API` `DOM Manipulation` `JSON Parsing`