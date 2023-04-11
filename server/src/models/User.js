const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//!const Role = require('./Role');

const User = new Schema({
    id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: Number,
        required: true,
        ref: 'Role'
    }
}, { collection: 'usuario' });

const UserModel = mongoose.model('User', User);
module.exports = UserModel;