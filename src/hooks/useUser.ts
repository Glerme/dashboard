import { useContext } from 'react';

import { UserContext } from 'contexts/userContext';

export const useUser = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('useUser must be used whithin an UserProvider');
  }

  return context;
};
