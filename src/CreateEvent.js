
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateEvent = () => {
  const [event, setEvent] = useState({
    name: '',
    location: '',
    date: '',
    time: '',
    description: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEvent({ ...event, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:5000/api/events', event)
      .then(() => {
        navigate('/'); // Redirect to event list after creating
      })
      .catch((error) => {
        console.error('There was an error creating the event!', error);
      });
  };

  return (
    <div>
      <h2>Create Event</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={event.name}
          onChange={handleChange}
        />
        <br />
        <label>Location:</label>
        <input
          type="text"
          name="location"
          value={event.location}
          onChange={handleChange}
        />
        <br />
        <label>Date:</label>
        <input
          type="date"
          name="date"
          value={event.date}
          onChange={handleChange}
        />
        <br />
        <label>Time:</label>
        <input
          type="time"
          name="time"
          value={event.time}
          onChange={handleChange}
        />
        <br />
        <label>Description:</label>
        <textarea
          name="description"
          value={event.description}
          onChange={handleChange}
        />
        <br />
        <button type="submit">Create Event</button>
      </form>
    </div>
  );
};

export default CreateEvent;
