# JavaScript Fundamentals

A structured collection of JavaScript notes, explanations, and runnable examples covering the language from core fundamentals to more advanced concepts such as closures, asynchronous programming, prototypes, inheritance, and AJAX.

The examples are primarily written for learning, experimentation, and building a clear mental model of how JavaScript works.

---

## Topics Covered

### 1. JavaScript Basics

* What JavaScript is
* JavaScript as a programming language
* JavaScript engines
* JIT compilation
* Host environments
* Browser vs. Node.js
* JavaScript execution
* Statements and expressions
* Case-sensitive identifiers
* JavaScript in HTML
* External scripts
* Internal scripts
* `defer`
* `async`
* Strict mode

---

### 2. Values and Data Types

* Primitive values
* Objects
* `undefined`
* `null`
* `boolean`
* `number`
* `bigint`
* `string`
* `symbol`
* Object values
* `typeof`
* `typeof null === "object"`
* Value identity
* Object identity
* References
* Mutable vs. immutable values
* Simplified stack/heap mental model

---

### 3. Variables, Scope, and Hoisting

* `var`
* `let`
* `const`
* Variable declarations
* Assignment
* Global scope
* Function scope
* Block scope
* Lexical scope
* Hoisting
* Temporal Dead Zone (TDZ)
* Implicit globals
* Strict mode and undeclared variables

---

### 4. Type Conversion and Coercion

* Implicit type coercion
* Explicit type conversion
* `==`
* `===`
* `!=`
* `!==`
* `Boolean()`
* `Number()`
* `String()`
* Unary `+`
* `parseInt()`
* `parseFloat()`
* Radix
* String-to-number conversion
* Boolean conversion
* Truthy and falsy values

---

### 5. Numbers

* Number primitives
* Number objects
* Number literals
* Decimal numbers
* Hexadecimal
* Binary
* Octal
* Scientific notation
* IEEE 754 floating-point representation
* Floating-point precision
* `0.1 + 0.2`
* `NaN`
* `Infinity`
* `-Infinity`
* `-0`
* `Number.MAX_VALUE`
* `Number.MIN_VALUE`
* `Number.MAX_SAFE_INTEGER`
* `Number.MIN_SAFE_INTEGER`
* `Number.isNaN()`
* `Number.isFinite()`
* `Number.isInteger()`
* `toFixed()`
* `toPrecision()`
* `toString()`
* `toLocaleString()`

---

### 6. Strings

* String primitives
* String immutability
* String indexing
* `.length`
* `charAt()`
* `slice()`
* `substring()`
* `substr()` and its legacy status
* `indexOf()`
* `lastIndexOf()`
* `includes()`
* `startsWith()`
* `endsWith()`
* `replace()`
* `replaceAll()`
* `split()`
* `trim()`
* `toUpperCase()`
* `toLowerCase()`
* String concatenation
* Template literals
* String interpolation
* Method chaining

---

### 7. Arrays

* Creating arrays
* Array indexing
* Array length
* Array holes
* Arrays as objects
* `Array.isArray()`
* Array references
* Mutating vs. non-mutating methods
* `push()`
* `pop()`
* `shift()`
* `unshift()`
* `splice()`
* `slice()`
* `reverse()`
* `sort()`
* `map()`
* `filter()`
* `reduce()`
* `reduceRight()`
* `forEach()`
* `find()`
* `findIndex()`
* `includes()`
* `join()`
* `delete` and array holes
* Spread syntax with arrays

---

### 8. Operators and Expressions

* Arithmetic operators
* Assignment operators
* Comparison operators
* Logical operators
* Increment and decrement
* Unary operators
* Ternary operator
* `typeof`
* `instanceof`
* `in`
* Operator precedence
* Short-circuit evaluation
* Comma operator

---

### 9. Truthy, Falsy, and Logical Operators

* Truthy values
* Falsy values
* Logical AND `&&`
* Logical OR `||`
* Nullish coalescing `??`
* Short-circuit evaluation
* Returning values from `&&` and `||`
* Difference between `||` and `??`

