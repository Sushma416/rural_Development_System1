import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../Styles/Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/api/login', {
        email,
        password
      });

      setMessage(response.data);
      navigate('/'); // Redirect to home or other page on successful login
    } catch (error) {
      setMessage('Invalid email or password');
    }
  };

  return (
    <div className="login-container">
      <div className="illustration-section">
        <img src="https://web-school.in/wp-content/uploads/2023/10/mobile_home.svg#3294" alt="Illustration" className="illustration" width="600px" height="600px"/>
      </div>
      <br/>
      <br/>
      <div className="welcome-section">
        <img src="https://static.vecteezy.com/system/resources/previews/014/194/215/original/avatar-icon-human-a-person-s-badge-social-media-profile-symbol-the-symbol-of-a-person-vector.jpg" alt="Avatar" className="avatar" />
        <h2>WELCOME</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="input-container">
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <div className="forgot-password">
            <a href="#">Forgot Password?</a>
          </div>
          <button type="submit" className="login-button">LOGIN</button>
          {message && <p>{message}</p>}
          <span>Don't have an Account?<Link to="/register">SignUp</Link></span>
        </form>
      </div>
    </div>
  );
}

export default Login;
