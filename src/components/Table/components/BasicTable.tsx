import _ from 'lodash';

import styles from './BasicTable.module.scss';

export interface Column<T> {
  key: string;
  label: string;
  sortable?: boolean;
  render?: (item: T, index: number) => JSX.Element;
}

type BasicTableProps<T> = {
  columns: Column<T>[];
  items: T[];
  getId: (item: T) => string;
};

export const BasicTable = <T,>({
  columns,
  items,
  getId,
}: BasicTableProps<T>) => {
  return (
    <div className={styles['table-container-wrapper']}>
      <table className={styles['table-container']}>
        <thead className={styles['table-head']}>
          <tr>
            {columns.map(column => {
              return (
                <th key={`th-${column.key}`}>
                  <div className={column.sortable ? `${styles.sortable}` : ''}>
                    {column.label}
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
