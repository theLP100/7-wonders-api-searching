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

//the following is Jasmine's code.
//Go through this and update your code to be better!

// const axios = require('axios');

// const key = **taking out for jasmine's privacy"

// const API = "https://us1.locationiq.com/v1/search.php"

// const locations = ["Great Wall of China", "Petra", "Colosseum", "Chichen Itza", "Machu Picchu", "Taj Mahal", "Christ the Redeemer"];
// const locData = {}

// const getInfo = (location) => {
//     axios.get(API, {params:{key:key, q:location, format:"json"}})
//         .then((result) => {
//             const lat = result.data[0].lat;
//             const lon = result.data[0].lon;
//             console.log(`${location} lat: ${lat} lon: ${lon}`);
//         })
//         .catch((error) => {
//             console.log(error);
//         });
// }

// const getPromise = (time) => {
//     const timeoutTime = time * 1000;
//     const myPromise = new Promise((resolve, reject) =>{
//         setTimeout(() => resolve("It's go time!"), timeoutTime);

//     });
//     return myPromise;
// }

// for(let i = 0; i < locations.length; i++) {
//     const location = locations[i];
//     const currentPromise = getPromise((i + 1) * 5);
//     currentPromise.then((value) => {
//         getInfo(location);
//     }).catch((error) => {console.log(error)});
// }
