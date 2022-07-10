import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { User } from "../utils/useAuth";

function Favorite() {
  const [user, setUser] = useState<User>();
  const navigate = useNavigate();

  return <Container>Favorite</Container>;
}

export default Favorite;

const Container = styled.div``;
