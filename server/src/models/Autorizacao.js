const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Autorizacao = new Schema({
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

const AutorizacaoModel = mongoose.model('Autorizacao', Autorizacao);
module.exports = AutorizacaoModel;