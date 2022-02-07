import styles from './Tableheader.module.scss';

type TableHeaderProps = {
  title: string;
  totalCount: number;
};

export const TableHeader: React.FC<TableHeaderProps> = ({
  title,
  totalCount,
}) => {
  return (
    <div className={styles['table-header-container']}>
      <h3 className="title">
        {title} ({totalCount})
      </h3>
    </div>
  );
};
