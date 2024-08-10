import React from 'react';
import '../Styles/ComplaintPost.css';
import Footer from './Footer';
import Header from './Header';

const ComplaintPost = ({ complaints }) => {
  const handleViewStatus = (complaintId) => {
    // Logic to view the status of the complaint
    // This can be a redirect to a detailed view or a modal
    alert(`Viewing status for complaint ID: ${complaintId}`);
  };

  return (
    <div>
      <Header/>
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
      <Footer/>
    </div>
  );
};

export default ComplaintPost;
