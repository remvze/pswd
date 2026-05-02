import { useState } from 'react';

import { useLocalStorage } from '@/hooks/use-local-storage';
import type { GeneratorTab, Separator } from '@/lib/generator-types';

export function useGeneratorSettings() {
  const [activeTab, setActiveTab] = useLocalStorage<GeneratorTab>(
    'pswd-active-tab',
    'normal',
  );
  const [showPassword, setShowPassword] = useLocalStorage(
    'pswd-show-password',
    true,
  );

  const [length, setLength] = useLocalStorage('pswd-length', 12);
  const [includeUpper, setIncludeUpper] = useLocalStorage(
    'pswd-include-upper',
    true,
  );
  const [includeLower, setIncludeLower] = useLocalStorage(
    'pswd-include-lower',
    true,
  );
  const [includeNumbers, setIncludeNumbers] = useLocalStorage(
    'pswd-include-numbers',
    true,
  );
  const [includeSymbols, setIncludeSymbols] = useLocalStorage(
    'pswd-include-symbols',
    true,
  );
  const [excludeSimilar, setExcludeSimilar] = useLocalStorage(
    'pswd-exclude-similar',
    false,
  );
  const [customSymbols, setCustomSymbols] = useLocalStorage(
    'pswd-custom-symbols',
    '',
  );
  const [excludeSymbols, setExcludeSymbols] = useLocalStorage(
    'pswd-exclude-symbols',
    '',
  );

  const [wordCount, setWordCount] = useLocalStorage('pswd-word-count', 6);
  const [separator, setSeparator] = useLocalStorage<Separator>(
    'pswd-separator',
    'space',
  );
  const [capitalize, setCapitalize] = useLocalStorage('pswd-capitalize', false);
  const [randomCapitalization, setRandomCapitalization] = useLocalStorage(
    'pswd-random-capitalization',
    false,
  );
  const [randomNumberBeginning, setRandomNumberBeginning] = useLocalStorage(
    'pswd-random-number-beginning',
    false,
  );
  const [randomNumberEnd, setRandomNumberEnd] = useLocalStorage(
    'pswd-random-number-end',
    false,
  );
  const [customWordlist, setCustomWordlist] = useLocalStorage(
    'pswd-custom-wordlist',
    '',
  );

  const [pinLength, setPinLength] = useLocalStorage('pswd-pin-length', 6);

  const [selectedPresetId, setSelectedPresetId] = useState<string | null>(null);

  const settings = {
    activeTab,
    capitalize,
    customSymbols,
    customWordlist,
    excludeSimilar,
    excludeSymbols,
    includeLower,
    includeNumbers,
    includeSymbols,
    includeUpper,
    length,
    pinLength,
    randomCapitalization,
    randomNumberBeginning,
    randomNumberEnd,
    selectedPresetId,
    separator,
    setActiveTab,
    setCapitalize,
    setCustomSymbols,
    setCustomWordlist,
    setExcludeSimilar,
    setExcludeSymbols,
    setIncludeLower,
    setIncludeNumbers,
    setIncludeSymbols,
    setIncludeUpper,
    setLength,
    setPinLength,
    setRandomCapitalization,
    setRandomNumberBeginning,
    setRandomNumberEnd,
    setSelectedPresetId,
    setSeparator,
    setShowPassword,
    setWordCount,
    showPassword,
    wordCount,
  };

  return settings;
}

export type GeneratorSettings = ReturnType<typeof useGeneratorSettings>;
