import { Errors } from "../components/LoginForm";
import {
  ERROR_MESSAGES,
  InputNames,
  LOGIN_INPUT_REGEX,
} from "../constant/constant";

interface Validation {
  name: InputNames;
  value: string;
}
export const checkValidation = ({ name, value }: Validation) =>
  LOGIN_INPUT_REGEX[name].test(value);

export const checkError = (errors: Errors) =>
  Object.values(errors).find(Boolean);

export const validInput = ({ ref, setErrors }: ValidInput) => {
  const name = ref.current!.name as InputNames;
  const value = ref.current!.value;
  if (!checkValidation({ name, value })) {
    return setErrors((prevState) => ({
      ...prevState,
      [name]: true,
      worning: ERROR_MESSAGES[name],
    }));
  }
  setErrors((prevState) => ({
    ...prevState,
    [name]: false,
    worning: "",
  }));
  setErrors((prevState) => ({ ...prevState, [name]: false }));
};

interface ValidInput {
  ref: React.RefObject<HTMLInputElement>;
  setErrors: React.Dispatch<React.SetStateAction<Errors>>;
}
