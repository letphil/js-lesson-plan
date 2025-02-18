# CODING MENTORSHIP SYLLABUS

## JavaScript Basics

- Introduction to JavaScript

  - What is JavaScript?
  - Why JavaScript?
  - JavaScript in the Browser
  - JavaScript in Node.js

- Setting Up a Development Environment

  - Text Editors
  - Browsers
  - Node.js

- Variables and Data Types

  - `var`, `let`, and `const`
  - Primitive Data Types
  - Reference Data Types

- Operators

  - Arithmetic Operators

    - Increment and Decrement Operators ( `++`, `--` )
    - Addition Operator ( `+` )
    - Subtraction Operator ( `-` )
    - Multiplication Operator ( `*` )
    - Division Operator ( `/` )
    - Modulus Operator ( `%` )
    - Exponentiation Operator ( `**` )

  - Math Object

    - `Math.PI`
    - `Math.E`
    - `Math.round()`
    - `Math.ceil()`
    - `Math.floor()`
    - `Math.trunc()`
    - `Math.random()`
    - `Math.min()`
    - `Math.max()`
    - `Math.abs()`
    - `Math.pow()`
    - `Math.sqrt()`
    - `Math.cbrt()`
    - `Math.log()`
    - `Math.log10()`
    - `Math.log2()`
    - `Math.sin()`
    - `Math.cos()`
    - `Math.tan()`
    - `Math.asin()`
    - `Math.acos()`
    - `Math.atan()`
    - `Math.atan2()`

  - Assignment Operators

    - Assignment Operator ( `=` )
    - Addition Assignment Operator ( `+=` )
    - Subtraction Assignment Operator ( `-=` )
    - Multiplication Assignment Operator ( `*=` )
    - Division Assignment Operator ( `/=` )
    - Modulus Assignment Operator ( `%=` )

  - Comparison Operators

    - Equal Operator ( `==` )
    - Not Equal Operator ( `!=` )
    - Strict Equal Operator ( `===` )
    - Strict Not Equal Operator ( `!==` )
    - Greater Than Operator ( `>` )
    - Greater Than or Equal Operator ( `>=` )
    - Less Than Operator ( `<` )
    - Less Than or Equal Operator ( `<=` )

  - Logical Operators

    - Logical AND Operator ( `&&` )
    - Logical OR Operator ( `||` )
    - Logical NOT Operator ( `!` )

  - Ternary Operator
    - Ternary Operator ( `? :` )

- Control Flow

  - `if` Statements
  - `else` Statements
  - `else if` Statements
  - `switch` Statements
  - `for` Loops
  - `while` Loops
  - `do while` Loops
  - `break` and `continue` Statements

- Functions

  - Function Declarations ( `function add(a, b) { return a + b; }` )
  - Function Expressions ( `const add = function(a, b) { return a + b; }` )
  - Arrow Functions ( `=>` )
  - Higher Order Functions ( `map`, `filter`, `reduce` )
  - Callback Functions ( `setTimeout`, `setInterval`, `addEventListener` )
  - IIFE (Immediately Invoked Function Expressions)

- Arrays

  - Creating Arrays
  - Accessing Elements
  - Modifying Elements
  - Adding Elements
  - Removing Elements
  - Iterating Over Arrays
  - Array Methods ( `map`, `filter`, `reduce`, `forEach`, `find`, `findIndex`, `some`, `every`, `sort`, `reverse`, `concat`, `slice`, `splice`, `push`, `pop`, `shift`, `unshift` )

- Objects

  - Creating Objects
  - Accessing Properties
  - Modifying Properties
  - Adding Properties
  - Removing Properties
  - Iterating Over Objects
  - Object Methods ( `Object.keys`, `Object.values`, `Object.entries`, `Object.assign`, `Object.freeze`, `Object.seal`, `Object.isFrozen`, `Object.isSealed` )

## DOM Manipulation

- Introduction to the DOM

- Selecting Elements

  - `document.getElementById`
  - `document.getElementsByClassName`
  - `document.getElementsByTagName`
  - `document.querySelector`
  - `document.querySelectorAll`

- Modifying Elements

  - `element.innerHTML`
  - `element.textContent`
  - `element.className`
  - `element.classList`
  - `element.style`
  - `element.setAttribute`
  - `element.removeAttribute`

- Creating Elements

  - `document.createElement`
  - `document.createTextNode`
  - `element.appendChild`
  - `element.insertBefore`

- Removing Elements

  - `element.removeChild`
  - `element.remove`

- Event Listeners

  - `element.addEventListener`

## Asynchronous JavaScript

