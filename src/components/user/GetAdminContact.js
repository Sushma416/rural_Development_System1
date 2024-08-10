import React, { useState } from 'react';
import '../Styles/Donate.css';
import Footer from './Footer';
import Modal from './Modal';

const Donate = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleDonateClick = () => {
    setModalOpen(true);
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
              <form className="donation-form" onSubmit={(e) => e.preventDefault()}>
                <label>
                  <input type="text" name="name" required placeholder="Name" />
                </label>
                <label>
                  <input type="email" name="email" required placeholder="Email" />
                </label>
                <label>
                  <input type="number" name="amount" required placeholder="Amount" />
                </label>
                <button type="button" onClick={handleDonateClick}>Donate Now</button>
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
