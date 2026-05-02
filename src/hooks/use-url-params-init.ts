import { useEffect } from 'react';

import type { GeneratorTab } from '@/lib/generator-types';

type UrlParamsInitInput = {
  setActiveTab: (tab: GeneratorTab) => void;
  setLength: React.Dispatch<React.SetStateAction<number>>;
  setWordCount: React.Dispatch<React.SetStateAction<number>>;
};

export function useUrlParamsInit({
  setActiveTab,
  setLength,
  setWordCount,
}: UrlParamsInitInput) {
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const nextLength = Number(urlParams.get('length'));
    const nextWords = Number(urlParams.get('words'));
    const tab = urlParams.get('tab');

    if (tab && ['normal', 'diceware', 'pin'].includes(tab)) {
      setActiveTab(tab as GeneratorTab);
    } else if (nextLength > 0) {
      setLength(nextLength);
      setActiveTab('normal');
    } else if (nextWords > 0) {
      setWordCount(nextWords);
      setActiveTab('diceware');
    }
  }, [setLength, setActiveTab, setWordCount]);
}
