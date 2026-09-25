// JAVASCRIPT DEEP TOPICS
// ============================================================
//
// Topics:
//
// 1.  IIFE
// 2.  setTimeout() and callback arguments
// 3.  var + closure + asynchronous callbacks
// 4.  let + loop closures
// 5.  this
// 6.  call()
// 7.  apply()
// 8.  bind()
// 9.  Method borrowing
// 10. Math.min() + apply()
// 11. Closures
// 12. Lexical scope
// 13. Persistent private state
// 14. arguments object
// 15. Constructor functions
// 16. Factory functions
// 17. instanceof
// 18. Static methods vs instance methods
// 19. Object property descriptors
// 20. Prototypes
// 21. Prototype inheritance
// 22. Prototype chain
// 23. Object.create()
// 24. Prototype methods
// 25. Constructor.prototype
//
// ============================================================

// ============================================================
// 1. IIFE
// ============================================================
//
// IIFE = Immediately Invoked Function Expression.
//
// The function is:
//
// 1. Created as a function expression.
// 2. Immediately invoked.
//
// Syntax:
//
// (function () {
//
// })();
//
// ============================================================

(function sum() {
  return 10 + 5;
})();

// The return value is not stored,
// so the returned value is discarded.

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

// Output after approximately 2 seconds:
//
// Name: Ahmed
// Name: Ali
// Name: Mohammed
//
// Important:
//
// nameArray[i] is evaluated when setTimeout() is called.
//
// The resulting value is passed to the callback later.
//
// ============================================================

// ============================================================
// 3. setTimeout() DOES NOT PAUSE THE LOOP
// ============================================================
//
// setTimeout() schedules a callback for later.
//
// It does NOT stop JavaScript and wait for the delay.
//
// The current synchronous code continues executing.
//
// ============================================================

for (var i = 0; i < 3; i++) {
  console.log("Loop:", i);

  setTimeout(function () {
    console.log("Timer");
  }, 2000);
}

console.log("Loop finished");

// Immediate output:
//
// Loop: 0
// Loop: 1
// Loop: 2
// Loop finished
//
// Approximately 2 seconds later:
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
// Here the callback reads `i` when the callback executes.
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
// Therefore every callback effectively executes:
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
// Therefore each callback retains the appropriate value.
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
// `this` refers to the object used for the method call.
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
// Another object has compatible properties:
//
// ============================================================

const myObjectTwo = {
  ID: 101,

  Name: "Mostafa",
};

// myObjectTwo does not contain Print().
//
// Instead of creating another Print() function,
// we can borrow the existing function from myObjectOne.
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
// this.ID
//     ↓
// 101
//
// this.Name
//     ↓
// "Mostafa"
//
// ============================================================

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

// Math.min() expects individual numeric arguments:
//
// Math.min(100, 10, 20, ...);
//
// It does not expect an array as one argument.

console.log(Math.min(arr));

// NaN

// ============================================================
// 12. Math.min() + apply()
// ============================================================
//
// apply() passes the array elements as individual arguments.
//
// ============================================================

console.log(Math.min.apply(null, arr));

// -52

// Conceptually similar to:
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
// 13. MODERN ALTERNATIVE: SPREAD SYNTAX
// ============================================================
//
// Modern JavaScript provides a simpler approach.
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
// The returned function has `this` bound to the supplied
// object.
//
// ============================================================

const objectTwoPrint = myObjectOne.Print.bind(myObjectTwo);

// The function has not executed yet.
//
// Execute it:

console.log(objectTwoPrint());

// 101 : Mostafa

// ============================================================
// 15. call() vs apply() vs bind()
// ============================================================
//
// call()
//
//     Explicitly set `this`.
//     Execute immediately.
//
//
//
// apply()
//
//     Explicitly set `this`.
//     Execute immediately.
//     Arguments supplied as an array-like value.
//
//
//
// bind()
//
//     Explicitly bind `this`.
//     Return a new function.
//     Execute the new function later.
//
// ============================================================

// ============================================================
// 16. bind() + PRE-FILLED ARGUMENTS
// ============================================================

function multiply(a, b) {
  return a * b;
}

// Bind the first argument:
//
// a = 2

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
// A closure occurs when a function retains access to
// variables from its surrounding lexical environment.
//
// ============================================================

function increaseCounter() {
  let counter = 0;

  return function () {
    return counter++;
  };
}

const count = increaseCounter();

