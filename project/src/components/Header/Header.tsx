import { useState } from 'react';
import './Header.css';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <div className="logo-container">
          <a href="/">
            <img 
              src="/assets/real_estate_logo.png" 
              alt="Real Estate Agency" 
              className="logo"
            />
          </a>
        </div>

        {/* Navigation - Desktop */}
        <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
          <ul className="nav-list">
            <li className="nav-item has-dropdown">
              <a href="#solutions">Properties <span className="dropdown-icon">▼</span></a>
              <ul className="dropdown">
                <li><a href="#residential">Residential</a></li>
                <li><a href="#commercial">Commercial</a></li>
                <li><a href="#luxury">Luxury</a></li>
                <li><a href="#rentals">Rentals</a></li>
              </ul>
            </li>
            <li className="nav-item"><a href="#featured">Featured Listings</a></li>
            <li className="nav-item"><a href="#market">Market Insights</a></li>
            <li className="nav-item"><a href="#blog">Blog</a></li>
            <li className="nav-item"><a href="#contact">Contact</a></li>
          </ul>
        </nav>

        {/* Call to Action & Mobile Toggle */}
        <div className="header-actions">
          <a href="#enquire" className="btn btn-dark btn-sm d-none-mobile">Find a Home</a>
          
          <button className="mobile-menu-toggle" onClick={toggleMenu} aria-label="Toggle Menu">
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
