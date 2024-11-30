import React, { useState, useEffect } from 'react';
import { io } from 'socket.io-client';

const socket = io();

const Chat = ({ eventId }) => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    socket.emit('joinEvent', eventId);
    socket.on('newMessage', (msg) => setMessages((prev) => [...prev, msg]));
    return () => socket.disconnect();
  }, [eventId]);

  const sendMessage = () => {
    socket.emit('sendMessage', { eventId, message });
    setMessage('');
  };

  return (
    <div>
      <h3>Chat</h3>
      {messages.map((msg, index) => <p key={index}>{msg}</p>)}
      <input value={message} onChange={(e) => setMessage(e.target.value)} />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default Chat;
