import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EventList from '../components/EventList';
import EventForm from '../components/EventForm';

const Home = () => {
    const [events, setEvents] = useState([]);

    const fetchEvents = async () => {
        try {
            const response = await axios.get('/api/events');
            setEvents(response.data);
        } catch (error) {
            console.error('Error fetching events:', error);
        }
    };

    useEffect(() => {
        fetchEvents();
    }, []);

    return (
        <div>
            <h1>Event Management Platform</h1>
            <EventForm fetchEvents={fetchEvents} />
            <EventList events={events} />
        </div>
    );
};

export default Home;
