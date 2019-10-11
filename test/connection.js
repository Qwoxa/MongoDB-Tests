const mongoose = require('mongoose');

before(async () => {
    // Connect to mongo
    const DB_URI = 'mongodb://localhost:27017/test';
    const DB_OPTIONS = { useNewUrlParser: true, useUnifiedTopology: true };

    try {
        await mongoose.connect(DB_URI, DB_OPTIONS);
        await mongoose.connection.on('error', err => console.error(`Connection error: ${err.message}`));
        console.info('MongoDB connected');
    } catch(e) {
        console.error(`Database establishment error: ${e.message}`);
    }    
});

// drop user collection if exists
beforeEach(async () => {
    if (!mongoose.connection.collections.users) {
        await mongoose.connection.collections.users.drop();
    }
});