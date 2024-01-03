#!/usr/bin/node
/**
 * script that displays status code of a GET request
 * first argument is the URL to request (GET)
 * status code is printed like code:<status code>
 * module used: built-in https module
 */

const https = require('https');

// Getting URL from the command line arguments
const url = process.argv[2];

// Function to send a GET request
function getRequest(url) {
  https.get(url, (response) => {
    console.log(`code:${response.statusCode}`);
  }).on('error', (error) => {
    console.error(`Error ${error}`);
  });
}

// Call the function with the URL
getRequest(url);
