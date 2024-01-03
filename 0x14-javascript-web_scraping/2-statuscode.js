#!/usr/bin/node
/**
 * script that displays status code of a GET request
 * first argument is the URL to request (GET)
 * status code is printed like code:<status code>
 * module used, request
 */

const request = require('request');

// getting URL from the command line argumenst
const url = process.argv[2];

// function to send Get request
function getRequest (url) {
  request({
    url,
    method: 'GET'
  }, (error, responce, body) => {
    if (error) {
      console.error(`Error ${error}`);
    } else {
      console.log('code:{$response.statusCode}');
    }
  });
}

// call the function within the URL
getRequest(url);
