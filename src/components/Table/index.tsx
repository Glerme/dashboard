import _ from 'lodash';

import { SSRTable } from './components/SSRTable';
import { Column } from './components/BasicTable';

type TableProps<T> = {
  title: string;
  totalCount: number;
  items: T[];
  columns: Column<T>[];
  getId: (item: T) => string;
};

export const Table = <T,>({
  title,
  columns,
  items,
  getId,
  totalCount,
}: TableProps<T>) => {
  return (
    <>
      <SSRTable
        title={title}
        totalCount={totalCount}
        columns={columns}
        items={items}
        getId={getId}
      />
    </>
  );
};
