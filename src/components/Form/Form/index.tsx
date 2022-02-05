import { FormEvent, ReactNode, useEffect, useState } from 'react';

import styles from './styles.module.scss';

type FormProps = {
  children: ReactNode;
  className?: string;
  columns?: number;
  onSubmit: () => void;
  footerComponent?: JSX.Element;
};

export const Form: React.FC<FormProps> = ({
  children,
  className,
  columns = 1,
  onSubmit,
  footerComponent,
}) => {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsLargeScreen(window.innerWidth > 1000);

      const handleResize = () => setIsLargeScreen(window.innerWidth > 1000);

      window.addEventListener('resize', handleResize);

      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  const handleSubmit = async (event?: FormEvent) => {
    if (event) {
      event.preventDefault();
    }
    onSubmit();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={[
        styles['form-container'],
        className ? `${className}` : '',
      ].join(' ')}
    >
      <div
        className={[
          styles['form-content'],
          `${isLargeScreen ? `col-${columns}` : ''}`,
        ].join(' ')}
      >
        {children}
      </div>

      {footerComponent && footerComponent}
    </form>
  );
};
