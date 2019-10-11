const mongoose = require('mongoose');
const phoneSchema = require('./Phone').schema;

const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    phones:[phoneSchema],
    registrationDate: {
        type: Date,
        default: Date.now()
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
