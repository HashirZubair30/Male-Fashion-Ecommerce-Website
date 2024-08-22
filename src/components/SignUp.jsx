import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './SignUp.css'; // Import CSS file for styling

const SignUp = () => {
  const navigate = useNavigate(); // Use useNavigate for navigation

  const handleSubmit = (event) => {
    event.preventDefault();
    // Redirect to home page or another page upon successful sign up
    navigate('/');
  };

  return (
    <div className="signup-container">
      <h1>SIGN UP</h1>
      <form onSubmit={handleSubmit} className="signup-form">
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
        </div>
        <div className="form-group">
          <label htmlFor="confirm-password">Confirm Password</label>
          <input type="password" id="confirm-password" name="confirm-password" required />
        </div>
        <button type="submit" className="signup-button">Sign Up</button>
        <p className="already-account">
          Already have an account? <a href="/signin">Sign In</a>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
