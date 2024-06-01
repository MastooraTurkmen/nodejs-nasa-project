const launchesDatabase = require('./launches.mongo')
const planets = require('./planets.mongo')

const DEFAULT_FLIGHT_NUMBER = 100;

const launches = new Map();

const launch = {
    flightNumber: 100,
    mission: 'Kepler Exploration X',
    rocket: 'Explorer IS1',
    launchDate: new Date('December 27, 2030'),
    target: 'Kepler-422 b',
    customers: ['ZTM', 'NASA'],
    upcoming: true,
    success: true,
}

saveLaunch(launch)

async function existLaunchesWithId(launchId) {
    return await launchesDatabase.findOne({
        flightNumber: launchId,
    })
}

async function getLatestFlightNumber() {
    const latestLaunch = await launchesDatabase.find({}).sort('-flightNumber')

    if (!latestLaunch) {
        return DEFAULT_FLIGHT_NUMBER;
    }

    return latestLaunch.flightNumber;
}

async function getAllLaunches() {
    return await launchesDatabase.find({}, {
        '_id': 0,
        '__v': 0,
    })
}

async function saveLaunch(launch) {
    const planet = await planets.findOne({
        keplerName: launch.target,
    });

    if (!planet) {
        throw new Error('No matching planet was found')
    }

    await launchesDatabase.findOneAndUpdate({
        flightNumber: launch.flightNumber,
    }, launch, {
        upsert: true,
    });
}

async function scheduleNewLaunch() {
    const newFlightNumber = await getLatestFlightNumber() + 1
    const newLaunch = Object.assign(launch, {
        success: true,
        upcoming: true,
        customer: ['Zero to Mastery', 'NASA'],
        flightNumber: newFlightNumber
    })

    await saveLaunch(newLaunch)
}

async function abortLaunchById(launchId) {
    const aborted = await launchesDatabase.updateOne({
        flightNumber: launchId,
    }, {
        upcoming: false,
        success: false,
    })
    return aborted.ok === 1 && aborted.nModified === 1;
}

module.exports = {
    existLaunchesWithId,
    getAllLaunches,
    abortLaunchById,
    scheduleNewLaunch
}