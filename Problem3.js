// Function Composition

// Write three functions: one to square a number, one to double a number, and one to add 5 to a number. Compose these functions to create a new function that squares a number, doubles the result, and then adds 5.

// Function to square a number
const square = (num) => num * num;

// Function to double a number
const double = (num) => num * 2;

// Function to add 5 to a number
const addFive = (num) => num + 5;

// Composed function: squares a number, then doubles the result, then adds 5
const squareDoubleAddFive = (num) => addFive(double(square(num)));

// Test the composed function
const result = squareDoubleAddFive(3);
console.log(result);  // 23