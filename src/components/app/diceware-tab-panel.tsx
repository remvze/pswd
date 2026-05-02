import type { Separator } from '@/lib/generator-types';

import {
  CheckboxField,
  NumberWithSliderField,
  SelectField,
  TextareaField,
} from './fields';
import { TabPanelShell } from './tab-panel-shell';

type DicewareTabPanelProps = {
  capitalize: boolean;
  customWordlist: string;
  onCapitalizeChange: (checked: boolean) => void;
  onCustomWordlistChange: (value: string) => void;
  onRandomCapitalizationChange: (checked: boolean) => void;
  onRandomNumberBeginningChange: (checked: boolean) => void;
  onRandomNumberEndChange: (checked: boolean) => void;
  onSeparatorChange: (value: Separator) => void;
  onWordCountChange: (value: number) => void;
  randomCapitalization: boolean;
  randomNumberBeginning: boolean;
  randomNumberEnd: boolean;
  separator: Separator;
  wordCount: number;
};

export function DicewareTabPanel({
  capitalize,
  customWordlist,
  onCapitalizeChange,
  onCustomWordlistChange,
  onRandomCapitalizationChange,
  onRandomNumberBeginningChange,
  onRandomNumberEndChange,
  onSeparatorChange,
  onWordCountChange,
  randomCapitalization,
  randomNumberBeginning,
  randomNumberEnd,
  separator,
  wordCount,
}: DicewareTabPanelProps) {
  return (
    <TabPanelShell>
      <NumberWithSliderField
        id="count"
        label="Number of Words:"
        max={20}
        min={0}
        value={wordCount}
        onChange={onWordCountChange}
      />

      <CheckboxField
        checked={capitalize}
        label="Capitalize Words"
        onChange={onCapitalizeChange}
      />

      <CheckboxField
        checked={randomCapitalization}
        label="Randomly Capitalize Letters"
        onChange={onRandomCapitalizationChange}
      />

      <CheckboxField
        checked={randomNumberBeginning}
        label="Add Random Numbers At The Beginning"
        onChange={onRandomNumberBeginningChange}
      />

      <CheckboxField
        checked={randomNumberEnd}
        label="Add Random Numbers At The End"
        onChange={onRandomNumberEndChange}
      />

      <SelectField
        id="separator"
        label="Word Separator:"
        value={separator}
        options={[
          { label: 'Space', value: 'space' },
          { label: 'Random Symbol', value: 'symbol' },
          { label: 'Dash', value: 'dash' },
          { label: 'None', value: 'none' },
        ]}
        onChange={value => onSeparatorChange(value as Separator)}
      />

      <TextareaField
        id="wordlist"
        value={customWordlist}
        label={
          <>
            Custom Wordlist <span>(separate with breaklines)</span>:
          </>
        }
        onChange={onCustomWordlistChange}
      />
    </TabPanelShell>
  );
}
