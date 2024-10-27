const needle = require("needle");

const api = "https://api.thecatapi.com/v1/breeds/search?q=";

const fetchBreedDescription = function (breedName, callback) {
  const breedURL = api + breedName;

  needle.get(breedURL, (error, response, body) => {
    if (error) {
      callback(error, null); // Pass the error to the callback
      return;
    }

    // Ensure the body has at least one result and the description exists
    if (body && body.length > 0 && body[0].description) {
      callback(null, body[0].description); // Pass description to callback
    } else {
      callback(`Failed to fetch the breed: ${breedName}`, null); // Pass error message to callback
    }
  });
};

module.exports = { fetchBreedDescription };
