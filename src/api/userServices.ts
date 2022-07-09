import axios from "axios";

const BASE_URL = "http://localhost:8000/";
const USER_URL = `${BASE_URL}users`;

const axiosUser = axios.create({
  baseURL: `${USER_URL}`,
  headers: {
    "Content-type": "application/json",
  },
});

// getUser = async (email: string) => {
//   return await (
//     await axiosUser.get(`${BASE_URL}users?ID=${email}`)
//   ).data[0];
// };
// 위와 아래 getUser의 기능은 같고, 아래는 에러처리와 동작이 끝난 후 console.log를 출력한다

class UserServices {
  getUser = async (email: string): Promise<User> => {
    let data: User;
    await axiosUser
      .get(`${USER_URL}?ID=${email}`)
      .then((_response) => {
        data = _response.data[0];
      })
      .catch((error) => console.error(error))
      .then(() => console.log("Done getUserByEmail"));
    // @ts-ignore
    return data;
  };

  getIdOfLastUser = async (): Promise<number> => {
    let lastUserId = 1;
    await axiosUser
      .get(USER_URL)
      .then((_response) => {
        // @ts-ignore
        lastUserId = _response.data.sort((a, b) => b.id - a.id)[0].id ?? 1;
      })
      .catch((error) => console.error(error))
      .then(() => console.log("Done getUserByEmail"));
    return lastUserId;
  };

  postUser = async (user: User) => {
    axiosUser
      .post(USER_URL, user)
      .then((_response) => {
        console.warn("postUser status code: ", _response.status);
      })
      .catch((error) => console.error(error))
      .then(() => console.log("Done getUserByEmail"));
  };
}

export const userServices = new UserServices();

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
