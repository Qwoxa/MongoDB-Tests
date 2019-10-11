const mongoose = require('mongoose');

const phoneSchema = new mongoose.Schema({
    number: Number,
    note: String
});

const Phone = mongoose.model('Phone', phoneSchema);

module.exports = {
    schema: phoneSchema,
    model: Phone
};
