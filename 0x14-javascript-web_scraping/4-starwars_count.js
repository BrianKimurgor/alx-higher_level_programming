#!/usr/bin/node
/**
 * Script that prints the number of movies where the character "Wedge Antilles" (character ID 18) is present.
 * The first argument is the API URL of the Star Wars API: https://swapi-api.alx-tools.com/api/films/
 * Uses character ID 18 to filter the movies.
 * Module used: request
 */

const request = require('request');

// Get the API URL from the command-line arguments
const apiUrl = process.argv[2];

// Character ID for "Wedge Antilles"
const characterId = 18;

// Send a GET request using the 'request' module to fetch movie data
request(apiUrl, (error, response, body) => {
  if (error) {
    // If there's an error, log the error message
    console.error(`Error: ${error}`);
  } else if (response.statusCode !== 200) {
    // If the response status code is not 200 (OK), log an error message
    console.error(`Error: Unexpected status code ${response.statusCode}`);
  } else {
    // Parse the JSON response body to get the list of movies
    const movies = JSON.parse(body).results;

    // Filter movies where "Wedge Antilles" (character ID 18) is present
    const moviesWithWedge = movies.filter(movie =>
      movie.characters.includes(`https://swapi-api.alx-tools.com/api/people/${characterId}/`)
    );

    // Print the number of movies where "Wedge Antilles" is present
    console.log(moviesWithWedge.length);
  }
});
