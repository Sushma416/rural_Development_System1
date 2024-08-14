import React, { useState, useEffect } from 'react';
import '../Styles/AdminDonation.css';
import AdminDashboard from './AdminDashboard';

const AdminDonation = () => {
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/donations/all')
      .then(response => response.json())
      .then(data => setDonations(data))
      .catch(error => console.error('Error fetching donations:', error));
  }, []);

  return (
    <div className="admin-users-page">
    <AdminDashboard/>
    <div className="admin-donation-page">
      <h1>Donations Received</h1>
      <table className="donation-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {donations.map((donation, index) => (
            <tr key={index}>
              <td>{donation.name}</td>
              <td>{donation.email}</td>
              <td>Rs.{donation.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default AdminDonation;
