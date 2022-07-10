import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import CreateAccountForm from "./CreateAccountForm";
import LoginForm from "./LoginForm";

type LocationState = "로그인" | "회원가입" | undefined;

function Modal() {
  const navigate = useNavigate();
  const location = useLocation();
  const [openModal, setOpenModal] = useState<LocationState>();
  const { state } = location as { state: LocationState };

  useEffect(() => {
    setOpenModal(state);
  }, [state]);

  return (
    <Container openModal={openModal}>
      <ModalContents>
        <CloseButton onClick={() => navigate("", { state: undefined })}>
          X
        </CloseButton>
        {state === "로그인" && <LoginForm />}
        {state === "회원가입" && <CreateAccountForm />}
      </ModalContents>
    </Container>
  );
}
export default Modal;

const Container = styled.div<{ openModal: LocationState }>`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.theme.bgColor.blue};
  display: ${(props) => (props.openModal ? "flex" : "none")};
  align-items: center;
  justify-content: center;
`;

const ModalContents = styled.div`
  position: relative;
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
