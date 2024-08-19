const { fetchHolidays } = require('../services/calendarificService');
const {cache} = require('../utils');

const getHolidays = async (req, res) => {
    try {
        const { country, year } = req.query;
        // If country and year are not provided in the parameters, throw an error message
        if (!country || !year) {
            return res.status(400).json({
                error: 'Missing country code or year!'
            });
        }
        // Construct the cache key based on country and year
        const cacheKey = `${country}-${year}`;

        // Check if data exists in cache
        const cachedData = cache.get(cacheKey);
        if (cachedData) {
            return res.status(200).json(cachedData);
        }

        // Call API to fetch data
        const data = await fetchHolidays(country, year);

        if(data.meta.code !== 200){
            throw new Error('Error occured. Data could not be fecthed!');
        }

        if(data.response.length <= 0){
            throw new Error('Data not found! Check country code and year!');
        }

        // Store the result in cache
        cache.set(cacheKey, data.response.holidays);

        return res.status(200).json(data.response.holidays);

    } catch (error) {
        res.status(500).json({ error: error.message || 'An error occured!' });
    }
};

module.exports = { getHolidays };
