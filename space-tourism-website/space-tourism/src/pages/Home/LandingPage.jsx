import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";

const LandingPage = () => {
  return (
    <div className="landing-hero">
      <div className="landing-overlay">
        <div className="landing-container">
          <div className="landing-content">
            <div className="landing-header-title-row">
              <div className="landing-icon">
                <div className="space-icon">🚀</div>
              </div>
              <h1 className="landing-title">Space Tourism</h1>
            </div>
            
            <p className="landing-subtitle">Journey Beyond the Stars</p>
            <p className="landing-description">
              Experience the ultimate adventure with our premium space tourism service. 
              From breathtaking views of Earth to exploring distant destinations, 
              your cosmic journey awaits.
            </p>
            
            <div className="landing-divider"></div>
            
            <div className="landing-actions">
              <Link 
                to="/register" 
                className="landing-btn landing-btn-primary"
                role="button"
              >
                <span className="btn-text">Start Your Journey</span>
                <span className="btn-subtext">Create Account</span>
              </Link>
              
              <Link 
                to="/login" 
                className="landing-btn landing-btn-secondary"
                role="button"
              >
                <span className="btn-text">Welcome Back</span>
                <span className="btn-subtext">Sign In</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
