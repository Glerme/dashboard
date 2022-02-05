import styles from './OptionList.module.scss';

export const OptionList: React.FC = ({ children }) => {
  return <div className={styles['table-option-list']}>{children}</div>;
};
