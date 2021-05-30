const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const testSchema = new Schema({
    name: {
        type: String,
        trim: true,
    },
    typetest: {
        type: String,
        trim: true,
    },
    attributes:{},
});

module.exports = mongoose.model('Test', testSchema);