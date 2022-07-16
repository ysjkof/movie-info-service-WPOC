import styled from "styled-components";
import { MovieType } from "../models/movieModel";
import { getUserLocalStorage } from "../services/userServices";

interface MovieProps {
  movie: MovieType;
  openMovie: () => void;
}

function MovieThumbnail({ movie, openMovie }: MovieProps) {
  const loggedInUser = getUserLocalStorage();

  const checkHasLike = (likes: number[], movieId: number) =>
    !!likes?.find((like) => like === movieId);

  return (
    <Container onClick={openMovie}>
      <CoverImg src={movie.medium_cover_image} />
      {checkHasLike(loggedInUser?.likes, movie.id) && <Like>Like</Like>}
      <HoverContainer>
        <Title>{movie.title}</Title>
      </HoverContainer>
    </Container>
  );
}
export default MovieThumbnail;

const Container = styled.div`
  position: relative;
  width: 240px;
  height: 360px;
`;
const CoverImg = styled.img`
  width: 100%;
`;

const Like = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  padding: 0.1rem 0.4rem;
  background-color: #e70000;
`;

const HoverContainer = styled.div`
  position: absolute;
  z-index: 5;
  top: 0;
  opacity: 0;
  width: 100%;
  height: 100%;
  :hover {
    opacity: 1;
    cursor: pointer;
    background-color: #000000c8;
  }
`;
const Title = styled.h2`
  position: absolute;
  top: 40%;
  left: 0;
  width: 100%;
  padding: 1rem;
  text-align: center;
  word-wrap: break-word;
`;
