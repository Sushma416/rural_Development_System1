import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import '../Styles/AdminDashboard.css';

const AdminDashboard = () => {
  return (
    
      <div className="admin-dashboard">
        <nav className="sidebar">
          <ul>
            <li>
              <Link to="/" className="icon">&#8962;   Home</Link>
            </li>
            <li>
              <Link to="/adminposts" className="icon">&#128196;  Complaints</Link>
            </li>
            <li>
              <Link to="/adminusers" className="icon">&#128101;  Users</Link>
            </li>
            <li>
              <Link to="/admindonation" className="icon">&#128176;  Donations</Link>
            </li>
            <li>
              <Link to="/adminmessages" className="icon">&#9993; Messages</Link>
            </li>
            <li onClick={() => window.location.href = '/'}>
              <span className="icon">&#128682;</span> Logout
            </li>
          </ul>
        </nav>

        
      </div>
   
  );
};

export default AdminDashboard;
