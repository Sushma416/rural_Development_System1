import React, { useState } from 'react';
import axios from 'axios';

const GenerateCredentials = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleGenerateCredentials = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/admin/generate-credentials', { email, password });
      console.log('Credentials generated successfully', response.data);
    } catch (error) {
      console.error('Failed to generate credentials', error);
    }
  };

  return (
    <div className="generate-credentials">
      <h2>Generate Officer Credentials</h2>
      <form onSubmit={handleGenerateCredentials}>
        <input type="email" placeholder="Officer Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Generate</button>
      </form>
    </div>
  );
};

export default GenerateCredentials;
