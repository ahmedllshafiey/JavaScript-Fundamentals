// JAVASCRIPT FUNDAMENTALS + DEEP TOPICS
// ============================================================
//
// A comprehensive personal reference covering:
//
// FUNDAMENTALS
// 1.  JavaScript basics
// 2.  JavaScript execution
// 3.  JavaScript in HTML
// 4.  Values and data types
// 5.  Primitive values
// 6.  null
// 7.  undefined
// 8.  Variables
// 9.  Scope
// 10. Hoisting
// 11. Temporal Dead Zone
// 12. Implicit globals
// 13. Type coercion
// 14. Explicit conversion
// 15. Equality
// 16. Truthy / falsy
// 17. Logical operators
// 18. Strings
// 19. Numbers
// 20. IEEE 754
// 21. NaN
// 22. Infinity
// 23. Number methods
// 24. Arrays
// 25. Array methods
// 26. Objects
// 27. References
// 28. Math
// 29. Date
// 30. Functions
// 31. Function expressions
// 32. Callbacks
// 33. First-class functions
// 34. Function overloading
// 35. arguments
// 36. prompt()
//
// ASYNCHRONOUS JAVASCRIPT
// 37. setTimeout()
// 38. Closures + timers
// 39. AJAX
// 40. XMLHttpRequest
// 41. JSON
// 42. fetch()
// 43. Promises
// 44. async / await
// 45. Event loop concept
//
// FUNCTIONS + OBJECTS
// 46. this
// 47. call()
// 48. apply()
// 49. bind()
// 50. Method borrowing
// 51. IIFE
// 52. Closures
// 53. Constructor functions
// 54. Factory functions
// 55. instanceof
// 56. Property descriptors
// 57. Prototypes
// 58. Prototype chain
// 59. Object.create()
// 60. Prototype methods
// 61. Inheritance
// 62. Pseudo-classical inheritance
// 63. Method overriding
// 64. class
// 65. extends
// 66. super
//
// MODERN JAVASCRIPT
// 67. Template literals
// 68. Default parameters
// 69. Rest parameters
// 70. Spread syntax
// 71. Destructuring
// 72. Optional chaining
// 73. Nullish coalescing
// 74. Modules
//
// BROWSER JAVASCRIPT
// 75. DOM
// 76. DOM selection
// 77. DOM manipulation
// 78. DOM traversal
// 79. DOM creation/removal
// 80. DOM events
// 81. Event propagation
// 82. Event delegation
// 83. Forms
// 84. BOM
// 85. window
// 86. location
// 87. history
// 88. navigator
// 89. screen
//
// ============================================================

// ============================================================
// 1. JAVASCRIPT BASICS
// ============================================================
//
// JavaScript is:
//
// - A high-level programming language.
// - Dynamically typed.
// - Object-based and prototype-based.
// - A language commonly used for scripting.
// - Used in browsers and other environments such as Node.js.
//
// JavaScript itself is the language.
//
// The environment provides APIs such as:
//
// Browser:
//     DOM
//     BOM
//     fetch
//     localStorage
//     timers
//
// Node.js:
//     filesystem
//     networking
//     process
//     modules
//
// ============================================================

// ============================================================
// 2. JAVASCRIPT EXECUTION
// ============================================================
//
// JavaScript code is executed by a JavaScript engine.
//
// Examples of engines:
//
// - V8
// - SpiderMonkey
// - JavaScriptCore
//
// Modern engines use JIT compilation techniques.
//
// JavaScript generally evaluates code according to the
// language's execution and evaluation rules.
//
// ============================================================

// ============================================================
// 3. JAVASCRIPT IN HTML
// ============================================================
//
// External script:
//
// <script src="script.js"></script>
//
// Internal script:
//
// <script>
//   console.log("Hello");
// </script>
//
// `defer`:
//
// <script src="script.js" defer></script>
//
// Deferred scripts are downloaded while HTML is parsed
// and executed after parsing has completed.
//
// `async`:
//
// <script src="script.js" async></script>
//
// Async scripts execute as soon as they finish downloading,
// so execution order between multiple async scripts should
// not be relied upon.
//
// ============================================================

// ============================================================
// 4. VALUES AND DATA TYPES
// ============================================================
//
// JavaScript has primitive values and objects.
//
// Primitive types:
//
// string
// number
// bigint
// boolean
// undefined
// symbol
// null
//
// Everything else is an object.
//
// Functions are objects with callable behavior.
//
// ============================================================

// ============================================================
// 5. PRIMITIVE VALUES
// ============================================================
//
// Primitive values are immutable values.
//
// Examples:
//
// "Ahmed"
// 100
// true
// undefined
// null
// 10n
// Symbol("id")
//
// Primitive values are not objects.
//
// ============================================================

const userName = "Ahmed";
const age = 25;
const active = true;

console.log(typeof userName);
// string

console.log(typeof age);
// number

console.log(typeof active);
// boolean

// ============================================================
// 6. null
// ============================================================
//
// null represents an intentional absence of a value.
//
// Example:
//
// let selectedUser = null;
//
// This means:
//
// "There is intentionally no selected user."
//
// Important historical behavior:
//
// typeof null === "object"
//
// This is a long-standing JavaScript language quirk.
//
// ============================================================

let selectedUser = null;

console.log(selectedUser);
// null

console.log(typeof selectedUser);
// object

// ============================================================
// 7. undefined
// ============================================================
//
// undefined generally means a value has not been assigned.
//
// ============================================================

let result;

console.log(result);
// undefined

function testUndefined() {
  // No return statement.
}

console.log(testUndefined());
// undefined

