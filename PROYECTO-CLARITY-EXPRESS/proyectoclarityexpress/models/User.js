const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        trim: true,
    },
    lastname: {
        type: String,
        trim: true,
    },
    username: {
        type: String,
        trim: true,
        unique: true,
    },
    email: {
        type: String,
        trim: true,
        unique: true,
        lowercase: true,
    },
    phone: {
        type: String,
        trim: true,
    },
});

module.exports = mongoose.model('User', userSchema);