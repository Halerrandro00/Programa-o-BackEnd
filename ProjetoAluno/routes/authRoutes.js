const express = require('express');
const User = require('../models/user');
const jwt = require('jsonwebtoken');

const router = express.Router();


router.post('/register', async (req, res) => {
  const { email, senha } = req.body;
  try {
    const exists = await User.findOne({ email });
    if (exists) return res.status(400).json({ mensagem: 'Email já registrado' });

    const user = await User.create({ email, senha });
    res.status(201).json({ mensagem: 'Usuário registrado com sucesso' });
  } catch {
    res.status(500).json({ mensagem: 'Erro ao registrar' });
  }
});

router.post('/login', async (req, res) => {
  const { email, senha } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(senha))) {
      return res.status(400).json({ mensagem: 'Credenciais inválidas' });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    res.status(200).json({ token });
  } catch {
    res.status(500).json({ mensagem: 'Erro ao logar' });
  }
});

module.exports = router;
