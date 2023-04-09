const express = require('express');

const SERVER_PORT = 3000;
const app = express();

app.get('/', (resquest, response) => {
    response.send('salve!');
});

app.listen(SERVER_PORT, () => {
    console.log(`Server rodando em http://www.localhost:${SERVER_PORT}`);
});