// increaseCounter() has finished executing.
//
// However, the returned function still has access to:
//
// counter
//
// This retained access is the closure.
//
// ============================================================

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
// 1. Return the current value.
// 2. Increment the variable.
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
// `counter` is local to createCounter().
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

// There is no direct access to the local variable:
//
// privateCounter.counter
//
// The function retains access to `counter` through
// its lexical environment.
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
// but it still retains access to `message`.
//
// ============================================================

// ============================================================
// 24. arguments OBJECT
// ============================================================
//
// Traditional non-arrow functions have an `arguments`
// object.
//
// It contains the arguments passed to the function.
//
// ============================================================

function total() {
  console.log(arguments);

  console.log("Number of arguments:", arguments.length);
}

total(5, 6, 8, 4, 5);

// `arguments` is:
//
// - array-like
// - indexed
// - has a length property
//
// But it is NOT a real Array.
//
// Therefore:
//
// arguments.map(...)
//
// does not work directly.
//
// ============================================================

// ============================================================
// 25. arguments + Array.prototype methods
// ============================================================
//
// We can borrow Array.prototype.slice().
//
// ============================================================

function totalNumbers() {
  return Array.prototype.slice.call(arguments).reduce(function (x, y) {
    return x + y;
  }, 0);
}

console.log(totalNumbers(5, 6, 8, 4, 5, 4, 5, 7, 1, 2, 2, 11, 2, 4));

// 67

// ============================================================
// 26. MODERN ALTERNATIVE: REST PARAMETERS
// ============================================================
//
// Modern JavaScript can collect arguments directly into
// a real Array.
//
// ============================================================

function totalModern(...numbers) {
  return numbers.reduce(function (x, y) {
    return x + y;
  }, 0);
}

console.log(totalModern(5, 6, 8, 4, 5));

// 28
//
// `numbers` is a real Array.
//
// ============================================================

// ============================================================
// 27. CONSTRUCTOR FUNCTION
// ============================================================
//
// A constructor function is traditionally used with `new`
// to create objects.
//
// ============================================================

function Member(_id, _name) {
  this.ID = _id;

  this.Name = _name;
}

const memberOne = new Member(100, "Ahmed");

const memberTwo = new Member(101, "Mostafa");

// ============================================================
// 28. WHAT new DOES
// ============================================================
//
// When:
//
// new Member(100, "Ahmed")
//
// is executed, JavaScript conceptually:
//
// 1. Creates a new object.
// 2. Links the object to Member.prototype.
// 3. Calls Member with `this` referring to the new object.
// 4. Returns the new object.
//
// ============================================================

console.log(memberOne.ID);
// 100

console.log(memberOne.Name);
// Ahmed

// ============================================================
// 29. instanceof
// ============================================================
//
// instanceof checks whether a constructor's prototype
// exists in the object's prototype chain.
//
// ============================================================

console.log(memberOne instanceof Member);

// true

console.log(memberTwo instanceof Member);

// true

console.log(memberOne instanceof Object);

// true

// ============================================================
// 30. CONSTRUCTOR FUNCTION + INHERITED PROTOTYPE
// ============================================================
//
// Objects created with new Member() have:
//
// memberOne
//     ↓
// Member.prototype
//     ↓
// Object.prototype
//     ↓
// null
//
// ============================================================

// ============================================================
// 31. FACTORY FUNCTION
// ============================================================
//
// A factory function is a normal function that creates
// and returns an object.
//
// It does NOT require `new`.
//
// ============================================================

function Factory(_id, _name) {
  return {
    ID: _id,

    Name: _name,
  };
}

const factoryOne = Factory(100, "Ahmed");

const factoryTwo = Factory(factoryOne.ID, factoryOne.Name);

console.log(factoryOne);
// { ID: 100, Name: "Ahmed" }

console.log(factoryTwo);
// { ID: 100, Name: "Ahmed" }

// ============================================================
// 32. CONSTRUCTOR vs FACTORY
// ============================================================
//
// Constructor:
//
//     function Member(id, name) {
//
//         this.ID = id;
//         this.Name = name;
//
//     }
//
//     const member = new Member(100, "Ahmed");
//
//
//
// Factory:
//
//     function Factory(id, name) {
//
//         return {
//             ID: id,
//             Name: name
//         };
//
//     }
//
//     const object = Factory(100, "Ahmed");
//
// ============================================================

// ============================================================
// 33. INSTANCE METHODS vs STATIC METHODS
// ============================================================
//
// An instance method is normally accessed through an object.
//
// Example:
//
// memberOne.someMethod()
//
//
// A static method belongs to the constructor/function itself.
//
// Example:
//
// Object.keys(obj)
//
// ============================================================

