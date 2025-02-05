// src/pages/LandingPage/LandingPage.jsx
import React from 'react';
import './LandingPage.css';

function LandingPage() {
  return (
    <div className="landing-page">
      <header className="hero">
        <div className="hero-content">
          <h1>Secure Your Future with Verified Credentials</h1>
          <p>
            Instantly verify the authenticity of certificates, diplomas, and other
            credentials. Build trust and confidence in your achievements.
          </p>
          <div className="cta-buttons">
            <button onClick={() => window.location.href = '/verify'}>Verify Now</button>
            <button className="learn-more" onClick={() => window.location.href = '/about'}>Learn More</button>
          </div>
        </div>
      </header>

      <section className="how-it-works">
        <h2>How It Works</h2>
        <div className="step-list">
          <div className="step">
            <i className="fas fa-upload"></i>
            <h3>1. Submit Credential</h3>
            <p>Upload the certificate or document.</p>
          </div>
          <div className="step">
            <i className="fas fa-search"></i>
            <h3>2. Automated Check</h3>
            <p>Our system performs a secure verification.</p>
          </div>
          <div className="step">
            <i className="fas fa-check-circle"></i>
            <h3>3. Receive Results</h3>
            <p>Get immediate verification feedback.</p>
          </div>
        </div>
      </section>

      <section className="benefits">
        <h2>Benefits for Individuals & Organizations</h2>
        <div className="benefit-list">
          <div className="benefit">
            <h3>Prevent Fraud</h3>
            <p>Ensure credential legitimacy.</p>
          </div>
          <div className="benefit">
            <h3>Save Time & Money</h3>
            <p>Streamline verification.</p>
          </div>
          <div className="benefit">
            <h3>Enhance Trust</h3>
            <p>Build confidence.</p>
          </div>
          <div className="benefit">
            <h3>Secure & Reliable</h3>
            <p>Dependable platform.</p>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <h2>What Our Users Say</h2>
        <div className="testimonial-list">
          <div className="testimonial">
            <p>"Easy and reliable verification."</p>
            <p className="testimonial-author">- John Doe, HR Manager</p>
          </div>
          <div className="testimonial">
            <p>"Great tool for students!"</p>
            <p className="testimonial-author">- Jane Smith, Student</p>
          </div>
        </div>
      </section>

      <section className="cta">
        <h2>Ready to Get Started?</h2>
        <div className="cta-buttons">
          <button onClick={() => window.location.href = '/verify'}>Verify Now</button>
          <button className="learn-more" onClick={() => window.location.href = '/register'}>Register</button>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Certificate Verification System</p>
      </footer>
    </div>
  );
}

export default LandingPage;