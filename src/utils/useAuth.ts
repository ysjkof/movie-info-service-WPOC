import { userServices } from "../api/userServices";
import { Errors } from "../components/LoginForm";
import {
  EMAIL,
  ERROR_MESSAGES,
  InputNames,
  LOCAL_STORAGE_KEY,
  LoginInput,
  LOGIN_INPUT_REGEX,
  PASSWORD,
} from "../constant/constant";

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

interface LoginMutation {
  type: InputNames | "pass";
  worning?: string;
  user?: User;
}

const matchPassword = (dbPassword: string, inputPassword: string) =>
  dbPassword === inputPassword;

export const loginMutation = async ({
  email,
  password,
}: LoginInput): Promise<LoginMutation> => {
  const user = await userServices.getUser(email);
  if (!user) return { type: EMAIL, worning: ERROR_MESSAGES[EMAIL] };

  if (!matchPassword(user.password, password))
    return { type: PASSWORD, worning: ERROR_MESSAGES[PASSWORD] };

  return { type: "pass", user };
};

type Watched = { id: number; numberOfWached: number }[];
export class User {
  public readonly watched: Watched = [];
  public readonly likes: number[] = [];
  public readonly favorites: number[] = [];
  constructor(
    public readonly id: number,
    public readonly email: string,
    public readonly password: string
  ) {}
}

export const createAccountMutation = async ({
  email,
  password,
}: LoginInput): Promise<LoginMutation> => {
  const existsUser = await userServices.getUser(email);
  if (existsUser)
    return { type: EMAIL, worning: ERROR_MESSAGES.duplicateEmail };

  const id = (await userServices.getIdOfLastUser()) + 1;
  const user = new User(id, email, password);
  await userServices.postUser(user);

  return { type: "pass", user };
};
