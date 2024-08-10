import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ViewComplaintStatus = () => {
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    const fetchComplaints = async () => {
      try {
        const response = await axios.get('/api/complaints');
        setComplaints(response.data);
      } catch (error) {
        console.error('Failed to fetch complaints', error);
      }
    };

    fetchComplaints();
  }, []);

  return (
    <div className="view-complaint-status">
      <h2>Complaint Status</h2>
      <ul>
        {complaints.map((complaint) => (
          <li key={complaint.id}>{complaint.description} - {complaint.status}</li>
        ))}
      </ul>
    </div>
  );
};

export default ViewComplaintStatus;
