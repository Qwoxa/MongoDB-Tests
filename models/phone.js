const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const phoneSchema = new Schema({
    number: Number,
    note: String
});

const Phone = mongoose.model('Phone', phoneSchema);

module.exports = {
    schema: phoneSchema,
    model: Phone
};
