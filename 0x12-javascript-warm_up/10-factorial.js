#!/usr/bin/node

// Define the factorial function
function factorial (n) {
  if (isNaN(n) || n < 0) {
    return 1; // Factorial of NaN or negative number is 1
  } else if (n === 0 || n === 1) {
    return 1; // Base case: factorial of 0 or 1 is 1
  } else {
    return n * factorial(n - 1); // Recursive case
  }
}

// Get the integer from the command-line argument
const num = process.argv[2];

// Convert the argument to an integer
const intNum = parseInt(num);

// Call the factorial function and print the result
console.log(factorial(intNum));
