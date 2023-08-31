const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const authRoutes = require('./routes/authRoutes');


// Middlewares
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use('/api/auth', authRoutes);

module.exports = app;
