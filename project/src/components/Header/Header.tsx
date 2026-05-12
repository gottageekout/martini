import { useState } from 'react';
import './Header.css';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="header-wrapper">
      <header className="header">
        <div className="header-container">
        {/* Logo */}
        <div className="logo-container">
          <a href="/">
            <img 
              src="/assets/logo.webp" 
              alt="Spinta Digital" 
              className="logo"
            />
          </a>
        </div>

        {/* Navigation - Desktop */}
        <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
          <ul className="nav-list">
            <li className="nav-item has-dropdown">
              <a href="#solutions">Solutions <span className="dropdown-icon">▼</span></a>
              <ul className="dropdown">
                <li><a href="#branding">Branding</a></li>
                <li><a href="#creative">Creative Media</a></li>
                <li><a href="#marketing">Marketing</a></li>
                <li><a href="#technology">Technology</a></li>
              </ul>
            </li>
            <li className="nav-item"><a href="#work">Our Work</a></li>
            <li className="nav-item"><a href="#news">News and Events</a></li>
            <li className="nav-item"><a href="#blog">Blog</a></li>
          </ul>
        </nav>

        {/* Call to Action & Mobile Toggle */}
        <div className="header-actions">
          <a href="#enquire" className="btn btn-header d-none-mobile">Enquire Now</a>
          
          <button className="mobile-menu-toggle" onClick={toggleMenu} aria-label="Toggle Menu">
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>
    </header>
  </div>
  );
};

export default Header;
