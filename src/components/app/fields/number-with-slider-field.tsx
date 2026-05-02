import { Slider } from '@/components/slider';

import styles from './number-with-slider-field.module.css';

type NumberWithSliderFieldProps = {
  id: string;
  label: string;
  max: number;
  min: number;
  onChange: (value: number) => void;
  value: number;
};

export function NumberWithSliderField({
  id,
  label,
  max,
  min,
  onChange,
  value,
}: NumberWithSliderFieldProps) {
  return (
    <div className={styles.field}>
      <label htmlFor={id}>{label}</label>

      <div className={styles.inputs}>
        <input
          id={id}
          max={max}
          min={min}
          type="number"
          value={value}
          onChange={e =>
            onChange(Math.max(min, Math.min(max, Number(e.target.value))))
          }
        />

        <Slider max={max} min={min} value={value} onChange={onChange} />
      </div>
    </div>
  );
}
