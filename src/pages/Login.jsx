// src/pages/Login/Login.jsx
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Login.css';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
    setErrorMessage('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    try {
      const response = await fetch('/api/login', { // Replace with your actual API endpoint
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const userData = await response.json();
        localStorage.setItem('token', userData.token); // Or store user data
        navigate('/dashboard'); // Redirect to dashboard
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.message || 'Invalid email or password.');
      }
    } catch (error) {
      setErrorMessage('A network error occurred. Please try again later.');
      console.error('Login error:', error);
    }
  };

  return (
    
    <div className="login-page">
    
      <div className="login-container">
      
         {/* Added container for centering */}
        <h2>Login</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Login</button>

          {errorMessage && <p className="error-message">{errorMessage}</p>}

          <p className="register-link">
            Don't have an account? <Link to="/register">Register here</Link>
          </p>
        </form>
        <h3 className='Home'> <Link to="/">HomePage</Link></h3>

      </div>
    </div>
  );
}

export default Login;