const { fetchCountries } = require('../services/calendarificService');
const {cache} = require('../utils');

const getCountries = async (req, res) => {
    try {
        // Cache Key
        const cacheKey = 'countries';

        // Retrieve data from cache
        let countries = cache.get(cacheKey);

        // If cache Data is not found, call API and set cache
        if (!countries) {
            countries = await fetchCountries();
            cache.set(cacheKey, countries);
        }
        res.json(countries);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch countries' });
    }
};

module.exports = { getCountries };
