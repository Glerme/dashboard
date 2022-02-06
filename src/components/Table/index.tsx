import { useRouter } from 'next/router';

import _ from 'lodash';

import { useTable } from './hooks/useTable';

import { SSRTable } from './components/SSRTable';
import { Column, SortColumn } from './components/BasicTable';

import styles from './styles.module.scss';

type TableProps<T> = {
  title: string;
  totalCount: number;
  items: T[];
  columns: Column<T>[];
  sortColumn?: SortColumn<T> | null;
  filterComponent?: (props: {
    onFilter: (filter: Record<string, any>) => void;
    onCancel: () => void;
  }) => JSX.Element;
  headerComponent?: () => JSX.Element;
  getId: (item: T) => string;
};

export const Table = <T,>({
  title,
  columns,
  items,
  getId,
  sortColumn = null,
  totalCount,
}: TableProps<T>) => {
  const { onChangePage, onChangePerPage, onSortColumn } = useTable<T>();

  return (
    <>
      <SSRTable
        title={title}
        totalCount={totalCount}
        columns={columns}
        items={items}
        onChangePage={onChangePage}
        onChangePerPage={onChangePerPage}
        sortColumn={sortColumn}
        onSortColumn={onSortColumn}
        getId={getId}
      />
    </>
  );
};
