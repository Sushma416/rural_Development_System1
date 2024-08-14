// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ toggleUserDashboard }) => {
  return (
    <nav className="navbar">
      <ul>
        <li><img src="https://www.citypng.com/public/uploads/preview/hd-handshake-white-icon-symbol-transparent-background-701751695033308tsxczdrfh3.png" width="55px" height="55px" className="logo" alt="Logo" /></li>
        <li className="te">RURAL EDGE</li>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">Register</Link></li>
        <li><Link to="/complaint">Complaint</Link></li>
        <li><Link to="/posts">Posts</Link></li>
        <li><Link to="/feedback">About Us</Link></li>
        <li><Link to="/admin-contact">Donate</Link></li>
        <li><Link to="/admin"><img src="https://tse2.mm.bing.net/th?id=OIP.fMN6ZYV3Ia4FJyGVxCFhPAHaHu&pid=Api&P=0&h=180" height="30px" width="30px" class="logo"></img></Link></li>
       
      </ul>
    </nav>
  );
};

export default Navbar;
