import {
  CgChevronLeft as PreviousPage,
  CgPushChevronLeft as FirstPage,
  CgChevronRight as NextPage,
  CgPushChevronRight as LastPage,
} from 'react-icons/cg';

import styles from './Pagination.module.scss';

interface PaginationProps {
  page: number;
  perPage: number;
  totalCount: number;
  onChangePage: (page: number) => void;
  onChangePerPage: (perPage: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  page,
  perPage,
  totalCount,
  onChangePage,
  onChangePerPage,
}) => {
  const rangeStart = (page - 1) * perPage + 1;
  const rangeEnd = rangeStart + perPage - 1;
  const lastPage = Math.ceil(totalCount / perPage);

  return (
    <div className={styles['pagination-container']}>
      <div className={styles['pagination-per-page-container']}>
        <span className="caption text">Linhas por página</span>
        <select
          value={perPage}
          onChange={({ target }) => onChangePerPage(+target.value)}
        >
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
          <option value="25">25</option>
          <option value="30">30</option>
        </select>
      </div>
      <span className="caption text">
        {rangeStart}-{rangeEnd} de {totalCount}
      </span>
      <div className={styles['pagination-buttons-container']}>
        <button
          type="button"
          disabled={page === 1}
          onClick={() => onChangePage(1)}
        >
          <FirstPage size={20} />
        </button>
        <button
          type="button"
          disabled={page === 1}
          onClick={() => onChangePage(page - 1)}
        >
          <PreviousPage size={20} />
        </button>
        <button
          type="button"
          disabled={page === lastPage}
          onClick={() => onChangePage(page + 1)}
        >
          <NextPage size={20} />
        </button>
        <button
          type="button"
          disabled={page === lastPage}
          onClick={() => onChangePage(lastPage)}
        >
          <LastPage size={20} />
        </button>
      </div>
    </div>
  );
};
