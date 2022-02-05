import styles from './styles.module.scss';

type IconButtonProps = {
  title: string;
  className?: string;
  icon: () => JSX.Element;
  onClick: () => void;
};

export const IconButton: React.FC<IconButtonProps> = ({
  icon: Icon,
  className = '',
  onClick,
}) => (
  <button
    className={`${styles['icon-button-container']} ${className}`}
    onClick={onClick}
  >
    <Icon />
  </button>
);
