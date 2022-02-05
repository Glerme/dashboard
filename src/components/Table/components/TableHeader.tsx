import styles from './Tableheader.module.scss';

type TableHeaderProps = {
  title: string;
  totalCount: number;
  renderComponent?: () => JSX.Element;
};

export const TableHeader: React.FC<TableHeaderProps> = ({
  title,
  totalCount,
  renderComponent,
}) => {
  return (
    <div className={styles['table-header-container']}>
      <h3 className="title">
        {title} ({totalCount})
      </h3>
      <div>{renderComponent && renderComponent()}</div>
    </div>
  );
};
