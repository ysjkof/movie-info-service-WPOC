import { FormEvent } from 'react';
import { EMAIL } from '../constants/constants';
import { checkError } from '../services/formServices';
import { createAccount, setUserLocalStorage } from '../services/userServices';
import FormTemplate, { SubmitParameter } from './FormTemplate';

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
        [EMAIL]: true,
        worning: 'error',
      }));

    setUserLocalStorage(createAccountResults.user);
    goToMain();
  };

  return <FormTemplate title={'회원가입'} handleSubmit={handleSubmit} />;
}

export default CreateAccountForm;
