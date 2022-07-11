import { useState } from "react";
import { movieServices } from "../api/movieServices";
import { MOVIE_TAKE_NUMBER } from "../constant/constant";

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

export interface PaginationOption {
  take: number;
  page: number;
}

const sliceMovies = (movies: MovieType[], { take, page }: PaginationOption) => {
  const startIndex = take * page - take;
  const endIndex = take * page;
  return movies.slice(startIndex, endIndex);
};

const emptyArr = (arr: any[]) => arr.length === 0;

export const useMovie = () => {
  const [allMovies, setAllMovies] = useState<MovieType[]>([]);
  const [movieTitles, setMovieTitles] = useState<string[]>([]);
  const [movies, setMovies] = useState<MovieType[]>([]);
  const [movie, setMovie] = useState<MovieType>();

  const extractTitle = (movies: MovieType[]) =>
    movies.map((movie) => movie.title);

  const getMovies = async (page = 1) => {
    const take = MOVIE_TAKE_NUMBER;
    if (emptyArr(allMovies)) {
      const totalMovies = await movieServices.getMany();
      const paginationMovie = sliceMovies(totalMovies, { take, page });
      setAllMovies(totalMovies);
      const movieTitles = extractTitle(totalMovies);
      setMovieTitles(movieTitles);
      return setMovies(paginationMovie);
    }
    const pagenationMovie = sliceMovies(allMovies, { take, page });
    return setMovies((prevMovies) => [...prevMovies, ...pagenationMovie]);
  };

  const getMovie = async (id: number) => {
    const movie = await movieServices.getOneById(id);
    return setMovie(movie);
  };

  const searchMovieTitle = async (title: string) => {
    const searchedMovies = await movieServices.getManyByTitle(title);
    return setMovies(searchedMovies);
  };

  const getLike = async (likeIds: number[]) => {
    likeIds = [8462, 13106]; // 임시로 like movie id 하드코딩
    const likes = await Promise.all(
      likeIds.map(async (id) => await movieServices.getOneById(id))
    );
    setMovies(likes);
  };
  return {
    movies,
    getMovies,
    getMovie,
    movie,
    searchMovieTitle,
    getLike,
    movieTitles,
  };
};
