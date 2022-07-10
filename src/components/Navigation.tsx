import { FormEvent, useEffect, useRef } from "react";
import { Link, useLocation, useMatch, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useMe } from "../hook/useMe";
import { ROUTES } from "../router";
import { LocationState } from "./Modal";

function Navigation() {
  const navigate = useNavigate();
  const location = useLocation();
  const { me, getMe, logout } = useMe();
  const { state } = location as { state: LocationState };
  const matchFavorite = useMatch(ROUTES.favorite);

  const goToFavorite = () => {
    if (!me) return;
    navigate(ROUTES.favorite, { state: undefined });
  };
  const toggleSearch = () => {
    navigate("");
  };
  useEffect(() => {
    getMe();
  }, []);

  useEffect(() => {
    console.log("navi state", state);
    if (state?.todo === "todo_get_me") getMe();
  }, [state]);

  const searchRef = useRef<HTMLInputElement>(null);
  const searchMovie = (event: FormEvent) => {
    event.preventDefault();
    const title = searchRef.current?.value;
    navigate(`search/${title}`);
  };

  return (
    <Container>
      <Column>
        <Title>
          <Link to={""}>원티들릭스</Link>
        </Title>
      </Column>
      {!matchFavorite && (
        <Column>
          <form onSubmit={searchMovie}>
            <input type={"search"} ref={searchRef} />
          </form>
        </Column>
      )}
      <Column>
        {matchFavorite && (
          <Button isActive onClick={toggleSearch}>
            검색
          </Button>
        )}
        <Button isActive={!!me} onClick={goToFavorite}>
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
