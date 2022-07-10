import { FormEvent } from "react";
import {
  checkError,
  setUserToLocalStorage,
  createAccountMutation,
} from "../utils/useAuth";
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

    const createAccountResults = await createAccountMutation({
      email,
      password,
    });

    if (!(createAccountResults.type === "pass"))
      return setErrors((prevState) => ({
        ...prevState,
        [createAccountResults.type]: true,
        worning: createAccountResults.worning,
      }));

    setUserToLocalStorage(createAccountResults.user!);
    goToMain();
  };

  return <FormTemplate title={"회원가입"} handleSubmit={handleSubmit} />;
}

export default CreateAccountForm;
