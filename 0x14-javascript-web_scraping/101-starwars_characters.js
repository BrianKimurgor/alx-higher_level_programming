#!/usr/bin/node
/**
 * Script that prints all characters of a Star Wars movie based on the given Movie ID.
 * The first argument is the Movie ID.
 * Display one character name by line, following the order from the /films/ response.
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

    // Use a Promise to maintain the order of character names
    const fetchCharacters = movieDetails.characters.map((characterUrl) => {
      return new Promise((resolve, reject) => {
        request.get(characterUrl, (charError, charResponse, charBody) => {
          if (!charError && charResponse.statusCode === 200) {
            const character = JSON.parse(charBody);
            resolve(character.name);
          } else {
            reject(new Error(`Error fetching character: ${charError}`)); // Updated to use new Error()
          }
        });
      });
    });

    // Resolve all promises and print character names in order
    Promise.all(fetchCharacters)
      .then((characterNames) => {
        characterNames.forEach((name) => {
          console.log(name);
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }
});
