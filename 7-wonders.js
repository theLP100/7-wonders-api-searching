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
// const params = {
//   params: {
//     key: API_KEY,
//     q: "The Great Wall of China", //wonderName
//     format: "json",
//   },
// };

//the call to the api
for (const wonderName of wonderList) {
  console.log(wonderName);
  axios
    .get(API, {
      params: {
        key: API_KEY,
        q: wonderName,
        format: "json",
      },
    })
    .then((response) => {
      setTimeout(() => {
        const firstEntry = response.data[0];
        console.log(wonderName, firstEntry.lat, firstEntry.lon);
      }, 5000);
    })
    .catch((error) => {
      console.log(`Error: ${error}`);
    });
}
