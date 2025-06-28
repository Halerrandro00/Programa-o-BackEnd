const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('petdb', 'usuario', 'senha', {
  host: 'localhost',
  dialect: 'sqlite', // ou 'mysql' / 'postgres'
  storage: './database.sqlite' // apenas para sqlite
});

module.exports = sequelize;
