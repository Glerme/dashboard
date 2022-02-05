import styles from './styles.module.scss';

interface ErrorMessageProps {
  error: string;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ error }) => (
  <section className={styles['error-message-container']}>
    <span className="caption2">{error}</span>
  </section>
);
