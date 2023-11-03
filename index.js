require('dotenv').config()

const name = process.env.MY_NAME;
const city = process.env.MY_CITY;
const language= process.env.MY_LANGUAGE;

if (!name || !city || !language) {
  console.error(
    "Erreur !"
  );
  process.exit(1);
}

console.log ("I am ${name}, wilder in ${city}, and i love ${language}.");
