import React, { useState, useEffect, useRef } from "react";
import Logo from "../assets/shared/logo.svg";
import { NavLink } from "react-router-dom";
import '../../src/App.css'

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const headerRef = useRef(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    const handleEscapeKey = (event) => {
      if (event.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscapeKey);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isMobileMenuOpen]);

  return (
    <header ref={headerRef}>
      <div className="header-container">
        <NavLink to="/landing" className="logo">
          <img className="logo" src={Logo} alt="Space Tourism Logo" />
        </NavLink>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="mobile-menu-overlay" onClick={closeMobileMenu}></div>
        )}

        {/* Modern Modal Navigation */}
        <div className={`mobile-modal ${isMobileMenuOpen ? 'active' : ''}`}>
          <div className="mobile-modal-header">
            <div className="mobile-modal-logo">
              <img src={Logo} alt="Space Tourism" />
              <span className="modal-title">Space Tourism</span>
            </div>
            <button 
              className="mobile-modal-close"
              onClick={closeMobileMenu}
              aria-label="Close menu"
            >
              ×
            </button>
          </div>
          
          <div className="mobile-modal-content">
            <nav className="mobile-modal-nav">
              <p className="nav-section-title">Explore the Universe</p>
              <ul className="modal-nav-links">
                <li>
                  <NavLink 
                    to="/landing" 
                    className={({ isActive }) => `modal-nav-link ${isActive ? 'active' : ''}`}
                    onClick={closeMobileMenu}
                  >
                    <span className="nav-number">00</span>
                    <div className="nav-content">
                      <span className="nav-title">Home</span>
                      <span className="nav-description">Start your journey</span>
                    </div>
                  </NavLink>
                </li>
                <li>
                  <NavLink 
                    to="/destination" 
                    className={({ isActive }) => `modal-nav-link ${isActive ? 'active' : ''}`}
                    onClick={closeMobileMenu}
                  >
                    <span className="nav-number">01</span>
                    <div className="nav-content">
                      <span className="nav-title">Destination</span>
                      <span className="nav-description">Pick your destination</span>
                    </div>
                  </NavLink>
                </li>
                <li>
                  <NavLink 
                    to="/crew" 
                    className={({ isActive }) => `modal-nav-link ${isActive ? 'active' : ''}`}
                    onClick={closeMobileMenu}
                  >
                    <span className="nav-number">02</span>
                    <div className="nav-content">
                      <span className="nav-title">Crew</span>
                      <span className="nav-description">Meet your crew</span>
                    </div>
                  </NavLink>
                </li>
                <li>
                  <NavLink 
                    to="/technology" 
                    className={({ isActive }) => `modal-nav-link ${isActive ? 'active' : ''}`}
                    onClick={closeMobileMenu}
                  >
                    <span className="nav-number">03</span>
                    <div className="nav-content">
                      <span className="nav-title">Technology</span>
                      <span className="nav-description">Explore the tech</span>
                    </div>
                  </NavLink>
                </li>
              </ul>
            </nav>
            
            <div className="mobile-modal-footer">
              <p className="modal-tagline">"Space: The final frontier"</p>
              <div className="modal-social">
                <span className="social-text">Follow your dreams among the stars</span>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="nav-container desktop-nav">
          <ul className="nav-links">
            <li>
              <NavLink 
                to="/landing" 
                className={({ isActive }) => isActive ? 'active' : null}
              >
                00 Home
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/destination" 
                className={({ isActive }) => isActive ? 'active' : null}
              >
                01 Destination
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/crew" 
                className={({ isActive }) => isActive ? 'active' : null}
              >
                02 Crew
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/technology" 
                className={({ isActive }) => isActive ? 'active' : null}
              >
                03 Technology
              </NavLink>
            </li>
          </ul>
        </nav>

        <div 
          className={`mobile-toggle ${isMobileMenuOpen ? 'active' : ''}`} 
          onClick={toggleMobileMenu}
          role="button"
          tabIndex={0}
          aria-label="Toggle mobile menu"
          aria-expanded={isMobileMenuOpen}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              toggleMobileMenu();
            }
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
