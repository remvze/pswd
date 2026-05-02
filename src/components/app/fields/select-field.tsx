import styles from './select-field.module.css';

type SelectOption = {
  label: string;
  value: string;
};

type SelectFieldProps = {
  id?: string;
  label: string;
  onChange: (value: string) => void;
  options: SelectOption[];
  value: string;
};

export function SelectField({
  id,
  label,
  onChange,
  options,
  value,
}: SelectFieldProps) {
  return (
    <div className={styles.field}>
      <label htmlFor={id}>{label}</label>
      <select id={id} value={value} onChange={e => onChange(e.target.value)}>
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
