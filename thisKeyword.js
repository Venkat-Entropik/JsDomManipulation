/*
============================================
          📘 JavaScript "this" Keyword Notes
============================================

👉 The "this" keyword in JavaScript refers to the object it belongs to.
Its value depends on **where** and **how** it is used (execution context).
*/

// -------------------------------------------
// 🔹 this in Global Space
// -------------------------------------------

// console.log(this);

// Inside the browser, the global object is the "window" object.
// Inside Node.js, the global object is "global".

// Therefore, "this" in the global space refers to the global object,
// which depends on the environment (browser or Node.js).


// -------------------------------------------
// 🔹 this Inside a Function
// -------------------------------------------

/*
The behavior of "this" inside a function depends on the mode:
  - Non-strict mode
  - Strict mode
*/

// ✅ Non-strict mode
// function nonStrictExample() {
//     console.log(this); // Returns the window object (in browser)
//   }
//   nonStrictExample();
  
//   // ✅ Strict mode
//   "use strict";
//   function strictExample() {
//     console.log(this); // Returns undefined in strict mode
//   }
//   strictExample();
  
  /*
  📘 What is Strict Mode?
  ----------------------
  - Introduced in ES5 to catch common coding mistakes.
  - Enabled using: "use strict"
  - In strict mode, 'this' inside a regular function is undefined instead of pointing to the global object.
  
  🧠 This Substitution Rule:
  --------------------------
  If the value of "this" is null or undefined (in non-strict mode),
  JavaScript substitutes it with the global object.
  This does not happen in strict mode.
  */
  
  // Example of this substitution
//   function substitutionExample() {
//     console.log(this);
//   }
//   substitutionExample(); // In non-strict mode => global object (window)
  // In strict mode => undefined
  
  
  // -------------------------------------------
  // 🔹 this Depends on How Function is Called
  // -------------------------------------------
  
  "use strict";
  
//   function example1() {
//     console.log(this);
//   }
//   example1(); // undefined (strict mode)
  
//   function example2() {
//     console.log(this);
//   }
//   window.example2(); // window (browser environment)
  
  
  // -------------------------------------------
  // 🔹 this Inside an Object Method
  // -------------------------------------------
  
//   let obj = {
//     name: "Venkat",
//     showThis: function () {
//       console.log(this);
//     },
//   };
  
//   obj.showThis();
  
  /*
  👉 Explanation:
  When "this" is used inside an object method,
  it refers to the object that **invoked** the method.
  So in this case, "this" points to "obj".
  */
  
  
  // -------------------------------------------
  // 🔹 call(), apply(), bind() Methods
  // -------------------------------------------
  
//   let student1 = {
//     name: "Venkat",
//     printName: function () {
//       console.log(this.name);
//     },
//   };
  
//   let student2 = {
//     name: "Deva",
//   };
  
//   student1.printName(); // Venkat
//   student1.printName.call(student2); // Deva
  
  /*
  📘 Summary:
  - call(), apply(), and bind() allow you to manually set the value of "this".
  - call(thisArg, arg1, arg2, ...)
  - apply(thisArg, [args])
  - bind(thisArg) → returns a new function with bound "this"
  */
  
  
  // -------------------------------------------
  // 🔹 this Inside Arrow Functions
  // -------------------------------------------
  
  /*
  👉 Arrow functions do not have their own "this".
  They inherit "this" from their lexical (surrounding) scope.
  */
  
//   const arrowExample = () => {
//     console.log(this);
//   };
//   arrowExample(); // In browser: window; In Node: global or empty object
  
  // Example 1
//   let arrowObj1 = {
//     name: "Venkat",
//     printName: () => {
//       console.log(this.name);
//     },
//   };
  
//   let name = "Deva";
//   arrowObj1.printName(); // "Deva" → because arrow function inherits global "this"
  
  // Example 2
//   let arrowObj2 = {
//     name: "Venkat",
//     printName: function () {
//       const innerArrow = () => {
//         console.log(this.name);
//       };
//       innerArrow();
//     },
//   };
  
//   arrowObj2.printName(); // "Venkat" → because arrow inherits "this" from enclosing function
  
  /*
  📘 Key Takeaways:
  -----------------
  1. Arrow functions don't bind their own "this".
  2. They inherit "this" from the surrounding (lexical) scope.
  3. Useful for preserving "this" inside callbacks or nested functions.
  */
  
  
  // -------------------------------------------
  // 🔹 Summary of "this" Keyword
  // -------------------------------------------
  
  /*
  | Context                              | Value of this                            |
  |-------------------------------------|------------------------------------------|
  | Global scope (browser)              | window                                   |
  | Global scope (Node.js)              | global                                   |
  | Function (non-strict mode)          | global object (window/global)            |
  | Function (strict mode)              | undefined                                |
  | Object method                       | The object itself                        |
  | Arrow function                      | Lexical "this" (from outer scope)        |
  | call(), apply(), bind()             | Explicitly defined "this"                |
  | Event handler (in browser)          | The HTML element that received the event |
  */
  
  