// ============================================================
// 34. Object.keys()
// ============================================================
//
// `Object.keys()` is a static method of Object.
//
// It receives an object and returns an array containing
// its own enumerable property names.
//
// ============================================================

const obj = {
  ID: 100,

  Name: "Ahmed",
};

console.log(Object.keys(obj));

// ["ID", "Name"]

// ============================================================
// 35. Object.values()
// ============================================================
//
// Returns an array containing the object's own
// enumerable property values.
//
// ============================================================

console.log(Object.values(obj));

// [100, "Ahmed"]

// ============================================================
// 36. hasOwnProperty()
// ============================================================
//
// hasOwnProperty() checks whether a property belongs
// directly to the object.
//
// It does NOT search the prototype chain.
//
// ============================================================

console.log(obj.hasOwnProperty("ID"));

// true

console.log(obj.hasOwnProperty("Salary"));

// false

// ============================================================
// 37. Object.defineProperty()
// ============================================================
//
// Object.defineProperty() is a static method on Object.
//
// It allows us to define or modify a property descriptor.
//
// ============================================================

const testObj = {
  ID: 100,

  Name: "Sayed",

  Hobby: "Art",
};

Object.defineProperty(testObj, "Serial", {
  // Value stored in the property.
  value: 200212,

  // If false, the property cannot be reassigned
  // through normal assignment.
  writable: false,

  // If false, the property does not appear in
  // Object.keys(), for example.
  enumerable: false,

  // If true, the property descriptor can later
  // be changed and the property can be deleted.
  configurable: true,
});

// ============================================================
// 38. Property descriptor behavior
// ============================================================

console.log(testObj.Serial);

// 200212

testObj.Serial = 200;

// In non-strict mode, the assignment is ignored.
//
// In strict mode, assigning to a non-writable property
// throws a TypeError.

console.log(testObj.Serial);

// 200212

// Serial is not enumerable.

console.log(Object.keys(testObj));

// ["ID", "Name", "Hobby"]

// But Serial still exists.

console.log(testObj.hasOwnProperty("Serial"));

// true

// ============================================================
// 39. PROPERTY DESCRIPTORS
// ============================================================
//
// A normal data property can have:
//
// value
// writable
// enumerable
// configurable
//
// Example:
//
// Object.defineProperty(object, "property", {
//
//     value: 100,
//     writable: true,
//     enumerable: true,
//     configurable: true
//
// });
//
// ============================================================

// ============================================================
// 40. Prototypes
// ============================================================
//
// Every ordinary JavaScript object has an internal
// [[Prototype]] reference.
//
// The prototype can contain properties and methods that
// the object can access through the prototype chain.
//
// ============================================================

// ============================================================
// 41. Object.setPrototypeOf()
// ============================================================
//
// We can explicitly change an object's prototype.
//
// ============================================================

Object.setPrototypeOf(obj, testObj);

// `obj` does not directly contain Hobby.
//
// But its prototype, testObj, contains Hobby.
//
// Therefore:

console.log(obj.Hobby);

// Art

// Direct properties of obj:

console.log(obj.hasOwnProperty("Hobby"));

// false

// ============================================================
// 42. Prototype lookup
// ============================================================
//
// When JavaScript evaluates:
//
// obj.Hobby
//
// it conceptually searches:
//
// 1. obj
// 2. obj's prototype
// 3. prototype's prototype
// 4. continue until found
// 5. return undefined if not found
//
// ============================================================

// ============================================================
// 43. Prototype chain
// ============================================================
//
// After:
//
// Object.setPrototypeOf(obj, testObj);
//
// the relationship is:
//
// obj
//  ↓
// testObj
//  ↓
// testObj's prototype
//  ↓
// Object.prototype
//  ↓
// null
//
// ============================================================

// ============================================================
// 44. Object.create()
// ============================================================
//
// Object.create(prototype)
//
// creates a new object whose internal [[Prototype]]
// points to the supplied object.
//
// ============================================================

const newObj = Object.create(testObj);

// newObj itself starts without own properties.
//
// But its prototype is testObj.
//
// Therefore:

console.log(newObj.Hobby);

// Art

// ============================================================
// 45. Own property vs inherited property
// ============================================================

console.log(newObj.hasOwnProperty("Hobby"));

// false

// Hobby is inherited from testObj.

