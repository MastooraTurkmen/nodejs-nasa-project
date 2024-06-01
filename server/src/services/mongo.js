const mongoose = require('mongoose')

const MONGO_URL = 'mongodb+srv://nasa-api:O5rAFoDGUu2w8kVW@cluster0.0uht7wb.mongodb.net/nasa?retryWrites=true&w=majority&appName=Cluster0'

mongoose.connection.once('open', () => {
    console.log('MongoDB connection ready');
})

mongoose.connection.on('error', (err) => {
    console.error(err);
})


async function mongoConnect() {
    await mongoose.connect(MONGO_URL)
}

async function mongoDisconnect() {
    await mongoose.disconnect();
}

module.exports = {
    mongoConnect,
    mongoDisconnect
}