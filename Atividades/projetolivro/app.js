const express = require('express');
const bodyParser = require('body-parser');
const livrosRoutes = require('./routes/projetolivro');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.use('/api', livrosRoutes);

app.listen(PORT, () => {
    console.log('Servidor na porta ${PORT');
});