// ============================================================
// 46. Shadowing an inherited property
// ============================================================
//
// Assigning:
//
// newObj.Hobby = "Music";
//
// creates an OWN property on newObj.
//
// It does not modify testObj.Hobby.
//
// ============================================================

newObj.Hobby = "Music";

console.log(newObj.Hobby);

// Music

console.log(testObj.Hobby);

// Art

console.log(newObj.hasOwnProperty("Hobby"));

// true

// ============================================================
// 47. Object.create() DOES NOT CALL A CONSTRUCTOR
// ============================================================
//
// This:
//
// Object.create(Member.prototype)
//
// creates an object whose prototype is Member.prototype.
//
// It does NOT execute:
//
// Member()
//
// Therefore constructor initialization does not happen.
//
// ============================================================

const emptyMember = Object.create(Member.prototype);

console.log(emptyMember instanceof Member);

// true

// But:
//
// emptyMember.ID
//
// is undefined because Member() was never called.
//
// ============================================================

// ============================================================
// 48. Prototype chain of a constructor instance
// ============================================================

const reObj = new Member(200, "Ahmed");

// Prototype chain:
//
// reObj
//   ↓
// Member.prototype
//   ↓
// Object.prototype
//   ↓
// null
//
// ============================================================

// ============================================================
// 49. __proto__
// ============================================================
//
// `__proto__` is a legacy accessor for an object's
// [[Prototype]].
//
// It can be useful for learning, but modern code should
// generally prefer:
//
// Object.getPrototypeOf()
// Object.setPrototypeOf()
//
// ============================================================

console.log(Object.getPrototypeOf(reObj));

// Member.prototype

console.log(Object.getPrototypeOf(Object.getPrototypeOf(reObj)));

// Object.prototype

console.log(
  Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(reObj))),
);

// null

// Equivalent conceptual relationships:
//
// reObj.__proto__
//     === Member.prototype
//
// reObj.__proto__.__proto__
//     === Object.prototype
//
// reObj.__proto__.__proto__.__proto__
//     === null
//
// ============================================================

// ============================================================
// 50. Prototype equality
// ============================================================

console.log(
  Object.prototype === Object.getPrototypeOf(Object.getPrototypeOf(reObj)),
);

// true

// ============================================================
// 51. instanceof + PROTOTYPE CHAIN
// ============================================================
//
// `instanceof` checks whether:
//
// Constructor.prototype
//
// exists somewhere in the object's prototype chain.
//
// ============================================================

console.log(reObj instanceof Member);

// true

console.log(reObj instanceof Object);

// true

console.log(Member.prototype === Object.getPrototypeOf(reObj));

// true

// ============================================================
// 52. Constructor's prototype
// ============================================================
//
// Every normal function used as a constructor has a
// `prototype` property.
//
// ============================================================

console.log(Member.prototype);

// Member.prototype is the object that instances created
// using:
//
// new Member()
//
// inherit from.
//
// ============================================================

// ============================================================
// 53. Prototype METHODS
// ============================================================
//
// Defining a method inside the constructor creates a
// separate function for every instance.
//
// Example:
//
// function Teacher(id, name) {
//
//     this.ID = id;
//     this.Name = name;
//
//     this.PrintInfo = function () {
//
//         return ...;
//
//     };
//
// }
//
// This means every Teacher instance gets its own
// PrintInfo function.
//
// A more memory-efficient pattern is to put the method
// on Teacher.prototype.
//
// ============================================================

function Teacher(_id, _name) {
  this.ID = _id;

  this.Name = _name;
}

// ============================================================
// 54. Define method on the prototype
// ============================================================

Teacher.prototype.PrintInfo = function () {
  return "Teacher name: " + this.Name + ", Teacher ID: " + this.ID;
};

// ============================================================
// 55. Create instances
// ============================================================

const teacher = new Teacher(1522, "Ahmed");

console.log(teacher.PrintInfo());

// Teacher name: Ahmed, Teacher ID: 1522

// ============================================================
// 56. Prototype method lookup
// ============================================================
//
// teacher does NOT own PrintInfo.
//
// PrintInfo exists on:
//
// Teacher.prototype
//
// When JavaScript evaluates:
//
// teacher.PrintInfo()
//
// it searches:
//
// teacher
//    ↓
// Teacher.prototype
//    ↓
// finds PrintInfo
//
// ============================================================

console.log(teacher.hasOwnProperty("PrintInfo"));

// false

console.log(Teacher.prototype.hasOwnProperty("PrintInfo"));

// true

// ============================================================
// 57. All Teacher instances share the same prototype method
// ============================================================

