#!/usr/bin/node
/**
 * Script that displays the status code of a GET request.
 * The first argument is the URL to request (GET).
 * The status code must be printed like this: code: <status code>.
 * Module used: request
 */

const request = require('request');

// Get the URL from the command-line arguments
const url = process.argv[2];

// Send a GET request using the 'request' module
request(url, (error, response) => {
  if (error) {
    // If there's an error, log the error message
    console.error(`Error ${error}`);
  } else {
    // If successful, log the status code
    console.log(`code: ${response.statusCode}`);
  }
});
