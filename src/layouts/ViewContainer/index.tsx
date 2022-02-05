import styles from './styles.module.scss';

type ViewContainerProps = {
  title?: string;
};

export const ViewContainer: React.FC<ViewContainerProps> = ({
  children,
  title,
}) => (
  <section className={styles['view-container']}>
    {title && (
      <div className={styles['title-container']}>
        <h2>{title}</h2>
      </div>
    )}

    {children}
  </section>
);