const teacherTwo = new Teacher(2000, "Ali");

console.log(teacher.PrintInfo === teacherTwo.PrintInfo);

// true

// ============================================================
// 58. Constructor property
// ============================================================
//
// Teacher.prototype.constructor normally points back to:
//
// Teacher
//
// ============================================================

console.log(Teacher.prototype.constructor === Teacher);

// true

console.log(teacher.constructor === Teacher);

// true
//
// `teacher.constructor` is inherited from Teacher.prototype.
//
// ============================================================

// ============================================================
// 59. IMPORTANT: Object.create(Teacher)
// ============================================================
//
// This is usually NOT what we want:
//
// Object.create(Teacher)
//
// because Teacher is the constructor function itself.
//
// Its prototype is:
//
// Function.prototype
//
// not:
//
// Teacher.prototype
//
// ============================================================

const wrongPrototypeObject = Object.create(Teacher);

// This object inherits from the function object `Teacher`,
// not from Teacher.prototype.
//
// ============================================================

// ============================================================
// 60. Correct Object.create() with a constructor prototype
// ============================================================
//
// If we want an object whose prototype is:
//
// Teacher.prototype
//
// use:
//
// Object.create(Teacher.prototype)
//
// ============================================================

const trainee = Object.create(Teacher.prototype);

console.log(trainee instanceof Teacher);

// true

// However:
//
// Teacher()
//
// was NOT executed.
//
// Therefore:

console.log(trainee.ID);

// undefined

console.log(trainee.Name);

// undefined

// But the prototype method exists:

console.log(typeof trainee.PrintInfo);

// function
//
// Calling PrintInfo() immediately would produce a result
// based on undefined ID/Name unless we initialize them.
//
// ============================================================

// ============================================================
// 61. Prototype inheritance with Object.create()
// ============================================================
//
// We can manually initialize the properties:

trainee.ID = 3000;

trainee.Name = "Mohammed";

console.log(trainee.PrintInfo());

// Teacher name: Mohammed, Teacher ID: 3000

// ============================================================
// 62. Constructor vs prototype properties
// ============================================================
//
// Instance properties:
//
// this.ID
// this.Name
//
// are created directly on each instance.
//
// Prototype methods:
//
// Teacher.prototype.PrintInfo
//
// are shared by all instances.
//
// ============================================================

// ============================================================
// 63. FINAL PROTOTYPE CHAIN
// ============================================================
//
// For:
//
// const teacher = new Teacher(1522, "Ahmed");
//
// The chain is:
//
// teacher
//    ↓
// Teacher.prototype
//    ↓
// Object.prototype
//    ↓
// null
//
// ============================================================

// ============================================================
// 64. FINAL SUMMARY
// ============================================================
//
// IIFE
//
//     (function () {})();
//
//     Function expression + immediate invocation.
//
//
//
// setTimeout()
//
//     Schedules a callback for later.
//     Does not pause the current execution.
//
//
//
// Closure
//
//     A function retains access to variables from its
//     surrounding lexical environment.
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
//     A `for` loop creates a separate binding per iteration.
//
//
//
// this
//
//     Determined by the function's invocation context.
//
//
//
// call()
//
//     Explicitly sets `this`.
//     Executes immediately.
//     Arguments are supplied individually.
//
//
//
// apply()
//
//     Explicitly sets `this`.
//     Executes immediately.
//     Arguments are supplied as an array-like value.
//
//
//
// bind()
//
//     Explicitly binds `this`.
//     Returns a new function.
//     Does not execute immediately.
//
//
//
// arguments
//
//     Array-like object available in traditional
//     non-arrow functions.
//
//
//
// Constructor function
//
//     Used with `new` to create instances.
//
//
//
// Factory function
//
//     Normal function that returns an object.
//
//
//
// instanceof
//
//     Checks whether Constructor.prototype exists
//     in the object's prototype chain.
//
//
//
// Object.defineProperty()
//
//     Defines a property and its descriptor.
//
//
//
// Property descriptor
//
//     value
//     writable
//     enumerable
//     configurable
//
//
//
// Prototype
//
//     Objects can inherit properties and methods
//     through their [[Prototype]].
//
//
//
// Object.create()
//
//     Creates an object with the supplied object as
//     its prototype.
//
//
//
// Prototype chain
//
//     object
//        ↓
//     prototype
//        ↓
//     prototype
//        ↓
//     null
//
//
//
// Prototype method
//
//     Constructor.prototype.method = function () {};
//
//     Shared by instances through the prototype chain.
//
//
