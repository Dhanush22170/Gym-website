import React from 'react';
import { FaInstagram, FaWhatsapp, FaTwitter,FaFacebook } from 'react-icons/fa';
const About = () => {
  return (
    <>
      <div className="about-page">
        {/* Hero Section */}
        <section className="about-hero">
          <div className="hero-content">
            <h1>MEET COACH CBUM</h1>
            <h2>6-TIME CONSECUTIVE MR. OLYMPIA CHAMPION</h2>
            <p>
              Train with the champion himself using proven methods that built his legendary physique.
              Our customized programs help you build strength, endurance, and championship-level conditioning.
            </p>
            <button className="cta-button">START YOUR JOURNEY</button>
          </div>
          <div className="hero-image">
            <img
              src='/images/817491c94b5ca8453775ed23d944253f.jpg'
              alt="Chris Bumstead posing"
            />
          </div>
        </section>

        {/* Gym Intro */}
        <section className="gym-intro-section">
          <div className="section-container">
            <h2>THE SAYANS DIFFERENCE</h2>
            <p className="subtitle">Where the mind goes silent, the body Awakens</p>
            <p>
              Our 25,000 sq ft flagship facility is designed by champions, for champions.
              Every piece of equipment is selected to optimize muscle growth and performance.
            </p>

            <div className="stats-grid">
              <div className="stat-card">
                <h3>15+</h3>
                <p>Years of Excellence</p>
              </div>
              <div className="stat-card">
                <h3>100+</h3>
                <p>Pro Athletes Trained</p>
              </div>
              <div className="stat-card">
                <h3>6x</h3>
                <p>Mr. Olympia Titles</p>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="gallery-section">
          <div className="section-header">
            <h2>INSIDE SAYANS GYM</h2>
            <p className="subtitle">World-Class Training Environment</p>
          </div>

          <div className="gallery-grid">
            <div className="gallery-card">
              <img src='/images/338e97ed23b305c164bd2ee8e0815b1c.jpg' alt="Competition equipment" />
              <div className="overlay">
                <h3>Champion-Approved Equipment</h3>
                <p>Selected by CBUM himself</p>
              </div>
            </div>

            <div className="gallery-card">
              <img src='/images/939c60b3b2213aefbb22440673321505.jpg' alt="Personal training" />
              <div className="overlay">
                <h3>1-on-1 Coaching</h3>
                <p>From our pro trainers</p>
              </div>
            </div>

            <div className="gallery-card">
              <img src='/images/fa05622c870041e34e0fd1f9fbc6e519.jpg' alt="Gym facility" />
              <div className="overlay">
                <h3>Spacious Training Floor</h3>
                <p>25,000 sq ft of premium space</p>
              </div>
            </div>

            <div className="gallery-card">
              <img src='/images/7de14c62892975646265ef7d610a1f16.jpg' alt="Posing room" />
              <div className="overlay">
                <h3>Competition Posing Room</h3>
                <p>With professional lighting</p>
              </div>
            </div>

            <div className="gallery-card">
              <img src='/images/b98ed8fa23dd622292fd4fc883ad1c40.jpg' alt="Recovery area" />
              <div className="overlay">
                <h3>Recovery Zone</h3>
                <p>Cryotherapy & massage</p>
              </div>
            </div>

            <div className="gallery-card">
              <img src='/images/fb8960c168f7893150428ec38ec6baa8.jpg' alt="Supplement bar" />
              <div className="overlay">
                <h3>Supplement Bar</h3>
                <p>Premium fueling station</p>
              </div>
            </div>
            <div className="gallery-card">
              <img src='/images/63f79e1322b1206c6b0a951df14d0cb3.jpg' alt="Supplement bar" />
              <div className="overlay">
                <h3>Results</h3>
                <p>Feel pain , Accept pain, Know pain </p>
              </div>
            </div>
            <div className="gallery-card">
              <img src='/images/1e566e9fd53245730e95965b27988496.jpg' alt="Supplement bar" />
              <div className="overlay">
                <h3>Demon Back</h3>
                <p>Trained by Coach Mr.Cbum with the support of our student</p>
              </div>
            </div>
          </div>
        </section>

        {/* Coach Profile */}
        <section className="coach-profile">
          <div className="profile-container">
            <div className="coach-image">
              <img
                src='/images/b7fbdcc844ef4222c689645ee5550a00.jpg'
                alt="Chris Bumstead Mr. Olympia"
              />
            </div>
            <div className="coach-bio">
              <h2>CHRIS "CBUM" BUMSTEAD</h2>
              <h3>2019-2024 Classic Physique Olympia Champion</h3>
              <p>
                As our head coach, Chris brings his championship-winning methods to all SAYANS members.
                His approach combines old-school bodybuilding principles with modern sports science.
              </p>
              <div className="achievements">
                <div className="trophy">🏆 2019 Mr. Olympia</div>
                <div className="trophy">🏆 2020 Mr. Olympia</div>
                <div className="trophy">🏆 2021 Mr. Olympia</div>
                <div className="trophy">🏆 2022 Mr. Olympia</div>
                <div className="trophy">🏆 2023 Mr. Olympia</div>
                <div className="trophy">🏆 2024 Mr. Olympia</div>
              </div>
            </div>
          </div>
        </section>
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

export default About;