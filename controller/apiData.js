"use strict";
const Modelapi = require("../module/ModelApi");
const { default: axios } = require("axios");

const apiData = async (req, res) => {
  const url = `https://flowers-api-13.herokuapp.com/getFlowers`;
  await axios
    .get(url)
    .then((response) => {
      let modeldata = response.data.flowerslist.map((flwer) => {
        return new Modelapi(flwer);
      });
      res.send(modeldata);
    })
    .catch((error) => {
      res.send(error);
    });
};
module.exports = { apiData };
