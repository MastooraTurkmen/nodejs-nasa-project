const { getAllLaunches } = require('../../models/launches.modal')

function httpGetAllLaunches(req, res) {
    return res.status(200).json(getAllLaunches());
}

module.exports = {
    httpGetAllLaunches,
}