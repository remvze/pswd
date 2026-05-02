import styles from './textarea-field.module.css';

type TextareaFieldProps = {
  id: string;
  label: React.ReactNode;
  onChange: (value: string) => void;
  value: string;
};

export function TextareaField({
  id,
  label,
  onChange,
  value,
}: TextareaFieldProps) {
  return (
    <div className={styles.field}>
      <label htmlFor={id}>{label}</label>
      <textarea
        id={id}
        value={value}
        onChange={e => onChange(e.target.value)}
      />
    </div>
  );
}
