const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
    id: {
        type: Number,
        required: true
    },
    role: {
        type: Number,
        required: true,
        ref: 'Role'
    },
    funcionalidade: {
        type: Number,
        required: true,
        ref: 'Funcionalidade'
    }
}, { collection: 'autorizacao' });

const UserModel = mongoose.model('Autorizacao', User);
module.exports = UserModel;