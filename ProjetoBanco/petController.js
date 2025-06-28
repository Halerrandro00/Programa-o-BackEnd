const Pet = require('../models/Pet');

// GET /api/pets
exports.getAllPets = async (req, res) => {
  try {
    const pets = await Pet.findAll();
    res.json(pets);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar pets' });
  }
};

// POST /api/pets
exports.createPet = async (req, res) => {
  const { name, type, age } = req.body;
  try {
    const newPet = await Pet.create({ name, type, age });
    res.status(201).json(newPet);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao criar pet' });
  }
};

// DELETE /api/pets/:id
exports.deletePet = async (req, res) => {
  const { id } = req.params;
  try {
    const pet = await Pet.findByPk(id);
    if (!pet) {
      return res.status(404).json({ error: 'Pet não encontrado' });
    }
    await pet.destroy();
    res.json({ message: 'Pet removido com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao remover pet' });
  }
};
