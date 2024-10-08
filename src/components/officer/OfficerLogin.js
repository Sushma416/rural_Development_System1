import React, { useState } from 'react';
import axios from 'axios';

const OfficerLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/officer/login', { email, password });
      console.log('Login successful', response.data);
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  return (
    <div className="officer-login">
      <h2>Officer Login</h2>
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default OfficerLogin;
