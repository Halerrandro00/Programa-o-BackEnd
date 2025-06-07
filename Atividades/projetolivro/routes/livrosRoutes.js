const express = require('express');
const router = express.Router();

let livros = [];

router.post('/criarLivros', (req, res) => {
  const { titulo, autor, ano } = req.body;

  if (!titulo || !autor || !ano) {
    return res.status(400).json({ erro: 'Todos os campos são obrigatórios: título, autor, ano.' });
  }

  const novoLivro = { titulo, autor, ano };
  livros.push(novoLivro);

  res.status(201).json({ mensagem: 'Livro cadastrado com sucesso!', livro: novoLivro });
});

router.get('/exibirLivros', (req, res) => {
  res.json(livros);
});

module.exports = router;