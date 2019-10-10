const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const phoneSchema = require('./phone').schema;

const userSchema = new Schema({
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
