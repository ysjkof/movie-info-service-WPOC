import { useEffect, useState } from 'react';
import { User } from '../controllers/userController';
import {
  getUserLocalStorage,
  removeUserLocalStorage,
} from '../services/userServices';

export const useMe = () => {
  const [me, setMe] = useState<User | undefined | null>(undefined);

  const getMe = () => {
    const user = getUserLocalStorage();
    setMe(user);
  };

  const logout = () => {
    removeUserLocalStorage();
    setMe(null);
  };

  useEffect(() => {
    getMe();
  }, []);

  return { me, getMe, logout };
};
