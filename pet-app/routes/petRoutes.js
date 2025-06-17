const express = require('express');
const petController = require('../controllers/petController');
const router = express.Router();

router.get('/api/pets', petController.getAllPets);
router.post('/api/pets', petController.addPet);
router.delete('/api/pets/:id', petController.deletePet);

module.exports = router;
