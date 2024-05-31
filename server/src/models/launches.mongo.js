const mongoose = require('mongoose');

const launchesSchema = mongoose.Schema({
    flightNumber: {
        type: Number,
        required: true,
        default: 100,
        min: 100,
        max: 999,
    },
    launchDate: {
        type: Date,
        required: true,
    },
    mission: {
        type: String,
        required: true,
    },
    rocket: {
        type: String,
        required: true,
    },
    target: {
        type: mongoose.ObjectId,
        ref: 'Planet'
    },
    customers: [String],
    upcoming: {
        type: Boolean,
        required: true,
    },
    success: {
        type: Boolean,
        required: true,
        default: true,
    }
})

module.exports = mongoose.model('Launch', launchesSchema)