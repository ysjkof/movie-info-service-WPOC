import { useState } from 'react';
import { MOVIE_TAKE_NUMBER } from '../constants/constants';
import movieServices, { MovieType } from '../controllers/movieController';

export interface PaginationOption {
  take: number;
  page: number;
}

interface CacheUpdate {
  newMovie: MovieType;
  movies: MovieType[];
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
  const [favoriteMovies, setFavoriteMovies] = useState<MovieType[]>([]);
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

  const getFavorites = async (likeIds: number[]) => {
    const favorites: MovieType[] = await Promise.all(
      likeIds.map(async (id) => await movieServices.getOneById(id))
    );
    setFavoriteMovies(favorites);
  };

  return {
    movies,
    getMovies,
    getMovie,
    movie,
    searchMovieTitle,
    likeMovies: favoriteMovies,
    getFavorites,
    movieTitles,
  };
};
