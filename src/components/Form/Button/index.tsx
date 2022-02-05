import { ButtonHTMLAttributes } from 'react';

import styles from './styles.module.scss';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  background?: 'primary' | 'secondary' | 'success' | 'error';
  isOutlined?: boolean;
};

export const Button: React.FC<ButtonProps> = ({
  background = 'primary',
  isOutlined = false,
  className,
  children,
  ...rest
}) => {
  return (
    <button
      className={[
        styles['button-container'],
        `${background ? styles[`btn-${background}`] : styles[`btn-primary`]}`,
        `${isOutlined ? styles[`btn-outlined-${background}`] : ''}`,
        `${className ? className : ''}`,
      ].join(' ')}
      {...rest}
    >
      {children}
    </button>
  );
};
