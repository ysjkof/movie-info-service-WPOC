import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { User } from "../utils/useAuth";

function Home() {
  const [user, setUser] = useState<User>();
  const navigate = useNavigate();

  return (
    <Container>
      <button onClick={() => navigate("", { state: "로그인" })}>킴</button>
      <button onClick={() => navigate("", { state: undefined })}>끔</button>
      {user && user.email}
    </Container>
  );
}

export default Home;

const Container = styled.div`
  background-color: ${(props) => props.theme.bgColor.blue};
`;
