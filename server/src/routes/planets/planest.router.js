const express = require('express');
const { httpGetAllPlanets } = require('./planest.controller');

const planetsRouter = express.Router();

planetsRouter.get('/', httpGetAllPlanets);

module.exports = planetsRouter;