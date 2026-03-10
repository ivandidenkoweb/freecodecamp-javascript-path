# Build a RegEx Sandbox

In this lab, you will build a Regular Expression (RegEx) tester. This tool allows developers to input a pattern and a string to see exactly how the RegEx engine identifies and captures data. You will focus on dynamic pattern creation, flag handling, and string manipulation to provide visual feedback.

## Description

A RegEx Sandbox takes a user-defined pattern (like `/[a-z]/`) and applies it to a target string. Your app will need to account for specific "flags" (Global and Case-Insensitive) that change how the search is performed, and then use HTML wrapping to "highlight" those matches in the UI.

## Objective

Fulfill the user stories below to enable the sandbox functionality using the pre-provided HTML and CSS structure.

## User Stories

### 1. Element Selection

Access the following DOM elements and store them in these specific variables:

- `#pattern` → `regexPattern`
- `#test-string` → `stringToTest`
- `#test-btn` → `testButton`
- `#result` → `testResult`
- `#i` (checkbox) → `caseInsensitiveFlag`
- `#g` (checkbox) → `globalFlag`

### 2. Flag Management

Create a function named `getFlags`:

- It should check the `.checked` property of your flag variables.
- It must return a single string of the active flags (e.g., `"ig"`, `"g"`, or `""` if none are selected).

### 3. Execution & Highlighting

When the `testButton` is clicked:

- **Create the RegEx**: Use the `new RegExp()` constructor, passing in the value from `regexPattern` and the result from your `getFlags` function.
- **Identify Matches**:
  - If matches are found, update the inner HTML of the test area by replacing matches with `<span class="highlight">matchText</span>`.
  - **Tip**: Use the `.replace()` method with a callback or a special replacement pattern to ensure you don't lose the original text casing.

### 4. Reporting Results

Update the `#result` element based on the outcome:

- **If matches exist**: Display the matched strings. If there are multiple matches (due to the global flag), separate them with a comma and a space (e.g., `apple, orange, banana`).
- **If no match**: Display the exact text `no match`.

## Logic Visualization

| Pattern | String                | Flags  | Result Highlight                                                     | Result Text |
| :------ | :-------------------- | :----- | :------------------------------------------------------------------- | :---------- |
| `fox`   | `The quick brown fox` | None   | `... brown <span class="highlight">fox</span>`                       | `fox`       |
| `a`     | `Abba`                | `i, g` | `<span class="highlight">A</span>bb<span class="highlight">a</span>` | `A, a`      |
| `z`     | `Hello`               | None   | (No highlight)                                                       | `no match`  |

## Tech Stack

`JavaScript` `RegExp Constructor` `String.match()` `String.replace()` `DOM Selection` `Event Listeners`