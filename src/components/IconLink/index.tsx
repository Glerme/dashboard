import Link, { LinkProps } from 'next/link';

import styles from './styles.module.scss';

type IconLinkProps = LinkProps & {
  title: string;
  className?: string;
  href: string;
  icon: () => JSX.Element;
};

export const IconLink: React.FC<IconLinkProps> = ({
  title,
  icon: Icon,
  className,
  href,
  ...rest
}) => (
  <div className={`${styles['icon-link-container']}`}>
    <Link href={href} {...rest}>
      <a className={`${className || ''}`}>
        <Icon />
      </a>
    </Link>
  </div>
);
