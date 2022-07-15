import { useEffect, useState } from "react";
import { User } from "../services/useAuth";

export default function useUser() {
  const [user, setUser] = useState<User>();

  const getLoggedInUser = async (email: string, password: string) => {
    // 로컬스토리지에서 유저 불러와서 setUser
  };

  useEffect(() => {}, []);
  return { user };
}
