import { ChangeEvent, InputHTMLAttributes } from 'react';

import { Label } from '../Label';
import { ErrorMessage } from '../ErrorMessage';

import styles from './styles.module.scss';

type InputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'name' | 'label' | 'value' | 'onChange'
> & {
  name: string;
  label: string;
  error?: string;
  value: string;
  onChange: (value: string, event: ChangeEvent<HTMLInputElement>) => void;
};

export const Input: React.FC<InputProps> = ({
  className,
  name,
  label,
  error = '',
  value,
  onChange,
  ...rest
}) => {
  return (
    <section
      className={`${styles['input-section']}  ${className ? className : ''}`}
    >
      <Label htmlFor={name}>
        {label}
        <input
          type="text"
          className={[
            styles['input-field'],
            !!error ? styles['is-errored'] : '',
          ].join(' ')}
          id={name}
          name={name}
          value={value}
          onChange={e => onChange(e.target.value, e)}
          {...rest}
        />
        {error && <ErrorMessage error={error} />}
      </Label>
    </section>
  );
};
