import { axiosInstance } from "../api/axiosInstance";
import { GetSort, HttpRequest } from "../api/httpRequest";
import { LoginInput } from "../constant/constant";

const userAxios = new HttpRequest<User>(axiosInstance, "users");

export const QUERY_FIELD = {
  title: "title",
};

// const printFinish = (functionName: string) =>
//   `수행완료(${endPoint}>${functionName})`;

export const getUserByEmail = async (email: string) => {
  const response = await userAxios.getByEmail("email", email);
  return response.data.length === 0 ? false : response.data[0];
};

export const getUser = async () => {
  const b = await userAxios.getAll();
  console.log("userModel", b);
  return b.data;
};
export const getUserById = async (id: number) => {
  const b = await userAxios.getOneById(id);
  console.log("userModel", b);
  return b.data;
};

const getUserByFieldAndSort = async ({ direction, queryField }: GetSort) => {
  const response = await userAxios.getSort({ direction, queryField });
  return response.data[0];
};

///

export const login = async ({ email, password }: LoginInput) => {
  const user = await getUserByEmail(email);
  if (!user) return { error: "가입되지 않은 이메일입니다" };

  if (user.password !== password) return { error: "비밀번호를 확인해주세요" };

  // return 토큰을 반환해야하지만 로컬환경이라 로컬스토리지에 저장
  return { user };
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

export const createAccount = async ({ email, password }: LoginInput) => {
  const exist = await getUserByEmail(email);
  if (exist) return { error: "가입할 수 없는 email입니다" };

  const { id: largestUserId } = await getUserByFieldAndSort({
    direction: "desc",
    queryField: "id",
  });

  const response = await userAxios.post(
    new User(largestUserId + 1, email, password)
  );

  return { user: response.data };
};
