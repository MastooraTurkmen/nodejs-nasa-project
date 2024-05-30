const mongoose = require('mongoose');

const launchesSchema = mongoose.Schema({
    keplerName: {
        type: String,
        required: true,
    }
})