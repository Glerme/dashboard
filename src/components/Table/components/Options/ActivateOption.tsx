import { useState } from 'react';
import { FiShield, FiShieldOff } from 'react-icons/fi';

import { IconButton } from 'components/IconButton';
// import { ModalConfirm } from 'components/Modal/ModalConfirm';

type ActivateOptionProps = {
  title?: string;
  isActive: boolean;
  onActivate: () => void;
};

export const ActivateOption: React.FC<ActivateOptionProps> = ({
  title,
  isActive,
  onActivate,
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleActivate = async (isConfirmed: boolean) => {
    setIsModalVisible(false);

    if (isConfirmed) {
      onActivate();
    }
  };

  return (
    <>
      {/* <ModalConfirm
        isVisible={isModalVisible}
        onClose={toggleActivate}
        icon={isActive ? FiShieldOff : FiShield}
        title={isActive ? 'Inativar' : 'Ativar'}
        description={`Tem certeza que você deseja ${
          isActive ? 'inativar' : 'ativar'
        }  este registro?`}
      /> */}
      <IconButton
        icon={() =>
          isActive ? <FiShield size={24} /> : <FiShieldOff size={24} />
        }
        title={title ? title : 'Ativar / Inativar'}
        className="hover-red"
        onClick={() => setIsModalVisible(true)}
      />
    </>
  );
};
