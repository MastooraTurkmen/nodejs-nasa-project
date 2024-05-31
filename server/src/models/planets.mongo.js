const mongoose = require('mongoose');

const planetSchema = mongoose.Schema({
    keplerName: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('Planet', planetSchema)