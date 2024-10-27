const needle = require("needle");

// Validate user input
if (!process.argv[2]) {
  console.error(
    "Error: Missing arguments.\nUsage: > node breedFether.js <cat breed>"
  );
  process.exit(1);
}

const api = "https://api.thecatapi.com/v1/breeds/search?q=";
const breedInput = process.argv[2].trim();
const breedURL = api + breedInput;

needle.get(breedURL, (error, response, body) => {
  if (error) {
    console.error("Error fetching data:", error);
    process.exit(1);
  }

  // Ensure the body has at least one result and the description exists
  if (body && body.length > 0 && body[0].description) {
    console.log(body[0].description);
  } else {
    console.log(`Failed to fetch the breed: ${breedInput}`);
    process.exit(1);
  }
});
