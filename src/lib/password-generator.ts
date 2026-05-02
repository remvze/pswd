import {
  getSecureRandomInt,
  getSecureRandomIntInRange,
} from '@/helpers/crypto';
import { capitalizeString } from '@/helpers/string';

import {
  LOWERCASE,
  NUMBERS,
  SIMILAR_CHARACTERS,
  SYMBOLS,
  UPPERCASE,
} from './generator-constants';
import type {
  DicewareOptions,
  NormalOptions,
  PinOptions,
} from './generator-types';

function stripCharacters(source: string, toExclude: string) {
  if (!toExclude) return source;

  const escaped = toExclude.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
  const regex = new RegExp(`[${escaped}]`, 'g');

  return source.replace(regex, '');
}

export function generateNormalPassword(options: NormalOptions): string {
  let characterSet = '';

  if (options.includeUpper) characterSet += UPPERCASE;
  if (options.includeLower) characterSet += LOWERCASE;
  if (options.includeNumbers) characterSet += NUMBERS;
  if (options.includeSymbols) characterSet += SYMBOLS;

  if (options.customSymbols) {
    characterSet += options.customSymbols;
  }

  let toExclude = '';

  if (options.excludeSimilar) {
    toExclude += SIMILAR_CHARACTERS;
  }

  if (options.excludeSymbols) {
    toExclude += options.excludeSymbols;
  }

  characterSet = stripCharacters(characterSet, toExclude);

  if (characterSet.length === 0) {
    return '';
  }

  const passwordCharacters = [];
  const charsetLength = characterSet.length;

  for (let i = 0; i < options.length; i++) {
    const randomIndex = getSecureRandomInt(charsetLength);
    passwordCharacters.push(characterSet[randomIndex]);
  }

  return passwordCharacters.join('');
}

export function generateDicewarePassword(options: DicewareOptions): string {
  if (options.wordlist.length === 0) {
    throw new Error('Wordlist is empty. Please provide a valid wordlist.');
  }

  let words: Array<string | number | undefined> = [];
  const wordlistLength = options.wordlist.length;

  for (let i = 0; i < options.wordCount; i++) {
    const index = getSecureRandomInt(wordlistLength);
    const word = options.wordlist[index];

    words.push(options.capitalize ? capitalizeString(word) : word);
  }

  if (options.randomCapitalization) {
    words = words.map(word =>
      String(word)
        .split('')
        .map(letter =>
          Math.random() > 0.5 ? letter.toLowerCase() : letter.toUpperCase(),
        )
        .join(''),
    );
  }

  if (options.randomNumberBeginning) {
    words.unshift(getSecureRandomIntInRange(100, 999));
  }

  if (options.randomNumberEnd) {
    words.push(getSecureRandomIntInRange(100, 999));
  }

  if (options.separator === 'symbol') {
    const last = words.pop();

    words = words.map(word => {
      const randomSymbol = SYMBOLS[getSecureRandomInt(SYMBOLS.length)];

      return word + randomSymbol;
    });

    words.push(last);

    return words.filter(Boolean).join('');
  }

  const separator =
    options.separator === 'space'
      ? ' '
      : options.separator === 'dash'
        ? '-'
        : '';

  return words.join(separator);
}

export function generatePin(options: PinOptions): string {
  const passwordCharacters = [];

  for (let i = 0; i < options.pinLength; i++) {
    const randomIndex = getSecureRandomInt(NUMBERS.length);
    passwordCharacters.push(NUMBERS[randomIndex]);
  }

  return passwordCharacters.join('');
}
