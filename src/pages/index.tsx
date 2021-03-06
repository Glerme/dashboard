import { useEffect } from 'react';
import { GetServerSideProps, NextPage } from 'next';

import { useUser } from 'hooks/useUser';

import { getApi } from 'functions/getApi';

import { User } from 'contexts/userContext';

import { ListHomeView } from 'views/Home';

type HomeProps = {
  response: User[];
  error?: any;
};

const Home: NextPage<HomeProps> = ({ response }) => {
  const { handleAddArrayData, data } = useUser();

  useEffect(() => {
    if (data.length === 0) {
      handleAddArrayData(response);
      return;
    }

    handleAddArrayData(data);
  }, [response, data]);

  return <ListHomeView />;
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await getApi(process.env.API_URL);

  const parsedResponse = response.map(user => ({
    id: user.id,
    name: user.name,
    username: user.username,
    email: user.email,
    city: user.address.city,
    active: true,
  }));

  if (response.error) {
    console.log('Error');

    return {
      props: {},
    };
  }

  return {
    props: {
      response: parsedResponse,
    },
  };
};
