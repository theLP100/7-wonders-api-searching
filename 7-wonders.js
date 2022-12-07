const axios = require("axios");
const dotenv = require("dotenv").config();

const API_KEY = process.env.API_KEY;
const API = "https://us1.locationiq.com/v1/search";
const wonderList = [
  "Great Wall of China",
  "Petra",
  "Colosseum",
  "Chichen Itza",
  "Machu Picchu",
  "Taj Mahal",
  "Christ the Redeemer",
];

//need to define wonderName.  Will do this in a loop.
const params = {
  params: {
    key: API_KEY,
    q: "The Great Wall of China", //wonderName
    format: "json",
  },
};

//the call to the api
axios
  .get(API, params)
  .then((response) => {
    const firstEntry = response.data[0];

    console.log("Success!", firstEntry.lat, firstEntry.lon);
  })
  .catch((error) => {
    console.log(`Error: ${error}`);
  });
