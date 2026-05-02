import styles from './text-field.module.css';

type TextFieldProps = {
  id: string;
  label: string;
  onChange: (value: string) => void;
  placeholder?: string;
  value: string;
};

export function TextField({
  id,
  label,
  onChange,
  placeholder,
  value,
}: TextFieldProps) {
  return (
    <div className={styles.field}>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        placeholder={placeholder}
        type="text"
        value={value}
        onChange={e => onChange(e.target.value)}
      />
    </div>
  );
}
