import { BreadcrumbItem } from './BreadcrumbItem';

import styles from './styles.module.scss';

export type BreadcrumbProps = {
  items: { label: string; href?: string }[];
};

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => (
  <ul className={styles['breadcrumb-list']}>
    {items.map(({ label, href }) => (
      <BreadcrumbItem key={label} label={label} href={href} />
    ))}
  </ul>
);
