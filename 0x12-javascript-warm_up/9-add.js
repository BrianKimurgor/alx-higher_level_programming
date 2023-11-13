#!/usr/bin/node

function add (a, b) {
  return a + b;
}

const num1 = process.argv[2];
const num2 = process.argv[3];

const num1Int = parseInt(num1);
const num2Int = parseInt(num2);

if (isNaN(num1Int) || isNaN(num2Int)) {
  console.log('NaN');
} else {
  console.log(add(num1Int, num2Int));
}
