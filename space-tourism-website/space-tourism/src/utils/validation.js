// Input validation utilities
export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.trim());
};

export const validatePassword = (password) => {
  // At least 8 characters, contains at least one letter and one number
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;
  return passwordRegex.test(password);
};

export const validateUsername = (username) => {
  // At least 3 characters, alphanumeric and underscores only
  const usernameRegex = /^[a-zA-Z0-9_]{3,20}$/;
  return usernameRegex.test(username.trim());
};

export const sanitizeInput = (input) => {
  if (typeof input !== "string") return "";
  return input.trim().replace(/[<>]/g, "");
};

export const validateForm = (formData, fields) => {
  const errors = {};

  if (fields.includes("username") && formData.username) {
    if (!validateUsername(formData.username)) {
      errors.username =
        "Username must be 3-20 characters long and contain only letters, numbers, and underscores";
    }
  }

  if (fields.includes("email") && formData.email) {
    if (!validateEmail(formData.email)) {
      errors.email = "Please enter a valid email address";
    }
  }

  if (fields.includes("password") && formData.password) {
    if (!validatePassword(formData.password)) {
      errors.password =
        "Password must be at least 8 characters long and contain at least one letter and one number";
    }
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};

export const containsOffensiveTerms = (username) => {
  const offensiveTerms = ["admin", "fuck", "shit", "damn", "nigger"];
  return offensiveTerms.some((term) => username.toLowerCase().includes(term));
};


export const validatePasswordStrength = (password) => {
  const result = {
    valid: true,
    score: 0,
    feedback: [],
    requirements: {
      minLength: false,
      hasUpperCase: false,
      hasLowerCase: false,
      hasNumber: false,
      hasSpecialCase: false
    }
  };

  if(password.length >= 8) {
    result.requirements.minLength = true;
    result.score += 1;
  } else {
    result.valid = false;
    result.feedback.push('Password must be at least 8 characters');
  }

  if(/[A-Z]/.test(password)) {
    result.requirements.hasUpperCase = true;
    result.score += 1;
  } else {
    result.feedback.push('Include at least one uppercase letter');
  }

  if(/[a-z]/.test(password)) {
    result.requirements.hasLowerCase = true;
    result.score += 1;
  } else {
    result.feedback.push('Include at least one lowercase letter');
  }

  if(/[0-9]/.test(password)) {
    result.requirements.hasNumber = true;
    result.score += 1;
  } else {
    result.feedback.push('Include at least one number');
  }

  if(/[@$!%*?&]/.test(password)) {
    result.requirements.hasSpecialCase = true;
    result.score += 1;
  } else {
    result.feedback.push('Include at least one special character');
  }

  const isCommonPassword = (password) => {
    const commonPasswords = ['password', '123456', 'qwerty', 'password123', 'admin', '12345678'];
    return commonPasswords.includes(password.toLowerCase().trim());
  };

  if(isCommonPassword(password)) {
    result.valid = false;
    result.feedback.push('This password is too common');
  }

  // Password is valid if all requirements are met and it's not a common password
  result.valid = result.valid && Object.values(result.requirements).every(req => req === true);

  return result;
};