import React from 'react';
import '../Styles/Welcome.css';
import AdminDashboard from './AdminDashboard';

function Welcome() {
  return (
    <div className="admin-users-page">
    <AdminDashboard/>
    <div className="welcome-container">
      <h2 className="welcome-message">Welcome to the Admin Dashboard</h2>
      <p className="welcome-description">Manage all aspects of the Rural Development System with ease.</p>
    </div>
    </div>
  );
}

export default Welcome;