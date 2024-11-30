import axios from 'axios';

const API = axios.create({ baseURL: '/api' });

export const fetchEvents = () => API.get('/events');
export const createEvent = (data) => API.post('/events', data);
export const updateEvent = (id, data) => API.put(`/events/${id}`, data);
export const deleteEvent = (id) => API.delete(`/events/${id}`);
export const rsvpEvent = (id, userId) => API.post(`/events/${id}/rsvp`, { userId });
