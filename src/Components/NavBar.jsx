// src/components/Navbar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom'; // Use NavLink for active styling
import './Navbar.css'; // Import your Navbar CSS

function Navbar() {
  return (
    <nav className="navbar">
        <h3>Certificate Verification</h3>
      <ul>
       
        <li>
          <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink to="/register" className={({ isActive }) => isActive ? "active" : ""}>
            Register
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" className={({ isActive }) => isActive ? "active" : ""}>
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;