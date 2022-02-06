import { GetServerSideProps, NextPage } from 'next';

import { EditHomeView } from 'views/Home';

type EditPageProps = {
  id: string;
};

const EditPage: NextPage<EditPageProps> = ({ id }) => {
  return <EditHomeView id={id} />;
};

export default EditPage;

export const getServerSideProps: GetServerSideProps = async ctx => {
  const { id } = ctx.params;

  return {
    props: {
      id,
    },
  };
};
