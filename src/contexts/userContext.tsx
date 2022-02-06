import { createContext, useState } from 'react';

export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  city: string;
  active: boolean;
};

export type UserContext = {
  data: User[];
};

type FetchData = {
  handleNewData: (newData: User) => void;
  handleAddArrayData: (newData: User[]) => void;
  handleEditUser: (user: User) => void;
  activateUser: (id: number, active: boolean) => void;
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
        active: true,
      },
    ]);
  };

  const handleEditUser = (user: User) => {
    const arr = data.filter(item => item.id !== user.id);

    setNewdata([...arr, user]);
  };

  const activateUser = (id: number, active: boolean) => {
    const arr = data.filter(item => item.id !== id);

    arr.map(user => ({
      ...user,
      active: !active,
    }));

    setNewdata([...arr]);
  };

  return (
    <UserContext.Provider
      value={{
        data,
        handleNewData,
        handleAddArrayData,
        handleEditUser,
        activateUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
