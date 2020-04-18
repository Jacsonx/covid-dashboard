const axios = require("axios");

axios({
  method: "GET",
  url: "https://covid-19-data.p.rapidapi.com/country",
  headers: {
    "content-type": "application/octet-stream",
    "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
    "x-rapidapi-key": "6564735c05msh1d5f09e32919bfep16679ejsnc2d974de9f9e",
  },
  params: {
    format: "json",
    name: "brazil",
  },
})
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
