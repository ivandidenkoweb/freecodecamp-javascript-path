# Implement a DNA Pair Generator

In this lab, you will simulate the biological process of DNA base pairing. In a DNA double helix, specific nitrogenous bases always pair with a corresponding partner to maintain the structural integrity of the genetic code.

## Description

The goal is to take a string representing a single strand of DNA and generate its complementary pairs. Your function will transform each character into a two-element array containing the original base and its match.

## Objective

Fulfill the user stories below to create a function that handles DNA strands of any length, converting them into a structured 2D array.

## User Stories

1. **Function Definition**: Create a function named `pairElement` that accepts one argument: `str` (the DNA sequence string).
2. **Pairing Logic**:
   - **A (Adenine)** always pairs with **T (Thymine)**.
   - **T (Thymine)** always pairs with **A (Adenine)**.
   - **C (Cytosine)** always pairs with **G (Guanine)**.
   - **G (Guanine)** always pairs with **C (Cytosine)**.
3. **Implementation Steps**:
   - Iterate through each character of the input string.
   - For each character, identify its partner using a `switch` statement or an object lookup.
   - Create a sub-array for each character: `[original, partner]`.
4. **Return Value**: The function must return a **2D array** (an array of arrays) containing all the pairs in the order they appeared in the input string.

## Logic Visualization

| Input Character | Pair (Sub-array) |
| :-------------- | :--------------- |
| `"A"`           | `["A", "T"]`     |
| `"T"`           | `["T", "A"]`     |
| `"C"`           | `["C", "G"]`     |
| `"G"`           | `["G", "C"]`     |

**Example Trace:** Input: `"GCG"` → Output: `[["G", "C"], ["C", "G"], ["G", "C"]]`

## Tech Stack

`JavaScript` `String.split()` `Array.map()` `Switch Statements` `Object Mapping` `2D Arrays`

