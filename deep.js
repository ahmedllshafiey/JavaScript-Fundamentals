// JAVASCRIPT DEEP TOPICS
// ============================================================
//
// Topics:
// 1. IIFE
// 2. setTimeout() and callback arguments
// 3. var + closure + asynchronous callbacks
// 4. let + loop closures
// 5. this
// 6. call()
// 7. apply()
// 8. bind()
// 9. Method borrowing
// 10. Math.min() + apply()
// 11. Closures
// 12. Lexical scope
// 13. Persistent private state
//
// ============================================================

// ============================================================
// 1. IIFE
// ============================================================
//
// IIFE = Immediately Invoked Function Expression
//
// The function is:
// 1. Created as a function expression.
// 2. Immediately invoked.
//
// ============================================================

(function sum() {
  return 10 + 5;
})();

// The return value is not stored anywhere,
// so the returned value (15) is discarded.

const iifeResult = (function sum() {
  return 10 + 5;
})();

console.log("IIFE result:", iifeResult);
// 15

// ============================================================
// 2. setTimeout() + CALLBACK ARGUMENTS
// ============================================================
//
// Syntax:
//
// setTimeout(callback, delay, arg1, arg2, ...);
//
// Arguments after the delay are passed to the callback
// when the callback executes.
//
// ============================================================

const nameArray = ["Ahmed", "Ali", "Mohammed"];

function printNames() {
  for (var i = 0; i < nameArray.length; i++) {
    setTimeout(
      function (_name) {
        console.log("Name:", _name);
      },

      2000,

      nameArray[i],
    );
  }
}

printNames();

// Expected output after approximately 2 seconds:
//
// Name: Ahmed
// Name: Ali
// Name: Mohammed
//
// Important:
//
// nameArray[i] is evaluated when setTimeout() is called.
// Its value is passed to the callback later.
//
// ============================================================

// ============================================================
// 3. setTimeout() DOES NOT PAUSE THE LOOP
// ============================================================
//
// setTimeout() schedules the callback for later.
//
// It does NOT stop JavaScript and wait for 2 seconds.
//
// The loop continues immediately.
//
// ============================================================

for (var i = 0; i < 3; i++) {
  console.log("Loop:", i);

  setTimeout(function () {
    console.log("Timer");
  }, 2000);
}

console.log("Loop finished");

// The immediate output is approximately:
//
// Loop: 0
// Loop: 1
// Loop: 2
// Loop finished
//
// Then, approximately 2 seconds later:
//
// Timer
// Timer
// Timer
//
// ============================================================

// ============================================================
// 4. CLASSIC var + CLOSURE PROBLEM
// ============================================================
//
// Here the callback reads i when the callback executes.
//
// All callbacks share the same function-scoped `i`.
//
// ============================================================

const numbers = [10, 20, 30];

for (var i = 0; i < numbers.length; i++) {
  setTimeout(function () {
    console.log("var:", numbers[i]);
  }, 2000);
}

// After the loop:
//
// i === 3
//
// Therefore every callback effectively does:
//
// numbers[3]
//
// numbers[3] === undefined
//
// Output:
//
// undefined
// undefined
// undefined
//
// ============================================================

// ============================================================
// 5. let + LOOP CLOSURE
// ============================================================
//
// `let` creates a separate binding for each loop iteration.
//
// ============================================================

for (let i = 0; i < numbers.length; i++) {
  setTimeout(function () {
    console.log("let:", numbers[i]);
  }, 2000);
}

// Output:
//
// 10
// 20
// 30
//
// ============================================================

// ============================================================
// 6. this
// ============================================================
//
// `this` depends on how a function is called.
//
// When a function is called as an object method:
//
// object.method()
//
// `this` refers to the object before the dot.
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

// ============================================================
// 7. METHOD BORROWING
// ============================================================
//
// Another object has the same properties:
//
// ============================================================

const myObjectTwo = {
  ID: 101,

  Name: "Mostafa",
};

// myObjectTwo does not have Print().
//
// Instead of creating another Print() function,
// we can borrow the existing function.
//
// ============================================================

// ============================================================
// 8. call()
// ============================================================
//
// call() allows us to explicitly specify `this`.
//
// Syntax:
//
// function.call(thisArg, arg1, arg2, ...);
//
// ============================================================

console.log(myObjectOne.Print.call(myObjectTwo));

// 101 : Mostafa
//
// Inside Print():
//
// this === myObjectTwo
//
// Therefore:
//
// this.ID   → 101
// this.Name → "Mostafa"
//

// ============================================================
// 9. apply()
// ============================================================
//
// apply() is similar to call().
//
// The main difference is how arguments are supplied.
//
// call():
//
// function.call(thisArg, arg1, arg2);
//
// apply():
//
// function.apply(thisArg, [arg1, arg2]);
//
// ============================================================

console.log(myObjectOne.Print.apply(myObjectTwo));

// 101 : Mostafa

// ============================================================
// 10. call() vs apply()
// ============================================================

function sumThreeNumbers(a, b, c) {
  return a + b + c;
}

// call()
// Arguments are supplied individually.

console.log(sumThreeNumbers.call(null, 10, 20, 30));

// 60

// apply()
// Arguments are supplied as an array-like value.

console.log(sumThreeNumbers.apply(null, [10, 20, 30]));

// 60

// ============================================================
// 11. Math.min() + ARRAY
// ============================================================

const arr = [100, 10, 20, 50, 12, 62, -52];

// Math.min() expects individual arguments:
//
// Math.min(100, 10, 20, ...);
//
// It does NOT expect an array.

console.log(Math.min(arr));

// NaN

// ============================================================
// 12. Math.min() + apply()
// ============================================================
//
// apply() can convert the array elements into arguments.
//
// ============================================================

