// backend/server.js
const express = require('express');
const axios = require('axios');
const app = express();

const REST_COUNTRIES_API = 'https://restcountries.com/v3.1';

// Endpoint to search countries by name
app.get('/api/countries', async (req, res) => {
  try {
    const { name } = req.query;
    const response = await axios.get(`${REST_COUNTRIES_API}/name/${name}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching countries' });
  }
});

// Endpoint to get detailed info about a specific country by code
app.get('/api/countries/:code', async (req, res) => {
  try {
    const { code } = req.params;
    const response = await axios.get(`${REST_COUNTRIES_API}/alpha/${code}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching country details' });
  }
});

const cors = require('cors');
app.use(cors());

app.listen(5000, () => {
  console.log('Server running on port 5000');
});

