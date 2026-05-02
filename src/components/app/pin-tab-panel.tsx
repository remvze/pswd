import { NumberWithSliderField } from './fields';
import { TabPanelShell } from './tab-panel-shell';
import styles from './pin-tab-panel.module.css';

type PinTabPanelProps = {
  onPinLengthChange: (value: number) => void;
  pinLength: number;
};

export function PinTabPanel({
  onPinLengthChange,
  pinLength,
}: PinTabPanelProps) {
  return (
    <TabPanelShell>
      <div className={styles.pinLength}>
        <NumberWithSliderField
          id="pin-length"
          label="Pin Length:"
          max={20}
          min={0}
          value={pinLength}
          onChange={onPinLengthChange}
        />
      </div>
    </TabPanelShell>
  );
}
