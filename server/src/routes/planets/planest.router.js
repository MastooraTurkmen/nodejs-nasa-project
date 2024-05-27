const express = require('express');
const { httpGetAllPlanets } = require('./planest.controller');

const planetsRouter = express.Router();

planetsRouter.get('/planets', httpGetAllPlanets);

module.exports = planetsRouter;