import { useEffect, useState } from "react";
import { User, userServices } from "../api/userServices";

function Home() {
  const [user, setUser] = useState<User>();
  useEffect(() => {
    (async () => {
      const gettedUser = await userServices.getUser("test@t.co");
      setUser(gettedUser);
    })();
  }, []);

  return <h1>{user && user.email}</h1>;
}

export default Home;
