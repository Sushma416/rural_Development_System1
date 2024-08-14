import React, { useState } from 'react';
import '../Styles/Complaint.css';
import Header from './Header';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import '../Styles/Header.css';


  
const Complaint = ({ addComplaint }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    complaint: '',
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addComplaint(formData);
    alert('Complaint submitted successfully!');
    setFormData({
      name: '',
      email: '',
      phone: '',
      address: '',
      complaint: '',
      image: null,
    });
  };

  return (
    <div>
    <Header/>
    <div className="complaint-container">
      <div className="complaint-content">
        <div className="complaint-form">
          <h2>Post a Complaint</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your Phone Number"
              required
            />
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Your Address"
              required
            />
            <textarea
              name="complaint"
              value={formData.complaint}
              onChange={handleChange}
              placeholder="Describe your complaint"
              required
            />
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleImageChange}
            />
            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="complaint-image">
          <img src="https://media.istockphoto.com/id/1494742638/vector/%D1%81omplaint-form-online-concept-vector-illustration.jpg?s=612x612&w=0&k=20&c=cEFqNxHTsYiIgOdPdQ7fQ3BYXj7Rq6Mp0sKDAWRA9Eo=" alt="Complaint Banner" class="lo"/>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default Complaint;
