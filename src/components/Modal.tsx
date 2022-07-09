import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import LoginForm from "./LoginForm";

interface ModalProps {
  state?: string;
}

function Modal({}: ModalProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const [openModal, setOpenModal] = useState<string | null>(null);
  const { state } = location as { state: string };

  useEffect(() => {
    setOpenModal(state);
  }, [state]);

  return (
    <Container openModal={openModal}>
      <ModalContents>
        <CloseButton onClick={() => navigate("", { state: null })}>
          X
        </CloseButton>
        {state === "login" && <LoginForm />}
      </ModalContents>
    </Container>
  );
}
export default Modal;

const Container = styled.div<{ openModal: string | null }>`
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
