export const validateName = (name: string): string => {
  if (!name.trim()) {
    return "Full Name is required";
  }
  if (name.length < 2 || name.length > 30) {
    return "Full Name must be between 2-30 characters";
  }
  if (!/^[a-zA-Z0-9\s]+$/.test(name)) {
    return "Full Name can only contain letters, numbers, and spaces";
  }
  return "";
};

export const validateEmail = (email: string): string => {
  if (!email.trim()) {
    return "Email is required";
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return "Please enter a valid email address";
  }
  return "";
};

export const validateMessage = (message: string): string => {
  if (!message.trim()) {
    return "Message is required";
  }
  if (message.length > 1500) {
    return "Message must not exceed 1500 characters";
  }
  return "";
};