// ============================================================
// 8. VARIABLES
// ============================================================
//
// JavaScript provides:
//
// var
// let
// const
//
// `var` is function-scoped.
//
// `let` and `const` are block-scoped.
//
// Prefer `const` when a variable does not need reassignment.
//
// Use `let` when reassignment is required.
//
// `var` is mainly encountered in older JavaScript code.
//
// ============================================================

// ============================================================
// 9. SCOPE
// ============================================================
//
// Important scopes:
//
// - Global scope
// - Function scope
// - Block scope
//
// `var`:
//
// function-scoped
//
// `let` / `const`:
//
// block-scoped
//
// ============================================================

function scopeExample() {
  var functionScoped = 10;

  if (true) {
    let blockScoped = 20;
    const anotherBlockScoped = 30;

    console.log(functionScoped);
    console.log(blockScoped);
    console.log(anotherBlockScoped);
  }

  console.log(functionScoped);

  // blockScoped is not accessible here.
  // anotherBlockScoped is not accessible here.
}

// ============================================================
// 10. HOISTING
// ============================================================
//
// JavaScript processes declarations before execution
// according to the language's execution rules.
//
// Example:
//
// console.log(value);
//
// var value = 10;
//
// With var, the binding exists and is initialized to
// undefined before the assignment executes.
//
// ============================================================

console.log(hoistedVar);
// undefined

var hoistedVar = 100;

// ============================================================
// 11. TEMPORAL DEAD ZONE
// ============================================================
//
// let and const are hoisted in the broader specification
// sense, but they cannot be accessed before initialization.
//
// The period between entering the scope and initialization
// is called the Temporal Dead Zone (TDZ).
//
// Example:
//
// console.log(myValue);
// let myValue = 10;
//
// This throws ReferenceError.
//
// ============================================================

// ============================================================
// 12. IMPLICIT GLOBALS
// ============================================================
//
// In non-strict legacy JavaScript:
//
// undeclaredName = 100;
//
// can create a property on the global object.
//
// This is bad practice.
//
// In strict mode:
//
// "use strict";
//
// undeclaredName = 100;
//
// throws ReferenceError.
//
// Always declare variables explicitly.
//
// ============================================================

// ============================================================
// 13. TYPE COERCION
// ============================================================
//
// JavaScript can automatically convert values between types.
//
// This is called implicit type coercion.
//
// ============================================================

console.log(3 * "2");

// 6

console.log(3 + "2");

// "32"
//
// `+` has special string-concatenation behavior.
//
// ============================================================

// ============================================================
// 14. EXPLICIT CONVERSION
// ============================================================
//
// Common conversion functions:
//
// Number()
// String()
// Boolean()
// parseInt()
// parseFloat()
//
// ============================================================

console.log(Number("100"));
// 100

console.log(String(100));
// "100"

console.log(Boolean(1));
// true

console.log(parseInt("100px", 10));
// 100

console.log(parseFloat("10.50px"));
// 10.5

// Unary plus:

console.log(+"50");
// 50

// ============================================================
// 15. EQUALITY
// ============================================================
//
// ==
//
// Performs type coercion when necessary.
//
// ===
//
// Strict equality.
//
// It compares type and value without performing the
// usual implicit coercion associated with ==.
//
// Prefer === in most application code.
//
// ============================================================

console.log(5 == "5");
// true

console.log(5 === "5");
// false

console.log(5 === 5);
// true

// ============================================================
// 16. TRUTHY / FALSY
// ============================================================
//
// Falsy values include:
//
// false
// 0
// -0
// 0n
// ""
// null
// undefined
// NaN
//
// Most other values are truthy.
//
// Important:
//
// [] is truthy.
// {} is truthy.
//
// ============================================================

console.log(Boolean(0));
// false

console.log(Boolean(""));
// false

console.log(Boolean([]));
// true

console.log(Boolean({}));
// true

// ============================================================
// 17. LOGICAL OPERATORS
// ============================================================
//
// &&
// ||
// !
// ??
//
// `&&` returns the first falsy operand,
// or the last operand if all are truthy.
//
// `||` returns the first truthy operand,
// or the last operand if all are falsy.
//
// `??` returns the right side only when the left side
// is null or undefined.
//
// ============================================================

console.log(true && "Hello");
// Hello

console.log(false || "Default");
// Default

console.log(null ?? "Default");
// Default

console.log(0 ?? 100);
// 0

// ============================================================
// 18. STRINGS
// ============================================================
//
// Strings are primitive immutable values.
//
// ============================================================

const text = "JavaScript";

console.log(text.length);
// 10

console.log(text[0]);
// J

console.log(text.charAt(0));
// J

console.log(text.toUpperCase());
// JAVASCRIPT

console.log(text.toLowerCase());
// javascript

console.log(text.includes("Script"));
// true

console.log(text.indexOf("Script"));
// 4

// ============================================================
// STRING METHODS
// ============================================================

const message = "Hello JavaScript";

console.log(message.slice(0, 5));
// Hello

console.log(message.substring(0, 5));
// Hello

console.log(message.replace("JavaScript", "World"));
// Hello World

console.log(message.split(" "));
// ["Hello", "JavaScript"]

// ============================================================
// 19. NUMBERS
// ============================================================
//
// JavaScript's ordinary Number type uses IEEE 754
// double-precision floating-point representation.
//
// ============================================================

const integer = 100;
const decimal = 10.5;

console.log(typeof integer);
// number

console.log(typeof decimal);
// number

// Number literals:

const decimalNumber = 100;
const hexadecimal = 0xff;
const binary = 0b1010;
const octal = 0o17;
const scientific = 1.5e3;

console.log(hexadecimal);
// 255

console.log(binary);
// 10

console.log(octal);
// 15

console.log(scientific);
// 1500

