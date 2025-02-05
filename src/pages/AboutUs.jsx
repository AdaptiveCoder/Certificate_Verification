// src/pages/AboutUs/AboutUs.jsx
import React from 'react';
import './AboutUs.css';

function AboutUs() {
  return (
    <div className="about-us-page">
      <div className="about-us-container"> {/* Container for better layout */}
        <h1>About Us</h1>
        <p>
          The Certificate Verification System is a web-based application that allows
          users (companies and administrators) to verify the authenticity of
          educational certificates and associated marks stored in a database. This
          system streamlines the verification process by cross-checking certificate
          details (such as Certificate ID, Marks ID, or uploaded certificate
          images) against records maintained in the system.
        </p>

        <h2>Key Features</h2>
        <ul>
          <li>Secure login and registration mechanism for companies.</li>
          <li>
            Companies can verify certificates presented by candidates to confirm
            their authenticity before hiring.
          </li>
          <li>Users can view or download certificates for personal use after payment.</li>
        </ul>

        <h2>Technologies Used</h2>
        <div className="technologies">
          <div className="frontend-technologies">
            <h3>Frontend</h3>
            <ul>
              <li>ReactJS</li>
              <li>JavaScript (ES6+)</li>
              <li>HTML5</li>
              <li>JSX</li>
            </ul>
          </div>
          <div className="backend-technologies">
            <h3>Backend</h3>
            <ul>
              <li>Spring Boot (Spring MVC, Spring Data JPA)</li>
              <li>RESTful API Development</li>
            </ul>
          </div>
          <div className="database-technologies">
            <h3>Database</h3>
            <ul>
              <li>MySQL</li>
            </ul>
          </div>
          <div className="payment-technologies">
            <h3>Payment Gateway</h3>
            <p>Integration for payment (e.g., Razorpay, Stripe, or PayPal)</p>
          </div>
        </div>

        <h2>Our Mission</h2> {/* Optional: Add a mission section */}
        <p>
          Our mission is to provide a reliable and efficient platform for verifying
          educational credentials, fostering trust and transparency in the academic
          and professional world.
        </p>
      </div>
    </div>
  );
}

export default AboutUs;