console.log(Math.min.apply(null, arr));

// -52

// Conceptually:
//
// Math.min.apply(null, arr);
//
// behaves similarly to:
//
// Math.min(
//     100,
//     10,
//     20,
//     50,
//     12,
//     62,
//     -52
// );

// ============================================================
// 13. Modern alternative: SPREAD SYNTAX
// ============================================================
//
// Modern JavaScript provides a simpler solution:
//
// ============================================================

console.log(Math.min(...arr));

// -52
//
// `...arr` expands the array into individual arguments.
//
// ============================================================

// ============================================================
// 14. bind()
// ============================================================
//
// bind() does NOT execute the function immediately.
//
// It returns a NEW function.
//
// The new function has `this` bound to the supplied object.
//
// ============================================================

const objectTwoPrint = myObjectOne.Print.bind(myObjectTwo);

// The function has NOT executed yet.
//
// Now execute it:

console.log(objectTwoPrint());

// 101 : Mostafa

// ============================================================
// 15. call() vs apply() vs bind()
// ============================================================
//
// call()
//
//     bind this
//     execute immediately
//
//
//
// apply()
//
//     bind this
//     execute immediately
//     arguments supplied as array-like value
//
//
//
// bind()
//
//     bind this
//     return a new function
//     execute later
//
// ============================================================

// ============================================================
// 16. bind() + PRE-FILLED ARGUMENTS
// ============================================================

function multiply(a, b) {
  return a * b;
}

// Bind the first argument.

const double = multiply.bind(null, 2);

console.log(double(10));
// 20

console.log(double(20));
// 40

console.log(double(50));
// 100

// Conceptually:
//
// double(10)
//
// becomes:
//
// multiply(2, 10)
//
// ============================================================

// ============================================================
// 17. CLOSURE
// ============================================================
//
// A closure occurs when a function remembers and retains
// access to variables from its surrounding lexical environment.
//
// ============================================================

function increaseCounter() {
  var counter = 0;

  return function () {
    return counter++;
  };
}

const count = increaseCounter();

// The outer function has finished.
//
// However, the returned function still has access to:
//
// counter
//
// This is the closure.

// ============================================================
// 18. CALLING THE CLOSURE
// ============================================================

console.log("Counter:", count());
// 0

console.log("Counter:", count());
// 1

console.log("Counter:", count());
// 2

console.log("Counter:", count());
// 3

console.log("Counter:", count());
// 4

// ============================================================
// 19. HOW counter++ WORKS
// ============================================================
//
// return counter++;
//
// Post-increment:
//
// 1. Return current value.
// 2. Increment counter.
//
// First call:
//
// counter = 0
// return 0
// counter becomes 1
//
// Second call:
//
// counter = 1
// return 1
// counter becomes 2
//
// ============================================================

// ============================================================
// 20. CLOSURE = PERSISTENT STATE
// ============================================================
//
// `counter` is local to increaseCounter().
//
// It cannot be accessed directly from outside.
//
// ============================================================

function createCounter() {
  let counter = 0;

  return function () {
    return counter++;
  };
}

const privateCounter = createCounter();

console.log(privateCounter());
// 0

console.log(privateCounter());
// 1

console.log(privateCounter());
// 2

// There is no direct:
//
// privateCounter.counter
//
// The variable belongs to the lexical environment
// captured by the returned function.
//
// ============================================================

// ============================================================
// 21. MULTIPLE CLOSURES
// ============================================================
//
// Every execution of createCounter() creates a new
// lexical environment.
//
// Therefore each counter has independent state.
//
// ============================================================

const countOne = createCounter();

const countTwo = createCounter();

console.log("countOne:", countOne());
// 0

console.log("countOne:", countOne());
// 1

console.log("countTwo:", countTwo());
// 0

console.log("countTwo:", countTwo());
// 1

console.log("countOne:", countOne());
// 2

console.log("countTwo:", countTwo());
// 2

// ============================================================
// 22. LEXICAL SCOPE
// ============================================================
//
// The inner function can access variables from its
// surrounding lexical environment.
//
// ============================================================

function outer() {
  const value = 100;

  function inner() {
    console.log(value);
  }

  return inner;
}

const innerFunction = outer();

innerFunction();

// 100
//
// Even though outer() has finished executing,
// innerFunction still has access to `value`.
//
// ============================================================

// ============================================================
// 23. CLOSURE + setTimeout()
// ============================================================
//
// Closures are very important in asynchronous JavaScript.
//
// ============================================================

function createTimer(message) {
  setTimeout(function () {
    console.log("Timer message:", message);
  }, 2000);
}

createTimer("Hello");

// The callback executes later,
// but it still remembers `message`.
//
// ============================================================

// ============================================================
// 24. SUMMARY
// ============================================================
//
// IIFE
//
//     (function () {})();
//
//     Create + immediately execute.
//
//
//
// call()
//
//     function.call(thisArg, ...args)
//
//     Explicitly set `this` and execute now.
//
//
//
// apply()
//
//     function.apply(thisArg, argsArray)
//
//     Explicitly set `this` and execute now.
//
//
//
// bind()
//
//     function.bind(thisArg, ...args)
//
//     Create a new function with bound `this`.
//
//
//
// Closure
//
//     Function + surrounding lexical environment.
//
//     Allows a function to retain access to variables
//     after the outer function has finished.
//
//
//
// setTimeout()
//
//     Schedules a callback for later.
//     It does not pause the current execution.
//
//
//
// var
//
//     Function-scoped.
//
//
//
// let
//
//     Block-scoped.
//     In a `for` loop, each iteration gets its own binding.
//
// ============================================================
