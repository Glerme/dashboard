import { Pagination } from './Pagination';
import { TableHeader } from './TableHeader';
import { BasicTable, Column, SortColumn } from './BasicTable';

type SSRTableProps<T> = {
  title: string;
  columns: Column<T>[];
  items: T[];
  sortColumn?: SortColumn<T> | null;
  onSortColumn?: (sortColumn: SortColumn<T> | null) => void | null;
  getId: (item: T) => string;
  totalCount: number;
  onChangePage: (page: number) => void;
  onChangePerPage: (perPage: number) => void;
  headerComponent?: () => JSX.Element;
};

export const SSRTable = <T,>({
  title,
  totalCount,
  columns,
  items,
  sortColumn,
  onSortColumn,
  headerComponent,
  getId,
}: SSRTableProps<T>) => {
  return (
    <section>
      <TableHeader
        title={title}
        totalCount={totalCount}
        renderComponent={headerComponent}
      />
      <BasicTable
        columns={columns}
        items={items}
        sortColumn={sortColumn}
        onSortColumn={onSortColumn}
        getId={getId}
      />
    </section>
  );
};