// ============================================================
// 20. IEEE 754 FLOATING-POINT
// ============================================================
//
// JavaScript Number values are generally IEEE 754
// binary64 floating-point values.
//
// Some decimal fractions cannot be represented exactly
// in binary floating-point.
//
// ============================================================

console.log(0.1 + 0.2);

// 0.30000000000000004

console.log(0.1 + 0.2 === 0.3);

// false

// ============================================================
// 21. NaN
// ============================================================
//
// NaN = Not-a-Number.
//
// typeof NaN is:
//
// "number"
//
// NaN is not equal to itself.
//
// ============================================================

console.log(typeof NaN);
// number

console.log(NaN === NaN);
// false

console.log(Number.isNaN(NaN));
// true

// ============================================================
// 22. Infinity
// ============================================================

console.log(10 / 0);
// Infinity

console.log(10 / -0);
// -Infinity

console.log(Number.isFinite(100));
// true

console.log(Number.isFinite(Infinity));
// false

// ============================================================
// 23. NUMBER METHODS
// ============================================================

const numberValue = 123.456789;

console.log(numberValue.toFixed(2));
// "123.46"

console.log(numberValue.toPrecision(4));
// "123.5"

console.log(numberValue.toString());
// "123.456789"

console.log(numberValue.toLocaleString());
// Locale-dependent formatted string

// Useful constants:

console.log(Number.MAX_VALUE);

console.log(Number.MAX_SAFE_INTEGER);

console.log(Number.MIN_SAFE_INTEGER);

console.log(Number.MIN_VALUE);

// ============================================================
// 24. ARRAYS
// ============================================================
//
// Arrays are objects representing ordered collections.
//
// They can contain values of different types.
//
// ============================================================

const array = [10, "Ahmed", true, null];

console.log(array[0]);
// 10

console.log(Array.isArray(array));
// true

console.log(array.length);
// 4

// ============================================================
// ARRAY REFERENCES
// ============================================================

const arr1 = [10, 20, 30];

const arr2 = [10, 20, 30];

console.log(arr1 === arr2);

// false
//
// They are two different objects.

const arr3 = arr1;

console.log(arr1 === arr3);

// true
//
// Both variables reference the same array.
//
// ============================================================

// ============================================================
// 25. ARRAY METHODS
// ============================================================

const values = [10, 20, 30, 40];

values.push(50);

values.pop();

values.unshift(5);

values.shift();

console.log(values);

// map()

const doubled = values.map(function (value) {
  return value * 2;
});

console.log(doubled);

// filter()

const greaterThan20 = values.filter(function (value) {
  return value > 20;
});

console.log(greaterThan20);

// reduce()

const totalValue = values.reduce(function (sum, value) {
  return sum + value;
}, 0);

console.log(totalValue);

// find()

console.log(
  values.find(function (value) {
    return value > 20;
  }),
);

// some()

console.log(
  values.some(function (value) {
    return value > 30;
  }),
);

// every()

console.log(
  values.every(function (value) {
    return value > 0;
  }),
);

// includes()

console.log(values.includes(20));

// slice() - does not mutate the original array.

console.log(values.slice(1, 3));

// splice() - mutates the original array.

const spliceArray = [10, 20, 30, 40];

spliceArray.splice(1, 2);

console.log(spliceArray);

// [10, 40]

// sort()

const numbersToSort = [10, 2, 30, 5];

numbersToSort.sort(function (a, b) {
  return a - b;
});

console.log(numbersToSort);

// [2, 5, 10, 30]

// ============================================================
// 26. OBJECTS
// ============================================================
//
// Objects store properties.
//
// A property consists of:
//
// key -> value
//
// ============================================================

const person = {
  ID: 100,
  Name: "Ahmed",
  Age: 25,
};

console.log(person.Name);

console.log(person["Name"]);

// Add:

person.City = "Cairo";

// Modify:

person.Age = 26;

// Delete:

delete person.City;

// ============================================================
// 27. OBJECT REFERENCES
// ============================================================

const objectA = {
  Name: "Ahmed",
};

const objectB = objectA;

objectB.Name = "Ali";

console.log(objectA.Name);

// Ali
//
// Both variables reference the same object.
//
// ============================================================

// ============================================================
// 28. Math
// ============================================================

console.log(Math.PI);

console.log(Math.max(10, 20, 5));

console.log(Math.min(10, 20, 5));

console.log(Math.floor(4.9));

console.log(Math.ceil(4.1));

console.log(Math.round(4.5));

console.log(Math.abs(-10));

// Random number between 0 and 1:

console.log(Math.random());

// Integer from 0 to 9:

console.log(Math.floor(Math.random() * 10));

// Integer from 1 to 10:

console.log(Math.floor(Math.random() * 10) + 1);

// ============================================================
// 29. Date
// ============================================================

const now = new Date();

console.log(now);

console.log(now.getFullYear());

console.log(now.getMonth());

// 0 = January
// 11 = December

console.log(now.getDate());

// 1 - 31

console.log(now.getDay());

// 0 = Sunday
// 6 = Saturday

console.log(now.toLocaleString());

// ============================================================
// 30. FUNCTIONS
// ============================================================
//
// Functions are reusable blocks of behavior.
//
// ============================================================

function add(a, b) {
  return a + b;
}

console.log(add(10, 20));

// 30

// Missing arguments:

function showValues(a, b) {
  console.log(a);
  console.log(b);
}

showValues(10);

// 10
// undefined

// ============================================================
// 31. FUNCTION EXPRESSIONS
// ============================================================

const multiplyNumbers = function (a, b) {
  return a * b;
};

console.log(multiplyNumbers(10, 20));

// Arrow function:

const subtract = (a, b) => {
  return a - b;
};

console.log(subtract(20, 5));

// ============================================================
// 32. CALLBACKS
// ============================================================
//
// A callback is a function passed to another function
// to be called later or during another operation.
//
// ============================================================

