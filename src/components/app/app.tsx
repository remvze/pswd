import { useEffect, useState, useCallback } from 'react';
import {
  FaRegCopy,
  FaArrowRotateLeft,
  FaCheck,
  FaRegEye,
  FaRegEyeSlash,
} from 'react-icons/fa6';

import { Container } from '../container';

import { useCopy } from '@/hooks/use-copy';
import { getSecureRandomInt } from '@/helpers/number';
import { capitalizeString } from '@/helpers/string';

import { wordlist } from '@/data/wordlist';

import styles from './app.module.css';

const WORDLIST = wordlist;

export function App() {
  const [activeTab, setActiveTab] = useState<'normal' | 'diceware'>('normal');
  const { copy, copying } = useCopy();
  const [showPassword, setShowPassword] = useState(true);

  const [password, setPassword] = useState('');
  const [length, setLength] = useState(12);
  const [includeUpper, setIncludeUpper] = useState(true);
  const [includeLower, setIncludeLower] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [excludeSimilar, setExcludeSimilar] = useState(false);
  const [customSymbols, setCustomSymbols] = useState('');

  const [wordCount, setWordCount] = useState(6);
  const [separator, setSeparator] = useState('space');
  const [capitalize, setCapitalize] = useState(false);

  const UPPERCASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const LOWERCASE = 'abcdefghijklmnopqrstuvwxyz';
  const NUMBERS = '0123456789';
  const SYMBOLS = '!@#$%^&*()_+-=[]{}|;:,.<>?';

  const SIMILAR_CHARACTERS = 'Il1O0';

  const generatePassword = useCallback(() => {
    if (activeTab === 'normal') {
      let characterSet = '';

      if (includeUpper) characterSet += UPPERCASE;
      if (includeLower) characterSet += LOWERCASE;
      if (includeNumbers) characterSet += NUMBERS;
      if (includeSymbols) characterSet += SYMBOLS;

      if (customSymbols) {
        characterSet += customSymbols;
      }

      if (excludeSimilar) {
        const regex = new RegExp(`[${SIMILAR_CHARACTERS}]`, 'g');
        characterSet = characterSet.replace(regex, '');
      }

      if (characterSet.length === 0) {
        setPassword('');
        return;
      }

      const passwordCharacters = [];
      const charsetLength = characterSet.length;

      for (let i = 0; i < length; i++) {
        const randomIndex = getSecureRandomInt(charsetLength);
        passwordCharacters.push(characterSet[randomIndex]);
      }

      const newPassword = passwordCharacters.join('');
      setPassword(newPassword);
    } else {
      if (WORDLIST.length === 0) {
        alert('Wordlist is empty. Please provide a valid wordlist.');
        return;
      }

      const words = [];
      const wordlistLength = WORDLIST.length;

      for (let i = 0; i < wordCount; i++) {
        const index = getSecureRandomInt(wordlistLength);
        const word = WORDLIST[index];

        words.push(capitalize ? capitalizeString(word) : word);
      }

      setPassword(
        words.join(
          separator === 'space' ? ' ' : separator === 'dash' ? '-' : '',
        ),
      );
    }
  }, [
    includeUpper,
    includeLower,
    includeNumbers,
    includeSymbols,
    length,
    wordCount,
    activeTab,
    separator,
    excludeSimilar,
    customSymbols,
    capitalize,
  ]);

  useEffect(() => {
    generatePassword();
  }, [activeTab, generatePassword]);

  return (
    <Container>
      <div className={styles.generator}>
        <div className={styles.tabs}>
          <button
            className={activeTab === 'normal' && styles.active}
            onClick={() => setActiveTab('normal')}
          >
            Normal
          </button>
          <button
            className={activeTab === 'diceware' && styles.active}
            onClick={() => setActiveTab('diceware')}
          >
            Diceware
          </button>
        </div>

        <div className={styles.result}>
          <input
            readOnly
            type={showPassword ? 'text' : 'password'}
            value={password}
          />
          <button
            className={styles.hide}
            onClick={() => setShowPassword(prev => !prev)}
          >
            {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
          </button>
          <button className={styles.copy} onClick={() => copy(password)}>
            {copying ? <FaCheck /> : <FaRegCopy />}
          </button>
          <button
            className={styles.generate}
            onClick={() => generatePassword()}
          >
            <FaArrowRotateLeft />
          </button>
        </div>

        {activeTab === 'normal' && (
          <div className={styles.tabContent}>
            <div className={styles.controls}>
              <div className={styles.length}>
                <label htmlFor="length">Password Length:</label>
                <div className={styles.inputs}>
                  <input
                    id="length"
                    max="128"
                    min="8"
                    type="number"
                    value={length}
                    onChange={e => setLength(Number(e.target.value))}
                  />

                  <input
                    max="128"
                    min="8"
                    type="range"
                    value={length}
                    onChange={e => setLength(Number(e.target.value))}
                  />
                </div>
              </div>

              <label className={styles.checkbox}>
                <input
                  checked={includeUpper}
                  type="checkbox"
                  onChange={e => setIncludeUpper(e.target.checked)}
                />
                Include Uppercase Letters
              </label>

              <label className={styles.checkbox}>
                <input
                  checked={includeLower}
                  type="checkbox"
                  onChange={e => setIncludeLower(e.target.checked)}
                />
                Include Lowercase Letters
              </label>

              <label className={styles.checkbox}>
                <input
                  checked={includeNumbers}
                  type="checkbox"
                  onChange={e => setIncludeNumbers(e.target.checked)}
                />
                Include Numbers
              </label>

              <label className={styles.checkbox}>
                <input
                  checked={includeSymbols}
                  type="checkbox"
                  onChange={e => setIncludeSymbols(e.target.checked)}
                />
                Include Symbols
              </label>

              <label className={styles.checkbox}>
                <input
                  checked={excludeSimilar}
                  type="checkbox"
                  onChange={e => setExcludeSimilar(e.target.checked)}
                />
                Exclude Similar Characters (e.g., l, 1, O, 0)
              </label>

              <div className={styles.customSymbols}>
                <label htmlFor="customSymbols">Custom Symbols:</label>
                <input
                  id="customSymbols"
                  placeholder="e.g., @#$%"
                  type="text"
                  value={customSymbols}
                  onChange={e => setCustomSymbols(e.target.value)}
                />
              </div>
            </div>
          </div>
        )}

        {activeTab === 'diceware' && (
          <div className={styles.tabContent}>
            <div className={styles.controls}>
              <div className={styles.length}>
                <label htmlFor="count">Number of Words:</label>

                <div className={styles.inputs}>
                  <input
                    id="count"
                    max="12"
                    min="3"
                    type="number"
                    value={wordCount}
                    onChange={e => setWordCount(Number(e.target.value))}
                  />

                  <input
                    max="12"
                    min="3"
                    type="range"
                    value={wordCount}
                    onChange={e => setWordCount(Number(e.target.value))}
                  />
                </div>
              </div>

              <label className={styles.checkbox}>
                <input
                  checked={capitalize}
                  type="checkbox"
                  onChange={e => setCapitalize(e.target.checked)}
                />
                Capitalize Words
              </label>

              <div className={styles.separator}>
                <label htmlFor="separator">Word Separator:</label>
                <select
                  value={separator}
                  onChange={e => setSeparator(e.target.value)}
                >
                  <option value="space">Space</option>
                  <option value="dash">Dash</option>
                  <option value="none">None</option>
                </select>
              </div>
            </div>
          </div>
        )}
      </div>
    </Container>
  );
}
