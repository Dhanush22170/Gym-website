import React from 'react';
import { FaInstagram, FaTwitter, FaWhatsapp, FaFacebook } from 'react-icons/fa';
const Why = () => {
  return (
    <>
      <div className="why-sayans">
        <section className="why-hero">
          <div className="hero-overlay">
            <div className="hero-content">
              <h1>WHY SAYANS IS THE ULTIMATE FITNESS DESTINATION</h1>
              <h2>Home of 6x Mr. Olympia Chris Bumstead</h2>
              <p>Train where champions are forged with proven systems that deliver results</p>
              <button className="cta-button">BOOK A PRIVATE TOUR →</button>
            </div>
          </div>
        </section>


        <section className="value-proposition">
          <div className="container">
            <h2>THE SAYANS DIFFERENCE</h2>
            <p className="subtitle">What separates us from ordinary gyms</p>

            <div className="value-grid">
              <div className="value-card">
                <div className="value-icon">🏆</div>
                <h3>Champion-Proven Systems</h3>
                <p>Access the exact training protocols that built a 6x Mr. Olympia, refined through years of competition experience</p>
              </div>

              <div className="value-card">
                <div className="value-icon">💎</div>
                <h3>Elite-Grade Facility</h3>
                <p>25,000 sq ft of competition-caliber equipment personally selected by CBUM</p>
              </div>

              <div className="value-card">
                <div className="value-icon">👑</div>
                <h3>Champion Environment</h3>
                <p>Train alongside serious athletes in a space designed to push limits beyond ordinary gym standards</p>
              </div>
            </div>
          </div>
        </section>


        <section className="benefits-section dark-bg">
          <div className="container">

            <div className="benefit-card">
              <div className="benefit-media">
                <img
                  src='/images/10cb54f775c9fe2b5f01cfad1e0529a0.jpg'
                  alt="CBUM demonstrating proper form"
                  className="benefit-image"
                />
              </div>
              <div className="benefit-content">
                <h3>Learn From The Best</h3>
                <p>Our coaching staff includes former competitors who have trained directly with Chris Bumstead. You'll receive:</p>
                <ul className="benefit-list">
                  <li>Personalized form correction</li>
                  <li>Competition posing instruction</li>
                  <li>Peak week protocols</li>
                  <li>Judging criteria insights</li>
                </ul>
                <button className="learn-more">MEET OUR COACHES →</button>
              </div>
            </div>


            <div className="benefit-card reversed">
              <div className="benefit-media">
                <img
                  src='/images/183a2bdecdb69c45126b6148ef2c6da7.jpg'
                  alt="SAYANS gym facility"
                  className="benefit-image"
                />
              </div>
              <div className="benefit-content">
                <h3>Facility Designed For Results</h3>
                <p>Every aspect of our space is optimized for maximum gains:</p>
                <ul className="benefit-list">
                  <li>Competition-spec platforms</li>
                  <li>Professional posing room with stage lighting</li>
                  <li>Dedicated strongman area</li>
                  <li>Recovery zone with cryotherapy</li>
                </ul>
                <button className="learn-more">VIEW FACILITY TOUR →</button>
              </div>
            </div>
          </div>
        </section>


        <section className="testimonials">
          <div className="container">
            <h2>CHANGING LIVES DAILY</h2>
            <p className="subtitle">Hear from our members</p>

            <div className="testimonial-grid">
              <div className="testimonial-card">
                <div className="quote">"In 12 months at SAYANS, I went from novice to national qualifier"</div>
                <div className="client-info">
                  <img src="/images/14de4904df0af3ad28cacac0b724d300.jpg" alt="James T." className="client-photo" />
                  <div className="client-details">
                    <div className="client-name">James T.</div>
                    <div className="client-achievement">2023 Nationals Qualifier</div>
                  </div>
                </div>
              </div>

              <div className="testimonial-card">
                <div className="quote">"The nutrition coaching helped me drop 8% body fat while gaining muscle"</div>
                <div className="client-info">
                  <img src="/images/2bbcd94c3b9bf77400e8e029759f3c32.jpg" alt="Sarah K." className="client-photo" />
                  <div className="client-details">
                    <div className="client-name">Sarah K.</div>
                    <div className="client-achievement">Fitness Model</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        <section className="final-cta">
          <div className="cta-container">
            <h2>YOUR CHAMPIONSHIP JOURNEY STARTS HERE</h2>
            <p>Get started with our exclusive new member offer</p>
            <div className="cta-actions">
              <button className="primary-cta">CLAIM 7-DAY FREE TRIAL</button>
              <button className="secondary-cta">SPEAK TO A COACH</button>
            </div>
            <div className="cta-note">
              <span>⭐️ Includes 1 complimentary training session</span>
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

export default Why;