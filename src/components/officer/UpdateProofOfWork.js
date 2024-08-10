import React, { useState } from 'react';
import axios from 'axios';

const UpdateProofOfWork = () => {
  const [complaintId, setComplaintId] = useState('');
  const [proof, setProof] = useState(null);

  const handleUpdateProof = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('proof', proof);

    try {
      const response = await axios.post(`/api/officer/complaints/${complaintId}/proof`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log('Proof of work updated successfully', response.data);
    } catch (error) {
      console.error('Failed to update proof of work', error);
    }
  };

  return (
    <div className="update-proof">
      <h2>Update Proof of Work</h2>
      <form onSubmit={handleUpdateProof}>
        <input type="text" placeholder="Complaint ID" value={complaintId} onChange={(e) => setComplaintId(e.target.value)} required />
        <input type="file" onChange={(e) => setProof(e.target.files[0])} required />
        <button type="submit">Update Proof</button>
      </form>
    </div>
  );
};

export default UpdateProofOfWork;
