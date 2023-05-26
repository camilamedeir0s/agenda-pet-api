const Pet = require("../models/Pet");

module.exports = {
  create: async (req, res) => {
    const {
        name,
        breed,
        fur_color,
        sex,
        age,
        weight,
        allergies,
        notes,
        medicines,
        consultations,
        vaccines
    } = req.body;
    const owner = req.id;

    try {
      const pet = await Pet.create({
        name,
        breed,
        fur_color,
        sex,
        age,
        weight,
        allergies,
        notes,
        medicines,
        consultations,
        vaccines,
        owner
      });
      return res.status(201).json(pet);
    } catch (err) {
      return res.status(400).json({ err: err.message });
    }
  },

  getOne: async (req, res) => {
    const {id} = req.params;
    try {
        const pet = await Pet.findById(id);
        if (!pet) return res.status(404).json({error: "pet not found"});
        return res.status(200).json(pet);
    } catch (err) {
        return res.status(400).json({ err: err.message });
    }
  },

  update: async (req, res) => {
    const {id} = req.params;
    const {
        name,
        breed,
        fur_color,
        sex,
        age,
        weight,
        allergies,
        notes,
        medicines,
        consultations,
        vaccines
    } = req.body;
    try {
      if(!await Pet.findById(id)){
        return res.status(400).send({error: "pet not found"});
      }
      const update = await Pet.findByIdAndUpdate(id,
        {   
            name,
            breed,
            fur_color,
            sex,
            age,
            weight,
            allergies,
            notes,
            medicines,
            consultations,
            vaccines
        },
        {new: true}
      );
      return res.status(200).send(update);
    } catch (err) {
      return res.status(400).send({error: "error on update"});
    }
  },

  delete: async(req, res) => {
    const {id} = req.params;
    try{
        await Pet.findByIdAndDelete(id);
        return res.status(200).send({ok: "pet deleted"});
    } catch (err) {
        return res.status(400).send({error: err.message});
    }
  },
};


