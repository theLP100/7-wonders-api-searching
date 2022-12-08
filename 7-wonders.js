const axios = require("axios");
const dotenv = require("dotenv").config();

const API_KEY = process.env.API_KEY;
const API = "https://us1.locationiq.com/v1/search.php";
const locations = [
  "Great Wall of China",
  "Petra",
  "Colosseum",
  "Chichen Itza",
  "Machu Picchu",
  "Taj Mahal",
  "Christ the Redeemer",
];
const locData = {};

const getInfo = (location) => {
  axios
    .get(API, { params: { key: API_KEY, q: location, format: "json" } })
    .then((result) => {
      const lat = result.data[0].lat;
      const lon = result.data[0].lon;
      console.log(`${location} lat: ${lat} lon: ${lon}`);
      //add stuff here to add the data to locData?
    })
    .catch((error) => {
      console.log(error);
    });
};

const getPromise = (time) => {
  const timeoutTime = time * 1000;
  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("It's go time!"), timeoutTime);
  });
  return myPromise;
};

for (let i = 0; i < locations.length; i++) {
  const location = locations[i];
  const currentPromise = getPromise((i + 1) * 5);
  currentPromise
    .then((value) => {
      getInfo(location);
    })
    .catch((error) => {
      console.log(error);
    });
}

// LPs' first try (it didn't work.)
//the call to the api
// for (const wonderName of locations) {
//   console.log(wonderName);
//   axios
//     .get(API, {
//       params: {
//         key: API_KEY,
//         q: wonderName,
//         format: "json",
//       },
//     })
//     .then((response) => {
//       setTimeout(() => {
//         const firstEntry = response.data[0];
//         console.log(wonderName, firstEntry.lat, firstEntry.lon);
//       }, 5000);
//     })
//     .catch((error) => {
//       console.log(`Error: ${error}`);
//     });
// }
//let's try with helper functions.
