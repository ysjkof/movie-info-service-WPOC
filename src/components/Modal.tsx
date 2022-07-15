import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { MovieType } from "../hook/useMovie";
import CreateAccountForm from "./CreateAccountForm";
import LoginForm from "./LoginForm";
import MovieCard from "./MovieCard";

type ToDoInModal = "로그인" | "회원가입" | "REFRESH_TOKEN" | "OPEN_MOVIE";

export const ToDoInModal = {
  login: "로그인",
  createAccount: "회원가입",
  refreshToken: "REFRESH_TOKEN",
  openMovie: "OPEN_MOVIE",
};

export interface LocationState {
  hasModal: boolean;
  todo?: ToDoInModal;
  movie?: MovieType;
}

function Modal() {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  const [openModal, setOpenModal] = useState(false);
  const { state } = location as { state: LocationState };

  const closeModal = () => {
    navigate(location.pathname, { state: { hasModal: false } });
  };

  useEffect(() => {
    if (state) setOpenModal(state.hasModal);
  }, [state]);

  return (
    <>
      {openModal && (
        <Container>
          <ModalBackground onClick={closeModal} />
          <ModalContents>
            <CloseButton onClick={closeModal}>X</CloseButton>
            {state?.todo === ToDoInModal.login && <LoginForm />}
            {state?.todo === ToDoInModal.createAccount && <CreateAccountForm />}
            {state?.todo === ToDoInModal.openMovie && state.movie && (
              <MovieCard movie={state.movie} />
            )}
          </ModalContents>
        </Container>
      )}
    </>
  );
}
export default Modal;

const Container = styled.div`
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalBackground = styled.div`
  position: absolute;
  background-color: #00000091;
  height: 100%;
  width: 100%;
`;
const ModalContents = styled.div`
  width: 100%;
  min-width: 450px;
  max-width: 560px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.bgColor.black};
  border-radius: 10px;
`;
const CloseButton = styled.button`
  position: absolute;
  right: 1.5rem;
  top: 1.5rem;
  border-radius: 10px;
  color: ${(props) => props.theme.color.default};
  background-color: transparent;
  border: 1px solid;
`;
