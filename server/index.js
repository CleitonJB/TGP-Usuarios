const express = require('express');

const db = require('./src/database/index');

const SERVER_PORT = 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const database = new db(); 

app.get('/', (resquest, response) => {
    response.send('Na teoria, está tudo funcionando...!');
});

app.listen(SERVER_PORT, () => {
    console.log(`Server rodando em http://www.localhost:${SERVER_PORT}`);
});