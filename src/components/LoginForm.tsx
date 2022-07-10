import { FormEvent } from "react";
import {
  loginMutation,
  checkError,
  setUserToLocalStorage,
} from "../utils/useAuth";
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

    const loginResults = await loginMutation({ email, password });

    if (!(loginResults.type === "pass"))
      return setErrors((prevState) => ({
        ...prevState,
        [loginResults.type]: true,
        worning: loginResults.worning,
      }));

    setUserToLocalStorage(loginResults.user!);
    goToMain();
  };

  return <FormTemplate title={"로그인"} handleSubmit={handleSubmit} />;
}

export default LoginForm;
