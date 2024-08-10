import React from 'react';
import '../Styles/Header.css'; // Make sure to create this CSS file

const Header = () => {
  return (
    <header className="header">
      <div className="overlay">
        <h1 className="header-text">COMPLAINTS!</h1>
      </div>
    </header>
  );
};

export default Header;
