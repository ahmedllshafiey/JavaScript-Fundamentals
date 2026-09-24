// JAVASCRIPT FUNDAMENTALS
// ============================================================

// JavaScript is a high-level, dynamically typed programming language.
//
// It is commonly described as a scripting language because it can
// be embedded in and executed by host environments such as browsers
// and Node.js.
//
// JavaScript code is executed by a JavaScript engine.
// Modern JavaScript engines use JIT (Just-In-Time) compilation.
//
// JavaScript generally executes statements sequentially, from top
// to bottom, while following the language's evaluation rules.
//
// JavaScript can be integrated with HTML.
//
// JavaScript is CASE-SENSITIVE.
//
// Example:
//
// myName !== MyName
//
// "myName" and "MyName" are different identifiers.

// ============================================================
// JAVASCRIPT IN HTML
// ============================================================

// 1. EXTERNAL JAVASCRIPT
//
// JavaScript is written in a separate .js file
// and connected to the HTML document.
//
// Example:
//
// <script src="script.js"></script>

// 2. INTERNAL JAVASCRIPT
//
// JavaScript is written directly inside a <script> element
// in the HTML document.
//
// Example:
//
// <script>
//   console.log("Hello");
// </script>
//
// A <script> element can be placed in the <head> or <body>.
//
// Attributes such as defer and async affect when an external
// script is downloaded and executed.
//
// defer:
// → Downloads the script while HTML is being parsed.
// → Executes it after HTML parsing is complete.
//
// async:
// → Downloads the script while HTML is being parsed.
// → Executes it as soon as it finishes downloading.
//
// Note:
// The exact execution behavior depends on how the script
// is included in the document.

// ============================================================
// PROGRAM
// ============================================================

// A program is a set of instructions designed to perform
// one or more specific tasks.

// ============================================================
// NULL
// ============================================================

// null represents an intentional absence of a value.
//
// It is commonly used when a variable should explicitly
// contain "no value".

var user = null;

console.log(user); // null

// IMPORTANT:
//
// typeof null returns "object".
//
// This is a historical behavior in JavaScript.
//
// typeof null;
// → "object"

// ============================================================
// OBJECTS
// ============================================================

// An object can be understood conceptually as having:
//
// 1. STATE
//    → The data/values stored in the object.
//
// 2. IDENTITY
//    → The specific object itself.
//
// Variables that contain objects hold REFERENCES to those objects.
//
// Simplified mental model:
//
// Stack:
//     variable → reference
//
// Heap:
//     object → actual object data
//
// NOTE:
//
// The stack/heap model is a useful mental model for understanding
// references, but it is simplified. JavaScript does not require
// every engine to implement memory exactly this way.

// ============================================================
// PRIMITIVE VALUES
// ============================================================

var myvar = 10;

// myvar contains a primitive number value.
//
// Conceptually:
//
// Name  → myvar
// Value → 10
// Type  → number

console.log(myvar);
console.log(typeof myvar); // "number"

// ============================================================
// NUMBER OBJECT
// ============================================================

var myvarone = new Number(10);

// new Number(10) creates a Number OBJECT.
//
// It does NOT create a primitive number.

console.log(myvarone);
console.log(typeof myvarone); // "object"

// Compare:
//
// 10
// → primitive number
//
// new Number(10)
// → Number object
//
// Usually, primitive numbers should be used instead of
// Number wrapper objects.

// ============================================================
// ARRAYS AND REFERENCES
// ============================================================

var arr1 = [10, 20, 30];
var arr2 = [10, 20, 50];

// arr1 and arr2 refer to two DIFFERENT array objects.
//
// Even if two arrays contain exactly the same values,
// they are still different objects.

console.log(arr1 == arr2); // false
console.log(arr1 === arr2); // false

// The values at index 0 are both primitive numbers.

console.log(arr1[0] == arr2[0]); // true
console.log(arr1[0] === arr2[0]); // true

