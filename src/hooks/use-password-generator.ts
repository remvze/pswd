import { useCallback, useEffect, useMemo, useState } from 'react';

import { wordlist as defaultWordlist } from '@/data/wordlist';
import { useDebouncedValue } from '@/hooks/use-debounced-value';
import type { GeneratorTab } from '@/lib/generator-types';
import {
  generateDicewarePassword,
  generateNormalPassword,
  generatePin,
} from '@/lib/password-generator';
import {
  getPasswordStrengthColor,
  resolvePasswordStrength,
} from '@/lib/password-strength';

import type { GeneratorSettings } from './use-generator-settings';

export function usePasswordGenerator(settings: GeneratorSettings) {
  const [password, setPassword] = useState('');

  const resolvedWordlist = useMemo(() => {
    const custom = settings.customWordlist
      .split('\n')
      .map(item => item.trim())
      .filter(Boolean);

    if (custom.length > 0) return custom;

    return defaultWordlist;
  }, [settings.customWordlist]);

  const generatePassword = useCallback(() => {
    try {
      if (settings.activeTab === 'normal') {
        setPassword(
          generateNormalPassword({
            customSymbols: settings.customSymbols,
            excludeSimilar: settings.excludeSimilar,
            excludeSymbols: settings.excludeSymbols,
            includeLower: settings.includeLower,
            includeNumbers: settings.includeNumbers,
            includeSymbols: settings.includeSymbols,
            includeUpper: settings.includeUpper,
            length: settings.length,
          }),
        );

        return;
      }

      if (settings.activeTab === 'diceware') {
        setPassword(
          generateDicewarePassword({
            capitalize: settings.capitalize,
            randomCapitalization: settings.randomCapitalization,
            randomNumberBeginning: settings.randomNumberBeginning,
            randomNumberEnd: settings.randomNumberEnd,
            separator: settings.separator,
            wordCount: settings.wordCount,
            wordlist: resolvedWordlist,
          }),
        );

        return;
      }

      setPassword(generatePin({ pinLength: settings.pinLength }));
    } catch (error) {
      const message =
        error instanceof Error ? error.message : 'Unable to generate password.';
      alert(message);
    }
  }, [
    settings.activeTab,
    settings.length,
    settings.includeUpper,
    settings.includeLower,
    settings.includeNumbers,
    settings.includeSymbols,
    settings.excludeSimilar,
    settings.customSymbols,
    settings.excludeSymbols,
    settings.wordCount,
    settings.separator,
    settings.capitalize,
    settings.randomCapitalization,
    settings.randomNumberBeginning,
    settings.randomNumberEnd,
    settings.pinLength,
    resolvedWordlist,
  ]);

  useEffect(() => {
    generatePassword();
  }, [generatePassword, settings.activeTab]);

  const debouncedPassword = useDebouncedValue(password, 350);
  const [strength, setStrength] = useState(0);

  useEffect(() => {
    if (
      debouncedPassword &&
      !['pin', 'diceware'].includes(settings.activeTab)
    ) {
      setStrength(resolvePasswordStrength(debouncedPassword));
    } else {
      setStrength(0);
    }
  }, [debouncedPassword, settings.activeTab]);

  return {
    generatePassword,
    isStrengthVisible: !(['pin', 'diceware'] as GeneratorTab[]).includes(
      settings.activeTab,
    ),
    password,
    resolvedWordlist,
    strength,
    strengthColor: getPasswordStrengthColor(strength),
  };
}
