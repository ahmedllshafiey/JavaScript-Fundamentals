# JavaScript Fundamentals

A collection of practical JavaScript notes, explanations, and examples covering the fundamentals of the language.

The notes focus on understanding how JavaScript behaves rather than only memorizing syntax.

## Topics Covered

### JavaScript Basics

- JavaScript fundamentals
- JavaScript engines
- Dynamic typing
- JavaScript execution model
- Case sensitivity
- JavaScript in HTML
- External and internal scripts
- `defer` and `async`
- Programs and instructions

### Values and Types

- `null`
- Primitive values
- Objects
- Object identity and state
- References
- Simplified stack/heap mental model
- `typeof`
- Wrapper objects
- `Number` objects
- `Boolean` objects

### Variables and Scope

- Global scope
- Function scope
- Block scope
- `var`
- `let`
- `const`
- Implicit global variables
- Hoisting
- Temporal Dead Zone (TDZ)

### Numbers

- Primitive numbers
- `Number` objects
- Number literals
- Decimal numbers
- Hexadecimal numbers
- Octal numbers
- Binary numbers
- Scientific notation
- IEEE 754 floating-point representation
- Floating-point precision
- `Number.MAX_VALUE`
- `Number.MIN_VALUE`
- `Number.MAX_SAFE_INTEGER`
- `Number.MIN_SAFE_INTEGER`
- `Infinity`
- `Number.isFinite()`
- `toFixed()`
- `toString()`
- `toLocaleString()`

### Type Conversion and Coercion

- Implicit type coercion
- Explicit type conversion
- `==` vs `===`
- Numeric conversion
- Boolean conversion
- String conversion
- Unary `+`
- `Number()`
- `parseInt()`
- `parseFloat()`
- `NaN`
- `Number.isNaN()`
- Global `isNaN()`
- Whitespace conversion

### Strings

- String primitives
- String immutability
- `length`
- Indexing
- `charAt()`
- `substring()`
- `slice()`
- `substr()`
- `indexOf()`
- `lastIndexOf()`
- `replace()`
- Regular expressions
- `toLowerCase()`
- `toUpperCase()`
- Method chaining
- `split()`
- String manipulation

### Arrays

- Array creation
- Array indexing
- Array references
- Mixed-type arrays
- Array constructors
- Array `length`
- Empty slots
- `delete`
- `push()`
- `pop()`
- `shift()`
- `unshift()`
- `splice()`
- `reverse()`
- `sort()`
- `slice()`
- `map()`
- `filter()`
- `reduce()`
- `reduceRight()`
- Mutating vs. non-mutating methods
- Array predicates
- Numeric sorting

### Logical Operators

- Truthy and falsy values
- Logical AND `&&`
- Logical OR `||`
- Nullish coalescing `??`
- Short-circuit evaluation
- Operand-returning behavior

### Functions

- Function declarations
- Function expressions
- Function parameters
- Missing arguments and `undefined`
- `arguments`
- Variable-length arguments
- First-class functions
- Callback functions
- Returning functions
- Function properties
- Function overloading limitations

### Objects and `this`

- Object literals
- Object properties
- Object methods
- `this`
- Method calls
- Constructor functions
- The `new` operator
- Constructor instances
- Instance properties
- Prototypes and constructor behavior

### Browser APIs

- `prompt()`
- User input
- String values returned from `prompt()`
- `null` returned by `prompt()` when cancelled

### Date and Math

- `Date`
- `getMonth()`
- `getDay()`
- `getDate()`
- Locale-based date formatting
- `toLocaleString()`
- `Math`
- `Math.PI`
- `Math.random()`
- Random number ranges

---

## Purpose

These notes are intended as a personal reference for understanding how JavaScript works.

The main goal is to understand the behavior behind the syntax, especially:

- Values vs. references
- Primitive values vs. objects
- Object identity
- Scope and hoisting
- `var`, `let`, and `const`
- Function behavior
- `this` and constructor functions
- Numbers and floating-point precision
- Type conversion and coercion
- String immutability
- Array mutation
- Truthy and falsy values
- Logical operators
- First-class functions

---

## Example

Objects and arrays are assigned by reference.

```js
var arr1 = [10, 20, 30];
var arr2 = [10, 20, 50];

console.log(arr1 === arr2);
// false

arr1 = arr2;

console.log(arr1 === arr2);
// true
```

`arr1` and `arr2` initially refer to different array objects.

After:

```js
arr1 = arr2;
```

both variables refer to the same array object.

---

## Another Example

JavaScript functions are first-class values.

```js
var Add = function (x, y) {
  return x + y;
};

console.log(Add(5, 10));
// 15
```

A function can also be passed to another function:

```js
function process(value, callback) {
  return callback(value);
}

console.log(
  process(10, function (x) {
    return x * 2;
  }),
);

// 20
```

---

## Important Mental Models

Some concepts are easier to understand using simplified mental models.

### References

```text
variable
   |
   v
reference
   |
   v
object
```

Assigning one object variable to another copies the reference, not the object itself.

### Stack and Heap

The notes sometimes use a simplified stack/heap model:

```text
Stack                  Heap

arr1 ────────────────> [10, 20, 50]
arr2 ────────────────> ^
```

This is a conceptual model for understanding references and object identity.

It should not be interpreted as a strict specification of how every JavaScript engine manages memory.

---

## Learning Approach

A recommended way to use these notes:

1. Read one concept at a time.
2. Run the examples.
3. Predict the output before executing the code.
4. Change the values.
5. Observe how the output changes.
6. Try to explain _why_ the output changed.
7. Write your own small examples.
8. Revisit confusing concepts and test them experimentally.

For example, before running:

```js
console.log("5" + 2);
console.log("5" - 2);
console.log("5" === 5);
console.log("5" == 5);
```

try to predict each result first.

---

## Notes

The examples are primarily written for learning, experimentation, and personal reference.

Some examples intentionally demonstrate behavior that is discouraged in production code, such as:

- Implicit global variables
- `new Number()`
- `new Boolean()`
- `substr()`
- Loose equality with `==`

These examples are included because understanding how JavaScript behaves is useful even when the behavior is not recommended for everyday code.

The notes distinguish between:

- **How JavaScript behaves**
- **What is generally recommended in modern JavaScript**

---

## Modern JavaScript

These notes contain examples using older syntax such as:

```js
var
```

and traditional function syntax because they are useful for understanding JavaScript fundamentals.

Modern JavaScript also provides:

```js
let
const
```

as well as:

```js
class
arrow functions
modules
destructuring
spread syntax
optional chaining
async/await
```

These topics can be studied separately after the fundamentals covered here.

---

## Status

**Learning / Personal Notes**

The examples are intended for experimentation and continued revision as JavaScript concepts are studied in greater depth.
