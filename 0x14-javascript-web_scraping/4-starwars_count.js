#!/usr/bin/node
/**
 * Script that prints the number of movies where the character “Wedge Antilles” is present.
 * The first argument is the API URL of the Star wars API: https://swapi-api.alx-tools.com/api/films/
 * Wedge Antilles is character ID 18 - script must use this ID for filtering the result of the API.
 * Module used: request
 */

const request = require('request');

// Get the API URL from the command-line arguments
const apiUrl = process.argv[2];

// Send a GET request to fetch the list of movies from the provided API URL
request.get(apiUrl, (error, response, body) => {
  if (error) {
    // If there's an error, log the error message
    console.error(`Error: ${error}`);
  } else if (response.statusCode !== 200) {
    // If the response status code is not 200 (OK), log an error message
    console.error(`Error: Unexpected status code ${response.statusCode}`);
  } else {
    // Parse the JSON response body to get the list of movies
    const movies = JSON.parse(body).results;

    // Filter the movies to count how many times the character with ID 18 (Wedge Antilles) appears
    const numberOfMoviesWithWedgeAntilles = movies.filter(movie =>
      movie.characters.includes('https://swapi-api.alx-tools.com/api/people/18/')
    ).length;

    // Print the number of movies where Wedge Antilles appears
    console.log(numberOfMoviesWithWedgeAntilles);
  }
});
