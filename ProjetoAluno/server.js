require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const authRoutes = require('./routes/authRoutes');
const notaRoutes = require('./routes/notaRoutes');

const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/notasDB')
app.use('/register', authRoutes);
app.use('/login', authRoutes);
app.use('/notas', notaRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
