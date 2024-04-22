import { ValidationResult } from '../../models/Validation';

// Base configs
const passwordMinLength = 6;
const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// Validation Functions
export const validateEmail = (email: string): ValidationResult => {
  if (!email.trim()) {
    return { isValid: false, message: 'Please fill in the email field' };
  }
  if (!email.toLowerCase().match(emailRegex)) {
    return { isValid: false, message: 'Please fill in a valid email' };
  }

  return { isValid: true };
};

export const validatePassword = (password: string): ValidationResult => {
  const trimmedPassword = password.trim();
  if (!trimmedPassword) {
    return { isValid: false, message: 'Please fill in the password field' };
  }
  if (trimmedPassword.length < passwordMinLength) {
    return {
      isValid: false,
      message: `Password should be at least ${passwordMinLength} characters long`,
    };
  }

  return { isValid: true };
};

export const validatePasswordConfirmation = (
  password: string,
  confirmation: string,
): ValidationResult => {
  const passwordValidation = validatePassword(password);
  if (!passwordValidation.isValid) {
    return passwordValidation;
  }

  const confirmationValidation = validatePassword(confirmation);
  if (!confirmationValidation.isValid) {
    return confirmationValidation;
  }

  if (password.trim() !== confirmation.trim()) {
    return { isValid: false, message: "Password and confirmation don't match" };
  }

  return { isValid: true };
};
