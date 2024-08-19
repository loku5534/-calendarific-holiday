const express = require('express');
const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/holidays', require('./routes/holidays'));
app.use('/countries', require('./routes/countries'));

// Other configurations
app.get('/', (_req, res) => {
  res.json('Welcome to Holiday API!');
});

module.exports = app;
