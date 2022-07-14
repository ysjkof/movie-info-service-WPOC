import { useEffect, useState } from "react";
import styled from "styled-components";
import { MovieType } from "../hook/useMovie";
import { getLoggedInUser } from "../utils/useAuth";

interface MovieProps {
  movie: MovieType;
}

function MovieCard({ movie }: MovieProps) {
  const { email, likes, favorites } = getLoggedInUser();
  const [like, setLikes] = useState(false);
  const [favorite, setFavorite] = useState(false);

  const checkLike = () => likes.find((id) => id === movie.id);
  const checkFavorite = () => favorites.find((id) => id === movie.id);

  const toggleLike = () => {};
  const toggleFavorite = () => {};

  useEffect(() => {
    const hasLike = checkLike();
    if (hasLike) setLikes(!!hasLike);
  }, [likes]);

  useEffect(() => {
    const hasFavorite = checkFavorite();
    if (hasFavorite) setFavorite(!!hasFavorite);
  }, [favorites]);

  return (
    <Container backgroundImgUrl={movie.large_cover_image}>
      <Description>
        <Controller>
          <Button isActivate={!!email} isSelect={like} onClick={toggleLike}>
            Like
          </Button>
          <Button
            isActivate={!!email}
            isSelect={favorite}
            onClick={toggleFavorite}
          >
            Favorite
          </Button>
        </Controller>
        <h2>{movie.title}</h2>
        <h3>Rating : {movie.rating}</h3>
        <h3>Genres : {movie.genres.map((genre) => genre).join(", ")}</h3>
        <h3>Runtime : {movie.runtime}minutes</h3>
        <div>
          <h3>Summary</h3>
          <p>{movie.summary ? movie.summary : "there is no summary"}</p>
        </div>
      </Description>
    </Container>
  );
}
export default MovieCard;

const Container = styled.div<{ backgroundImgUrl: string }>`
  width: 100%;
  height: 90vh;
  background-image: ${(props) => `url(${props.backgroundImgUrl})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  display: flex;
  align-items: flex-end;
`;
const Description = styled.div`
  position: relative;
  width: 100%;
  height: 50%;
  background-color: #000000de;
  word-wrap: break-word;
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  h2 {
    font-weight: 600;
    font-size: 2rem;
    text-align: center;
  }
  h3 {
    font-size: 0.9rem;
  }
  p {
    margin-top: 0.5rem;
    padding-left: 1rem;
  }
`;

const Controller = styled.div`
  position: absolute;
  right: 1rem;
  top: -2rem;
  display: flex;
  gap: 1rem;
`;

const Button = styled.div<{ isSelect: boolean; isActivate: boolean }>`
  background-color: ${(props) => (props.isActivate ? "black" : "#00000078")};
  color: ${(props) => (props.isSelect ? "red" : "gray")};
  border: none;
  border-radius: 6px;
  padding: 0.3rem 1rem;
`;
