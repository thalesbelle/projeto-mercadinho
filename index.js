const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname,'src')));

app.get('/', async (req,res) => {
    res.sendFile(path.join(__dirname,'src','index.html'));
});

app.listen(8082, () => {
console.log('Servidor iniciado na porta 8082: http://localhost:8082');
});

