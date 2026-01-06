'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { FaTwitter, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './page.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('');

    try {
      // Send email via API
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        // Also open mailto as fallback
        const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
        const body = encodeURIComponent(
          `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
        );
        const mailtoLink = `mailto:jkenan72@gmail.com?subject=${subject}&body=${body}`;
        window.location.href = mailtoLink;

        // Clear form after submission
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page grid-bg">
      <div className="contact-container container">
        <div className="contact-grid">
          <div className="contact-left">
            <div className="section-tag mono">● INQUIRIES</div>

            <h1 className="contact-title">
              LET'S<br />
              <span className="bold-text">BUILD.</span>
            </h1>

            <div className="yellow-bar"></div>

            <p className="contact-description">
              Available for freelance and full-time roles.<br />
              <br />
              experiences. Based in Toronto.
            </p>

            <div className="contact-info-section">
              <h3 className="info-section-title mono">// SOCIALS</h3>
              <div className="social-links">
                <a href="https://x.com/keynannn19?s=21" target="_blank" rel="noopener noreferrer" className="social-link">
                  <div className="social-icon"><FaTwitter size={24} /></div>
                </a>
                <a href="https://github.com/rONin01010101010" target="_blank" rel="noopener noreferrer" className="social-link">
                  <div className="social-icon"><FaGithub size={24} /></div>
                </a>
                <a href="https://www.linkedin.com/in/kenan-odongo-582898267/?trk=opento_sprofile_details" target="_blank" rel="noopener noreferrer" className="social-link">
                  <div className="social-icon"><FaLinkedin size={24} /></div>
                </a>
              </div>
            </div>

            <div className="contact-info-section">
              <h3 className="info-section-title mono">// DIRECT CONTACT</h3>
              <a href="mailto:jkenan72@gmail.com" className="direct-email">
                jkenan72@gmail.com
              </a>
            </div>
          </div>

          <div className="contact-right">
            <div className="contact-form-wrapper accent-border">
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-label mono">// 01 NAME</label>
                  <input
                    type="text"
                    name="name"
                    className="form-input"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label mono">// 02 EMAIL</label>
                  <input
                    type="email"
                    name="email"
                    className="form-input"
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label mono">// 03 MESSAGE</label>
                  <textarea
                    name="message"
                    className="form-textarea"
                    placeholder="Tell me about your project..."
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <button type="submit" className="submit-btn" disabled={isSubmitting}>
                  {isSubmitting ? 'SENDING...' : 'TRANSMIT MESSAGE'}
                  <span className="submit-icon">→</span>
                </button>

                {status === 'success' && (
                  <div className="form-message success-message">
                    Message sent successfully! Opening your email client...
                  </div>
                )}
                {status === 'error' && (
                  <div className="form-message error-message">
                    There was an error. Please try again or email directly.
                  </div>
                )}


              </form>
            </div>
          </div>
        </div>

        <div className="contact-footer">
          <div className="footer-grid">
            <div className="footer-col">
              <h4 className="footer-heading mono">QUICK LINKS</h4>
              <ul className="footer-links">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/work">Work</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/skills">Skills</Link></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4 className="footer-heading mono">CONNECT</h4>
              <ul className="footer-links">
                <li>
                  <a href="https://github.com/rONin01010101010" target="_blank" rel="noopener noreferrer">
                    <FaGithub style={{marginRight: '8px', verticalAlign: 'middle'}} />
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/kenan-odongo-582898267/?trk=opento_sprofile_details" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin style={{marginRight: '8px', verticalAlign: 'middle'}} />
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="https://x.com/keynannn19?s=21" target="_blank" rel="noopener noreferrer">
                    <FaTwitter style={{marginRight: '8px', verticalAlign: 'middle'}} />
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="mailto:jkenan72@gmail.com">
                    <FaEnvelope style={{marginRight: '8px', verticalAlign: 'middle'}} />
                    Email
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer-col">
              <h4 className="footer-heading mono">AVAILABILITY</h4>
              <div className="availability-status">
                <span className="status-dot-green"></span>
                <span>Open to opportunities</span>
              </div>
              <p className="footer-note">
                Full-time, Contract, Freelance, Internship
              </p>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="copyright mono">© 2025 DEV_PORTFOLIO INC.</div>
            <div className="footer-meta mono">
              SYS_READY // v.3.0.1 // URBAN_EDITION
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
