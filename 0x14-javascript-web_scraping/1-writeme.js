#!/usr/bin/node
/**
 * script that writes a string to a file
 * file path
 * string to write
 * content to be written in 'utf-8'
 * print error object incase of error
 */

const fs = require('fs');

// get the filepath and the string to write from the command line arguments
const filePath = process.argv[2];
const stringToWrite = process.argv[3];

// function to write the string to the file
function writeFile (path, data) {
  fs.writeFile(path, data, 'utf-8', (err) => {
    if (err) {
      console.error(err);
    }
  });
}

// calling the function with the filepath and the string to write
writeFile(filePath, stringToWrite);
