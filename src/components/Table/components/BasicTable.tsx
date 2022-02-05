import _ from 'lodash';
import { FiArrowDown, FiArrowUp } from 'react-icons/fi';

import styles from './BasicTable.module.scss';

export interface Column<T> {
  key: string;
  label: string;
  sortable?: boolean;
  render?: (item: T, index: number) => JSX.Element;
}

export interface SortColumn<T> {
  field: keyof T;
  order: 'ASC' | 'DESC';
}

type BasicTableProps<T> = {
  columns: Column<T>[];
  items: T[];
  sortColumn?: SortColumn<T> | null;
  onSortColumn?: (sortColumn: SortColumn<T> | null) => void | null;
  getId: (item: T) => string;
};

export const BasicTable = <T,>({
  columns,
  items,
  sortColumn,
  onSortColumn,
  getId,
}: BasicTableProps<T>) => {
  return (
    <div className={styles['table-container-wrapper']}>
      <table className={styles['table-container']}>
        <thead className={styles['table-head']}>
          <tr>
            {columns.map(column => {
              let order: 'ASC' | 'DESC' | null;
              let arrow: () => JSX.Element | null;

              if (sortColumn && sortColumn.field === column.key) {
                if (sortColumn.order === 'ASC') {
                  order = 'ASC';
                  arrow = () => <FiArrowUp size={18} />;
                } else {
                  order = 'DESC';
                  arrow = () => <FiArrowDown size={18} />;
                }
              } else {
                order = null;
                arrow = null;
              }

              let onSort = undefined;

              if (column.sortable) {
                onSort = () => {
                  onSortColumn(
                    order === 'ASC'
                      ? null
                      : order === 'DESC'
                      ? { field: column.key as keyof T, order: 'ASC' }
                      : { field: column.key as keyof T, order: 'DESC' },
                  );
                };
              }

              return (
                <th
                  key={`th-${column.key}`}
                  onClick={() => (onSort ? onSort() : null)}
                >
                  <div
                    className={column.sortable ? `${styles.sortable}` : ''}
                    title={column.sortable ? 'Clique para ordenar' : ''}
                  >
                    {column.label}
                    {arrow && arrow()}
                  </div>
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody className={styles['table-body']}>
          {items.map((item, index) => {
            const key = getId(item);

            return (
              <tr key={`tr-${key}`}>
                {columns.map(column => {
                  if (column.render) {
                    return (
                      <td key={`tr-${key}-td-${column.key}`}>
                        {column.render(item, index)}
                      </td>
                    );
                  }

                  return (
                    <td key={`tr-${key}-td-${column.key}`}>
                      {_.get(item, column.key)}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
