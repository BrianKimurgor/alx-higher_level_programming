#!/usr/bin/node
/**
 * Script that prints all characters of a Star Wars movie based on the given Movie ID.
 * The first argument is the Movie ID.
 * Display one character name by line.
 * Module used: request
 */

const request = require('request');

// Get the Movie ID from the command-line arguments
const movieId = process.argv[2];

// Construct the API URL using the provided Movie ID
const apiUrl = `https://swapi.dev/api/films/${movieId}/`;

// Send a GET request using the 'request' module to fetch the movie details
request.get(apiUrl, (error, response, body) => {
  if (error) {
    // If there's an error, log the error message
    console.error(`Error: ${error}`);
  } else if (response.statusCode !== 200) {
    // If the response status code is not 200 (OK), log an error message
    console.error(`Error: Unexpected status code ${response.statusCode}`);
  } else {
    // Parse the JSON response body to get the movie details
    const movieDetails = JSON.parse(body);

    // Display the characters of the movie one by one
    movieDetails.characters.forEach((characterUrl) => {
      request.get(characterUrl, (charError, charResponse, charBody) => {
        if (!charError && charResponse.statusCode === 200) {
          const character = JSON.parse(charBody);
          console.log(character.name);
        } else {
          console.error(`Error fetching character: ${charError}`);
        }
      });
    });
  }
});
