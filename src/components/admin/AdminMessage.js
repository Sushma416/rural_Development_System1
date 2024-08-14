import React, { useEffect, useState } from 'react';
import '../Styles/AdminMessage.css';
import AdminDashboard from './AdminDashboard';

const AdminMessage = () => {
  const [messages, setMessages] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:8080/api/contacts/all')
      .then(response => response.json())
      .then(data => setMessages(data))
      .catch(error => {
        console.error('Error:', error);
        setErrorMessage('There was an issue fetching the messages. Please try again.');
        setTimeout(() => setErrorMessage(''), 5000); // Clear error message after 5 seconds
      });
  }, []);

  return (
    <div className="admin-users-page">
    <AdminDashboard/>
    <div className="admin-message-container">
      <h1>Messages</h1>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <div className="messages-list">
        {messages.map(message => (
          <div key={message.id} className="message">
            <h3>{message.name}</h3>
            <p>{message.email}</p>
            <p>{message.message}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default AdminMessage;
