import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './SignIn.css'; // Import CSS file for styling

const SignIn = () => {
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  const handleSubmit = (event) => {
    event.preventDefault();
    // Redirect to home page
    navigate('/');
  };

  return (
    <div className="signin-container">
      <h1>SIGN IN</h1>
      <form onSubmit={handleSubmit} className="signin-form">
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit" className="signin-button">Sign In</button>
        <p className="already-account">
          Create Account <a href="/signup">Sign Up</a>
        </p>
      </form>
    </div>
  );
};

export default SignIn;
