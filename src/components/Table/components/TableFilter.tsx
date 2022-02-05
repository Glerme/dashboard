import { useEffect } from 'react';
import { FiX } from 'react-icons/fi';

import styles from './TableFilter.module.scss';

type TableFilterProps = {
  title: string;
  onClose: () => void;
};

export const TableFilter: React.FC<TableFilterProps> = ({
  title,
  children,
  onClose,
}) => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const keyEvent = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          onClose();
        }
      };

      window.addEventListener('keydown', keyEvent);

      return () => window.removeEventListener('keydown', keyEvent);
    }
  }, []);

  return (
    <div className={styles['table-filter-container']} onClick={onClose}>
      <div
        className={styles['table-filter-frame']}
        onClick={e => e.stopPropagation()}
      >
        <header className={styles['table-filter-frame-header']}>
          <h1 className="heading1 title">{title}</h1>
          <button
            aria-label="Clique para fechar a janela"
            onClick={onClose}
            title="Fechar janela"
          >
            <FiX size={22} />
          </button>
        </header>
        <main className={styles['table-filter-frame-content']}>{children}</main>
      </div>
    </div>
  );
};
