const { getAllPlanets } = require('../../models/planets.modal');

function httpGetAllPlanets(req, res) {
    return res.status(200).json(getAllPlanets());
}

module.exports = {
    httpGetAllPlanets,
}