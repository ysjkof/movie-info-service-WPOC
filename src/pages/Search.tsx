import { useEffect } from "react";
import { useParams } from "react-router-dom";
import MovieThumbnail from "../components/MovieThumbnail";
import { useMovie } from "../hook/useMovie";
import { Container, ContainerThumbnail, Worning } from "./Home";

function Search() {
  const { movies, searchMovieTitle, getMovie } = useMovie();
  const { term } = useParams();

  useEffect(() => {
    searchMovieTitle(term ?? "");
  }, [term]);

  return (
    <Container>
      <ContainerThumbnail>
        {movies.length === 0 && <Worning>검색 결과가 없습니다.</Worning>}
        {movies?.map((movie, idx) => (
          <MovieThumbnail
            key={movie.id + idx}
            movie={movie}
            openMovie={() => getMovie(movie.id)}
          />
        ))}
      </ContainerThumbnail>
    </Container>
  );
}

export default Search;
