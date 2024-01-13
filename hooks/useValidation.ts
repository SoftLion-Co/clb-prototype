export function validateName(name: string): boolean {
  const nameRegex = /^[a-zA-Z]{2,}$/;
  return nameRegex.test(name);
}

export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  return emailRegex.test(email);
}

export function validatePhoneNumber(phoneNumber: string): boolean {
  const phoneRegex = /^\d+$/;
  return phoneRegex.test(phoneNumber);
}