---

### 10. Functions

* Function declarations
* Function expressions
* Arrow functions
* Parameters
* Arguments
* Default parameters
* Rest parameters
* Return values
* Missing arguments
* Extra arguments
* First-class functions
* Callback functions
* Higher-order functions
* Function overloading limitations
* `arguments`
* `arguments.length`
* Array-like objects
* Converting `arguments` to arrays

---

### 11. `this`

* What `this` represents
* Method calls
* Function calls
* Constructor calls
* `this` with `new`
* `this` in arrow functions
* Call-site behavior
* `call()`
* `apply()`
* `bind()`
* Method borrowing
* Pre-filled arguments with `bind()`

---

### 12. Closures and Lexical Scope

* Lexical scope
* Nested functions
* Closures
* Persistent state
* Private-like state
* Multiple independent closures
* Closure with loops
* `var` closure problem
* `let` and loop closures
* Closures with callbacks
* Closures with `setTimeout()`
* Closure-based counters

---

### 13. Asynchronous JavaScript

* Synchronous execution
* Asynchronous execution
* Callbacks
* `setTimeout()`
* `setInterval()`
* `clearTimeout()`
* `clearInterval()`
* Event loop
* Call stack
* Task/callback queue
* Web APIs in browsers
* Minimum timer delay
* Why `setTimeout()` does not pause a loop

---

### 14. Promises

* Promise concept
* Pending
* Fulfilled
* Rejected
* `Promise`
* `.then()`
* `.catch()`
* `.finally()`
* Promise chaining
* Returning promises
* Error propagation
* `Promise.all()`
* `Promise.allSettled()`
* `Promise.race()`
* `Promise.any()`

---

### 15. `async` / `await`

* `async` functions
* `await`
* Awaiting promises
* Sequential asynchronous operations
* Error handling with `try...catch`
* Returning values from async functions
* Async function return values
* Promise-based control flow

---

### 16. Objects

* Object literals
* Properties
* Methods
* Property access
* Dot notation
* Bracket notation
* Computed properties
* Object references
* Object identity
* Adding properties
* Updating properties
* Deleting properties
* Nested objects
* Object destructuring
* Shallow copying
* Spread syntax

---

### 17. Object Utilities

* `Object.keys()`
* `Object.values()`
* `Object.entries()`
* `Object.assign()`
* `Object.hasOwn()`
* `hasOwnProperty()`
* `Object.create()`
* `Object.getPrototypeOf()`
* `Object.setPrototypeOf()`
* `Object.getOwnPropertyNames()`

---

### 18. Property Descriptors

* Property descriptors
* `writable`
* `enumerable`
* `configurable`
* `value`
* `get`
* `set`
* `Object.defineProperty()`
* Read-only properties
* Non-enumerable properties
* Configurable properties

---

### 19. Constructors and `new`

* Constructor functions
* Constructor naming convention
* `new`
* Creating instances
* Constructor parameters
* Constructor properties
* What `new` does conceptually
* `this` inside constructors
* Constructor return behavior
* `instanceof`
* Constructor prototypes
* `constructor` property

---

### 20. Factory Functions

* Factory functions
* Returning objects from functions
* Factory vs. constructor
* `new` vs. explicit object creation
* Instance state
* Shared behavior through prototypes

---

### 21. Prototypes

* Prototype objects
* `prototype`
* `[[Prototype]]`
* Prototype lookup
* Prototype inheritance
* Prototype chain
* `Object.prototype`
* `null` as the end of the prototype chain
* Own vs. inherited properties
* Property shadowing
* Shared prototype methods
* `__proto__`
* `Object.getPrototypeOf()`
* `Object.setPrototypeOf()`
* `Object.create()`

---

### 22. Inheritance

