import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Movie from "../components/Movie";
import { useMovie } from "../hook/useMovie";
import { Container, Movies, Worning } from "./Home";

function Search() {
  const { movies, searchMovieTitle, getMovie } = useMovie();
  const { term } = useParams();

  useEffect(() => {
    searchMovieTitle(term ?? "");
  }, [term]);

  return (
    <Container>
      <Movies>
        {movies.length === 0 && <Worning>검색 결과가 없습니다.</Worning>}
        {movies?.map((movie, idx) => (
          <Movie
            key={movie.id + idx}
            movie={movie}
            onClick={() => getMovie(movie.id)}
          />
        ))}
      </Movies>
    </Container>
  );
}

export default Search;
