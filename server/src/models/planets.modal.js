const fs = require('fs');
const path = require('path')
const { parse } = require('csv-parse');

const habitablePlanets = [];

function loadPlanetsData() {
    return new Promise((resolve, reject) => {
        fs.createReadStream(path.join(__dirname, '..', '..', 'data', 'kepler_data.csv'))
            .pipe(parse({
                comment: '#',
                columns: true,
            }))
            .on('data', (data) => {
                if (data) {
                    habitablePlanets.push(data);
                }
            })
            .on('error', (err) => {
                console.log(err);
                reject(err)
            })
            .on('end', () => {
                console.log(`${habitablePlanets.length} habitable planets found!`);
                resolve();
            });
    })
}

function getAllPlanets() {
    return habitablePlanets;
}

module.exports = {
    loadPlanetsData,
    habitablePlanets
}