import { useEffect, useState } from 'react';

import styles from './binary.module.css';

function generateRandomBinaryString(length: number) {
  let binaryString = '';

  for (let i = 0; i < length; i++) {
    binaryString += Math.floor(Math.random() * 2);
  }

  return binaryString;
}

export function Binary() {
  const [binary, setBinary] = useState<string>('');

  useEffect(() => {
    const interval = setInterval(
      () => setBinary(generateRandomBinaryString(1000)),
      100,
    );

    return () => clearInterval(interval);
  }, []);

  return <div className={styles.binary}>{binary}</div>;
}
