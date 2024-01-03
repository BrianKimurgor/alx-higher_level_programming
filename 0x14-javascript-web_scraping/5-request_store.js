#!/usr/bin/node
/**
 * Script that gets the contents of a webpage and stores it in a file.
 * The first argument is the URL to request.
 * The second argument is the file path to store the body response.
 * The file must be UTF-8 encoded.
 * Module used: request
 */

const request = require('request');
const fs = require('fs');

// Get the URL and file path from the command-line arguments
const url = process.argv[2];
const filePath = process.argv[3];

// Send a GET request using the 'request' module to fetch the webpage content
request.get({ url, encoding: 'utf8' }, (error, response, body) => {
  if (error) {
    // If there's an error, log the error message
    console.error(`Error: ${error}`);
  } else if (response.statusCode !== 200) {
    // If the response status code is not 200 (OK), log an error message
    console.error(`Error: Unexpected status code ${response.statusCode}`);
  } else {
    // Write the webpage content to the specified file path with UTF-8 encoding
    fs.writeFile(filePath, body, 'utf8', (writeError) => {
      if (writeError) {
        // If there's an error while writing to the file, log the error message
        console.error(`Error writing to file: ${writeError}`);
      } else {
        // Log a success message once the content is saved to the file
        console.log(`Content saved to ${filePath}`);
      }
    });
  }
});
