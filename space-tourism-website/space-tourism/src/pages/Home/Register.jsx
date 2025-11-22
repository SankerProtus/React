import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { validateForm, sanitizeInput, containsOffensiveTerms, validatePasswordStrength } from "../../utils/validation.js";

const Register = () => {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(null);

  const handlePasswordChange = (e) => {
    const password = e.target.value;
    if (password.length > 0) {
      const strength = validatePasswordStrength(password);
      setPasswordStrength(strength);
    } else {
      setPasswordStrength(null);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrors({});

    try {
      const username = sanitizeInput(e.target.username.value);
      const email = sanitizeInput(e.target.email.value);
      const password = e.target.password.value;

      const formData = {
        username,
        email,
        password
      };

      // Check for offensive terms in username
      if(containsOffensiveTerms(username)) {
        setErrors({ username: "Username contains inappropriate language" });
        setIsLoading(false);
        return;
      }

      // Validate password strength
      const passwordValidation = validatePasswordStrength(password);
      if (!passwordValidation.valid) {
        setErrors({ password: passwordValidation.feedback.join('. ') });
        setIsLoading(false);
        return;
      }

      // Client-side validation
      const validation = validateForm(formData, ['username', 'email', 'password']);
      
      if (!validation.isValid) {
        setErrors(validation.errors);
        setIsLoading(false);
        return;
      }

      if (!formData.username || !formData.email || !formData.password) {
        setErrors({ general: "All fields are required." });
        setIsLoading(false);
        return;
      }

      const response = await axios.post("/api/auth/register", formData);

      if (response.status === 200 || response.status === 201) {
        if (response.data && response.data.message) {
          alert(response.data.message);
        }
        navigate("/landing");
      } else {
        setErrors({ general: response.data.message || "Registration failed" });
      }
    } catch (error) {
      console.log("Error registering user: ", error);
      if (error.response && error.response.data && error.response.data.message) {
        setErrors({ general: error.response.data.message });
      } else {
        setErrors({ general: "Registration failed. Please try again later." });
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
              <div className="auth-icon">🚀</div>
              <h1 className="auth-title">Join the Mission</h1>
            </div>
            <p className="auth-subtitle">Create your account and start your space journey</p>
          </div>

          {errors.general && (
            <div className="auth-alert auth-alert-error" role="alert">
              {errors.general}
            </div>
          )}

          <div className="auth-form-container">
            <form onSubmit={handleRegister} className="auth-form">
              <div className="auth-form-group">
                <label htmlFor="username" className="auth-label">Commander Name:</label>
                <input
                  type="text"
                  className={`auth-input ${errors.username ? 'auth-input-error' : ''}`}
                  name="username"
                  placeholder="Enter your commander name..."
                  autoComplete="username"
                  disabled={isLoading}
                />
                {errors.username && (
                  <div className="auth-error-message">
                    {errors.username}
                  </div>
                )}
              </div>
              
              <div className="auth-form-group">
                <label htmlFor="email" className="auth-label">Mission Control Email:</label>
                <input
                  type="email"
                  className={`auth-input ${errors.email ? 'auth-input-error' : ''}`}
                  name="email"
                  placeholder="Enter your email address..."
                  autoComplete="email"
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
                  placeholder="Enter your secure password..."
                  autoComplete="new-password"
                  disabled={isLoading}
                  onChange={handlePasswordChange}
                />
                {passwordStrength && (
                  <div className="password-strength-indicator">
                    <div className="strength-bar">
                      <div 
                        className={`strength-fill strength-${passwordStrength.score}`}
                        style={{width: `${(passwordStrength.score / 5) * 100}%`}}
                      ></div>
                    </div>
                    <div className="strength-text">
                      Strength: {passwordStrength.score < 3 ? 'Weak' : passwordStrength.score < 5 ? 'Medium' : 'Strong'}
                    </div>
                    {passwordStrength.feedback.length > 0 && (
                      <div className="strength-feedback">
                        {passwordStrength.feedback.map((tip, index) => (
                          <div key={index} className="feedback-item">• {tip}</div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
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
                    Initializing Mission...
                  </>
                ) : (
                  'Launch Registration'
                )}
              </button>
            </form>
            
            <div className="auth-footer">
              <p className="auth-footer-text">
                Already have clearance? 
                <Link to="/login" className="auth-link">Sign In</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Register;
