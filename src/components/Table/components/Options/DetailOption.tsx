import { FiEye } from 'react-icons/fi';

import { IconLink } from 'components/IconLink';

type DetailOptionProps = {
  href: string;
};

export const DetailOption: React.FC<DetailOptionProps> = ({ href }) => {
  return (
    <IconLink
      href={href}
      icon={() => <FiEye size={24} />}
      title="Ver detalhes"
      className="hover-green"
    />
  );
};
