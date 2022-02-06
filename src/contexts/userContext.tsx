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
  handleNewData: (newData: User) => void;
  handleAddArrayData: (newData: User[]) => void;
  handleEditUser: (user: User) => void;
  data: User[] | null;
};

export const UserContext = createContext<FetchData>({} as FetchData);

export const UserContextProvider: React.FC = ({ children }) => {
  const [data, setNewdata] = useState<User[]>([]);

  const handleAddArrayData = (newArrayData: User[]) => {
    setNewdata(newArrayData);
  };

  const handleNewData = (newData: User) => {
    setNewdata(old => [
      ...old,
      {
        id: newData.id,
        city: newData.city,
        email: newData.email,
        name: newData.name,
        username: newData.username,
      },
    ]);
  };

  const handleEditUser = (user: User) => {
    const filtered = data.filter(filter => filter.id === user.id);

    console.log(filtered);
  };

  return (
    <UserContext.Provider
      value={{
        data,
        handleNewData,
        handleAddArrayData,
        handleEditUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
