import { GetServerSideProps, NextPage } from 'next';

import { NewHomeView } from 'views/Home';

const NewPage: NextPage = ({}) => {
  return <NewHomeView />;
};

export default NewPage;

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
  };
};
