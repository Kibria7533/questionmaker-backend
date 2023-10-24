const express = require('express');
const router = express.Router();
const Cls = require('../models/Class');

// Create a new cls
router.post('/', async (req, res) => {
    const { ClassName } = req.body;
  
    try {
      const cls = new Cls({ ClassName });
      await cls.save();
      res.send(cls);
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  });
  
  // Get all classes
  router.get('/', async (req, res) => {
    try {
      const classes = await Cls.find({});
      res.send(classes);
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  });
  
  // Update a cls
  router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { ClassName } = req.body;
  
    try {
      const cls = await Cls.findByIdAndUpdate(id, { ClassName }, { new: true });
      res.send(cls);
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  });
  
  // Delete a cls
  router.delete('/:id', async (req, res) => {
    const { id } = req.params;
  
    try {
      const cls = await Cls.findByIdAndDelete(id);
      res.send(cls);
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  });

module.exports = router;
