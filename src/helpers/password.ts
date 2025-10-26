export function getPasswordStrength(password: string) {
  if (!password) return 0;

  let score = 0;

  if (password.length >= 8) score++;
  if (password.length >= 12) score++;
  if (/[a-z]/.test(password)) score++; // lowercase
  if (/[A-Z]/.test(password)) score++; // uppercase
  if (/[0-9]/.test(password)) score++; // numbers
  if (/[^A-Za-z0-9]/.test(password)) score++; // symbols

  const normalizedScore = Math.min(5, Math.max(1, Math.round((score / 6) * 5)));

  return normalizedScore;
}
