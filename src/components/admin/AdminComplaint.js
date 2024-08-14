import React from 'react';
import '../Styles/AdminComplaint.css';
import AdminDashboard from './AdminDashboard';

const AdminComplaint = ({ complaints }) => {
  return (
    <div className="admin-complaint-page">
      {/* Include AdminDashboard for the sidebar */}
      <AdminDashboard />

      {/* Main content area for complaints */}
      <div className="admin-complaint-content">
        <h3>Submitted Complaints</h3>
        <div className="complaint-list">
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
      </div>
    </div>
  );
};

export default AdminComplaint;
