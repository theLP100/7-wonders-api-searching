import {API_key} from env;
const axios = require("axios");
const API = "https://us1.locationiq.com/v1/search.php";

const wonderList = ['Great Wall of China', 'Petra', 'Colosseum', 'Chichen Itza', 'Machu Picchu', 'Taj Mahal', 'Christ the Redeemer']


//need to define wonderName.  Will do this in a loop.
const params = {
  params: {
    key: API_key,
    q: wonderName,
    format: 'json'
  }
}