// ============================================================
// ASSIGNING OBJECT REFERENCES
// ============================================================

arr1 = arr2;

// arr1 does NOT receive a copy of the array.
//
// Instead, arr1 receives the SAME reference as arr2.
//
// Both variables now refer to the same array object.

console.log(arr1 == arr2); // true
console.log(arr1 === arr2); // true

// Conceptually:
//
// arr1 ─────┐
//           ↓
//       [10, 20, 50]
//           ↑
// arr2 ─────┘
//
// Important:
//
// Assigning an object variable to another object variable
// copies the REFERENCE, not the object itself.
//
// If the old object is no longer reachable,
// it becomes eligible for garbage collection.

// ============================================================
// VARIABLE SCOPE
// ============================================================

// Common JavaScript scopes:
//
// 1. Global scope
// 2. Function scope
// 3. Block scope
//
// var:
// → Function-scoped.
//
// let / const:
// → Block-scoped.

// ============================================================
// IMPLICIT GLOBAL VARIABLES
// ============================================================

// In non-strict mode, assigning a value to an undeclared
// identifier can create a property on the global object.
//
// This is BAD PRACTICE and should be avoided.

// Example:
//
// name = "Ahmed";
//
// In strict mode:
//
// "use strict";
//
// name = "Ahmed";
//
// → ReferenceError
//
// Always declare variables using:
//
// var
// let
// const

// ============================================================
// FUNCTION SCOPE
// ============================================================

function myname() {
  fname = "Ahmed";
}

myname();

console.log(fname);

// In non-strict mode, because fname was not declared,
// the assignment can create an implicit global.
//
// This is NOT caused by hoisting.
//
// Scope and hoisting are different concepts.
//
// In strict mode, this produces a ReferenceError.
//
// Better:
//
// function myname() {
//   var fname = "Ahmed";
// }

// ============================================================
// HOISTING
// ============================================================

// Hoisting is the behavior in which declarations are processed
// during the creation of an execution context before execution
// reaches the corresponding line of code.
//
// Example:

console.log(x); // undefined

var x = 10;

// Conceptually, this behaves like:

var x;

console.log(x); // undefined

x = 10;

// IMPORTANT:
//
// Only the declaration is hoisted.
// The assignment is NOT hoisted.
//
// var x;
// → declaration
//
// x = 10;
// → assignment

// ============================================================
// let / const AND HOISTING
// ============================================================

// let and const declarations are also processed before execution,
// but they cannot be accessed before their declaration is reached.
//
// This period is called the TEMPORAL DEAD ZONE (TDZ).
//
// Example:
//
// console.log(y); // ReferenceError
// let y = 10;
//
// console.log(z); // ReferenceError
// const z = 10;

// ============================================================
// NUMBER TYPE
// ============================================================

var num = 10; // Primitive number
var mynum = new Number(10); // Number object

console.log(typeof num); // "number"
console.log(typeof mynum); // "object"

// ============================================================
// FUNCTION PARAMETERS
// ============================================================

function sum(x, y) {
  if (typeof x === "undefined") {
    console.log("x is undefined");
    return;
  }

  if (typeof y === "undefined") {
    console.log("y is undefined");
    return "dd";
  }

  return x + y;
}

console.log(sum(10, 20)); // 30
console.log(sum(10)); // "dd"
console.log(sum(10, "Ahmed")); // "10Ahmed"

// The + operator can perform:
//
// 1. Numeric addition
// 2. String concatenation
//
// When one operand is a string, the other operand may be
// converted to a string.

// ============================================================
// NUMBER OBJECT METHODS
// ============================================================

console.log(new Number(10).constructor.name);
// "Number"

console.log(typeof new Number(10));
// "object"

console.log(new Number(5).valueOf());
// 5

// valueOf() returns the primitive numeric value
// represented by the Number object.

// ============================================================
// toFixed()
// ============================================================

