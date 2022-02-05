import { createContext, useState } from 'react';

export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  city: string;
};

export type UserContext = {
  data: User[];
};

type FetchData = {
  loading: boolean;
  removeLoading: () => void;
  addLoading: () => void;
  handleNewData: (newData: User[]) => void;
  data: User[] | null;
};

export const UserContext = createContext<FetchData>({} as FetchData);

export const UserContextProvider: React.FC = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [data, setNewdata] = useState<User[]>([]);

  const addLoading = () => {
    setLoading(true);
  };

  const removeLoading = () => {
    setLoading(false);
  };

  const handleNewData = (newData: User[]) => {
    const newObj = data.push(...newData);

    console.log(newObj);

    setNewdata(data);
  };

  return (
    <UserContext.Provider
      value={{ loading, data, handleNewData, addLoading, removeLoading }}
    >
      {children}
    </UserContext.Provider>
  );
};
