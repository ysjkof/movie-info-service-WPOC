import { axiosInstance } from '../api/axiosInstance';
import { GetSort, HttpRequest, Log } from '../api/httpRequest';
import { END_POINT } from '../constants/constants';

type Watched = { id: number; numberOfWached: number }[];
export class User {
  public readonly watched: Watched = [];
  public readonly favorites: number[] = [];
  constructor(
    public readonly id: number,
    public readonly email: string,
    public readonly password: string
  ) {}
}

const usersAxios = new HttpRequest<User>(axiosInstance, END_POINT.users);

class UserController {
  getUserByEmail = async (email: string) => {
    const response = await usersAxios
      .getByEmail('email', email)
      .catch((error) => console.error(error))
      .finally(() => usersAxios.log({ functionName: 'getUserByEmail' }));
    if (!response) throw new Error('응답이 없습니다');
    return response.data.length === 0 ? false : response.data[0];
  };

  getUser = async () => {
    const response = await usersAxios
      .getAll()
      .catch((error) => console.error(error))
      .finally(() => usersAxios.log({ functionName: 'getUser' }));
    if (!response) throw new Error('응답이 없습니다');
    return response.data;
  };

  getUserById = async (id: number) => {
    const response = await usersAxios
      .getOneById(id)
      .catch((error) => console.error(error))
      .finally(() => usersAxios.log({ functionName: 'getUserById' }));
    if (!response) throw new Error('응답이 없습니다');
    return response.data;
  };

  getUserByFieldAndSort = async ({ direction, queryField }: GetSort) => {
    const response = await usersAxios
      .getSort({ direction, queryField })
      .catch((error) => console.error(error))
      .finally(() => usersAxios.log({ functionName: 'getUserByFieldAndSort' }));
    if (!response) throw new Error('응답이 없습니다');
    return response.data[0];
  };

  saveUser = async (user: User) => {
    const response = await usersAxios
      .post(user)
      .catch((error) => console.error(error))
      .finally(() => usersAxios.log({ functionName: 'saveUser' }));

    if (!response) throw new Error('응답이 없습니다');
    return { user: response.data };
  };

  updateUser = async (userId: number, user: User) => {
    const response = await usersAxios
      .patch(userId, user)
      .catch((error) => console.error(error))
      .finally(() => usersAxios.log({ functionName: 'updateUser' }));

    if (!response) throw new Error('응답이 없습니다');
    return { user: response.data };
  };

  log = (log: Log) =>
    usersAxios.log({
      functionName: `in model > ${log.functionName}`,
      message: log.message,
    });
}

export default new UserController();
