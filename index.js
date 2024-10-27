const { fetchBreedDescription } = require('./breedFetcher');

// Validate user input
if (!process.argv[2]) {
  console.error(
    "Error: Missing arguments.\nUsage: > node index.js <cat breed>"
  );
  process.exit(1);
}

const breedName = process.argv[2].trim();

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log('Error fetching details:', error);
  } else {
    console.log(desc);
  }
});
