const express = require('express');
const app = express();
const sequelize = require('./config/database');
const petRoutes = require('./routes/petRoutes');

app.use(express.json());
app.use(petRoutes);

// Sincronizar o banco de dados e iniciar o servidor
sequelize.sync().then(() => {
  console.log('Banco sincronizado');
  app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
  });
}).catch((err) => {
  console.error('Erro ao conectar ao banco de dados:', err);
});
