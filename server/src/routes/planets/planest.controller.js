const { planets } = require('../../models/planets.modal');

function getAllPlanets(req, res) {
    return res.status(200).json(planets);
}

module.exports = {
    getAllPlanets
}