* Prototype-based inheritance
* Constructor inheritance
* Pseudo-classical inheritance
* Inheriting from another prototype
* `Object.create()`
* Constructor chaining
* Calling a parent constructor
* Method overriding
* Prototype method inheritance
* `instanceof` with inheritance
* ES6 `class`
* `extends`
* `super`
* Parent constructors
* Parent methods
* Static inheritance

---

### 23. Classes

* Class declarations
* Constructors
* Instance properties
* Instance methods
* `extends`
* `super()`
* Method overriding
* Static methods
* Static properties
* Private fields
* Class inheritance
* Relationship between classes and prototypes

---

### 24. Modern JavaScript Syntax

* `let`
* `const`
* Arrow functions
* Template literals
* Destructuring
* Default parameters
* Rest parameters
* Spread syntax
* Optional chaining `?.`
* Nullish coalescing `??`
* Enhanced object literals
* Computed property names
* Shorthand properties
* Shorthand methods

---

### 25. Date and Math

#### `Math`

* `Math.PI`
* `Math.random()`
* `Math.floor()`
* `Math.ceil()`
* `Math.round()`
* `Math.trunc()`
* `Math.min()`
* `Math.max()`
* Random number ranges
* Spread with `Math.min()` / `Math.max()`

#### `Date`

* Creating dates
* `new Date()`
* `getFullYear()`
* `getMonth()`
* `getDate()`
* `getDay()`
* `getHours()`
* `getMinutes()`
* `toLocaleString()`
* Zero-based months
* Zero-based weekdays

---

### 26. Browser APIs

* `window`
* Browser environment
* `alert()`
* `prompt()`
* `confirm()`
* `setTimeout()`
* `setInterval()`
* `window.location`
* `window.history`
* `window.navigator`
* `window.screen`
* `window.innerWidth`
* `window.innerHeight`
* `window.open()`
* `window.close()`
* `window.opener`

---

### 27. DOM

* Document Object Model
* DOM tree
* Element selection
* `getElementById()`
* `getElementsByClassName()`
* `getElementsByTagName()`
* `querySelector()`
* `querySelectorAll()`
* Text manipulation
* `textContent`
* `innerText`
* `innerHTML`
* Attributes
* `dataset`
* `classList`
* Inline styles
* `getComputedStyle()`
* DOM traversal
* Creating elements
* Removing elements
* Cloning elements
* `DocumentFragment`
* DOM measurements
* Scrolling

---

### 28. Events

* Event handlers
* Inline event handlers
* Event properties
* `addEventListener()`
* `removeEventListener()`
* Mouse events
* Keyboard events
* Form events
* Input events
* Focus events
* Clipboard events
* Drag and drop
* Pointer events
* Touch events
* Event object
* `target`
* `currentTarget`
* Event bubbling
* Event capturing
* Event delegation
* `preventDefault()`
* `stopPropagation()`
* Event listener options
* Custom events

---

### 29. AJAX and HTTP

AJAX means **Asynchronous JavaScript and XML**. Despite the name, modern AJAX applications commonly exchange **JSON** rather than XML.

Topics include:

* What AJAX means
* Client-server communication
* HTTP requests
* HTTP methods
* `GET`
* `POST`
* `PUT`
* `PATCH`
* `DELETE`
* HTTP status codes
* Request headers
* Response headers
* JSON
* `JSON.stringify()`
* `JSON.parse()`
* `XMLHttpRequest`
* `fetch()`
* Promises with `fetch()`
* `response.json()`
* Handling HTTP errors
* Request and response bodies
* Asynchronous data loading
* Sending data to a server

---

### 30. Modules

* JavaScript modules
* `export`
* `import`
* Named exports
* Default exports
* Import aliases
* Module scope
* `type="module"`
* Module dependencies
* Separating code into files

---

### 31. Error Handling

* Runtime errors
* `try`
* `catch`
* `finally`
* `throw`
* `Error`
* `TypeError`
* `ReferenceError`
* `SyntaxError`
* Handling promise rejections
* Error propagation

---

## Important Mental Models

These notes emphasize several mental models that are useful when learning JavaScript:

### Values vs. References

