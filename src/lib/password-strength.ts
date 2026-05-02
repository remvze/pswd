import { getPasswordStrength } from '@/helpers/password';

import { PASSWORD_STRENGTH_COLORS } from './generator-constants';

export function resolvePasswordStrength(password: string): number {
  if (!password) return 0;

  return getPasswordStrength(password);
}

export function getPasswordStrengthColor(strength: number): string {
  return PASSWORD_STRENGTH_COLORS[strength] ?? PASSWORD_STRENGTH_COLORS[0];
}
