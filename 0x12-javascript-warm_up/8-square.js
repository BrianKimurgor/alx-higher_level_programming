#!/usr/bin/node

const mySquare = process.argv[2];

const squareInt = parseInt(mySquare);

if (isNaN(squareInt)) {
  console.log('Missing size');
} else {
  for (let i = 0; i < squareInt; i++) {
    let row = '';
    for (let j = 0; j < squareInt; j++) {
      row += 'X';
    }
    console.log(row);
  }
}
