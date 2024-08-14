import React, { useState } from 'react';
import '../Styles/Donate.css';
import Footer from './Footer';
import Modal from './Modal';

const Donate = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    amount: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDonateClick = (e) => {
    e.preventDefault();

    fetch('http://localhost:8080/api/donations/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData),
    })
    .then(response => response.text())
    .then(data => {
      window.alert(data); // Alert for success message
      setFormData({
        name: '',
        email: '',
        amount: ''
      });
      setModalOpen(true); // Open modal after donation is successful
    })
    .catch(error => {
      console.error('Error:', error);
      window.alert('There was an issue processing your donation. Please try again.'); // Alert for error message
    });
  };

  const handleClose = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <div className="donate-page">
        <div className="image-header-container">
          <img src="https://www.pubaffairsbruxelles.eu/wp-content/uploads/2021/06/beautiful-shot-fence-leading-house-green-grass-area-scaled.jpg" alt="Rural Development" />
        </div>

        <div className="donate-content">
          <div className="text-content">
            <h1>Support Rural Development</h1>
            <p>Your generous contribution can help us improve the lives of people in rural areas. Together, we can create sustainable communities, enhance access to essential services, and foster economic opportunities.</p>
            
            <div className="donation-info">
              <h2>How Your Donation Helps</h2>
              <ul>
                <li>Empowering local communities through education and training.</li>
                <li>Promoting sustainable agricultural practices.</li>
                <li>Improving infrastructure, such as clean water and sanitation.</li>
                <li>Providing access to healthcare and social services.</li>
                <li>Supporting small businesses and entrepreneurship.</li>
              </ul>
            </div>
          </div>

          <div className="donation-form-container">
            <h2>Make a Donation</h2>
            <center>
              <form className="donation-form" onSubmit={handleDonateClick}>
                <label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </label>
                <label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </label>
                <label>
                  <input
                    type="number"
                    name="amount"
                    required
                    placeholder="Amount"
                    value={formData.amount}
                    onChange={handleChange}
                  />
                </label>
                <button type="submit">Donate Now</button>
              </form>
            </center>
          </div>
        </div>
      </div>

      <Footer />

      {/* Modal Component */}
      <Modal isOpen={isModalOpen} onClose={handleClose} onConfirm={() => {}} />
    </div>
  );
};

export default Donate;