Primitive values behave as values, while objects are reference-based entities with identity.

```js
const a = [10, 20];
const b = a;

console.log(a === b); // true
```

Both variables refer to the same array object.

---

### Primitive vs. Object

```js
const a = 10;
const b = 10;

console.log(a === b); // true
```

But:

```js
const a = [10];
const b = [10];

console.log(a === b); // false
```

The arrays contain the same value but are different objects.

---

### Scope

A variable's accessibility depends on where it is declared.

```js
function test() {
    let value = 10;
}

console.log(value); // ReferenceError
```

---

### Closures

A function can retain access to variables from its lexical environment even after the outer function has finished executing.

```js
function createCounter() {
    let count = 0;

    return function () {
        return count++;
    };
}

const counter = createCounter();

console.log(counter()); // 0
console.log(counter()); // 1
console.log(counter()); // 2
```

---

### Prototype Chain

Objects can inherit properties and methods through their prototype chain.

```text
object
   ↓
Constructor.prototype
   ↓
Object.prototype
   ↓
null
```

---

### Asynchronous JavaScript

JavaScript normally executes synchronous code sequentially, while asynchronous APIs allow work to be scheduled for later.

```js
console.log("A");

setTimeout(() => {
    console.log("B");
}, 0);

console.log("C");
```

Output:

```text
A
C
B
```

---

## Learning Approach

The recommended way to use these notes is:

1. Read one concept.
2. Run the example.
3. Predict the output before executing it.
4. Explain why the output occurs.
5. Change the example.
6. Run it again.
7. Create your own example.
8. Compare similar concepts.
9. Practice without looking at the original example.

The goal is not only to memorize syntax, but to understand **why JavaScript behaves the way it does**.

---

## Important Notes

Some examples use simplified mental models to make difficult concepts easier to understand.

For example:

* The **stack/heap model** is useful for learning about primitive values and objects, but it is not a complete specification of JavaScript's internal memory model.
* **Hoisting** is a useful learning term, but JavaScript engines do not literally move every declaration to the top of the source code.
* **AJAX** is a general technique rather than a single JavaScript API.
* **Classes** provide class-style syntax, but JavaScript's inheritance model remains prototype-based.
* Constructor functions are included because they help explain how prototypes and `class` work.
* `__proto__` is included for understanding existing JavaScript code, but modern code should generally prefer `Object.getPrototypeOf()` and `Object.setPrototypeOf()`.
* Legacy APIs and patterns are identified where appropriate rather than presented as preferred modern practice.

---

## Modern JavaScript

The examples aim to distinguish between:

* Historical JavaScript patterns
* Concepts useful for understanding existing code
* Modern JavaScript syntax
* Recommended contemporary patterns

For example:

```js
// Older pattern
const values = Array.prototype.slice.call(arguments);

// Modern alternative
const values = [...arguments];
```

And:

```js
// Constructor function
function Person(name) {
    this.name = name;
}

// Modern class syntax
class Person {
    constructor(name) {
        this.name = name;
    }
}
```

Understanding the older patterns is still valuable because many JavaScript concepts are built upon them.

---

## Purpose

These notes are intended to provide a personal reference for understanding:

* How JavaScript represents values
* How variables and scope work
* How functions execute
* How closures preserve state
* How `this` is determined
* How callbacks and asynchronous code work
* How promises and `async/await` work
* How objects and prototypes work
* How inheritance works
* How constructors and classes relate to prototypes
* How JavaScript communicates with servers
* How JavaScript interacts with the browser
* How modern JavaScript syntax simplifies common patterns

The emphasis is on **understanding JavaScript's behavior**, not simply memorizing syntax.

---

## Recommended Practice

For every concept:

```text
Read
  ↓
Predict
  ↓
Run
  ↓
Explain
  ↓
Modify
  ↓
Experiment
  ↓
Build something
```

A useful habit is to ask:

> **What exactly is happening here, and why?**

---

**Status:** Learning / Personal Notes
