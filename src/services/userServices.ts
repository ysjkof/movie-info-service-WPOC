import { LOCAL_STORAGE_KEY, LoginInput } from '../constants/constants';
import userController, { User } from '../controllers/userController';
import { ToggleOptions } from '../type';
import { removeInArrayByIndex } from '../utils/utils';

export const setUserLocalStorage = (user: User) => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(user));
};

export const getUserLocalStorage = (): User => {
  return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)!);
};

export const removeUserLocalStorage = () => {
  localStorage.removeItem(LOCAL_STORAGE_KEY);
};

export const login = async ({ email, password }: LoginInput) => {
  const user = await userController.getUserByEmail(email);
  if (!user) return { error: '가입되지 않은 이메일입니다' };

  if (user.password !== password) return { error: '비밀번호를 확인해주세요' };

  return { user };
};

export const createAccount = async ({ email, password }: LoginInput) => {
  const exist = await userController.getUserByEmail(email);
  if (exist) return { error: '가입할 수 없는 email입니다' };

  const user = await userController.getUserByFieldAndSort({
    direction: 'desc',
    queryField: 'id',
  });

  if (!user) throw new Error('User is not found');

  const { user: createdUser } = await userController.saveUser(
    new User(user.id + 1, email, password)
  );

  return { user: createdUser };
};

export const toggleFavorite = async ({ userId, movieId }: ToggleOptions) => {
  const data = await userController.getUserById(userId);
  if (!data) return;

  let user = { ...data };

  const existFavoriteIdx = data.favorites.findIndex(
    (favorite) => favorite === movieId
  );
  if (existFavoriteIdx === -1) {
    user.favorites.push(movieId);
  } else {
    user.favorites = removeInArrayByIndex(user.favorites, existFavoriteIdx);
  }

  await userController
    .updateUser(userId, user)
    .finally(() => userController.log({ functionName: 'toggleFavorite' }));
  return user;
};
