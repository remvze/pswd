import { Checkbox } from '@/components/checkbox';

import styles from './checkbox-field.module.css';

type CheckboxFieldProps = {
  checked: boolean;
  label: string;
  onChange: (checked: boolean) => void;
};

export function CheckboxField({
  checked,
  label,
  onChange,
}: CheckboxFieldProps) {
  return (
    <label className={styles.checkbox}>
      <Checkbox checked={checked} onChange={onChange} />
      {label}
    </label>
  );
}
