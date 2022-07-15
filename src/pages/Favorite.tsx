import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MovieThumbnail from "../components/MovieThumbnail";
import { useMe } from "../hook/useMe";
import { MovieType, useMovie } from "../hook/useMovie";
import { getUser } from "../models/userModel";
import { Container, ContainerThumbnail, Worning } from "./Home";

function Favorite() {
  const navigate = useNavigate();
  const { movies, getMovie, getLike } = useMovie();
  const { me, getMe } = useMe();

  useEffect(() => {
    getMe();
  }, []);

  useEffect(() => {
    getLike(me?.likes ?? [0]);
  }, [me]);

  const openMovie = (movieId: number, movie: MovieType) => {
    getMovie(movieId);
    navigate("", { state: { hasModal: true, movie } });
  };

  return (
    <Container>
      <ContainerThumbnail>
        {movies.length === 0 && <Worning>즐겨찾기 목록이 없습니다.</Worning>}
        {movies?.map((movie, idx) => (
          <MovieThumbnail
            key={movie.id + idx}
            movie={movie}
            openMovie={() => openMovie(movie.id, movie)}
          />
        ))}
      </ContainerThumbnail>
    </Container>
  );
}

export default Favorite;
