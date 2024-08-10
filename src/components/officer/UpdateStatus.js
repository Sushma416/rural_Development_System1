import React, { useState } from 'react';
import axios from 'axios';

const UpdateStatus = () => {
  const [complaintId, setComplaintId] = useState('');
  const [status, setStatus] = useState('');

  const handleUpdateStatus = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`/api/officer/complaints/${complaintId}`, { status });
      console.log('Status updated successfully', response.data);
    } catch (error) {
      console.error('Failed to update status', error);
    }
  };

  return (
    <div className="update-status">
      <h2>Update Complaint Status</h2>
      <form onSubmit={handleUpdateStatus}>
        <input type="text" placeholder="Complaint ID" value={complaintId} onChange={(e) => setComplaintId(e.target.value)} required />
        <input type="text" placeholder="Status" value={status} onChange={(e) => setStatus(e.target.value)} required />
        <button type="submit">Update Status</button>
      </form>
    </div>
  );
};

export default UpdateStatus;
