import { useRouter } from 'next/router';

const isNullable = (value: any) => value == null;
const isEmptyString = (value: any) => typeof value === 'string' && value === '';
const isEmptyArray = (value: any) => Array.isArray(value) && value.length === 0;

export const removeEmpty = (obj: Record<string, any>) =>
  Object.fromEntries(
    Object.entries(obj).filter(
      entry =>
        !isEmptyString(entry[1]) &&
        !isNullable(entry[1]) &&
        !isEmptyArray(entry[1]),
    ),
  );

export const useTable = <T,>() => {
  const router = useRouter();

  return {
    onChangePage: (page: number) => {
      router.push({
        pathname: router.pathname,
        query: { ...router.query, page },
      });
    },
    onChangePerPage: (perPage: number) => {
      router.push({
        pathname: router.pathname,
        query: { ...router.query, perPage },
      });
    },

    onFilter: (filter: Record<string, any>) => {
      const query = Object.fromEntries(
        Object.entries(router.query || {}).filter(
          entry => !/^filter/.test(entry[0]),
        ),
      );

      router.push({
        pathname: router.pathname,
        query: removeEmpty({
          ...query,
          page: 1,
          ...filter,
        }),
      });
    },
  };
};
