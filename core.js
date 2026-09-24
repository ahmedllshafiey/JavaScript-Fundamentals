// JAVASCRIPT FUNDAMENTALS
// ============================================================

// JavaScript is an object-based programming language.
//
// JavaScript is a scripting language.
// It is executed by a JavaScript engine.
// Modern JavaScript engines use JIT (Just-In-Time) compilation.
//
// JavaScript generally executes statements sequentially,
// from top to bottom, while following the language's
// evaluation rules.
//
// JavaScript can be integrated with HTML.
//
// JavaScript is case-sensitive.
//
// Example:
// myName !== MyName

// ============================================================
// JAVASCRIPT IN HTML
// ============================================================

// 1. External JavaScript
// JavaScript is written in a separate .js file
// and connected to the HTML document.
//
// 2. Internal JavaScript
// JavaScript is written inside a <script> element
// in the HTML document.
//
// A <script> element can be placed in the <head> or <body>.
// Its position, and attributes such as defer and async,
// affect when the script is downloaded and executed.

// ============================================================
// PROGRAM
// ============================================================

// A program is a set of instructions designed
// to perform a specific task.

// ============================================================
// NULL
// ============================================================

// null represents the intentional absence of an object value.
//
// It is commonly used to indicate that a variable is intentionally
// empty or that an object/value is currently absent.

var user = null;

// ============================================================
// OBJECTS
// ============================================================

// An object can be understood conceptually as having:
//
// 1. State
//    → The data/values stored in the object.
//
// 2. Identity
//    → The specific object itself.
//
// Variables that contain objects hold references to those objects.
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
// The stack/heap model is useful for understanding references,
// but it is a simplified mental model rather than a strict
// description of how every JavaScript engine implements memory.

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

// new Number(10) creates a Number object.

console.log(myvarone);
console.log(typeof myvarone); // "object"

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

// arr1 and arr2 refer to two different array objects.
//
// Even though the arrays contain some equal values,
// they have different identities/references.

console.log(arr1 == arr2); // false
console.log(arr1 === arr2); // false

// The values at index 0 are both the primitive number 10.

console.log(arr1[0] == arr2[0]); // true
console.log(arr1[0] === arr2[0]); // true

// ============================================================
// ASSIGNING OBJECT REFERENCES
// ============================================================

arr1 = arr2;

// arr1 does NOT receive a copy of the array.
//
// Instead, arr1 receives the same reference as arr2.
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

// Important:
//
// Assigning an object variable to another object variable
// copies the reference, not the object itself.
//
// If the old object is no longer referenced by anything,
// it becomes eligible for garbage collection.

// ============================================================
// VARIABLE SCOPE
// ============================================================

// Common JavaScript scopes:
//
// 1. Global scope
// 2. Function scope
// 3. Block scope

// ============================================================
// IMPLICIT GLOBAL VARIABLES
// ============================================================

// In non-strict mode, assigning to an undeclared identifier
// can create a global property.
//
// This is BAD PRACTICE and should be avoided.

name = "Ahmed";

// In strict mode, this produces a ReferenceError.
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
// This is NOT because of hoisting.
//
// In strict mode, this would produce a ReferenceError.

// ============================================================
// HOISTING
// ============================================================

// Hoisting means that declarations are processed
// before the code is executed.
//
// Example:

console.log(x); // undefined

var x = 10;

// Conceptually:

var x;
console.log(x); // undefined
x = 10;

// IMPORTANT:
//
// Hoisting does NOT make local variables accessible
// from the global scope.
//
// Scope and hoisting are different concepts.

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
// When one operand is a string,
// the other operand can be converted to a string.

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

var j = 10.5656;

console.log(j.toFixed(1));
// "10.6"

// Conceptually, JavaScript allows primitive values
// to access methods through corresponding wrapper objects.
//
// This is a useful mental model for understanding
// why primitives can have methods.

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

// test now contains:
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

// The problem is NOT caused by adding a double to a float.
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
// → Largest finite Number.
//
// MAX_SAFE_INTEGER:
// → Largest integer that can be represented safely
//   with exact integer precision.

console.log(Number.MIN_VALUE);
// Smallest positive non-zero Number value.
//
// NOTE:
// MIN_VALUE is NOT the most negative number.

console.log(-Number.MAX_VALUE);
// Smallest finite Number.

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
// → Loose equality
// → May perform type coercion
//
// ===
// → Strict equality
// → Does not perform type coercion.

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

// The * operator converts appropriate operands to numbers.

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

// Explicit conversion means intentionally
// converting one type into another.

// ------------------------------------------------------------
// parseInt()
// ------------------------------------------------------------

console.log(Number.parseInt("1234.45adas"));
// 1234

// parseInt() reads an integer from the beginning
// of a string and stops when the numeric part ends.

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

// prompt() returns:
//
// → a string if the user enters a value and clicks OK
// → null if the user clicks Cancel

const pr = () => prompt();

// Example:
//
// User enters: 123
// prompt() → "123"
//
// User clicks Cancel:
// prompt() → null

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
// 0 is not NaN

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

// With ===:
//
// "   " is a string
// 0 is a number
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
// parseInt() parses the numeric prefix.
//
// Number() requires the entire trimmed string
// to represent a valid number.

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
// substr()     // legacy; prefer slice()
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

// substr(start, length)
//
// NOTE:
// substr() is a legacy method.
// Prefer slice() in modern JavaScript.

console.log(mystr.substr(5, 4));

console.log(mystr.substr(-4, 3));

console.log(mystr.substr(-4, 4));

// ============================================================
// STRING IMMUTABILITY
// ============================================================

// Strings are immutable.
//
// String methods do NOT modify the original string.
//
// Instead, they return a new string.

console.log(mystr);

mystr.toUpperCase();

console.log(mystr);
// Original value is unchanged.

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

// By default, replace() changes only the first matching occurrence.

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

// The loop creates a new string instead of modifying mystr.
//
// Original:
// "Amazing Nasr City"
//
// Result:
// "aMAZING nASR cITY"

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
//
// Example:

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
// creates an array with length 5
// containing empty slots.

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
// → adds elements to the END.

myarr4.push(70);

console.log(myarr4);

// unshift()
// → adds elements to the BEGINNING.

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

// -------------------------
// Insert
// -------------------------

myarr4.splice(1, 0, 25);

console.log(myarr4);

// start = 1
// deleteCount = 0
// 25 = value to insert

// -------------------------
// Remove
// -------------------------

myarr4.splice(1, 2);

console.log(myarr4);

// start = 1
// deleteCount = 2

// -------------------------
// Replace
// -------------------------

myarr4.splice(1, 10, 100, 200, 300);

console.log(myarr4);

// Starting at index 1:
// → remove up to 10 elements
// → insert 100, 200, and 300

// splice() modifies the original array.

// ============================================================
// ARRAY REMOVAL METHODS
// ============================================================

// pop()
// → removes the last element.
//
// shift()
// → removes the first element.
//
// splice()
// → removes/replaces elements at any position.

// ============================================================
// ARRAY METHODS: MUTATING VS NON-MUTATING
// ============================================================

// Some array methods modify the original array.
//
// Examples:
//
// push()
// pop()
// shift()
// unshift()
// splice()
//
// These are MUTATING methods.
//
// Other methods return new arrays/values without
// modifying the original array.
//
// Examples:
//
// slice()
// concat()
// map()
// filter()
//
// Always check whether a method mutates the original
// array before using it.