var h = 10.5184;

console.log(h.toFixed(1));
// "10.5"

// toFixed() returns a STRING.
//
// It formats a number with the specified number
// of digits after the decimal point.
//
// It also performs rounding.

console.log((11111.234).toFixed());
// "11111"

console.log((11111.234).toFixed(2));
// "11111.23"

// ============================================================
// PRIMITIVE WRAPPER OBJECTS
// ============================================================

// Primitive values can use methods such as toFixed().
//
// Conceptually, JavaScript temporarily provides access to
// appropriate wrapper-object behavior.
//
// Example:

var j = 10.5656;

console.log(j.toFixed(1));
// "10.6"

// IMPORTANT:
//
// This does NOT mean that j becomes a Number object.
//
// j remains a primitive number.

// ============================================================
// OBJECT LITERAL
// ============================================================

var test = {};

console.log(test);
// {}

test.myfunc = function () {
  return "hello from myfunc";
};

console.log(test);

// test now contains a property:
//
// {
//   myfunc: function
// }

// ============================================================
// NUMBER LITERALS
// ============================================================

// Decimal
var nm1 = 1024;

// Hexadecimal
var nm2 = 0x400;

// Octal
var nm3 = 0o100;

// Binary
var nm4 = 0b100;

// Scientific notation
var nm5 = 1e6;

console.log(nm1); // 1024
console.log(nm2); // 1024
console.log(nm3); // 64
console.log(nm4); // 4
console.log(nm5); // 1000000

// ============================================================
// IEEE 754
// ============================================================

// JavaScript's Number type generally uses
// IEEE 754 double-precision floating-point format.
//
// Some decimal fractions cannot be represented exactly
// in binary floating-point format.

console.log(0.1 + 0.4);
// 0.5

console.log(0.1 + 0.2 == 0.3);
// false

console.log(0.1 + 0.2);
// 0.30000000000000004

// The issue is NOT caused by adding a double to a float.
//
// JavaScript Number values use double-precision
// floating-point representation.

console.log((0.1 + 0.2).toFixed(2));
// "0.30"

// toFixed() returns a string.

// ============================================================
// NUMBER RANGE
// ============================================================

console.log(Number.MAX_VALUE);
// Approximately:
// 1.7976931348623157e+308

console.log(Number.MAX_SAFE_INTEGER);
// 9007199254740991

// MAX_VALUE:
//
// → Largest finite Number.
//
// MAX_SAFE_INTEGER:
//
// → Largest integer that can be represented safely
//   with exact integer precision.

console.log(Number.MIN_VALUE);

// Smallest positive non-zero Number value.
//
// IMPORTANT:
//
// MIN_VALUE is NOT the most negative number.

console.log(-Number.MAX_VALUE);

// Smallest finite Number.

console.log(Number.MIN_SAFE_INTEGER);
// -9007199254740991

// ============================================================
// INFINITY
// ============================================================

console.log(10 / 0);
// Infinity

console.log(10 / -0);
// -Infinity

console.log(Number.isFinite(10 / 0));
// false

console.log(Number.isFinite(10));
// true

// ============================================================
// IMPLICIT TYPE CONVERSION
// ============================================================

var f = 10;
var s = "10";

console.log(f == s);
// true

// == may perform type coercion.
//
// "10" → 10
//
// 10 == 10
// → true

// ============================================================
// == VS ===
// ============================================================

// ==
//
// → Loose equality
// → May perform type coercion

// ===
//
// → Strict equality
// → Does NOT perform type coercion.

console.log("1" == 1);
// true

console.log("1" === 1);
// false

// In most cases, prefer === and !==
// because they avoid unexpected type coercion.

// ============================================================
// OPERATORS AND TYPE CONVERSION
// ============================================================

console.log(3 * "2");
// 6

// The * operator converts operands to numbers when possible.

console.log(3 + 2);
// 5

console.log(3 + "2");
// "32"

