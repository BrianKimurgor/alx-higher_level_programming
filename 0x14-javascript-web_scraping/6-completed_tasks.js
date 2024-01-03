#!/usr/bin/node
/**
 * Script that computes the number of tasks completed by user ID.
 * The first argument is the API URL: https://jsonplaceholder.typicode.com/todos
 * Only print users with completed tasks.
 * Module used: request
 */

const request = require('request');

// Get the API URL from the command-line arguments
const apiUrl = process.argv[2];

// Send a GET request using the 'request' module to fetch the tasks
request.get(apiUrl, (error, response, body) => {
  if (error) {
    // If there's an error, log the error message
    console.error(`Error: ${error}`);
  } else if (response.statusCode !== 200) {
    // If the response status code is not 200 (OK), log an error message
    console.error(`Error: Unexpected status code ${response.statusCode}`);
  } else {
    // Parse the JSON response body to get the tasks
    const tasks = JSON.parse(body);

    // Initialize an object to store the count of completed tasks for each user ID
    const completedTasksByUser = {};

    // Loop through the tasks to count completed tasks for each user ID
    tasks.forEach(task => {
      if (task.completed) {
        if (completedTasksByUser[task.userId]) {
          completedTasksByUser[task.userId]++;
        } else {
          completedTasksByUser[task.userId] = 1;
        }
      }
    });

    // Log the number of completed tasks for each user ID
    console.log(completedTasksByUser);
  }
});
