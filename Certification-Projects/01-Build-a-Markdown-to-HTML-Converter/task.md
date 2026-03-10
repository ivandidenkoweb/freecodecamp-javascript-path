# Build a Markdown to HTML Converter

In this lab, you will create a live Markdown parser. Markdown is a lightweight markup language that allows people to write using an easy-to-read plain text format that then converts into structurally valid HTML. You will use **Regular Expressions** to detect specific patterns and transform them into tags.

## Description

The goal is to monitor a text input area in real-time. As the user types Markdown syntax (like `#` for headers or `**` for bold), your script will "translate" that text into HTML tags and update both a raw code output and a rendered preview.

## Objective

Fulfill the user stories below to build the conversion engine using Regex and DOM event handling.

## User Stories

### 1. Functionality & Selection

- Create a function named `convertMarkdown`.
- Inside this function, grab the content from the `#markdown-input` textarea.
- The function must return a string of HTML code.

### 2. Regex Conversion Rules

Your `convertMarkdown` function must use Regular Expressions to handle the following:

- **Headings**:
  - `# text` $\rightarrow$ `<h1>text</h1>`
  - `## text` $\rightarrow$ `<h2>text</h2>`
  - `### text` $\rightarrow$ `<h3>text</h3>`
- **Emphasis**:
  - **Bold**: `**text**` or `__text__` $\rightarrow$ `<strong>text</strong>`
  - **Italic**: `*text*` or `_text_` $\rightarrow$ `<em>text</em>`
- **Media & Links**:
  - **Images**: `![alt](src)` $\rightarrow$ `<img alt="alt" src="src">`
  - **Links**: `[text](url)` $\rightarrow$ `<a href="url">text</a>`
- **Quotes**:
  - `> text` $\rightarrow$ `<blockquote>text</blockquote>`

### 3. Real-Time Updates

- Use the `input` event listener on `#markdown-input`.
- Every time the user types:
  1. Call `convertMarkdown()`.
  2. Display the **raw HTML string** (with tags visible) inside `#html-output`.
  3. **Render** the actual HTML elements inside `#preview`.

## Markdown to HTML Reference

| Markdown             | HTML Equivalent                   |
| :------------------- | :-------------------------------- |
| `### Title`          | `<h3>Title</h3>`                  |
| `**Strong**`         | `<strong>Strong</strong>`         |
| `[Link](http://...)` | `<a href="http://...">Link</a>`   |
| `> Wisdom`           | `<blockquote>Wisdom</blockquote>` |

## Tech Stack

`JavaScript` `Regular Expressions` `String.replace()` `input Event` `DOM manipulation`