// The + operator can perform:
//
// 1. Numeric addition
// 2. String concatenation

// ============================================================
// BOOLEAN COERCION
// ============================================================

console.log(true < 5);
// true
//
// true → 1
//
// 1 < 5
// → true

console.log(true == 1);
// true

console.log(false == 0);
// true

console.log(true === 1);
// false

console.log(false === 0);
// false

// ============================================================
// EXPLICIT TYPE CONVERSION
// ============================================================

// Explicit conversion means intentionally converting
// one type into another.

// ------------------------------------------------------------
// parseInt()
// ------------------------------------------------------------

console.log(Number.parseInt("1234.45adas"));
// 1234

// parseInt() reads an integer from the beginning of a string
// and stops when the numeric part ends.

console.log(Number.parseInt("dsfsdf45"));
// NaN

// ------------------------------------------------------------
// parseFloat()
// ------------------------------------------------------------

console.log(Number.parseFloat("1234.254xcvxcv"));
// 1234.254

// parseFloat() reads a floating-point number
// from the beginning of a string.

// ============================================================
// UNARY + OPERATOR
// ============================================================

console.log(+"34");
// 34

console.log(typeof +"34");
// "number"

// Unary + attempts to convert its operand to a number.

// ============================================================
// PROMPT
// ============================================================

// prompt() is a browser API.
//
// It returns:
//
// → a STRING if the user enters a value and clicks OK.
// → null if the user clicks Cancel.

const pr = () => prompt();

// Example:
//
// User enters: 123
// prompt() → "123"
//
// User clicks Cancel:
// prompt() → null
//
// IMPORTANT:
//
// Even if the user enters a number,
// prompt() returns a STRING.

// ============================================================
// NaN
// ============================================================

// NaN means "Not-a-Number".
//
// NaN is a special numeric value.
//
// Its type is "number".

console.log(typeof NaN);
// "number"

console.log(Number("hello"));
// NaN

console.log(Number(undefined));
// NaN

console.log(0 / 0);
// NaN

console.log(Infinity / Infinity);
// NaN

// ============================================================
// CHECKING FOR NaN
// ============================================================

// NaN is not equal to itself.

console.log(NaN === NaN);
// false

// Use Number.isNaN() when you specifically want
// to check whether a value is NaN.

console.log(Number.isNaN(NaN));
// true

console.log(Number.isNaN(123));
// false

// The global isNaN() function performs type coercion first.

console.log(isNaN("123"));
// false

console.log(isNaN(123));
// false

console.log(isNaN(Infinity / Infinity));
// true

console.log(isNaN(parseInt(true)));
// true

console.log(isNaN(parseInt("wsd")));
// true

console.log(isNaN("   "));
// false
//
// "   " → 0
//
// 0 is not NaN.

// ============================================================
// WHITESPACE STRING CONVERSION
// ============================================================

console.log("   " == 0);
// true

console.log("   " === 0);
// false

// With ==:
//
// "   " → 0
// 0 == 0
// → true
//
// With ===:
//
// "   " is a string.
// 0 is a number.
// → false

// ============================================================
// NUMBER() CONVERSION
// ============================================================

console.log(+undefined);
// NaN

console.log(Number(undefined));
// NaN

console.log(Number("  4545"));
// 4545

console.log(Number("  asdas4545"));
// NaN

console.log(Number("  4545asdasd"));
// NaN

console.log(Number(" "));
// 0

// Important difference:
//
// parseInt("4545abc")
// → 4545
//
// Number("4545abc")
// → NaN
//
// parseInt():
// → Parses the numeric prefix.
//
// Number():
// → Requires the entire trimmed string to represent
//   a valid number.

// ============================================================
// STRINGS
// ============================================================

// A string is a sequence of characters.
//
// Strings are primitive values.
//
// Example:

var mystr = "Amazing Nasr City";

// ============================================================
// STRING LENGTH
// ============================================================

