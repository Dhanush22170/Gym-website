import React, { useState } from 'react';
import { FaInstagram, FaWhatsapp, FaTwitter, FaFacebook } from 'react-icons/fa';
const Book = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    goal: '',
    experience: 'beginner',
    preferredDate: '',
    preferredTime: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="confirmation-container">
        <div className="confirmation-card">
          <h2>Thank You for Your Interest!</h2>
          <p>We've received your consultation request and will contact you within 24 hours to confirm your appointment.</p>
          <p>In the meantime, check out our <a href="/programs">training programs</a> to get started.</p>
          <div className="confirmation-details">
            <h3>Your Details:</h3>
            <p><strong>Name:</strong> {formData.name}</p>
            <p><strong>Contact:</strong> {formData.email || formData.phone}</p>
            <p><strong>Preferred Session:</strong> {formData.preferredDate} at {formData.preferredTime}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="booking-container">
        <div className="booking-header">
          <h1>BOOK YOUR CONSULTATION</h1>
          <p>Start your fitness journey with a free 30-minute strategy session with our coaches</p>
        </div>

        <form onSubmit={handleSubmit} className="booking-form">
          <div className="form-section">
            <h2>Personal Information</h2>
            <div className="form-group">
              <label htmlFor="name">Full Name*</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email*</label>
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
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <div className="form-section">
            <h2>Fitness Background</h2>
            <div className="form-group">
              <label htmlFor="goal">Primary Fitness Goal*</label>
              <select
                id="goal"
                name="goal"
                value={formData.goal}
                onChange={handleChange}
                required
              >
                <option value="">Select your goal</option>
                <option value="bodybuilding">Bodybuilding Competition</option>
                <option value="strength">Strength Training</option>
                <option value="fat-loss">Fat Loss</option>
                <option value="muscle-gain">Muscle Gain</option>
                <option value="general-fitness">General Fitness</option>
                <option value="rehabilitation">Injury Rehabilitation</option>
              </select>
            </div>

            <div className="form-group">
              <label>Current Experience Level*</label>
              <div className="radio-group">
                <label>
                  <input
                    type="radio"
                    name="experience"
                    value="beginner"
                    checked={formData.experience === 'beginner'}
                    onChange={handleChange}
                    required
                  />
                  Beginner (0-6 months)
                </label>
                <label>
                  <input
                    type="radio"
                    name="experience"
                    value="intermediate"
                    checked={formData.experience === 'intermediate'}
                    onChange={handleChange}
                  />
                  Intermediate (6 months - 2 years)
                </label>
                <label>
                  <input
                    type="radio"
                    name="experience"
                    value="advanced"
                    checked={formData.experience === 'advanced'}
                    onChange={handleChange}
                  />
                  Advanced (2+ years)
                </label>
              </div>
            </div>
          </div>

          <div className="form-section">
            <h2>Session Details</h2>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="preferredDate">Preferred Date*</label>
                <input
                  type="date"
                  id="preferredDate"
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleChange}
                  required
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>

              <div className="form-group">
                <label htmlFor="preferredTime">Preferred Time*</label>
                <select
                  id="preferredTime"
                  name="preferredTime"
                  value={formData.preferredTime}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select time</option>
                  <option value="morning">Morning (8am-12pm)</option>
                  <option value="afternoon">Afternoon (12pm-4pm)</option>
                  <option value="evening">Evening (4pm-8pm)</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="message">Anything else we should know?</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
              />
            </div>
          </div>

          <div className="form-footer">
            <button type="submit" className="submit-button">
              BOOK MY CONSULTATION
            </button>
            <p className="disclaimer">
              By submitting, you agree to our <a href="/privacy">privacy policy</a>.
              We'll contact you to confirm your session details.
            </p>
          </div>
        </form>
      </div>
      <div className="compact-footer">
        <div className="footer-top">
          <h1>WORKOUT</h1>
          <h2>BELIEVE IN YOURSELF</h2>
          <p className="footer-text">
            Why Train at SAYANS?

            Train using CBUM's exact Olympia-prep protocols

            Access to competition-grade equipment unavailable at commercial gyms

            3D biomechanics analysis and form optimization

            Cryotherapy, infrared sauna, and sports massage recovery

            Community of serious athletes committed to excellence

            Join the gym where champions are built—where every detail is engineered to help you achieve what you once thought impossible. Your championship journey starts here.
          </p>
        </div>

        <div className="footer-columns">
          <div className="footer-col">
            <h3>OUR NETWORK</h3>
            <div className="footer-links">
              <a href="#">SAYANS YURI</a>
              <a href="#">SAYANS PATEL NAGAR</a>
              <a href="#">SAYANS HARYANA</a>
              <a href="#">SAYANS GURUGRAM</a>
              <a href="#">SAYANS SIRSA</a>
              <a href="#">SAYANS BHIHAR</a>
            </div>
          </div>


          <div className="footer-col">
            <h3>Subscribe to our newsletter</h3>
            <p className="newsletter-desc">Subscribe with your email</p>
            <div className="newsletter-form">
              <input type="email" placeholder="Your email" />
              <button>Submit</button>
            </div>
          </div>
        </div>
        <div className="social-media-icons">
          <a href="#" className="social-icon"><FaInstagram /></a>
          <a href="#" className="social-icon"><FaTwitter /></a>
          <a href="#" className="social-icon"><FaWhatsapp /></a>
          <a href="#" className="social-icon"><FaFacebook /></a>
        </div>
      </div>
    </>
  );
};

export default Book;