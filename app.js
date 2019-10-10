const mongoose = require('mongoose');
const User = require('./models/user');

(async function connectDatabase() {
    try {
        const DB_URI = 'mongodb://localhost:27017/prod';
        const DB_OPTIONS = { useNewUrlParser: true, useUnifiedTopology: true };
        await mongoose.connect(DB_URI, DB_OPTIONS);
    } catch(err) {
        console.error(`Not connected to DB: ${err.message}`);
    }
})();



User
.updateMany({  }, { $rename: { fname: 'qwe' } } )
.then(docs => {
    console.log(docs);
});