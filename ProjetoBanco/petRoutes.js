const express = require('express');
const router = express.Router();
const petController = require('../controllers/petController');

router.get('/api/pets', petController.getAllPets);
router.post('/api/pets', petController.createPet);
router.delete('/api/pets/:id', petController.deletePet);

module.exports = router;
