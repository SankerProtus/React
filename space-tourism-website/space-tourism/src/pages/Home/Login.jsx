import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { validateEmail, sanitizeInput } from "../../utils/validation.js";

const Login = () => {
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    
    const handleLogin = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setErrors({});

        const formData = {
            email: sanitizeInput(e.target.email.value),
            password: e.target.password.value
        };

        // Client-side validation
        if (!formData.email || !formData.password) {
            setErrors({ general: "All fields are required." });
            setIsLoading(false);
            return;
        }

        if (!validateEmail(formData.email)) {
            setErrors({ email: "Please enter a valid email address." });
            setIsLoading(false);
            return;
        }

        try {
            const response = await axios.post("/api/auth/login", formData);

      if (response.status === 200 || response.status === 201) {
        if (response.data && response.data.message) {
          alert(response.data.message);
        }
        navigate("/landing");
      } else {
        setErrors({ general: "Login failed. Please check your credentials and try again." });
      }
    } catch (error) {
      console.error("Login error:", error);
      if (error.response && error.response.data && error.response.data.message) {
        setErrors({ general: error.response.data.message });
      } else {
        setErrors({ general: "Login failed. Please try again later." });
      }
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="auth-page">
      <div className="auth-overlay">
        <div className="auth-container">
          <div className="auth-header">
            <div className="auth-header-title-row">
              <div className="auth-icon">🛸</div>
              <h1 className="auth-title">Mission Control</h1>
            </div>
            <p className="auth-subtitle">Welcome back, space explorer</p>
          </div>

          {errors.general && (
            <div className="auth-alert auth-alert-error" role="alert">
              {errors.general}
            </div>
          )}

          <div className="auth-form-container">
            <form onSubmit={handleLogin} className="auth-form">
              <div className="auth-form-group">
                <label htmlFor="email" className="auth-label">Mission Control Email:</label>
                <input
                  type="email"
                  className={`auth-input ${errors.email ? 'auth-input-error' : ''}`}
                  name="email"
                  autoComplete="email"
                  placeholder="Enter your email address..."
                  disabled={isLoading}
                />
                {errors.email && (
                  <div className="auth-error-message">
                    {errors.email}
                  </div>
                )}
              </div>
              
              <div className="auth-form-group">
                <label htmlFor="password" className="auth-label">Security Code:</label>
                <input
                  type="password"
                  className={`auth-input ${errors.password ? 'auth-input-error' : ''}`}
                  name="password"
                  autoComplete="current-password"
                  placeholder="Enter your security code..."
                  disabled={isLoading}
                />
                {errors.password && (
                  <div className="auth-error-message">
                    {errors.password}
                  </div>
                )}
              </div>
              
              <button 
                type="submit" 
                className={`auth-btn auth-btn-primary ${isLoading ? 'auth-btn-loading' : ''}`}
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <span className="auth-loading-spinner"></span>
                    Accessing System...
                  </>
                ) : (
                  'Access Mission Control'
                )}
              </button>
            </form>
            
            <div className="auth-footer">
              <p className="auth-footer-text">
                New to space exploration? 
                <Link to="/register" className="auth-link">Join the Mission</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
