# JavaScript Fundamentals

A collection of simple JavaScript notes and examples covering the fundamentals of the language.

## Topics Covered

- JavaScript basics
- JavaScript in HTML
- `null`
- Objects and references
- Primitive values
- Arrays
- Variable scope
- Hoisting
- Functions
- Numbers and `Number` objects
- Number literals
- IEEE 754 floating-point numbers
- `NaN`
- `Infinity`
- `toFixed()` and `toPrecision()`
- Implicit type coercion
- Explicit type conversion
- `parseInt()` and `parseFloat()`
- `Number()`
- `==` vs `===`
- Boolean conversion
- `prompt()`

## Purpose

These notes are intended as a personal reference for understanding how JavaScript works, especially:

- Values vs. references
- Primitive values vs. objects
- Scope and hoisting
- Numbers and floating-point precision
- Type conversion and coercion

## Example

```js
var arr1 = [10, 20, 30];
var arr2 = [10, 20, 50];

console.log(arr1 === arr2); // false

arr1 = arr2;

console.log(arr1 === arr2); // true
```

## Notes

The examples are written primarily for learning and experimentation.

Some explanations use simplified mental models, such as the **stack/heap model**, to make JavaScript concepts easier to understand.

## Recommended Learning Approach

1. Read the concept.
2. Run the examples.
3. Predict the output before running the code.
4. Change the examples and observe what happens.
5. Write your own small examples.

---

**Status:** Learning / Personal Notes
