const http = require('http');
const app = require('./app');
const mongoose = require('mongoose');

const { loadPlanetsData } = require('./models/planets.modal');

const PORT = process.env.PORT || 8000;

const MONGO_URL = 'mongodb+srv://nasa-api:O5rAFoDGUu2w8kVW@cluster0.0uht7wb.mongodb.net/nasa?retryWrites=true&w=majority&appName=Cluster0'

const server = http.createServer(app);

mongoose.connection.once('open', () => {
    console.log('MongoDB connection ready');
})

mongoose.connection.on('error', (err) => {
    console.error(err);
})

async function startServer() {
    await mongoose.connect(MONGO_URL)
    await loadPlanetsData();

    server.listen(PORT, () => {
        console.log(`Listening on port ${PORT}..`);
    });
}

startServer();