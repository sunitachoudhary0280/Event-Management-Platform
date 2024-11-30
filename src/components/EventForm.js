import React, { useState } from 'react';
import './EventForm.css';

const EventForm = ({ createEvent }) => {
  const [eventData, setEventData] = useState({
    title: '',
    description: '',
    date: '',
    location: '',
    time: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData({ ...eventData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createEvent(eventData);
    setEventData({ title: '', description: '', date: '', location: '', time: '' });
  };

  return (
    <form className="event-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        value={eventData.title}
        onChange={handleChange}
        placeholder="Event Title"
        required
      />
      <textarea
        name="description"
        value={eventData.description}
        onChange={handleChange}
        placeholder="Event Description"
        required
      />
      <input
        type="date"
        name="date"
        value={eventData.date}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="location"
        value={eventData.location}
        onChange={handleChange}
        placeholder="Event Location"
        required
      />
      <input
        type="time"
        name="time"
        value={eventData.time}
        onChange={handleChange}
        required
      />
      <button type="submit">Create Event</button>
    </form>
  );
};

export default EventForm;
