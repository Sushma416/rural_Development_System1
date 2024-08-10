// Users.js
import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import '../Styles/Users.css'; 

const Users = ({ isOpen, complaints }) => {
  return (
    <div className={`user-dashboard ${isOpen ? 'open' : ''}`}>
      <nav className="sidenav">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/user/my-complaints">My Complaints</Link></li>
          <li><Link to="/user/help">Help</Link></li>
          <li><Link to="/login">Logout</Link></li>
        </ul>
      </nav>
      <div className="content">
        <h2>User Dashboard</h2>
        <Routes>
          <Route path="/user/my-complaints" element={<MyComplaints complaints={complaints} />} />
          {/* Add other routes if needed */}
        </Routes>
      </div>
    </div>
  );
};

const MyComplaints = ({ complaints }) => {
    return (
        
          <div className="complaint-post-container">
            {complaints.length > 0 ? (
              complaints.map((complaintData, index) => (
                <div className="complaint-item" key={index}>
                  <h3>{complaintData.name}</h3>
                  <p>Email: {complaintData.email}</p>
                  <p>Phone: {complaintData.phone}</p>
                  <p>Address: {complaintData.address}</p>
                  <p>Complaint: {complaintData.complaint}</p>
                  {complaintData.image && (
                    <div className="complaint-image">
                      <img
                        src={URL.createObjectURL(complaintData.image)}
                        alt="Attached"
                      />
                    </div>
                  )}
                  
                </div>
              ))
            ) : (
              <p>No complaints posted yet.</p>
            )}
          </div>
        
        
      );
    };
    

export default Users;
