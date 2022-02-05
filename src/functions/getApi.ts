import axios from 'axios';

export const getApi = async (url: string) => {
  try {
    const { data } = await axios.get(url);

    return data;
  } catch (error) {
    console.error({ error });
    return {
      error: error,
    };
  }
};
