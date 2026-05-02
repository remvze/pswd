import { presets } from '@/data/presets';
import { getNormalSettingsFromPreset } from '@/lib/preset-utils';

import { CheckboxField, NumberWithSliderField, TextField } from './fields';
import { TabPanelShell } from './tab-panel-shell';
import styles from './normal-tab-panel.module.css';

type NormalTabPanelProps = {
  applyPreset: (patch: ReturnType<typeof getNormalSettingsFromPreset>) => void;
  customSymbols: string;
  excludeSimilar: boolean;
  excludeSymbols: string;
  includeLower: boolean;
  includeNumbers: boolean;
  includeSymbols: boolean;
  includeUpper: boolean;
  length: number;
  onCustomSymbolsChange: (value: string) => void;
  onExcludeSimilarChange: (checked: boolean) => void;
  onExcludeSymbolsChange: (value: string) => void;
  onIncludeLowerChange: (checked: boolean) => void;
  onIncludeNumbersChange: (checked: boolean) => void;
  onIncludeSymbolsChange: (checked: boolean) => void;
  onIncludeUpperChange: (checked: boolean) => void;
  onLengthChange: (value: number) => void;
  onPresetChange: (value: string) => void;
  selectedPresetId: string | null;
};

export function NormalTabPanel({
  applyPreset,
  customSymbols,
  excludeSimilar,
  excludeSymbols,
  includeLower,
  includeNumbers,
  includeSymbols,
  includeUpper,
  length,
  onCustomSymbolsChange,
  onExcludeSimilarChange,
  onExcludeSymbolsChange,
  onIncludeLowerChange,
  onIncludeNumbersChange,
  onIncludeSymbolsChange,
  onIncludeUpperChange,
  onLengthChange,
  onPresetChange,
  selectedPresetId,
}: NormalTabPanelProps) {
  return (
    <TabPanelShell>
      <div className={styles.presets}>
        <label htmlFor="presetSelect">Presets:</label>
        <select
          id="presetSelect"
          value={selectedPresetId || ''}
          onChange={e => {
            const preset = presets.find(item => item.id === e.target.value);
            onPresetChange(e.target.value);
            if (!preset) return;
            applyPreset(getNormalSettingsFromPreset(preset));
          }}
        >
          <option disabled value="">
            Select a preset
          </option>
          {presets.map(preset => (
            <option key={preset.id} value={preset.id}>
              {preset.label}
            </option>
          ))}
        </select>
      </div>

      <NumberWithSliderField
        id="length"
        label="Password Length:"
        max={90}
        min={0}
        value={length}
        onChange={onLengthChange}
      />

      <CheckboxField
        checked={includeUpper}
        label="Include Uppercase Letters"
        onChange={onIncludeUpperChange}
      />
      <CheckboxField
        checked={includeLower}
        label="Include Lowercase Letters"
        onChange={onIncludeLowerChange}
      />
      <CheckboxField
        checked={includeNumbers}
        label="Include Numbers"
        onChange={onIncludeNumbersChange}
      />
      <CheckboxField
        checked={includeSymbols}
        label="Include Symbols"
        onChange={onIncludeSymbolsChange}
      />
      <CheckboxField
        checked={excludeSimilar}
        label="Exclude Similar Characters (e.g., l, 1, O, 0)"
        onChange={onExcludeSimilarChange}
      />

      <TextField
        id="customSymbols"
        label="Custom Symbols:"
        placeholder="e.g., @#$%"
        value={customSymbols}
        onChange={onCustomSymbolsChange}
      />

      <TextField
        id="excludeSymbols"
        label="Exclude Symbols:"
        placeholder="e.g., /\?"
        value={excludeSymbols}
        onChange={onExcludeSymbolsChange}
      />
    </TabPanelShell>
  );
}
