import { User } from "../api/userServices";
import { Errors } from "../components/LoginForm";

const LOCAL_STORAGE_KEY = "wanted_movie_info_service";

export const saveToken = (user: User) => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(user));
};

export const getLoggedInUser = () => {
  return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)!);
};

export const removeToken = () => {
  localStorage.removeItem(LOCAL_STORAGE_KEY);
};

export const LOGIN_KEY = "wanted-pre-onboarding-fe";

const REGEX_ID =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const REGEX_PASSWORD =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

export const EMAIL = "email";
export const PASSWORD = "password";

export const LOGIN_INPUT_REGEX = {
  [EMAIL]: REGEX_ID,
  [PASSWORD]: REGEX_PASSWORD,
};

export const errorMessages = {
  [EMAIL]: "정확한 이메일 주소를 입력하세요",
  [PASSWORD]: "비밀번호는 숫자, 대문자, 특수 문자 포함 8자 이상입니다",
  duplicateEmail: "이미 가입된 이메일 주소입니다",
};

type InputNames = typeof EMAIL | typeof PASSWORD;
interface Validation {
  name: InputNames;
  value: string;
}
export const checkValidation = ({ name, value }: Validation) =>
  LOGIN_INPUT_REGEX[name].test(value);

export const checkError = (errors: Errors) =>
  Object.values(errors).find(Boolean);

interface ValidInput {
  ref: React.RefObject<HTMLInputElement>;
  setErrors: React.Dispatch<React.SetStateAction<Errors>>;
}
export const validInput = ({ ref, setErrors }: ValidInput) => {
  const name = ref.current!.name as InputNames;
  const value = ref.current!.value;
  if (!checkValidation({ name, value })) {
    return setErrors((prevState) => ({
      ...prevState,
      [name]: true,
      worning: errorMessages[name],
    }));
  }
  setErrors((prevState) => ({
    ...prevState,
    [name]: false,
    worning: "",
  }));
  setErrors((prevState) => ({ ...prevState, [name]: false }));
};
