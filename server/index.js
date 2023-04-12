const express = require('express');

const db = require('./src/database/index');

const userController = require('./src/controllers/UserController');
const roleController = require('./src/controllers/RoleController');
const funcionalidadeController = require('./src/controllers/FuncionalidadeController');

const SERVER_PORT = 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const database = new db(); 

app.get('/', (resquest, response) => {
    response.send('Na teoria, está tudo funcionando...!');
});

//* USER CRUD
app.post('/user/register', userController.register);
app.get('/user/login', userController.find);
app.get('/user/getAll', userController.findAll);
app.put('/user/update', userController.update);
app.delete('/user/delete', userController.delete);
//* ROLE CRUD
app.post('/role/create', roleController.register);
app.get('/role/get', roleController.find);
app.get('/role/getAll', roleController.findAll);
app.put('/role/update', roleController.update);
app.delete('/role/delete', roleController.delete);
//* FUNCIONALIDADE CRUD
app.post('/funcionalidade/create', funcionalidadeController.register);
app.get('/funcionalidade/get', funcionalidadeController.find);
app.get('/funcionalidade/getAll', funcionalidadeController.findAll);
app.put('/funcionalidade/update', funcionalidadeController.update);
app.delete('/funcionalidade/delete', funcionalidadeController.delete);

app.listen(SERVER_PORT, () => {
    console.log(`Server rodando em http://www.localhost:${SERVER_PORT}`);
});