// length is a read-only property.

console.log(mystr.length);
// 17

// The last valid index is:
//
// length - 1

console.log(mystr[mystr.length - 1]);
// "y"

console.log(mystr[mystr.length]);
// undefined

// ============================================================
// STRING METHODS
// ============================================================

// Common string methods include:
//
// charAt()
// indexOf()
// lastIndexOf()
// substring()
// slice()
// substr()       // legacy
// replace()
// split()
// toLowerCase()
// toUpperCase()

// ============================================================
// charAt()
// ============================================================

console.log(mystr.charAt(5));
// "i"

// ============================================================
// substring()
// ============================================================

// Syntax:
//
// substring(start, end)
//
// The end index is NOT included.

console.log(mystr.substring(5));
// "ing Nasr City"

console.log(mystr.substring(1, 5));
// "mazi"

// If start > end, substring() swaps them.

console.log(mystr.substring(9, 2));

// Negative values are treated as 0.

console.log(mystr.substring(-1));

// ============================================================
// slice()
// ============================================================

// Syntax:
//
// slice(start, end)
//
// The end index is NOT included.

console.log(mystr.slice(5));

console.log(mystr.slice(1, 5));

// Negative indexes count from the end.

console.log(mystr.slice(-3));
// Last 3 characters

// ============================================================
// substr()
// ============================================================

// Syntax:
//
// substr(start, length)
//
// NOTE:
//
// substr() is a legacy method.
// Prefer slice() in modern JavaScript.

console.log(mystr.substr(5, 4));

console.log(mystr.substr(-4, 3));

console.log(mystr.substr(-4, 4));

// ============================================================
// STRING IMMUTABILITY
// ============================================================

// Strings are IMMUTABLE.
//
// String methods do NOT modify the original string.
//
// Instead, they return a new string.

console.log(mystr);

mystr.toUpperCase();

console.log(mystr);
// Original value is unchanged.

// If you want to store the result:
//
// mystr = mystr.toUpperCase();

// ============================================================
// indexOf()
// ============================================================

console.log(mystr.indexOf("C"));
// Returns the index of the first occurrence.

console.log(mystr.indexOf("u"));
// -1 because "u" does not exist.

console.log(mystr.indexOf("A"));
// 0

// indexOf() is case-sensitive.

// ============================================================
// lastIndexOf()
// ============================================================

console.log(mystr.lastIndexOf("C"));

console.log(mystr.lastIndexOf("u"));
// -1

// ============================================================
// replace()
// ============================================================

// By default, replace() changes only the FIRST
// matching occurrence.

console.log(mystr.replace("a", "@"));

// Regular expression with g flag:
//
// g = global

console.log(mystr.replace(/a/g, "$"));

// General regular expression syntax:
//
// /pattern/flags

// ============================================================
// CASE CONVERSION
// ============================================================

console.log(mystr.toLowerCase());

console.log(mystr.toUpperCase());

// ============================================================
// METHOD CHAINING
// ============================================================

// A method can return a value on which another method
// can immediately be called.

console.log(mystr.toUpperCase().replace(/A/g, "#"));

// ============================================================
// split()
// ============================================================

// split() returns an ARRAY.

console.log(mystr.split(""));

console.log(mystr.split(" "));

console.log(mystr.split("k"));

// If the separator does not exist,
// the result is an array containing the original string.

// ============================================================
// STRING MANIPULATION EXAMPLE
// ============================================================

var resStr = "";

for (var i = 0; i < mystr.length; i++) {
  if (mystr[i].toLowerCase() === mystr[i]) {
    resStr += mystr[i].toUpperCase();
  } else {
    resStr += mystr[i].toLowerCase();
  }
}

console.log(resStr);

// Original:
//
// "Amazing Nasr City"
//
// Result:
//
// "aMAZING nASR cITY"
//
// The loop creates a NEW string.
// It does not modify mystr.

