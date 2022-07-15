import { FormEvent } from "react";
import { EMAIL } from "../constant/constant";
import { createAccount } from "../models/userModel";
import { checkError, setUserToLocalStorage } from "../services/useAuth";
import FormTemplate, { SubmitParameter } from "./FormTemplate";

export interface Errors {
  email: boolean;
  password: boolean;
  worning?: string;
}

function CreateAccountForm() {
  const handleSubmit = async (
    event: FormEvent,
    { errors, setErrors, emailRef, passwordRef, goToMain }: SubmitParameter
  ) => {
    event.preventDefault();

    if (checkError(errors)) return;

    const email = emailRef.current?.value!;
    const password = passwordRef.current?.value!;

    const createAccountResults = await createAccount({
      email,
      password,
    });

    if (!createAccountResults.user)
      return setErrors((prevState) => ({
        ...prevState,
        [EMAIL]: true, // 할일: 고쳐
        worning: "error",
      }));

    setUserToLocalStorage(createAccountResults.user);
    goToMain();
  };

  return <FormTemplate title={"회원가입"} handleSubmit={handleSubmit} />;
}

export default CreateAccountForm;
