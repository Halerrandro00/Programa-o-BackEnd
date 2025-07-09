const express = require('express');
const Nota = require('../models/Nota');
const auth = require('../middleware/authMiddleware');

const router = express.Router();

router.use(auth);

router.post('/', async (req, res) => {
  const { nomeAluno, valor } = req.body;
  if (valor < 0 || valor > 10) return res.status(400).json({ mensagem: 'Nota deve ser entre 0 e 10' });

  await Nota.create({ nomeAluno, valor, user: req.userId });
  res.status(201).json({ mensagem: 'Nota adicionada com sucesso!' });
});

router.get('/', async (req, res) => {
  const notas = await Nota.find({ user: req.userId });
  res.status(200).json(notas);
});

router.get('/:nomeAluno/media', async (req, res) => {
  const { nomeAluno } = req.params;
  const notas = await Nota.find({ user: req.userId, nomeAluno });

  if (!notas.length) {
    return res.status(404).json({ mensagem: 'Aluno não encontrado' });
  }

  const media = notas.reduce((sum, n) => sum + n.valor, 0) / notas.length;
  res.status(200).json({ nomeAluno, media: media.toFixed(2) });
});

module.exports = router;
