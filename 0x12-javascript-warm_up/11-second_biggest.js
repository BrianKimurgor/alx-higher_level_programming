#!/usr/bin/node

// Get the list of arguments
const args = process.argv.slice(2);

// Convert arguments to integers
const numbers = args.map(arg => parseInt(arg));

// Filter out NaN values
const validNumbers = numbers.filter(num => !isNaN(num));

// Sort the array in descending order
validNumbers.sort((a, b) => b - a);

// Determine the second biggest integer
const secondBiggest = validNumbers[1];

// Print the result
console.log(secondBiggest || 0);
