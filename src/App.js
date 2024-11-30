import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [events, setEvents] = useState([]);
  const [editingEvent, setEditingEvent] = useState(null);

  const [newEvent, setNewEvent] = useState({
    title: "",
    description: "",
    date: "",
    location: "",
    time: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewEvent({ ...newEvent, [name]: value });
  };

  // Create Event
  const createEvent = (e) => {
    e.preventDefault();
    if (editingEvent) {
      // Update existing event
      setEvents((prevEvents) =>
        prevEvents.map((event) =>
          event.id === editingEvent.id ? { ...editingEvent, ...newEvent } : event
        )
      );
      setEditingEvent(null);
    } else {
      // Add new event
      const eventWithId = { ...newEvent, id: Date.now() };
      setEvents((prevEvents) => [...prevEvents, eventWithId]);
    }
    setNewEvent({ title: "", description: "", date: "", location: "", time: "" });
  };

  // Edit Event
  const editEvent = (event) => {
    setEditingEvent(event);
    setNewEvent(event);
  };

  // Delete Event
  const deleteEvent = (id) => {
    setEvents((prevEvents) => prevEvents.filter((event) => event.id !== id));
  };


  return (
    <div className="app">
      <h1 className="header">Event Management</h1>
      <form className="event-form" onSubmit={createEvent}>
        <input
          type="text"
          name="title"
          placeholder="Event Title"
          value={newEvent.title}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Event Description"
          value={newEvent.description}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="date"
          value={newEvent.date}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="location"
          placeholder="Event Location"
          value={newEvent.location}
          onChange={handleChange}
          required
        />
        <input
          type="time"
          name="time"
          value={newEvent.time}
          onChange={handleChange}
          required
        />
        <button type="submit" className="btn">
          {editingEvent ? "Update Event" : "Create Event"}
        </button>
      </form>
      <div className="event-list">
        {events.map((event) => (
          <div key={event.id} className="event-card">
            <h3>{event.title}</h3>
            <p>{event.description}</p>
            <p>
              {event.date} at {event.time}
            </p>
            <p>Location: {event.location}</p>
            <button className="btn edit-btn" onClick={() => editEvent(event)}>
              Update
            </button>
            <button className="btn delete-btn" onClick={() => deleteEvent(event.id)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
