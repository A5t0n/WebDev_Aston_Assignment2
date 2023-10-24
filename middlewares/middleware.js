const express = require('express');
const cors = require('cors');

const setupMiddleware = (app) => {
    app.use(express.json());
    app.use(cors());
};

module.exports = {setupMiddleware};