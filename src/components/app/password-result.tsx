import {
  FaArrowRotateLeft,
  FaCheck,
  FaRegCopy,
  FaRegEye,
  FaRegEyeSlash,
} from 'react-icons/fa6';

import styles from './password-result.module.css';

type PasswordResultProps = {
  copying: boolean;
  isStrengthVisible: boolean;
  onCopy: () => void;
  onGenerate: () => void;
  onToggleVisibility: () => void;
  password: string;
  showPassword: boolean;
  strength: number;
  strengthColor: string;
};

export function PasswordResult({
  copying,
  isStrengthVisible,
  onCopy,
  onGenerate,
  onToggleVisibility,
  password,
  showPassword,
  strength,
  strengthColor,
}: PasswordResultProps) {
  return (
    <div className={styles.resultWrapper}>
      {isStrengthVisible && (
        <div className={styles.score}>
          <div
            className={styles.filled}
            style={{
              background: strengthColor,
              height: `${(strength / 5) * 100}%`,
            }}
          />
        </div>
      )}

      <div className={styles.result}>
        <input
          readOnly
          type={showPassword ? 'text' : 'password'}
          value={password}
        />

        <button className={styles.hide} onClick={onToggleVisibility}>
          {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
        </button>
        <button className={styles.copy} onClick={onCopy}>
          {copying ? <FaCheck /> : <FaRegCopy />}
        </button>
        <button className={styles.generate} onClick={onGenerate}>
          <FaArrowRotateLeft />
        </button>
      </div>
    </div>
  );
}
