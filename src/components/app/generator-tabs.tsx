import { cn } from '@/helpers/styles';
import type { GeneratorTab } from '@/lib/generator-types';

import styles from './generator-tabs.module.css';

type GeneratorTabsProps = {
  activeTab: GeneratorTab;
  onChange: (tab: GeneratorTab) => void;
};

export function GeneratorTabs({ activeTab, onChange }: GeneratorTabsProps) {
  return (
    <div className={styles.tabs}>
      <button
        className={cn(activeTab === 'normal' && styles.active)}
        onClick={() => onChange('normal')}
      >
        Password
      </button>
      <button
        className={cn(activeTab === 'diceware' && styles.active)}
        onClick={() => onChange('diceware')}
      >
        Passphrase
      </button>
      <button
        className={cn(activeTab === 'pin' && styles.active)}
        onClick={() => onChange('pin')}
      >
        Pin
      </button>
    </div>
  );
}
