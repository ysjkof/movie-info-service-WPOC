import { useState } from "react";
import {
  getLoggedInUser,
  removeUserFromLocalStorage,
  User,
} from "../utils/useAuth";

export const useMe = () => {
  const [me, setMe] = useState<User | undefined>(undefined);

  const getMe = () => {
    const user = getLoggedInUser();
    setMe(user);
  };

  const logout = () => {
    removeUserFromLocalStorage();
    setMe(undefined);
  };

  return { me, getMe, logout };
};