- Introduction to AJAX

  - What is AJAX?
    - Asynchronous JavaScript and XML
    - Asynchronous JavaScript and JSON
  - Why AJAX?

    - Improve User Experience
    - Reduce Server Load
    - Increase Performance

  - How AJAX Works

    - Send a Request
    - Receive a Response
    - Update the Page

  - AJAX with Fetch API

    - `fetch(url)`
    - `fetch(url, options)`
    - `fetch(url, options).then(response => response.json())`
    - `fetch(url, options).then(response => response.text())`
    - `fetch(url, options).then(response => response.blob())`
    - `fetch(url, options).then(response => response.arrayBuffer())`
    - `fetch(url, options).then(response => response.formData())`
    - `fetch(url, options).then(response => response.blob()).then(blob => URL.createObjectURL(blob))`
    - `fetch(url, options).then(response => response.blob()).then(blob => URL.createObjectURL(blob)).then(url => new Image().src = url)`

  - AJAX with XMLHttpRequest
    - `const xhr = new XMLHttpRequest()`
    - `xhr.open(method, url)`
    - `xhr.setRequestHeader(header, value)`
    - `xhr.send(body)`
    - `xhr.onreadystatechange = () => { if (xhr.readyState === 4 && xhr.status === 200) { console.log(xhr.responseText) } }`

- Introduction to Callbacks

  - What is a Callback?

    - A Callback is a Function
    - A Callback is a Function Passed as an Argument
    - A Callback is a Function Called by Another Function

  - Why Callbacks?

    - Callbacks with Event Listeners
    - Callbacks with Timers
    - Callbacks with AJAX

  - Callback Hell

    - What is Callback Hell?

      - Callbacks Inside Callbacks
      - Callbacks Inside Loops
      - Callbacks Inside Conditionals

    - How to Avoid Callback Hell?
      - Use Named Functions
      - Use Promises
      - Use Async/Await

  - Callbacks with AJAX
    - `const xhr = new XMLHttpRequest()`
    - `xhr.open(method, url)`
    - `xhr.setRequestHeader(header, value)`
    - `xhr.send(body)`
    - `xhr.onreadystatechange = () => { if (xhr.readyState === 4 && xhr.status === 200) { console.log(xhr.responseText) } }`

- Introduction to Promises

  - What is a Promise?
    `new Promise ((resolve, reject) => { if (condition) { resolve(value) } else { reject(error) } })`
    - A Promise is an Object
    - A Promise is an Object with a State
    - A Promise is a Placeholder
    - A Promise is a Placeholder for a Future Value
  - Why Promises?

    - Promises with Event Listeners
    - Promises with Timers
    - Promises with AJAX

  - Chaining Promises
    - `fetch(url, options).then(response => response.json()).then(data => console.log(data))`
    - `fetch(url, options).then(response => response.text()).then(data => console.log(data))`
    - `fetch(url, options).then(response => response.blob()).then(blob => URL.createObjectURL(blob)).then(url => new Image().src = url)`

- Introduction to Async/Await

  - What is Async/Await?

    `async function fetchData() { try { const response = await fetch(url, options); const data = await response.json(); console.log(data); } catch (error) { console.error(error); } }`

    - Async/Await is a Syntactic Sugar
    - Async/Await is a Syntactic Sugar for Promises
    - Async/Await is a Syntactic Sugar for Promises with `then` and `catch`

  - Why Async/Await?

    - Async/Await with Event Listeners
    - Async/Await with Timers
    - Async/Await with AJAX

  - Async/Await with Promises
    - `const fetchData = async () => { try { const response = await fetch(url, options); const data = await response.json(); console.log(data); } catch (error) { console.error(error); } }`

## JavaScript Libraries

- Introduction to React

  - What is React?
    - React is a Library
    - React is a Library for Building User Interfaces
    - React is a Library for Building User Interfaces with Components
  - Why React?
    - React with JSX
    - React with Virtual DOM
    - React with One-Way Data Binding
    - React with Unidirectional Data Flow

## JavaScript Tools

- Introduction to ESLint
- Introduction to Prettier

## JavaScript Testing

- Introduction to Jest

## JavaScript Frameworks

- Introduction to Express
- Introduction to Moleculer.js

## JavaScript Databases

- Introduction to MongoDB
- Introduction to PostgreSQL

## JavaScript Deployment

- Introduction to AWS

## JavaScript Security

- Introduction to CORS
- Introduction to JWT
- Introduction to HTTPS

## JavaScript Best Practices

- Introduction to Clean Code

- Introduction to Design Patterns
- Introduction to Code Reviews
- Introduction to Refactoring
