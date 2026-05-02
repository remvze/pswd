import type { ReactNode } from 'react';

import styles from './tab-panel-shell.module.css';

type TabPanelShellProps = {
  children: ReactNode;
};

export function TabPanelShell({ children }: TabPanelShellProps) {
  return (
    <div className={styles.tabContent}>
      <div className={styles.shineTop} />
      <div className={styles.shineBottom} />
      <div className={styles.controls}>{children}</div>
    </div>
  );
}
