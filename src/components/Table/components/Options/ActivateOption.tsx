import { useRef } from 'react';
import { FiShield, FiShieldOff } from 'react-icons/fi';

import { IconButton } from 'components/IconButton';
import ConfirmModal, { ConfirmModalHandles } from 'components/ConfirmModal';

type ActivateOptionProps = {
  title: string;
  onActivate: () => void;
};

export const ActivateOption: React.FC<ActivateOptionProps> = ({
  title,
  onActivate,
}) => {
  const modalRef = useRef<ConfirmModalHandles>(null);

  const toggleActivate = async () => {
    const isConfirmed = await modalRef.current?.openModal();

    if (isConfirmed) {
      onActivate();
    }
  };

  return (
    <>
      <ConfirmModal
        ref={modalRef}
        icon={FiShield}
        title={'Delete'}
        description={`Are you sure you want delete this register?`}
      />
      <IconButton
        icon={() => <FiShield size={24} />}
        title={title ? title : 'Delet'}
        className="hover-red"
        onClick={toggleActivate}
      />
    </>
  );
};
