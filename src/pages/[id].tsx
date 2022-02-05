import { GetServerSideProps, NextPage } from 'next';

import { EditHomeView } from 'views/Home';

const EditPage: NextPage = ({}) => {
  return <EditHomeView />;
};

export default EditPage;

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
  };
};
