import Link from 'next/link';

import styles from './styles.module.scss';

type BreadcrumbItemProps = {
  label: string;
  href?: string;
};

export const BreadcrumbItem: React.FC<BreadcrumbItemProps> = ({
  href,
  label,
}) => (
  <li className={styles['breadcrumb-item']}>
    {href ? (
      <Link href={href}>
        <a>{label}</a>
      </Link>
    ) : (
      <p>{label}</p>
    )}
  </li>
);
