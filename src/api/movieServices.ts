import axios from "axios";
import { MOVIE_URL } from "../constant/constant";
import { MovieType } from "../hook/useMovie";

const axiosMovie = axios.create({
  baseURL: MOVIE_URL,
  headers: {
    "Content-type": "application/json",
  },
});

class MovieServices {
  getMany = async (): Promise<MovieType[]> => {
    let data;
    await axiosMovie
      .get("")
      .then((_response) => {
        data = _response.data;
      })
      .catch((error) => console.error(error))
      .then(() => console.log("Done getMany"));
    //@ts-ignore
    return data;
  };

  getOneById = async (id: number): Promise<MovieType> => {
    let data;
    await axiosMovie
      .get("", { params: { id } })
      .then((_response) => {
        data = _response.data[0];
      })
      .catch((error) => console.error(error))
      .then(() => console.log("Done getOneById"));
    //@ts-ignore
    return data;
  };

  // 할일: title이 정확히 일치해야 반환함 비슷하면 찾아지게 할 것
  getManyByTitle = async (title: string): Promise<MovieType[]> => {
    let data;
    await axiosMovie
      .get(`?q=${title}`)
      .then((_response) => {
        data = _response.data;
      })
      .catch((error) => console.error(error))
      .then(() => console.log("Done getManyByTitle"));
    //@ts-ignore
    return data;
  };
}

export const movieServices = new MovieServices();
