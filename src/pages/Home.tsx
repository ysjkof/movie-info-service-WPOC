import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { User, userServices } from "../api/userServices";

function Home() {
  const [user, setUser] = useState<User>();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const gettedUser = await userServices.getUser("test@t.co");
      setUser(gettedUser);
    })();
  }, []);

  return (
    <Container>
      <button onClick={() => navigate("", { state: "login" })}>킴</button>
      <button onClick={() => navigate("", { state: null })}>끔</button>
      {user && user.email}
    </Container>
  );
}

export default Home;

const Container = styled.div`
  background-color: ${(props) => props.theme.bgColor.blue};
`;
