import { FormEvent, useState } from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { validInput } from "../utils/useAuth";
import { ToDoInModal } from "./Modal";

export interface Errors {
  email: boolean;
  password: boolean;
  worning?: string;
}

export interface ErrorState {
  errors: Errors;
  setErrors: React.Dispatch<React.SetStateAction<Errors>>;
}
export interface InputRefs {
  emailRef: React.RefObject<HTMLInputElement>;
  passwordRef: React.RefObject<HTMLInputElement>;
}
export interface SubmitParameter extends ErrorState, InputRefs {
  goToMain: () => void;
}

interface FormTemplateProps {
  title: string;
  handleSubmit: (
    event: FormEvent,
    submitParameter: SubmitParameter
  ) => Promise<void>;
}

function FormTemplate({ title, handleSubmit }: FormTemplateProps) {
  const [errors, setErrors] = useState<Errors>({
    email: true,
    password: true,
    worning: "",
  });
  const navigate = useNavigate();

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const GO_TO = title === "로그인" ? "회원가입" : "로그인";
  const goToPage = () =>
    navigate("", { state: { hasModal: true, todo: GO_TO } });
  const goToMain = () =>
    navigate("", {
      state: { hasModal: false, todo: ToDoInModal.refreshToken },
    });

  return (
    <Form
      onSubmit={(event) =>
        handleSubmit(event, {
          errors,
          setErrors,
          emailRef,
          passwordRef,
          goToMain,
        })
      }
    >
      <Title>{title}</Title>
      <InputContainer>
        {errors.worning && <Worning>{errors.worning}</Worning>}
        <InputBox>
          <Input
            name="email"
            type={"text"}
            ref={emailRef}
            onChange={() => validInput({ ref: emailRef, setErrors })}
            error={errors.email}
          />
          <span>이메일 주소</span>
        </InputBox>
        <InputBox>
          <Input
            name="password"
            type={"password"}
            ref={passwordRef}
            onChange={() => validInput({ ref: passwordRef, setErrors })}
            error={errors.password}
          />
          <span>비밀번호</span>
        </InputBox>
      </InputContainer>
      <ButtonContainer>
        <Button
          isActive={!errors.email && !errors.password && !errors.worning}
          type={"submit"}
        >
          {title}
        </Button>
        <div>
          <span onClick={goToPage}>{GO_TO}</span>
        </div>
      </ButtonContainer>
    </Form>
  );
}

export default FormTemplate;

export const Form = styled.form`
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  max-width: 450px;
  padding: 60px 65px;
  background-color: ${(props) => props.theme.bgColor};
  border-radius: 4px;
`;
export const Title = styled.h2`
  color: white;
  font-size: 2rem;
  font-weight: 700;
  width: 100%;
  background-color: transparent;
`;
export const InputContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 14px;
  span {
    color: gray;
    font-size: 12px;
    top: 6px;
    left: 20px;
    position: absolute;
    background-color: transparent;
  }
`;
export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;
export const Worning = styled.div`
  color: orange;
  position: absolute;
  top: -2rem;
  background-color: transparent;
  font-size: 12px;
`;
export const Input = styled.input<{ error: boolean }>`
  border-radius: 6px;
  border: transparent;
  border-bottom: 4px solid white;
  font-size: 16px;
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 6px;
  position: relative;
  border-bottom-color: ${(props) => (props.error ? "orange" : "white")};
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 14px;
  background-color: transparent;
  div {
    display: flex;
    justify-content: flex-end;
    background-color: transparent;
    span {
      color: white;
      font-size: 14px;
      :hover {
        cursor: pointer;
        font-weight: 600;
      }
    }
  }
`;

export const Button = styled.button<{ isActive: boolean }>`
  background-color: ${(props) => (props.isActive ? "red" : "#dd7676")};
  border-radius: 6px;
  border: transparent;
  font-size: 1rem;
  padding: 1rem 0;
  font-weight: 600;
  color: white;
  width: 100%;
`;
