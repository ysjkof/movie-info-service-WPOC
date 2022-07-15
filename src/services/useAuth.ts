import { Errors } from "../components/LoginForm";
import {
  ERROR_MESSAGES,
  InputNames,
  LOCAL_STORAGE_KEY,
  LOGIN_INPUT_REGEX,
} from "../constant/constant";
import { User } from "../models/userModel";

export const setUserToLocalStorage = (user: User) => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(user));
};

export const getLoggedInUser = (): User => {
  return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)!);
};

export const removeUserFromLocalStorage = () => {
  localStorage.removeItem(LOCAL_STORAGE_KEY);
};

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
