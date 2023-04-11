const mongoose = require('mongoose');

const db = class DataBase {
    constructor() {
        this.init();
    }

    init() {
        mongoose.connect('mongodb+srv://adm:admin@cluster0.melvy.mongodb.net/tgp_usuarios?retryWrites=true&w=majority');

        mongoose.connection.on('connected', () => {
            console.warn('\nConectado ao banco de dados com sucesso!\n');
        });

        mongoose.connection.on('error', (error) => {
            console.error(`\nErro ao conectar ao banco de dados: ${error}\n`);
        });
    }
}

module.exports = db;