const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Role = new Schema({
    id: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    }
}, { collection: 'role' });

const RoleModel = mongoose.model('Role', Role);
module.exports = RoleModel;