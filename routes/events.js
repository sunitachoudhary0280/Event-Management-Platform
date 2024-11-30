import express from 'express';  
import Event from '../models/Event.js';  

const router = express.Router();

// Create Event
router.post('/event', async (req, res) => {
  try {
    const event = await Event.create({
      name: req.body.name,
      location: req.body.location,
      date: req.body.date,
      time: req.body.time
    });
    res.status(201).json(event);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get Events
router.get('/events', async (req, res) => {
  try {
    const events = await Event.findAll();
    res.status(200).json(events);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update Event
router.put('/event/:id', async (req, res) => {
  try {
    const event = await Event.update(req.body, {
      where: { id: req.params.id }
    });
    res.status(200).json(event);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete Event
router.delete('/event/:id', async (req, res) => {
  try {
    const result = await Event.destroy({
      where: { id: req.params.id }
    });
    res.status(200).json({ message: 'Event deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;  // Make sure to export the router