function processNumber(value, callback) {
  return callback(value);
}

const res = processNumber(10, function (value) {
  return value * 2;
});

console.log(res);

// 20

// ============================================================
// 33. FIRST-CLASS FUNCTIONS
// ============================================================
//
// Functions can:
//
// - Be stored in variables.
// - Be passed as arguments.
// - Be returned from functions.
// - Be stored in objects.
// - Be stored in arrays.
//
// ============================================================

function greet() {
  return "Hello";
}

const functionReference = greet;

console.log(functionReference());

// Function returned from another function:

function createGreeting() {
  return function () {
    return "Hello Ahmed";
  };
}

const greeting = createGreeting();

console.log(greeting());

// ============================================================
// 34. FUNCTION OVERLOADING
// ============================================================
//
// JavaScript does not provide traditional function
// overloading by parameter signature.
//
// If two function declarations have the same name
// in the same scope, the later declaration replaces
// the earlier one.
//
// ============================================================

function example(value) {
  return "one";
}

function example(value, anotherValue) {
  return "two";
}

console.log(example(10));

// two

// JavaScript instead commonly handles different argument
// patterns manually or with rest parameters.
//
// ============================================================

// ============================================================
// 35. arguments OBJECT
// ============================================================
//
// Traditional non-arrow functions have an `arguments`
// object.
//
// It is array-like, but it is not a real Array.
//
// ============================================================

function inspectArguments() {
  console.log(arguments);

  console.log(arguments.length);
}

inspectArguments(10, 20, 30);

// Convert to Array:

function totalNumbers() {
  return Array.prototype.slice.call(arguments).reduce(function (x, y) {
    return x + y;
  }, 0);
}

console.log(totalNumbers(5, 6, 8, 4, 5, 4, 5, 7, 1, 2, 2, 11, 2, 4));

// 67

// ============================================================
// 36. prompt()
// ============================================================
//
// Browser API.
//
// prompt() displays a dialog and returns:
//
// - a string when the user enters a value
// - null when the user cancels
//
// ============================================================

// const userInput = prompt("Enter your name");

// console.log(userInput);

// ============================================================
// 37. setTimeout()
// ============================================================
//
// setTimeout() schedules a callback for later.
//
// It does not pause the current JavaScript execution.
//
// Syntax:
//
// setTimeout(callback, delay);
//
// ============================================================

setTimeout(function () {
  console.log("Executed later");
}, 1000);

// ============================================================
// 38. setTimeout() + CLOSURES
// ============================================================

function createTimer(message) {
  setTimeout(function () {
    console.log(message);
  }, 1000);
}

createTimer("Hello");

// ============================================================
// 39. AJAX
// ============================================================
//
// AJAX = Asynchronous JavaScript and XML.
//
// The term historically describes making asynchronous
// HTTP requests from JavaScript without reloading the
// entire page.
//
// Despite the name, AJAX does NOT require XML.
//
// Modern applications commonly exchange JSON.
//
// Typical flow:
//
// JavaScript
//      ↓
// HTTP request
//      ↓
// Server
//      ↓
// HTTP response
//      ↓
// JavaScript processes response
//
// ============================================================

// ============================================================
// 40. XMLHttpRequest
// ============================================================
//
// XMLHttpRequest (XHR) is the traditional browser API
// commonly associated with AJAX.
//
// ============================================================

const xhr = new XMLHttpRequest();

xhr.open("GET", "https://example.com/data.json", true);

xhr.onload = function () {
  if (xhr.status >= 200 && xhr.status < 300) {
    console.log(xhr.responseText);
  } else {
    console.log("HTTP error:", xhr.status);
  }
};

xhr.onerror = function () {
  console.log("Network error");
};

xhr.send();

// Important:
//
// open() configures the request.
//
// send() sends the request.
//
// onload runs when the response has completed.
//
// status contains the HTTP status code.
//
// responseText contains the response body as text.
//
// ============================================================

// ============================================================
// 41. JSON
// ============================================================
//
// JSON = JavaScript Object Notation.
//
// It is a text-based data format commonly used when
// communicating between clients and servers.
//
// ============================================================

const userObject = {
  ID: 100,
  Name: "Ahmed",
};

// Object -> JSON string:

const jsonText = JSON.stringify(userObject);

console.log(jsonText);

// {"ID":100,"Name":"Ahmed"}

// JSON string -> JavaScript object:

const parsedObject = JSON.parse(jsonText);

console.log(parsedObject.Name);

// Ahmed

// ============================================================
// 42. fetch()
// ============================================================
//
// fetch() is the modern Promise-based browser API
// for making HTTP requests.
//
// ============================================================
//
// Basic structure:
//
// fetch(url)
//   .then(response => response.json())
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.error(error);
//   });
//
// ============================================================

// Example:
//
// fetch("https://example.com/data.json")
//   .then(function (response) {
//
//     if (!response.ok) {
//       throw new Error("HTTP error: " + response.status);
//     }
//
//     return response.json();
//
//   })
//   .then(function (data) {
//
//     console.log(data);
//
//   })
//   .catch(function (error) {
//
//     console.error(error);
//
//   });
//
// ============================================================

// IMPORTANT:
//
// fetch() rejects its Promise for network-level failures,
// but an HTTP 404 or 500 does not automatically reject it.
//
// Check:
//
// response.ok
//
// or:
//
// response.status
//
// ============================================================

// ============================================================
// 43. PROMISES
// ============================================================
//
// A Promise represents the eventual result of an
// asynchronous operation.
//
// States:
//
// pending
// fulfilled
// rejected
//
// ============================================================

const promise = new Promise(function (resolve, reject) {
  const success = true;

  if (success) {
    resolve("Operation successful");
  } else {
    reject(new Error("Operation failed"));
  }
});

