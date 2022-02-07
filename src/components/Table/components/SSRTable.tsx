import { TableHeader } from './TableHeader';
import { BasicTable, Column } from './BasicTable';

type SSRTableProps<T> = {
  title: string;
  columns: Column<T>[];
  items: T[];
  getId: (item: T) => string;
  totalCount: number;
  headerComponent?: () => JSX.Element;
};

export const SSRTable = <T,>({
  title,
  totalCount,
  columns,
  items,
  getId,
}: SSRTableProps<T>) => {
  return (
    <section>
      <TableHeader title={title} totalCount={totalCount} />
      <BasicTable columns={columns} items={items} getId={getId} />
    </section>
  );
};
