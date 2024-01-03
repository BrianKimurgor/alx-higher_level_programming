#!/usr/bin/node
/**
 * Script that prints the title of a Star Wars movie where the episode number matches a given integer.
 * The first argument is the movie ID.
 * Uses the Star Wars API with the endpoint https://swapi-api.alx-tools.com/api/films/:id.
 * Module used: request
 */

const request = require('request');

// Get the movie ID from the command-line arguments
const movieId = process.argv[2];

// Construct the API endpoint URL with the provided movie ID
const apiUrl = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

// Send a GET request using the 'request' module
request(apiUrl, (error, response, body) => {
  if (error) {
    // If there's an error, log the error message
    console.error(`Error: ${error}`);
  } else if (response.statusCode !== 200) {
    // If the response status code is not 200 (OK), log an error message
    console.error(`Error: Unexpected status code ${response.statusCode}`);
  } else {
    // Parse the JSON response body to get the movie details
    const movieDetails = JSON.parse(body);

    // Print the title of the movie based on the episode number
    console.log(movieDetails.title);
  }
});
