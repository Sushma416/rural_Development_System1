import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ViewAccounts = () => {
  const [officers, setOfficers] = useState([]);

  useEffect(() => {
    const fetchOfficers = async () => {
      try {
        const response = await axios.get('/api/admin/officers');
        setOfficers(response.data);
      } catch (error) {
        console.error('Failed to fetch officers', error);
      }
    };

    fetchOfficers();
  }, []);

  return (
    <div className="view-accounts">
      <h2>View Officer Accounts</h2>
      <ul>
        {officers.map(officer => (
          <li key={officer.id}>{officer.email}</li>
        ))}
      </ul>
    </div>
  );
};

export default ViewAccounts;
