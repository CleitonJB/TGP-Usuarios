const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Funcionalidade = new Schema({
    id: {
        type: Number,
        unique: true,
        dropDups: true,
        required: true,
    },
    description: {
        type: String,
        required: true
    }
}, { collection: 'funcionalidade' });

const FuncionalidadeModel = mongoose.model('Funcionalidade', Funcionalidade);
module.exports = FuncionalidadeModel;