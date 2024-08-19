const axios = require('axios');
require('dotenv').config();

const apiKey = process.env.CALENDARIFIC_API_KEY;
const apiUrl = process.env.CALENDARIFIC_API_URL;


async function fetchHolidays(country, year) {
    try {
        const response = await axios.get(`${apiUrl}/holidays`, {
            params: {
                api_key: apiKey, // Your API key
                country,
                year
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching holidays:', error);
        throw error;
    }
}



const fetchCountries = async () => {
    const response = await axios.get(`${apiUrl}/countries`, {
        params: {
            api_key: apiKey,
        },
    });
    return response.data.response.countries;
};

module.exports = { fetchHolidays, fetchCountries };
