
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditEvent = () => {
  const { id } = useParams(); 
  const [event, setEvent] = useState({
    name: '',
    location: '',
    date: '',
    time: '',
    description: ''
  });
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch the event to edit
    axios
      .get(`http://localhost:5000/api/events/${id}`)
      .then((response) => {
        setEvent(response.data);
      })
      .catch((error) => {
        console.error('There was an error fetching the event!', error);
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEvent({ ...event, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:5000/api/events/${id}`, event)
      .then(() => {
        navigate('/'); // Redirect to event list after editing
      })
      .catch((error) => {
        console.error('There was an error updating the event!', error);
      });
  };

  return (
    <div>
      <h2>Edit Event</h2>
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
        <button type="submit">Update Event</button>
      </form>
    </div>
  );
};

export default EditEvent;
