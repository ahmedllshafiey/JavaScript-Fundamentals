// JAVASCRIPT FUNDAMENTALS
// ============================================================

// JavaScript is an object-based programming language.
//
// JavaScript is a scripting language.
// It is executed by a JavaScript engine.
// Modern JavaScript engines use JIT (Just-In-Time) compilation.
//
// JavaScript generally executes statements in a sequential order,
// from top to bottom, while following the language's evaluation rules.
//
// JavaScript can be integrated with HTML.
//
// JavaScript is case-sensitive.
// Example:
// myName !== MyName

// ============================================================
// JAVASCRIPT IN HTML
// ============================================================

// 1. External JavaScript
// JavaScript is written in a separate .js file
// and connected to the HTML document.

// 2. Internal JavaScript
// JavaScript is written inside a <script> element
// in the HTML document.

// A <script> element can be placed in the <head> or <body>.
// Its position, and attributes such as defer/async,
// affect when the script is downloaded and executed.

// ============================================================
// PROGRAM
// ============================================================

// A program is a set of instructions designed to perform
// a specific task.

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
// Variables that contain objects hold a reference to those objects.
//
// A simplified mental model:
//
// Stack:
//     variable → reference
//
// Heap:
//     object → actual object data
//
// NOTE:
// This stack/heap model is useful for understanding references,
// but it is a simplified model rather than a strict description
// of how every JavaScript engine implements memory.

// ============================================================
// PRIMITIVE VALUES
// ============================================================

var myvar = 10;

// myvar contains a primitive number value.
//
// Conceptually:
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
// Therefore, both variables refer to the same object.
//
// If the old object was referenced only by arr1,
// assigning arr1 = arr2 removes arr1's reference to that object.
//
// If no other references point to the old object,
// it becomes eligible for garbage collection.

// ============================================================
// VARIABLE SCOPE
// ============================================================

// JavaScript has different kinds of scope.
//
// Common scopes include:
//
// 1. Global scope
// 2. Function scope
// 3. Block scope

// ============================================================
// GLOBAL SCOPE
// ============================================================

// A variable declared with var at the top level of a classic
// browser script has function/global-script scope depending
// on the environment.

var myvar;

// ============================================================
// IMPLICIT GLOBAL VARIABLE
// ============================================================

// In non-strict mode, assigning to an undeclared identifier
// can create a global property.
//
// This is BAD PRACTICE and should be avoided.

name = "Ahmed";

// In strict mode, this produces a ReferenceError.
//
// Always declare variables using:
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
// the assignment can create a global variable.
//
// This is NOT because of hoisting.
//
// It happens because assigning to an undeclared identifier
// creates an implicit global in non-strict mode.
//
// In strict mode:
//
// "use strict";
//
// the assignment would throw a ReferenceError.

// ============================================================
// HOISTING
// ============================================================

// Hoisting means that declarations are processed before
// the code is executed.
//
// Example:

console.log(x); // undefined

var x = 10;

// Conceptually:

var x;
console.log(x); // undefined
x = 10;

// Important:
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

// Why?
//
// 10 + "Ahmed"
// → "10Ahmed"
//
// The + operator can perform either:
// 1. Numeric addition
// 2. String concatenation
//
// When one operand is a string in this situation,
// the other value is converted to a string.

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
// It formats a number with the specified number of digits
// after the decimal point.
//
// It also performs rounding.

(11111.234).toFixed();
// "11111"

(11111.234).toFixed(2);
// "11111.23"

// ============================================================
// PRIMITIVE WRAPPER OBJECTS
// ============================================================

// Primitive values can use methods such as toFixed().

var j = 10.5656;

console.log(j.toFixed(1));
// "10.6"

// Conceptually, JavaScript allows primitive values to access
// methods through their corresponding wrapper objects.
//
// Number primitive:
//     10.5656
//
// Conceptually wrapped temporarily as a Number object,
// the method is called, and the temporary wrapper is discarded.
//
// This is an implementation-level simplification,
// but it is a useful mental model.

// ============================================================
// OBJECT LITERAL
// ============================================================

var test = {};

console.log(test);
// {}

// Add a property containing a function:

test.myfunc = function () {
  return "hello from myfunc";
};

console.log(test);

// test now contains:
//
// {
//     myfunc: function
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

// JavaScript's Number type is generally represented using
// IEEE 754 double-precision floating-point format.
//
// This can cause precision issues with some decimal values.

console.log(0.1 + 0.4);
// 0.5

console.log(0.1 + 0.2 == 0.3);
// false

console.log(0.1 + 0.2);
// 0.30000000000000004

// IMPORTANT:
//
// The problem is NOT that adding a double to a float causes an error.
//
// JavaScript Number values use double-precision floating point.
//
// The issue is that some decimal fractions cannot be represented
// exactly in binary floating-point format.

// toFixed() can be used for formatting:

console.log((0.1 + 0.2).toFixed(2));
// "0.30"

// Remember:
// toFixed() returns a string.

// ============================================================
// NUMBER RANGE
// ============================================================

// Number.MAX_VALUE is approximately 1.7976931348623157e+308.
//
// It is NOT 1e16.
//
// Around 9 quadrillion (9e15) is related to the precision limit
// for representing all integers exactly.
//
// The constant for this is:

console.log(Number.MAX_SAFE_INTEGER);
// 9007199254740991

