import type { PresetConfig } from '@/data/presets';

export type NormalSettingsPatch = {
  customSymbols: string;
  excludeSimilar: boolean;
  excludeSymbols: string;
  includeLower: boolean;
  includeNumbers: boolean;
  includeSymbols: boolean;
  includeUpper: boolean;
  length: number;
};

export function getNormalSettingsFromPreset(
  preset: PresetConfig,
): NormalSettingsPatch {
  return {
    customSymbols: preset.customSymbols || '',
    excludeSimilar: preset.excludeSimilar || false,
    excludeSymbols: preset.excludeSymbols || '',
    includeLower: preset.includeLower,
    includeNumbers: preset.includeNumbers,
    includeSymbols: preset.includeSymbols,
    includeUpper: preset.includeUpper,
    length: preset.length,
  };
}
