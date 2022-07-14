import styled from "styled-components";
import { MovieType } from "../hook/useMovie";

interface MovieProps {
  movie: MovieType;
  openMovie: () => void;
}

function MovieThumbnail({ movie, openMovie }: MovieProps) {
  return (
    <Container onClick={openMovie}>
      <CoverImg src={movie.medium_cover_image} />
      <Title>{movie.title}</Title>
    </Container>
  );
}
export default MovieThumbnail;

const Container = styled.div`
  width: 240px;
`;
const Title = styled.h2`
  width: 100%;
  word-wrap: break-word;
`;
const CoverImg = styled.img``;
