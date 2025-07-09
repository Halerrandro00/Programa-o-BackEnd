const express = require('express');
const passport = require('passport');
const bcrypt = require('bcrypt');
const User = require('../models/User');
const router = express.Router();

function ensureAuth(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.status(401).json({ error: 'Não autorizado' });
}

router.post('/register', async (req, res) => {
  const { email, password } = req.body;
  const hash = await bcrypt.hash(password, 10);
  try {
    const user = await User.create({ email, password: hash });
    res.json({ message: 'Usuário registrado com sucesso', user });
  } catch (err) {
    res.status(400).json({ error: 'Erro ao registrar', details: err });
  }
});

router.post('/login', passport.authenticate('local'), (req, res) => {
  res.json({ message: 'Login bem-sucedido', user: req.user });
});

router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  (req, res) => res.redirect('/auth/profile')
);

router.get('/profile', ensureAuth, (req, res) => {
  res.json({ user: req.user });
});

router.post('/logout', (req, res) => {
  req.logout(err => {
    if (err) return res.status(500).json({ error: 'Erro ao sair' });
    res.json({ message: 'Logout feito com sucesso' });
  });
});

module.exports = router;
