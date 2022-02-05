import { Button } from '../Button';

import styles from './styles.module.scss';

type FormFooterProps = {
  onCancel: () => void;
};

export const FormFooter: React.FC<FormFooterProps> = ({ onCancel }) => {
  return (
    <footer className={styles['btn-container']}>
      <div>
        <Button type="button" background="error" isOutlined onClick={onCancel}>
          Cancel
        </Button>

        <Button type="submit" background="success">
          Confirm
        </Button>
      </div>
    </footer>
  );
};
