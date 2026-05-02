export type GeneratorTab = 'normal' | 'diceware' | 'pin';

export type Separator = 'space' | 'symbol' | 'dash' | 'none';

export type NormalOptions = {
  customSymbols: string;
  excludeSimilar: boolean;
  excludeSymbols: string;
  includeLower: boolean;
  includeNumbers: boolean;
  includeSymbols: boolean;
  includeUpper: boolean;
  length: number;
};

export type DicewareOptions = {
  capitalize: boolean;
  randomCapitalization: boolean;
  randomNumberBeginning: boolean;
  randomNumberEnd: boolean;
  separator: Separator;
  wordCount: number;
  wordlist: string[];
};

export type PinOptions = {
  pinLength: number;
};

export type GeneratorState = {
  activeTab: GeneratorTab;
  diceware: DicewareOptions;
  normal: NormalOptions;
  pin: PinOptions;
};
