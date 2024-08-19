const request = require('supertest');
const app = require('../app'); // Adjust path if necessary

describe('GET /', () => {
    it('should return a welcome message', async () => {
        const res = await request(app).get('/');
        expect(res.status).toBe(200);
        expect(res.body).toBe('Welcome to Holiday API!');
    });
});

describe('GET /holidays', () => {
    it('should return holidays for a given country code and year', async () => {
        const countryCode = 'US';
        const year = 2022;

        const res = await request(app)
            .get(`/holidays?country=${countryCode}&year=${year}`);

        expect(res.status).toBe(200);
        // Validate the structure and some content of the res
        expect(res.body).toBeInstanceOf(Array);
        expect(res.body).toHaveLength(656); // Adjust based on expected length
        expect(res.body[0]).toHaveProperty('name');
        expect(res.body[0]).toHaveProperty('description');
        expect(res.body[0]).toHaveProperty('country');
        expect(res.body[0].date.iso).toMatch('2022-01-01'); // Ensure date is same
    });

    it('should handle invalid country code or year', async () => {
        const invalidCountryCode = 'xx';
        const year = 2022;

        const res = await request(app)
            .get(`/holidays?country=${invalidCountryCode}&year=${year}`)
            .expect('Content-Type', /json/)
            .expect(500); // Adjust based on your API error handling

        // Validate the error res
        expect(res.body).toHaveProperty('error');
        expect(res.body.error).toBe('Data not found! Check country code and year!'); // Adjust based on your error message
    });
});

describe('GET /countries', () => {
    it('should return counrties', async () => {
        const res = await request(app).get('/countries');
        expect(res.status).toBe(200);
        expect(res.body).toBeInstanceOf(Array);
        expect(res.body).toHaveLength(230); // Adjust based on expected length
        expect(res.body[0]).toHaveProperty('country_name');
        expect(res.body[0]).toHaveProperty('iso-3166');
        expect(res.body[0]).toHaveProperty('total_holidays');
        expect(res.body[0]).toHaveProperty('supported_languages');
        expect(res.body[0]).toHaveProperty('uuid');
        expect(res.body[0]).toHaveProperty('flag_unicode');
    });
});