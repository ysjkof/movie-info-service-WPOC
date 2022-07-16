import { axiosInstance } from "../api/axiosInstance";
import { HttpRequest } from "../api/httpRequest";
import { END_POINT } from "../constant/constant";

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

class MovieModels {
  getAll = async () => {
    const response = await moviesAxios
      .getAll()
      .catch((error) => console.error(error))
      .finally(() => moviesAxios.log({ functionName: "getAll" }));
    return response?.data || [];
  };

  getOneById = async (id: number) => {
    const response = await moviesAxios
      .getOneById(id)
      .catch((error) => console.error(error))
      .finally(() => moviesAxios.log({ functionName: "getOneById" }));
    return response?.data;
  };

  getManyByTerm = async (term: string) => {
    const response = await moviesAxios
      .getTerm(term)
      .catch((error) => console.error(error))
      .finally(() => moviesAxios.log({ functionName: "getManyByTerm" }));
    return response?.data || [];
  };
}

export default new MovieModels();
