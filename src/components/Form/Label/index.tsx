import styles from './styles.module.scss';

type LabelProps = {
  htmlFor: string;
};

export const Label: React.FC<LabelProps> = ({ htmlFor, children }) => (
  <label htmlFor={htmlFor} className={styles['label-container']}>
    {children}
  </label>
);
