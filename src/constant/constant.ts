// URL
export const BASE_URL = "http://localhost:8000/";
export const USER_URL = `${BASE_URL}users/`;
export const MOVIE_URL = `${BASE_URL}movies/`;

// etc
export const MOVIE_TAKE_NUMBER = 20;

// localStorage Key
export const LOCAL_STORAGE_KEY = "wanted_movie_info_service";
export const LOGIN_KEY = "wanted-pre-onboarding-fe";

// Account
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

export const ERROR_MESSAGES = {
  [EMAIL]: "정확한 이메일 주소를 입력하세요",
  [PASSWORD]: "비밀번호는 숫자, 대문자, 특수 문자 포함 8자 이상입니다",
  duplicateEmail: "이미 가입된 이메일 주소입니다",
};

export type InputNames = typeof EMAIL | typeof PASSWORD;

export interface LoginInput {
  [EMAIL]: string;
  [PASSWORD]: string;
}
