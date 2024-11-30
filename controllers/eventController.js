 const Event = require('../models/Event');

// Get all events
exports.getAllEvents = async (req, res) => {
  try {
    const events = await Event.findAll();
    res.json(events);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching events' });
  }
};

// Create a new event
exports.createEvent = async (req, res) => {
  try {
    const { name, location, date, time } = req.body;
    const newEvent = await Event.create({ name, location, date, time });
    res.status(201).json(newEvent);
  } catch (error) {
    res.status(500).json({ message: 'Error creating event' });
  }
};

// Update an event
exports.updateEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, location, date, time } = req.body;
    const event = await Event.findByPk(id);
    if (!event) return res.status(404).json({ message: 'Event not found' });

    event.name = name;
    event.location = location;
    event.date = date;
    event.time = time;
    await event.save();
    res.json(event);
  } catch (error) {
    res.status(500).json({ message: 'Error updating event' });
  }
};

// Delete an event
exports.deleteEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const event = await Event.findByPk(id);
    if (!event) return res.status(404).json({ message: 'Event not found' });

    await event.destroy();
    res.json({ message: 'Event deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting event' });
  }
};