// ============================================================
// NUMBER METHODS
// ============================================================

console.log((11111.234).toFixed());
// "11111"

console.log((11111.234).toFixed(2));
// "11111.23"

console.log(typeof 1111.11);
// "number"

console.log((100.22).toPrecision(6));
// "100.220"

// toPrecision() returns a string.

// ============================================================
// INTEGER CHECKING
// ============================================================

console.log(Number.isInteger(0.1));
// false

console.log(Number.isInteger(5));
// true

// ============================================================
// NUMBER CONSTANTS
// ============================================================

console.log(Number.MIN_VALUE);
// Smallest positive non-zero Number value.

console.log(Number.MAX_VALUE);
// Largest finite Number value.

// IMPORTANT:
//
// Number.MIN_VALUE is NOT the most negative number.
// It is the smallest positive value greater than zero.
//
// For the smallest negative finite value, use:

console.log(-Number.MAX_VALUE);

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

// JavaScript can automatically convert values between types
// in certain operations.
//
// This is called implicit type coercion.

var f = 10;
var s = "10";

console.log(f == s);
// true

// == performs type coercion when necessary.
//
// "10" is converted to the numeric value 10.
//
// Therefore:
//
// 10 == "10"
// → true

// ============================================================
// == VS ===
// ============================================================

// ==
// → Loose equality
// → May perform type coercion

// ===
// → Strict equality
// → Does NOT perform type coercion

console.log("1" == 1);
// true

console.log("1" === 1);
// false

// In most cases, prefer === and !==
// because they avoid unexpected type coercion.

// ============================================================
// OPERATORS AND TYPE CONVERSION
// ============================================================

// The * operator converts appropriate operands to numbers.

console.log(3 * "2");
// 6

// The + operator has multiple roles:
//
// 1. Numeric addition
// 2. String concatenation

console.log(3 + 2);
// 5

console.log(3 + "2");
// "32"

// ============================================================
// BOOLEAN COERCION
// ============================================================

console.log(true < 5);
// true

// true is converted to 1:
//
// 1 < 5
// → true

console.log(true == 1);
// true

console.log(false == 0);
// true

// With strict equality:

console.log(true === 1);
// false

console.log(false === 0);
// false

// ============================================================
// EXPLICIT TYPE CONVERSION
// ============================================================

// Explicit conversion means that we intentionally convert
// a value from one type to another.

// -------------------------
// parseInt()
// -------------------------

console.log(Number.parseInt("1234.45adas"));
// 1234

// parseInt() reads an integer from the beginning of a string
// and stops when it encounters an invalid character.

console.log(Number.parseInt("dsfsdf45"));
// NaN

// Because the string does not begin with a valid number.

// -------------------------
// parseFloat()
// -------------------------

console.log(Number.parseFloat("1234.254xcvxcv"));
// 1234.254

// parseFloat() reads a floating-point number from the beginning
// of a string and stops when the numeric part ends.

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
// → a string if the user enters a value and clicks OK
// → null if the user clicks Cancel
//
// Example:

const pr = () => prompt();

// If the user enters:
//
// 123
//
// prompt() returns:
// "123"
//
// NOT:
// 123
//
// If the user presses Cancel:
//
// prompt()
// → null

// ============================================================
// NaN
// ============================================================

// NaN means "Not-a-Number".
//
// NaN is a special numeric value of type "number".

console.log(typeof NaN);
// "number"

// NaN commonly appears when a numeric operation/conversion
// cannot produce a meaningful numeric result.

console.log(Number("hello"));
// NaN

console.log(Number(undefined));
// NaN

console.log(0 / 0);
// NaN

console.log(Infinity / Infinity);
// NaN

// IMPORTANT:
//
// NaN does not mean that every operation involving NaN
// necessarily "becomes NaN" in every language construct,
// but arithmetic operations involving NaN generally produce NaN.

// ============================================================
// CHECKING FOR NaN
// ============================================================

// NaN has a special property:
//
// NaN is not equal to itself.

console.log(NaN === NaN);
// false

// Therefore, use Number.isNaN() to specifically test for NaN.

console.log(Number.isNaN(NaN));
// true

console.log(Number.isNaN(123));
// false

// The global isNaN() function is different.
//
// It first converts the value to a number.

console.log(isNaN("123"));
// false
//
// "123" → 123 → not NaN

console.log(isNaN(123));
// false

console.log(isNaN(Infinity / Infinity));
// true
//
// Infinity / Infinity → NaN

console.log(isNaN(parseInt(true)));
// true
//
// parseInt(true) → NaN

console.log(isNaN(parseInt("wsd")));
// true

console.log(isNaN("   "));
// false
//
// "   " → 0 when converted to a number
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
//
// 0 == 0
// → true

// With ===:
//
// "   " is a string
// 0 is a number
//
// Different types → false

// ============================================================
// NUMBER() CONVERSION
// ============================================================

// undefined

console.log(+undefined);
// NaN

console.log(Number(undefined));
// NaN

// Valid numeric string

console.log(Number("  4545"));
// 4545

// Invalid string

console.log(Number("  asdas4545"));
// NaN

// Numeric characters followed by text

console.log(Number("  4545asdasd"));
// NaN

// Empty/whitespace string

console.log(Number(" "));
// 0

// IMPORTANT DIFFERENCE:
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
