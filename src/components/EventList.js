import React from 'react';
import './EventList.css';

const EventList = ({ events, updateEvent, deleteEvent }) => {
  const handleDelete = (id) => {
    deleteEvent(id);
  };

  const handleUpdate = (event) => {
    const updatedTitle = prompt('Update Event Title:', event.title);
    const updatedDescription = prompt('Update Event Description:', event.description);
    const updatedDate = prompt('Update Event Date:', event.date);
    const updatedLocation = prompt('Update Event Location:', event.location);
    const updatedTime = prompt('Update Event Time:', event.time);

    if (updatedTitle && updatedDescription && updatedDate && updatedLocation && updatedTime) {
      updateEvent({
        ...event,
        title: updatedTitle,
        description: updatedDescription,
        date: updatedDate,
        location: updatedLocation,
        time: updatedTime,
      });
    }
  };

  return (
    <div className="event-list">
      {events.map((event) => (
        <div key={event.id} className="event-item">
          <h3>{event.title}</h3>
          <p>{event.description}</p>
          <p>Date: {event.date}</p>
          <p>Location: {event.location}</p>
          <p>Time: {event.time}</p>
          <button onClick={() => handleUpdate(event)}>Edit</button>
          <button onClick={() => handleDelete(event.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default EventList;
