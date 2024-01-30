export function validateName(name: string): boolean {
  const nameRegex = /^\p{L}{2,}$/u;
  return nameRegex.test(name);
}

export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  return emailRegex.test(email);
}

export function validatePhoneNumber(phoneNumber: string): boolean {
  const cleanedPhoneNumber = phoneNumber.startsWith("+")
    ? phoneNumber.slice(1)
    : phoneNumber;
  return /^[0-9]+$/.test(cleanedPhoneNumber);
}

export function validateCompanyName(name: string): boolean {
  if (!name.trim()) {
    return false;
  }

  const companyNameRegex = /^[\p{L}0-9-,'.\s]{2,}$/u;
  return companyNameRegex.test(name.trim());
}
