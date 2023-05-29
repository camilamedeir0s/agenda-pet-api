const User = require("../models/User");

module.exports = {
  create: async (req, res) => {
    const {
      email,
      password
    } = req.body;

    try {
      const user = await User.create({
        name: email,
        email: email,
        password: password
      });
      return res.status(201).json({ user: {_id: user.id, name: user.name, email: user.email }});
    } catch (err) {
      return res.status(400).json({ err: err.message });
    }
  },

  getOne: async (req, res) => {
    const {id} = req.params;
    try {
        const user = await User.findById(id);
        if (!user) return res.status(404).json({error: "User not found"});
        return res.status(200).json(user);
    } catch (err) {
        return res.status(400).json({ err: err.message });
    }
  },

  update: async (req, res) => {
    const {id} = req.params;
    const {
      name,
      email
    } = req.body;
    try {
      if(!await User.findById(id)){
        return res.status(400).send({error: "id not found"});
      }
      const update = await User.findByIdAndUpdate(id,
        {name, email},
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
        await User.findByIdAndDelete(id);
        return res.status(200).send({ok: "user deleted"});
    } catch (err) {
        return res.status(400).send({error: err.message});
    }
  },
};