// ============================================================
// ARRAYS
// ============================================================

// An array is an ordered collection of values.
//
// Array indexes start at 0.
//
// Example:
//
// Index:   0   1   2   3
// Value:  10  20  30  40
//
// JavaScript arrays can contain values of different types.

var mixed = [10, "Ahmed", true, null];

// ============================================================
// ARRAY CREATION
// ============================================================

var myarr = [];

console.log(myarr);
// []

var myarr2 = [1, 5, 4, 8, 6, 5];

console.log(myarr2);

console.log(typeof myarr2);
// "object"

// Arrays are objects in JavaScript.

// ============================================================
// ARRAY CONSTRUCTOR
// ============================================================

// new Array(5)
//
// Creates an array with length 5 containing empty slots.

var myarr3 = new Array(5);

console.log(myarr3);
console.log(myarr3.length);
// 5

// If multiple arguments are provided,
// they become array elements.

var myarr4 = new Array(5, 5, 1, 2, 3);

console.log(myarr4);
// [5, 5, 1, 2, 3]

// Usually, array literals are clearer:
//
// []
//
// or:
//
// [1, 2, 3]

// ============================================================
// ARRAY CONSTRUCTOR
// ============================================================

console.log(myarr4.constructor.name);
// "Array"

// ============================================================
// ARRAY INDEXING
// ============================================================

// Set/update a value:

myarr4[2] = 0;

console.log(myarr4);

// Get a value:

console.log(myarr4[4]);

// ============================================================
// ADDING BY INDEX
// ============================================================

// You can assign a value to an index beyond
// the current length.

myarr4[6] = 0;

console.log(myarr4);

// This can create empty slots.
//
// Generally, use array methods such as push()
// when adding elements to the end.

// ============================================================
// DELETE OPERATOR
// ============================================================

// delete removes the element at an index,
// but it does NOT shift the remaining elements.
//
// It creates an empty slot.

delete myarr4[2];

console.log(myarr4);

// Generally, use splice() when you want to remove
// an element and shift the remaining elements.

// ============================================================
// ARRAY LENGTH
// ============================================================

// length is a property of an array.
//
// It can be read and modified.

console.log(myarr4.length);

myarr4.length = 10;

console.log(myarr4.length);

// Reducing length removes elements beyond
// the new length.

// ============================================================
// ADDING ARRAY ELEMENTS
// ============================================================

// push()
//
// → Adds elements to the END.
// → Returns the new array length.

myarr4.push(70);

console.log(myarr4);

// unshift()
//
// → Adds elements to the BEGINNING.
// → Returns the new array length.

myarr4.unshift(10);

console.log(myarr4);

// Both methods modify the original array.

// ============================================================
// SPLICE()
// ============================================================

// splice() can add, remove, or replace elements.
//
// Syntax:
//
// array.splice(start, deleteCount, item1, item2, ...)

// ------------------------------------------------------------
// INSERT
// ------------------------------------------------------------

myarr4.splice(1, 0, 25);

console.log(myarr4);

// start = 1
// deleteCount = 0
// 25 = value to insert

// ------------------------------------------------------------
// REMOVE
// ------------------------------------------------------------

myarr4.splice(1, 2);

console.log(myarr4);

// start = 1
// deleteCount = 2

// ------------------------------------------------------------
// REPLACE
// ------------------------------------------------------------

myarr4.splice(1, 10, 100, 200, 300);

console.log(myarr4);

// Starting at index 1:
//
// → Remove up to 10 elements.
// → Insert 100, 200, and 300.
//
// splice() modifies the original array.
//
// splice() also returns an array containing
// the elements that were removed.

// ============================================================
// ARRAY REMOVAL METHODS
// ============================================================

// pop()
//
// → Removes the last element.
// → Returns the removed element.
//
// shift()
//
// → Removes the first element.
// → Returns the removed element.
//
// splice()
//
// → Removes/replaces elements at any position.

