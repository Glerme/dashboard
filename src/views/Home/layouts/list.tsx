import Link from 'next/link';

import { FiEdit } from 'react-icons/fi';

import { Table } from 'components/Table';
import { IconLink } from 'components/IconLink';
import {
  ActivateOption,
  OptionList,
} from 'components/Table/components/Options';

import { useUser } from 'hooks/useUser';

import { ViewTitle } from 'layouts/ViewTitle';
import { ViewContainer } from 'layouts/ViewContainer';

import styles from '../styles.module.scss';

export const ListHomeView: React.FC = () => {
  const { data, activateUser } = useUser();

  return (
    <>
      <ViewTitle
        breadcrumb={{ items: [{ label: 'Dashboard' }] }}
        component={
          <Link href={'/new'}>
            <a className={styles['link-container']}>Add New</a>
          </Link>
        }
      />
      <ViewContainer>
        <Table
          title="User List"
          totalCount={data?.length}
          columns={[
            {
              label: 'Options',
              key: 'options',
              render: ({ id, active }) => (
                <OptionList>
                  <IconLink
                    title="Edit"
                    href={`/${id}`}
                    icon={() => <FiEdit size={24} />}
                  />
                  <ActivateOption
                    title="Delete"
                    onActivate={() => activateUser(id, active)}
                  />
                </OptionList>
              ),
            },
            { label: 'ID', key: 'id', sortable: false },
            { label: 'Name', key: 'name', sortable: false },
            { label: 'Username', key: 'username', sortable: false },
            { label: 'Email', key: 'email', sortable: false },
            { label: 'City', key: 'city', sortable: false },
          ]}
          items={data}
          getId={({ id }) => `${id}`}
        />
      </ViewContainer>
    </>
  );
};
