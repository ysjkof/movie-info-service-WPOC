import movieController from '../controllers/movieController';
import { ToggleOptions } from '../type';

export const checkHasFavorite = (
  movieId: number,
  favorites: number[] | undefined
) => !!favorites?.find((id) => id === movieId);

export const toggleLike = async ({
  movieId,
}: Pick<ToggleOptions, 'movieId'>) => {
  const data = await movieController.getOneById(movieId);
  if (!data) throw new Error('User not found');

  const newLike = !data.like;
  await movieController.toggleLike(movieId, newLike);

  return { like: newLike };
};