// ============================================================
// ARRAY METHODS:
// MUTATING VS NON-MUTATING
// ============================================================

// MUTATING METHODS:
//
// These modify the original array.
//
// Examples:
//
// push()
// pop()
// shift()
// unshift()
// splice()
// reverse()
// sort()

// NON-MUTATING METHODS:
//
// These do not modify the original array.
//
// Examples:
//
// slice()
// concat()
// map()
// filter()
// reduce()
//
// Always check whether a method mutates the original array.

// ============================================================
// reverse()
// ============================================================

myarr2.reverse();

console.log(myarr2);

// reverse() MODIFIES the original array.
//
// It reverses the order of the elements.

// ============================================================
// sort()
// ============================================================

// sort() MODIFIES the original array.
//
// By default, sort() converts elements to strings
// and compares their UTF-16 code units.
//
// Therefore, numeric sorting requires a compare function.

myarr2.sort();

console.log(myarr2);

// Example:
//
// [10, 2, 5].sort()
//
// → [10, 2, 5]
//
// This is because the values are compared as strings:
//
// "10"
// "2"
// "5"

// Numeric sorting:

function mysorter(x, y) {
  return x - y;
}

myarr2.sort(mysorter);

// Or:
//
// myarr2.sort((x, y) => x - y);
//
// x - y < 0
// → x comes before y
//
// x - y > 0
// → y comes before x
//
// x - y === 0
// → relative order remains unchanged

// ============================================================
// filter()
// ============================================================

// filter() creates a NEW ARRAY.
//
// It keeps elements for which the callback
// returns a truthy value.

function isOdd(x) {
  return x % 2;
}

console.log(myarr2.filter(isOdd));

// Predicate function:
//
// A predicate is a function that returns a value
// interpreted as true or false.
//
// For filter(), truthy → keep the element.
//           falsy  → discard the element.

console.log(
  myarr2.filter(function (x) {
    return x > 1;
  }),
);

// filter() ALWAYS returns a new array.

// ============================================================
// reduce()
// ============================================================

// reduce() processes array elements and combines them
// into a single accumulated result.
//
// Syntax:
//
// array.reduce(callback, initialValue)
//
// Callback parameters:
//
// (accumulator, currentValue, index, array)

console.log(
  myarr2.reduce((x, y) => {
    return x + y;
  }, 10),
);

// 10 is the initial accumulator value.
//
// Example:
//
// [1, 2, 3].reduce((acc, current) => acc + current, 10)
//
// → 16

// ============================================================
// reduceRight()
// ============================================================

// reduceRight() works similarly to reduce(),
// but processes the array from RIGHT to LEFT.

// ============================================================
// slice()
// ============================================================

// slice() creates a NEW array.
//
// It does NOT modify the original array.
//
// Syntax:
//
// array.slice(start, end)
//
// end is NOT included.

console.log(myarr2.slice(1, 3));

// ============================================================
// map()
// ============================================================

// map() creates a NEW array.
//
// It transforms every element according to
// the callback function.
//
// It does NOT modify the original array.

console.log(
  myarr2.map(function (n) {
    return n.toString();
  }),
);

// Example:
//
// [1, 2, 3]
// → ["1", "2", "3"]

// ============================================================
// MATH OBJECT
// ============================================================

// Math is a built-in object containing mathematical
// constants and functions.

console.log(Math.PI.toFixed(2));
// "3.14"

console.log(Math.random());
// Random number >= 0 and < 1

console.log(Math.random() * 10);
// Random number >= 0 and < 10

// ============================================================
// RANDOM NUMBER RANGE
// ============================================================

// IMPORTANT:
//
// Math.random() * (10, 20)
//
// does NOT generate a random number between 10 and 20.
//
// The comma operator evaluates both expressions
// and returns the last one.
//
// Therefore:
//
// (10, 20)
// → 20
//
// So:
//
// Math.random() * (10, 20)
//
// is effectively:
//
// Math.random() * 20

