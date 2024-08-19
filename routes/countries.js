const express = require("express");
const { getCountries } = require("../controller/countriesController");
const router = express.Router();

router.get("/", getCountries);

module.exports = router;
