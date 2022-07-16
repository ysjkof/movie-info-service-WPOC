import { useState } from "react";
import { MOVIE_TAKE_NUMBER } from "../constant/constant";
import movieServices, { MovieType } from "../models/movieModel";

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
  const [likeMovies, setLikeMovies] = useState<(MovieType | undefined)[]>([]);
  const [movie, setMovie] = useState<MovieType>();

  const take = MOVIE_TAKE_NUMBER;

  const extractTitle = (movies: MovieType[]) =>
    movies.map((movie) => movie.title);

  const getMovies = async (page = 1) => {
    if (emptyArr(allMovies)) {
      const totalMovies = await movieServices.getAll();
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
    const searchedMovies = await movieServices.getManyByTerm(title);
    return setMovies(searchedMovies);
  };

  const getLikes = async (likeIds: number[]) => {
    const likes = await Promise.all(
      likeIds.map(async (id) => await movieServices.getOneById(id))
    );
    setLikeMovies(likes);
  };

  return {
    movies,
    getMovies,
    getMovie,
    movie,
    searchMovieTitle,
    likeMovies,
    getLikes,
    movieTitles,
  };
};
