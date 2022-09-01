import { axiosInstance } from '../api/axiosInstance';
import { HttpRequest } from '../api/httpRequest';
import { END_POINT } from '../constants/constants';

export interface MovieType {
  id: number;
  imdb_code: string;
  title: string;
  title_english: string;
  title_long: string;
  slug: string;
  year: number;
  rating: number;
  runtime: number;
  genres: string[];
  summary: string;
  description_full: string;
  synopsis: string;
  yt_trailer_code: string;
  language: string;
  mpa_rating: string;
  background_image: string;
  background_image_original: string;
  small_cover_image: string;
  medium_cover_image: string;
  large_cover_image: string;
  state: string;
  date_uploaded: string;
  date_uploaded_unix: number;
  like: boolean;
}

const moviesAxios = new HttpRequest<MovieType>(axiosInstance, END_POINT.movies);

class MovieController {
  toggleLike = async (id: number, like: boolean) => {
    const response = await moviesAxios
      .patch(id, { like })
      .catch((error) => console.error(error))
      .finally(() => moviesAxios.log({ functionName: 'toggleLike' }));
    if (!response) throw new Error('응답이 없습니다');
    return response?.data;
  };

  getAll = async () => {
    const response = await moviesAxios
      .getAll()
      .catch((error) => console.error(error))
      .finally(() => moviesAxios.log({ functionName: 'getAll' }));
    if (!response) throw new Error('응답이 없습니다');
    return response?.data || [];
  };

  getOneById = async (id: number) => {
    const response = await moviesAxios
      .getOneById(id)
      .catch((error) => console.error(error))
      .finally(() => moviesAxios.log({ functionName: 'getOneById' }));
    if (!response) throw new Error('응답이 없습니다');
    return response.data;
  };

  getManyByTerm = async (term: string) => {
    const response = await moviesAxios
      .getTerm(term)
      .catch((error) => console.error(error))
      .finally(() => moviesAxios.log({ functionName: 'getManyByTerm' }));
    if (!response) throw new Error('응답이 없습니다');
    return response?.data || [];
  };
}

export default new MovieController();
