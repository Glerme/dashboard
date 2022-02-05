import { useState } from 'react';

import styles from './styles.module.scss';

export const DefaultLayout: React.FC = ({ children }) => {
  return (
    <div className={styles['layout-container']}>
      <main>
        <div className="centralized-container">{children}</div>
      </main>
    </div>
  );
};
