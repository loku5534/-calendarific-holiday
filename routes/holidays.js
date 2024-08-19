const express = require('express');
const { getHolidays } = require('../controller/holidaysController');
const router = express.Router();

router.get('/', getHolidays);

module.exports = router;
