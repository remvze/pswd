export const UPPERCASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
export const LOWERCASE = 'abcdefghijklmnopqrstuvwxyz';
export const NUMBERS = '0123456789';
export const SYMBOLS = '!@#$%^&*()_+-=[]{}|;:,.<>?';

export const SIMILAR_CHARACTERS = 'Il1O0';

export const PASSWORD_LENGTH_LIMITS = { max: 90, min: 0 } as const;
export const WORD_COUNT_LIMITS = { max: 20, min: 0 } as const;
export const PIN_LENGTH_LIMITS = { max: 20, min: 0 } as const;

export const PASSWORD_STRENGTH_COLORS = [
  'transparent',
  '#ef4444',
  '#f97316',
  '#eab308',
  '#65a30d',
  '#22c55e',
] as const;
