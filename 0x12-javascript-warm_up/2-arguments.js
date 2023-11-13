#!/usr/bin/node

const argumentsNum = process.argv.length - 2;// excludes node and script filename

if (argumentsNum === 0) {
  console.log('No argument');
} else if (argumentsNum === 1) {
  console.log('Argument found');
} else {
  console.log('Arguments found');
}
