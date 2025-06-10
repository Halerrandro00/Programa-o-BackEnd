const express = require('express');
const app = express();
app.use(express.json());

let users = [];

app.get('/users', (req, res) => {
  const { name } = req.query;
  const filteredUsers = name
    ? users.filter(u => u.name.toLowerCase().includes(name.toLowerCase()))
    : users;
  res.json(filteredUsers);
});

app.get('/users/:id', (req, res) => {
  const user = users.find(u => u.id === Number(req.params.id));
  if (!user) return res.status(404).json({ error: "Usuário não encontrado" });
  res.json(user);
});

app.post('/users', (req, res) => {
  const { id, name, email } = req.body;

  if (!id || isNaN(id)) return res.status(400).json({ error: "ID inválido" });
  if (!name || name.length < 3) return res.status(400).json({ error: "Nome inválido" });
  if (!email || !email.includes('@')) return res.status(400).json({ error: "Email inválido" });

  users.push({ id, name, email });
  res.status(201).json({ message: "Usuário criado com sucesso" });
});

app.listen(3000, () => console.log('Servidor rodando na porta 3000'));