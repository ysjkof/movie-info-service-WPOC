import { FormEvent } from "react";
import { EMAIL } from "../constant/constant";
import { checkError } from "../services/formServices";
import { login, setUserLocalStorage } from "../services/userServices";
import FormTemplate, { SubmitParameter } from "./FormTemplate";

export interface Errors {
  email: boolean;
  password: boolean;
  worning?: string;
}

function LoginForm() {
  const handleSubmit = async (
    event: FormEvent,
    { errors, setErrors, emailRef, passwordRef, goToMain }: SubmitParameter
  ) => {
    event.preventDefault();

    if (checkError(errors)) return;

    const email = emailRef.current?.value!;
    const password = passwordRef.current?.value!;

    const loginResults = await login({ email, password });

    if (!loginResults.user)
      return setErrors((prevState) => ({
        ...prevState,
        [EMAIL]: true, // 할일: 에러 처리
        worning: "에러",
      }));

    setUserLocalStorage(loginResults.user!);
    goToMain();
  };

  return <FormTemplate title={"로그인"} handleSubmit={handleSubmit} />;
}

export default LoginForm;
