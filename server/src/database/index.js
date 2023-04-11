const mongoose = require('mongoose');

class DataBase {
    constructor() {
        this.init();
    }

    init() {
        console.log('\nConectando ao banco de dados...\n');

        mongoose.connect('mongodb+srv://adm:admin@cluster0.melvy.mongodb.net/tgp_usuarios?retryWrites=true&w=majority');

        mongoose.connection.on('connected', () => {
            console.warn('\nConectado ao banco de dados com sucesso!\n');
        });

        mongoose.connection.on('error', (error) => {
            console.error(`\nErro ao conectar ao banco de dados: ${error}\n`);
        });
    }
}

module.exports = DataBase;