import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useMe } from "../hook/useMe";
import { LocationState } from "./Modal";

function Navigation() {
  const navigate = useNavigate();
  const location = useLocation();
  const [hasSearch, setHasSearch] = useState(true);
  const { me, getMe, logout } = useMe();
  const { state } = location as { state: LocationState };

  const goToBookmark = () => {
    if (!me) return;
    navigate("bookmark", { state: undefined });
    setHasSearch(false);
  };
  const toggleSearch = () => {
    setHasSearch(true);
    navigate("");
  };
  useEffect(() => {
    getMe();
  }, []);

  useEffect(() => {
    if (state?.todo === "todo_get_me") getMe();
  }, [state]);

  return (
    <Container>
      <Column>
        <Title>
          <Link to={""}>원티들릭스</Link>
        </Title>
      </Column>
      {hasSearch && (
        <Column>
          <input type={"search"} />
        </Column>
      )}
      <Column>
        {!hasSearch && (
          <Button isActive onClick={toggleSearch}>
            검색
          </Button>
        )}
        <Button isActive={!!me} onClick={goToBookmark}>
          즐겨찾기
        </Button>
        {me ? (
          <Button isActive={!!me} onClick={logout}>
            로그아웃
          </Button>
        ) : (
          <Button
            isActive={!me}
            onClick={() =>
              navigate("", { state: { hasModal: true, todo: "로그인" } })
            }
          >
            로그인
          </Button>
        )}
      </Column>
    </Container>
  );
}

export default Navigation;

const Container = styled.div`
  border-bottom: 1px red solid;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.8rem 1rem;
  background-color: ${(props) => props.theme.bgColor.black};
`;

const Column = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
`;

const Title = styled.h1`
  a {
    color: #f90909;
    font-weight: 600;
    font-size: 1.5rem;
  }
`;
const Button = styled.button<{ isActive?: boolean }>`
  background-color: ${(props) =>
    props.isActive
      ? props.theme.button.bgColor.activity
      : props.theme.button.bgColor.inactivity};
  color: ${(props) =>
    props.isActive
      ? props.theme.button.color.activity
      : props.theme.button.color.inactivity};
  border-color: ${(props) =>
    props.isActive
      ? props.theme.button.bgColor.activity
      : props.theme.button.bgColor.inactivity};
  padding: 0.2rem 1rem;
  border-radius: 6px;
  cursor: ${(props) => (props.isActive ? "pointer" : "default")};
  :hover {
    scale: ${(props) => (props.isActive ? 1.2 : 1)};
  }
`;
