import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';

import type { IconBaseProps } from 'react-icons/lib';
import { FiCheckCircle, FiXCircle } from 'react-icons/fi';

import { Button } from 'components/Form/Button';

import styles from './styles.module.scss';

export interface ConfirmModalHandles {
  openModal: () => Promise<boolean>;
}

interface ConfirmModalProps {
  title: string;
  description: string;
  icon: React.ComponentType<IconBaseProps>;
}

interface ConfirmModalRef {
  resolve: (isConfirmed: boolean) => void;
  reject: () => void;
}

const ConfirmModal: React.ForwardRefRenderFunction<
  ConfirmModalHandles,
  ConfirmModalProps
> = ({ description, icon: Icon, title }, ref) => {
  const modalRef = useRef<ConfirmModalRef>();

  const [visible, setVisible] = useState(false);

  const openModal = () => {
    setVisible(true);
    return new Promise<boolean>((resolve, reject) => {
      modalRef.current = { resolve, reject };
    });
  };

  const handleCancel = () => {
    if (modalRef.current) {
      modalRef.current.resolve(false);
    }

    setVisible(false);
  };

  const handleConfirm = () => {
    if (modalRef.current) {
      modalRef.current.resolve(true);
    }
    setVisible(false);
  };

  useImperativeHandle(ref, () => ({ openModal }));

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const keyEvent = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          handleCancel();
        }
      };

      window.addEventListener('keydown', keyEvent);

      return () => window.removeEventListener('keydown', keyEvent);
    }
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <div className={styles['overlay']} onClick={() => handleCancel()}>
      <div
        className={styles['modal-confirm-frame-container']}
        onClick={e => e.stopPropagation()}
      >
        <Icon size={52} color="#DB0E70" />

        <h1 className="heading1 gray500">{title}</h1>
        <p className="body3 gray500">{description}</p>

        <div className={styles['modal-confirm-frame-buttons']}>
          <Button
            autoFocus
            type="button"
            background="success"
            onClick={handleConfirm}
          >
            <FiCheckCircle size={22} />
            Yes
          </Button>
          <Button
            type="button"
            background="error"
            isOutlined
            onClick={handleCancel}
          >
            <FiXCircle size={22} />
            No
          </Button>
        </div>
      </div>
    </div>
  );
};

export default forwardRef(ConfirmModal);
