import React from 'react';
import Card from '../component/card';
import { FaInstagram, FaTwitter, FaWhatsapp, FaFacebook } from 'react-icons/fa';


const Home = () => {
  return (
    <>
      <div className="home-page">
        <div className="container">
          <div className="content-section">
            <div className="text-section">
              <h1>4 WEEK</h1>
              <h2>WORKOUT PLAN</h2>
              <p>
                Achieve your fitness goals with SAYANS. Our customized 4-week plan helps you build strength,
                endurance, and confidence. Join now and transform your lifestyle!
              </p>
              <button className="cta-button">TRY FOR FREE</button>
            </div>

            <div className="image-section">
              <img src='/images/817491c94b5ca8453775ed23d944253f.jpg' alt="Coach" />
            </div>
          </div>

          <h2 className="section-title">OUR PROGRAMS</h2>

          <div className="cards-container">
            <Card
              title="GET INSPIRED"
              description="Walk into the gym where 6x Mr. Olympia Chris Bumstead trains. 
      Our championship environment features motivational displays of 
      CBUM's career highlights and transformation journey to fuel 
      your own fitness breakthrough."
            />
            <Card
              title="CHALLENGE YOURSELF"
              description="Take on our 90-Day SAYANS Challenge featuring the exact 
      training protocols CBUM used to prepare for his Olympia wins. 
      Includes progress tracking, before/after assessments, and 
      optional competition prep guidance."
            />
            <Card
              title="UNLOCK SAYAN FORM"
              description="Master championship-level technique with our proprietary 
      training system developed from CBUM's posing and lifting 
      mechanics. Includes 3D motion analysis and corrective 
      exercise programming."
            />
          </div>
        </div>
        <div className="free-trial-container">
          <h2 className="free-trial-title">3 DAY FREE TRIAL</h2>
          <form className="free-trial-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">NAME:</label>
                <input type="text" id="name" />
              </div>
              <div className="form-group">
                <label htmlFor="email">EMAIL:</label>
                <input type="email" id="email" />
              </div>
              <div className="form-group">
                <label htmlFor="contact">CONTACT:</label>
                <input type="text" id="contact" />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="branch">NEAREST BRANCH:</label>
              <textarea id="branch" rows="4"></textarea>
            </div>
            <p className="captcha-note">YOU MUST CLICK ON THE CHECK BOX</p>
            <button type="submit" className="submit-btn">JOIN TODAY</button>
          </form>
        </div>
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

export default Home;