// To generate a random floating-point number
// between min and max:
//
// Math.random() * (max - min) + min
//
// Example:
//
// Math.random() * (20 - 10) + 10
//
// → range: 10 <= result < 20

// ============================================================
// BOOLEAN OBJECT
// ============================================================

// Boolean values are:
//
// true
// false
//
// Boolean objects can be created with new Boolean(),
// but this is usually unnecessary.
//
// Prefer primitive booleans.

var bool = new Boolean().valueOf();

console.log(bool);
// false

console.log(new Boolean(null).valueOf());
// false

console.log(new Boolean(0).valueOf());
// false

console.log(new Boolean(NaN).valueOf());
// false

console.log(new Boolean("").valueOf());
// false

console.log(new Boolean("Ahmed").valueOf());
// true

console.log(new Boolean(10).valueOf());
// true

// ============================================================
// TRUTHY AND FALSY VALUES
// ============================================================

// Common falsy values:
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
// IMPORTANT:
//
// "0" is truthy.
// [] is truthy.
// {} is truthy.

// ============================================================
// LOGICAL AND: &&
// ============================================================

// && does NOT necessarily return true or false.
//
// It returns one of its operands.
//
// Rule:
//
// If the first operand is FALSY:
// → return the first operand.
//
// If the first operand is TRUTHY:
// → return the second operand.

console.log(20 > 30 && 10 > 5);
// false

console.log("Ahmed" && "Mostafa");
// "Mostafa"

console.log("" && "Mostafa");
// ""

console.log(null && undefined);
// null

// ============================================================
// LOGICAL OR: ||
// ============================================================

// || does NOT necessarily return true or false.
//
// It returns one of its operands.
//
// Rule:
//
// If the first operand is TRUTHY:
// → return the first operand.
//
// If the first operand is FALSY:
// → return the second operand.

console.log("Ahmed" || "Mostafa");
// "Ahmed"

console.log("" || "Mostafa");
// "Mostafa"

console.log(null || undefined);
// undefined

// ============================================================
// NULLISH COALESCING: ??
// ============================================================

// ?? returns the right-hand operand ONLY when
// the left-hand operand is null or undefined.
//
// Example:
//
// null ?? "Ahmed"
// → "Ahmed"
//
// undefined ?? "Ahmed"
// → "Ahmed"
//
// 0 ?? "Ahmed"
// → 0
//
// "" ?? "Ahmed"
// → ""

// ============================================================
// DATE
// ============================================================

// Date is used to represent dates and times.
//
// Date methods can be grouped conceptually into:
//
// 1. Set
// 2. Get
// 3. Convert / Format

// Example:

var today = new Date().getMonth();

console.log(today);

// IMPORTANT:
//
// Months returned by getMonth() are zero-based:
//
// January → 0
// February → 1
// March → 2
// ...
// December → 11
//
// Date.getDay() is also zero-based:
//
// Sunday → 0
// Monday → 1
// ...
// Saturday → 6

// ============================================================
// DATE TO LOCALE STRING
// ============================================================

console.log(new Date().toLocaleString());

console.log(new Date().toLocaleString("ar-EG"));

console.log(new Date().toLocaleString("ar-SA"));

// Output depends on the environment,
// locale, timezone, and current date/time.

// ============================================================
// NUMBER TO STRING
// ============================================================

console.log((12124564213).toString());

// toString() converts the number into a string.

// ============================================================
// NUMBER TO LOCALE STRING
// ============================================================

console.log(new Number(11213213).toLocaleString("ar-EG"));

console.log(new Number(11213213).toLocaleString("en-EG"));

console.log(new Number(11213213).toLocaleString("en-US"));

// toLocaleString() formats a number according
// to the requested locale.
//
// The exact formatting can depend on the
// JavaScript runtime and available locale data.
