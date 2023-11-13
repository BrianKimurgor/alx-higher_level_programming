#!/usr/bin/node

const myInt = process.argv[2];

const turnInt = parseInt(myInt);

if (isNaN(turnInt)) {
  console.log('Missing number of occurences');
} else {
  for (let i = 0; i < turnInt; i++) {
    console.log('C is fun');
  }
}
