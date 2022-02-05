import { BreadcrumbProps, Breadcrumb } from 'components/Breadcrumb';

import styles from './styles.module.scss';

type ViewTitleProps = {
  breadcrumb: BreadcrumbProps;
  component?: JSX.Element;
};

export const ViewTitle: React.FC<ViewTitleProps> = ({
  breadcrumb,
  component,
}) => (
  <section className={styles['view-title-section']}>
    <Breadcrumb items={breadcrumb.items} />
    {component && (
      <div className={styles['view-title-component-container']}>
        {component}
      </div>
    )}
  </section>
);