promise
  .then(function (value) {
    console.log(value);
  })
  .catch(function (error) {
    console.error(error);
  });

// ============================================================
// Promise chaining
// ============================================================

Promise.resolve(10)
  .then(function (value) {
    return value * 2;
  })
  .then(function (value) {
    return value + 5;
  })
  .then(function (value) {
    console.log(value);
  });

// 25

// ============================================================
// Promise.all()
// ============================================================
//
// Waits for all Promises to fulfill.
//
// If one rejects, Promise.all() rejects.
//
// ============================================================

const promiseOne = Promise.resolve(10);

const promiseTwo = Promise.resolve(20);

Promise.all([promiseOne, promiseTwo]).then(function (values) {
  console.log(values);
});

// [10, 20]

// ============================================================
// 44. async / await
// ============================================================
//
// async functions always return a Promise.
//
// await pauses execution of the async function until
// the awaited Promise settles.
//
// It does not block the entire JavaScript runtime.
//
// ============================================================

async function getData() {
  try {
    const response = await fetch("https://example.com/data.json");

    if (!response.ok) {
      throw new Error("HTTP error: " + response.status);
    }

    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// ============================================================
// 45. EVENT LOOP CONCEPT
// ============================================================
//
// JavaScript execution involves concepts such as:
//
// - Call stack
// - Host environment
// - Task queues
// - Microtask queue
//
// Example:
//
// console.log("A");
//
// setTimeout(function () {
//   console.log("B");
// }, 0);
//
// console.log("C");
//
// Output:
//
// A
// C
// B
//
// The timer callback does not execute before the current
// synchronous code finishes.
//
// Promise reactions are generally processed through the
// microtask queue.
//
// ============================================================

// ============================================================
// 46. this
// ============================================================
//
// `this` depends on how a function is called.
//
// Method call:
//
// object.method()
//
// `this` is the object used as the receiver.
//
// ============================================================

const myObjectOne = {
  ID: 100,

  Name: "Ahmed",

  Print: function () {
    return this.ID + " : " + this.Name;
  },
};

console.log(myObjectOne.Print());

// 100 : Ahmed

// Arrow functions do not create their own `this`.
// They capture `this` lexically from the surrounding scope.
//
// ============================================================

// ============================================================
// 47. call()
// ============================================================
//
// call() executes a function immediately and allows
// explicit control over `this`.
//
// ============================================================

const myObjectTwo = {
  ID: 101,

  Name: "Mostafa",
};

console.log(myObjectOne.Print.call(myObjectTwo));

// 101 : Mostafa

// ============================================================
// 48. apply()
// ============================================================
//
// apply() is similar to call().
//
// Arguments are supplied as an array-like value.
//
// ============================================================

console.log(myObjectOne.Print.apply(myObjectTwo));

// 101 : Mostafa

function sumThreeNumbers(a, b, c) {
  return a + b + c;
}

console.log(sumThreeNumbers.call(null, 10, 20, 30));

// 60

console.log(sumThreeNumbers.apply(null, [10, 20, 30]));

// 60

// ============================================================
// 49. bind()
// ============================================================
//
// bind() creates and returns a new function.
//
// It does not execute the function immediately.
//
// ============================================================

const boundPrint = myObjectOne.Print.bind(myObjectTwo);

console.log(boundPrint());

// 101 : Mostafa

function multiply(a, b) {
  return a * b;
}

const double = multiply.bind(null, 2);

console.log(double(10));

// 20

// ============================================================
// 50. METHOD BORROWING
// ============================================================
//
// A function can be borrowed from one object and invoked
// with another object as its `this` value.
//
// ============================================================

console.log(myObjectOne.Print.call(myObjectTwo));

// 101 : Mostafa

// ============================================================
// 51. IIFE
// ============================================================
//
// Immediately Invoked Function Expression.
//
// ============================================================

const iifeResult = (function () {
  return 10 + 5;
})();

console.log(iifeResult);

// 15

// ============================================================
// 52. CLOSURES
// ============================================================
//
// A closure occurs when a function retains access to
// variables from its surrounding lexical environment.
//
// ============================================================

function createCounter() {
  let counter = 0;

  return function () {
    return counter++;
  };
}

const count = createCounter();

console.log(count());
// 0

console.log(count());
// 1

console.log(count());
// 2

// Each execution creates independent state:

const countOne = createCounter();

const countTwo = createCounter();

console.log(countOne());
// 0

console.log(countOne());
// 1

console.log(countTwo());
// 0

console.log(countTwo());
// 1

// ============================================================
// 53. CONSTRUCTOR FUNCTIONS
// ============================================================

function Member(_id, _name) {
  this.ID = _id;

  this.Name = _name;
}

const memberOne = new Member(100, "Ahmed");

const memberTwo = new Member(101, "Mostafa");

// ============================================================
// 54. WHAT new DOES
// ============================================================
//
// Conceptually:
//
// 1. Creates a new object.
// 2. Links it to Constructor.prototype.
// 3. Calls the constructor with `this` set to the object.
// 4. Returns the resulting object unless the constructor
//    explicitly returns an object.
//
// ============================================================

// ============================================================
// 55. FACTORY FUNCTIONS
// ============================================================

function Factory(_id, _name) {
  return {
    ID: _id,
    Name: _name,
  };
}

const factoryOne = Factory(100, "Ahmed");

console.log(factoryOne);

// ============================================================
// 56. instanceof
// ============================================================
//
// Checks whether Constructor.prototype occurs somewhere
// in the object's prototype chain.
//
// ============================================================

console.log(memberOne instanceof Member);

// true

console.log(memberOne instanceof Object);

// true

// ============================================================
// 57. PROPERTY DESCRIPTORS
// ============================================================

const testObj = {
  ID: 100,
  Name: "Sayed",
  Hobby: "Art",
};

Object.defineProperty(testObj, "Serial", {
  value: 200212,

  writable: false,

  enumerable: false,

  configurable: true,
});

console.log(testObj.Serial);

// 200212

console.log(Object.keys(testObj));

// ["ID", "Name", "Hobby"]

console.log(Object.getOwnPropertyDescriptor(testObj, "Serial"));

// ============================================================
// 58. PROTOTYPES
// ============================================================
//
// Ordinary objects have an internal [[Prototype]]
// relationship.
//
// Property lookup can continue through this prototype.
//
// ============================================================

const prototypeObject = {
  Hobby: "Art",
};

const childObject = Object.create(prototypeObject);

console.log(childObject.Hobby);

// Art

// ============================================================
// 59. PROTOTYPE CHAIN
// ============================================================
//
// childObject
//      ↓
// prototypeObject
//      ↓
// Object.prototype
//      ↓
// null
//
// ============================================================

// ============================================================
// 60. Object.create()
// ============================================================

const newObj = Object.create(prototypeObject);

console.log(newObj.Hobby);

// Art

console.log(newObj.hasOwnProperty("Hobby"));

// false

// Shadow inherited property:

newObj.Hobby = "Music";

console.log(newObj.Hobby);

// Music

console.log(prototypeObject.Hobby);

// Art

// ============================================================
// 61. PROTOTYPE METHODS
// ============================================================

function Teacher(_id, _name) {
  this.ID = _id;

  this.Name = _name;
}

Teacher.prototype.PrintInfo = function () {
  return "Teacher name: " + this.Name + ", Teacher ID: " + this.ID;
};

const teacher = new Teacher(1522, "Ahmed");

console.log(teacher.PrintInfo());

// Teacher name: Ahmed, Teacher ID: 1522

console.log(teacher.hasOwnProperty("PrintInfo"));

// false

console.log(Teacher.prototype.hasOwnProperty("PrintInfo"));

// true

// ============================================================
// 62. INHERITANCE
// ============================================================
//
// Inheritance means that one object/type can access
// properties or methods associated with another.
//
// JavaScript supports inheritance through prototypes.
//
// There are several related patterns:
//
// 1. Prototype inheritance
// 2. Constructor-function inheritance
// 3. Pseudo-classical inheritance
// 4. class / extends inheritance
//
// ============================================================

// ============================================================
// 63. PSEUDO-CLASSICAL INHERITANCE
// ============================================================
//
// Parent constructor:
//
// ============================================================

function Individual(_id, _name) {
  this.ID = _id;

  this.Name = _name;
}

// Parent prototype method:

Individual.prototype.getBasicInfo = function () {
  return this.ID + " : " + this.Name;
};

// Child constructor:

function Worker(_id, _name, _address, _serial, _income) {
  // Inherit instance initialization
  // from the parent constructor.

  Individual.call(this, _id, _name);

  this.Address = _address;

  this.Serial = _serial;

  this.Income = _income;
}

// Connect child prototype to parent prototype:

Worker.prototype = Object.create(Individual.prototype);

// Restore constructor:

Object.defineProperty(Worker.prototype, "constructor", {
  value: Worker,
  writable: true,
  configurable: true,
  enumerable: false,
});

// Child prototype method:

Worker.prototype.getWorkInfo = function () {
  return this.Address + " : " + this.Serial + " : " + this.Income;
};

// Create instance:

const workerOne = new Worker(100, "Ahmed", "Cairo", 5001, 15000);

console.log(workerOne.getBasicInfo());

// 100 : Ahmed

console.log(workerOne.getWorkInfo());

// Cairo : 5001 : 15000

// ============================================================
// PSEUDO-CLASSICAL PROTOTYPE CHAIN
// ============================================================
//
// workerOne
//      ↓
// Worker.prototype
//      ↓
// Individual.prototype
//      ↓
// Object.prototype
//      ↓
// null
//
// ============================================================

console.log(workerOne instanceof Worker);

// true

console.log(workerOne instanceof Individual);

// true

console.log(workerOne instanceof Object);

// true

// ============================================================
// 64. METHOD OVERRIDING
// ============================================================
//
// A child prototype can define a method with the same name
// as a parent method.
//
// The child method is found first during lookup.
//
// ============================================================

Individual.prototype.describe = function () {
  return "Individual: " + this.Name;
};

Worker.prototype.describe = function () {
  return "Worker: " + this.Name;
};

console.log(workerOne.describe());

// Worker: Ahmed

// Calling the parent version directly:

Worker.prototype.describeParent = function () {
  return Individual.prototype.describe.call(this);
};

console.log(workerOne.describeParent());

// Individual: Ahmed

// ============================================================
// 65. class
// ============================================================
//
// ES6 introduced class syntax.
//
// Classes provide cleaner syntax for constructor and
// prototype-based object-oriented programming.
//
// ============================================================

class Person {
  constructor(id, name) {
    this.ID = id;
    this.Name = name;
  }

  getInfo() {
    return this.ID + " : " + this.Name;
  }
}

const personOne = new Person(100, "Ahmed");

console.log(personOne.getInfo());

// 100 : Ahmed

// The method is on Person.prototype:

console.log(Person.prototype.hasOwnProperty("getInfo"));

// true

// ============================================================
// 66. extends + super
// ============================================================

class Employee extends Person {
  constructor(id, name, salary) {
    // Call parent constructor.

    super(id, name);

    this.Salary = salary;
  }

  getEmployeeInfo() {
    return this.getInfo() + " : " + this.Salary;
  }
}

const employee = new Employee(200, "Ali", 15000);

console.log(employee.getEmployeeInfo());

// 200 : Ali : 15000

console.log(employee instanceof Employee);

// true

console.log(employee instanceof Person);

// true

console.log(employee instanceof Object);

// true

// Prototype chain:
//
// employee
//     ↓
// Employee.prototype
//     ↓
// Person.prototype
//     ↓
// Object.prototype
//     ↓
// null
//
// ============================================================

// ============================================================
// 67. TEMPLATE LITERALS
// ============================================================

const name = "Ahmed";
const userAge = 25;

const sentence = `Name: ${name}, Age: ${userAge}`;

console.log(sentence);

// ============================================================
// 68. DEFAULT PARAMETERS
// ============================================================

function greetUser(user = "Guest") {
  return `Hello ${user}`;
}

console.log(greetUser());

// Hello Guest

console.log(greetUser("Ahmed"));

// Hello Ahmed

// ============================================================
// 69. REST PARAMETERS
// ============================================================
//
// Rest parameters collect remaining arguments into
// a real Array.
//
// ============================================================

function sumAll(...numbers) {
  return numbers.reduce(function (sum, number) {
    return sum + number;
  }, 0);
}

console.log(sumAll(10, 20, 30));

// 60

// ============================================================
// 70. SPREAD SYNTAX
// ============================================================

const firstNumbers = [1, 2, 3];

const secondNumbers = [...firstNumbers, 4, 5];

console.log(secondNumbers);

// [1, 2, 3, 4, 5]

const objectOne = {
  ID: 100,
};

const objectTwo = {
  ...objectOne,
  Name: "Ahmed",
};

console.log(objectTwo);

// ============================================================
// 71. DESTRUCTURING
// ============================================================
//
// Array destructuring:
//
// ============================================================

const coordinates = [10, 20];

const [x, y] = coordinates;

console.log(x);
console.log(y);

// Object destructuring:

const user = {
  id: 100,
  name: "Ahmed",
};

const { id, name: userFullName } = user;

console.log(id);
console.log(userFullName);

// ============================================================
// 72. OPTIONAL CHAINING
// ============================================================
//
// Optional chaining prevents an error when a value
// in a property chain is null or undefined.
//
// ============================================================

const account = {
  profile: {
    name: "Ahmed",
  },
};

console.log(account.profile?.name);

// Ahmed

console.log(account.settings?.theme);

// undefined

// ============================================================
// 73. NULLISH COALESCING
// ============================================================
//
// ?? uses the fallback only when the left side is:
//
// null
// undefined
//
// Unlike ||, it does not treat 0 or "" as missing.
//
// ============================================================

const countValue = 0;

console.log(countValue ?? 100);

// 0

console.log(null ?? 100);

// 100

// ============================================================
// 74. MODULES
// ============================================================
//
// ES modules allow code to be separated into files.
//
// Export:
//
// export function add(a, b) {
//   return a + b;
// }
//
// Import:
//
// import { add } from "./math.js";
//
// Default export:
//
// export default function add() {}
//
// Import:
//
// import add from "./math.js";
//
// HTML:
//
// <script type="module" src="main.js"></script>
//
// Modules have their own scope.
//
// ============================================================

// ============================================================
// 75. DOM
// ============================================================
//
// DOM = Document Object Model.
//
// The browser represents HTML as a tree of objects.
//
// Example:
//
// HTML
//   ↓
// document
//   ↓
// html
//   ↓
// body
//   ↓
// elements
//
// ============================================================

// ============================================================
// 76. DOM SELECTION
// ============================================================
//
// Common selection methods:
//
// document.getElementById()
// document.getElementsByClassName()
// document.getElementsByTagName()
// document.querySelector()
// document.querySelectorAll()
//
// ============================================================

const titleElement = document.getElementById("title");

const firstElement = document.querySelector(".item");

const allItems = document.querySelectorAll(".item");

// ============================================================
// 77. DOM MANIPULATION
// ============================================================

if (titleElement) {
  titleElement.textContent = "JavaScript";
}

if (titleElement) {
  titleElement.style.color = "blue";

  titleElement.style.textAlign = "center";

  titleElement.style.transform = "translateX(200px)";
}

// ============================================================
// 78. DOM TRAVERSAL
// ============================================================
//
// parentElement
// children
// firstElementChild
// lastElementChild
// nextElementSibling
// previousElementSibling
//
// ============================================================

// ============================================================
// 79. DOM CREATION / REMOVAL
// ============================================================

const newElement = document.createElement("div");

newElement.textContent = "New element";

document.body.append(newElement);

// Remove:

// newElement.remove();

// ============================================================
// 80. DOM EVENTS
// ============================================================
//
// Events allow JavaScript to react to user and browser
// actions.
//
// Examples:
//
// click
// dblclick
// input
// change
// submit
// keydown
// keyup
// mouseenter
// mouseleave
// focus
// blur
//
// ============================================================

if (titleElement) {
  titleElement.addEventListener("click", function (event) {
    console.log("Clicked:", event.target);
  });
}

// ============================================================
// 81. EVENT PROPAGATION
// ============================================================
//
// Event propagation has three conceptual phases:
//
// 1. Capturing
// 2. Target
// 3. Bubbling
//
// ============================================================
//
// event.stopPropagation()
//
// stops further propagation.
//
// event.preventDefault()
//
// prevents the browser's default action.
//
// ============================================================

// ============================================================
// 82. EVENT DELEGATION
// ============================================================
//
// Event delegation uses bubbling to handle events from
// multiple child elements using one parent listener.
//
// ============================================================

document.addEventListener("click", function (event) {
  if (event.target.matches && event.target.matches(".item")) {
    console.log("Item clicked:", event.target);
  }
});

// ============================================================
// 83. FORMS
// ============================================================
//
// Common form concepts:
//
// input.value
// checkbox.checked
// select.value
// submit event
// preventDefault()
//
// Example:
//
// form.addEventListener(
//   "submit",
//   function (event) {
//
//     event.preventDefault();
//
//   },
// );
//
// ============================================================

// ============================================================
// 84. BOM
// ============================================================
//
// BOM = Browser Object Model.
//
// It represents browser-related objects and functionality.
//
// Important BOM objects:
//
// window
// location
// history
// navigator
// screen
//
// DOM:
//
// document
//
// BOM:
//
// window and browser environment
//
// ============================================================

// ============================================================
// 85. window
// ============================================================
//
// `window` is the browser's global object.
//
// Examples:
//
// window.alert()
// window.open()
// window.close()
// window.setTimeout()
// window.setInterval()
//
// ============================================================

// Open window:
//
// const child = window.open(
//   "child.html",
//   "",
//   "width=400,height=300"
// );
//
// Close:
//
// child.close();
//
// ============================================================

// ============================================================
// 86. location
// ============================================================
//
// window.location provides information about the current URL.
//
// Common properties:
//
// location.href
// location.hostname
// location.pathname
// location.protocol
//
// Methods:
//
// location.reload()
//
// Navigation:
//
// location.href = "https://example.com";
//
// ============================================================

// ============================================================
// 87. history
// ============================================================
//
// Browser history:
//
// history.back()
// history.forward()
// history.go()
//
// ============================================================

// ============================================================
// 88. navigator
// ============================================================
//
// Browser/environment information.
//
// Examples:
//
// navigator.userAgent
// navigator.language
// navigator.onLine
//
// ============================================================

// ============================================================
// 89. screen
// ============================================================
//
// Screen information:
//
// screen.width
// screen.height
// screen.availWidth
// screen.availHeight
//
// ============================================================

// ============================================================
// FINAL CONCEPTUAL MAP
// ============================================================
//
// JAVASCRIPT
//
// ├── Values
// │   ├── Primitive
// │   └── Object
// │
// ├── Variables
// │   ├── var
// │   ├── let
// │   └── const
// │
// ├── Scope
// │   ├── Global
// │   ├── Function
// │   └── Block
// │
// ├── Functions
// │   ├── Declaration
// │   ├── Expression
// │   ├── Arrow
// │   ├── Callback
// │   ├── First-class
// │   ├── Closure
// │   └── Constructor
// │
// ├── Objects
// │   ├── Properties
// │   ├── Methods
// │   ├── References
// │   ├── Descriptors
// │   └── Prototypes
// │
// ├── Prototype System
// │   ├── [[Prototype]]
// │   ├── Constructor.prototype
// │   ├── Prototype chain
// │   ├── instanceof
// │   ├── Object.create()
// │   └── Inheritance
// │
// ├── Async JavaScript
// │   ├── setTimeout
// │   ├── Callbacks
// │   ├── Event loop
// │   ├── AJAX
// │   ├── XMLHttpRequest
// │   ├── fetch
// │   ├── Promise
// │   └── async / await
// │
// ├── Modern JavaScript
// │   ├── Template literals
// │   ├── Rest
// │   ├── Spread
// │   ├── Destructuring
// │   ├── Optional chaining
// │   ├── Nullish coalescing
// │   └── Modules
// │
// └── Browser
//     ├── DOM
//     ├── Events
//     └── BOM
//
// ============================================================
//
// IMPORTANT INHERITANCE MODEL
// ============================================================
//
// Old-style constructor/prototype:
//
// Parent
//   ↓
// Parent.prototype
//   ↑
// Child.prototype
//   ↓
// Child instance
//
//
// More accurately:
//
// childInstance
//       ↓
// Child.prototype
//       ↓
// Parent.prototype
//       ↓
// Object.prototype
//       ↓
// null
//
// Modern class syntax:
//
// class Child extends Parent {}
//
// expresses the same general prototype relationship
// using cleaner syntax.
//
// ============================================================
//
// IMPORTANT ASYNC MODEL
// ============================================================
//
// Synchronous code:
//
// Call stack
//      ↓
// execute
//      ↓
// continue
//
// Asynchronous operation:
//
// JavaScript
//      ↓
// Browser / host API
//      ↓
// operation completes
//      ↓
// queue
//      ↓
// event loop
//      ↓
// callback / Promise reaction
//      ↓
// call stack
//
// ============================================================
//
// AJAX MODEL
// ============================================================
//
// Browser
//    ↓
// JavaScript
//    ↓
// HTTP request
//    ↓
// Server
//    ↓
// HTTP response
//    ↓
// JSON / text / other data
//    ↓
// JavaScript
//    ↓
// DOM update
//
// ============================================================
//
// FINAL SUMMARY
// ============================================================
//
// JavaScript fundamentals:
//
//     Values
//     Types
//     Variables
//     Scope
//     Hoisting
//     Functions
//     Objects
//     Arrays
//     Strings
//     Numbers
//     Coercion
//     Equality
//
// Deep JavaScript:
//
//     this
//     call
//     apply
//     bind
//     closures
//     callbacks
//     constructor functions
//     factory functions
//     prototypes
//     prototype chains
//     descriptors
//     instanceof
//     inheritance
//
// Asynchronous JavaScript:
//
//     timers
//     callbacks
//     event loop
//     AJAX
//     XMLHttpRequest
//     fetch
//     Promise
//     async / await
//
// Modern JavaScript:
//
//     template literals
//     default parameters
//     rest
//     spread
//     destructuring
//     optional chaining
//     nullish coalescing
//     modules
//     classes
//
// Browser JavaScript:
//
//     DOM
//     events
//     BOM
//     window
//     location
//     history
//     navigator
//     screen
//
// ============================================================
