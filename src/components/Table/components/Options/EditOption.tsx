import { FiEdit } from 'react-icons/fi';
import { IconLink } from 'components/IconLink';

type EditOptionProps = {
  href: string;
  title?: string;
};

export const EditOption: React.FC<EditOptionProps> = ({ href, title }) => (
  <IconLink
    href={href}
    icon={() => <FiEdit size={24} />}
    title={title ? title : 'Editar'}
    className="hover-primary"
  />
);
