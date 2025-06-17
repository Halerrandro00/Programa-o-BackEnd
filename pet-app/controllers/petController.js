const Pet = require('../models/Pet');

exports.getAllPets = async (req, res) => {
  try {
    const pets = await Pet.findAll();
    res.json(pets);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.addPet = async (req, res) => {
  try {
    const { name, type, age } = req.body;
    if (!name || !type || !age) {
      return res.status(400).json({ error: 'Name, type, and age are required' });
    }

    const newPet = await Pet.create({ name, type, age });
    res.status(201).json(newPet);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deletePet = async (req, res) => {
  try {
    const { id } = req.params;
    const pet = await Pet.findByPk(id);
    if (!pet) {
      return res.status(404).json({ error: 'Pet not found' });
    }
    await pet.destroy();
    res.status(200).json({ message: 'Pet deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
