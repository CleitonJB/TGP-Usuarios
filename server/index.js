const express = require('express');
const cors = require('cors')

const db = require('./src/database/index');

const authMiddleware = require('./src/middleware/auth');

const userController = require('./src/controllers/UserController');
const roleController = require('./src/controllers/RoleController');
const funcionalidadeController = require('./src/controllers/FuncionalidadeController');
const autorizacaoController = require('./src/controllers/AutorizacaoController');

const SERVER_PORT = 3000;
const app = express();

const CORSOptions = {
    origin: '*'
};

app.use(cors(CORSOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const database = new db(); 

app.get('/', (resquest, response) => {
    response.send('Na teoria, está tudo funcionando...!');
});

//* USER CRUD
app.post('/user/register', userController.register);
app.post('/user/login', userController.find);
app.get('/user/getAll', authMiddleware, userController.findAll);
app.put('/user/update', userController.update);
app.delete('/user/delete/:id', userController.delete);

//* ROLE CRUD
app.post('/role/create', authMiddleware, roleController.register);
app.get('/role/get', authMiddleware, roleController.find);
app.get('/role/getAll', authMiddleware, roleController.findAll);
app.put('/role/update', authMiddleware, roleController.update);
app.delete('/role/delete/:id', authMiddleware, roleController.delete);

//* FUNCIONALIDADE CRUD
app.post('/funcionalidade/create', authMiddleware, funcionalidadeController.register);
app.get('/funcionalidade/get', authMiddleware, funcionalidadeController.find);
app.get('/funcionalidade/getAll', authMiddleware, funcionalidadeController.findAll);
app.put('/funcionalidade/update', authMiddleware, funcionalidadeController.update);
app.delete('/funcionalidade/delete/:id', authMiddleware, funcionalidadeController.delete);

//* AUTORIZACAO CRUD
app.post('/autorizacao/create', authMiddleware, autorizacaoController.register);
app.get('/autorizacao/get', authMiddleware, autorizacaoController.find);
app.get('/autorizacao/getAll', authMiddleware, autorizacaoController.findAll);
app.put('/autorizacao/update', authMiddleware, autorizacaoController.update);
app.delete('/autorizacao/delete/:id', authMiddleware, autorizacaoController.delete);

app.listen(SERVER_PORT, () => {
    console.log(`Server rodando em http://www.localhost:${SERVER_PORT}`);
});