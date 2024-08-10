import React from 'react';
import '../Styles/Footer.css'; // Ensure you have this CSS file for styling

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <h4>About Us</h4>
            <p>
              Rural Edge is committed to providing support and services to rural communities. Our goal is to make a meaningful impact in the lives of those we serve.
            </p>
          </div>
          <div className="col-lg-4">
            <h4>Follow Us</h4>
            <div className="social-icons">
              <a href="#" aria-label="Facebook">
                <img src="https://i.pinimg.com/474x/c7/40/a7/c740a7bd3b579212fe64d9f5b919890a.jpg" alt="Facebook" />
              </a>
              <a href="#" aria-label="Instagram">
                <img src="https://i.pinimg.com/236x/58/a2/be/58a2bec02ecb40d12e507e2a212c46c6.jpg" alt="Instagram" />
              </a>
              <a href="#" aria-label="Twitter">
                <img src="https://i.pinimg.com/originals/39/8c/25/398c25a4436e5b8ca72f141084cdc66e.png" alt="Twitter" />
              </a>
              <a href="#" aria-label="LinkedIn">
                <img src="https://i.pinimg.com/736x/d0/24/2f/d0242fc3351571f8243a1db4ac0370c6.jpg" alt="LinkedIn" />
              </a>
            </div>
          </div>
          <div className="col-lg-4">
            <h4>Search</h4>
            <input type="text" className="search-bar" placeholder="Search..." />
          </div>
        </div>
        <p className="text-center">Copyright &copy; 2024 Rural Edge. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
