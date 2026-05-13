import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <h2 className="footer-logo">Spinta<span className="text-accent">.</span></h2>
            <p className="footer-desc">
              We are the catalysts of transformation, propelling brands to new heights through our unwavering commitment to four foundational pillars: Branding, Creative Media, Marketing, and Technology.
            </p>
          </div>
          
          <div className="footer-links-group">
            <h4 className="footer-heading">Solutions</h4>
            <ul className="footer-links">
              <li><a href="#">Branding</a></li>
              <li><a href="#">Creative Media</a></li>
              <li><a href="#">Marketing</a></li>
              <li><a href="#">Technology</a></li>
            </ul>
          </div>

          <div className="footer-links-group">
            <h4 className="footer-heading">Company</h4>
            <ul className="footer-links">
              <li><a href="#">Our Work</a></li>
              <li><a href="#">News and Events</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Career</a></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4 className="footer-heading">Get in Touch</h4>
            <p className="contact-item">
              <span className="contact-label">Mail us:</span><br/>
              <a href="mailto:hello@spintadigital.com" className="contact-link">hello@spintadigital.com</a>
            </p>
            <p className="contact-item">
              <span className="contact-label">HR Enquiries:</span><br/>
              <a href="mailto:hr@spintadigital.com" className="contact-link">hr@spintadigital.com</a>
            </p>
            <button className="btn-enquire">Enquire Now</button>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">&copy; {new Date().getFullYear()} Spinta Digital. All rights reserved.</p>
          <div className="social-links">
            <a href="#" aria-label="LinkedIn">In</a>
            <a href="#" aria-label="Instagram">Ig</a>
            <a href="#" aria-label="Facebook">Fb</a>
            <a href="#" aria-label="YouTube">Yt</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
