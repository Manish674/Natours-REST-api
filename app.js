const express = require('express');
const tourRouter = require('./routes/tourRoutes');

const app = express();

app.use(express.json());
app.use('/v1/api/tours', tourRouter);

module.exports = app;
