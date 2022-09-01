import { useEffect, useState } from 'react';
import styled from 'styled-components';
// import { userServices } from "../api/userApi";
import { useMe } from '../hooks/useUser';
import { MovieType } from '../controllers/movieController';
import {
  setUserLocalStorage,
  toggleFavorite,
  toggleLike,
} from '../services/userServices';

interface MovieProps {
  movie: MovieType;
}

function MovieCard({ movie }: MovieProps) {
  const { me, getMe } = useMe();
  const [like, setLikes] = useState(false);
  const [favorite, setFavorite] = useState(false);

  const checkLike = (likes: number[] | undefined) =>
    !!likes?.find((id) => id === movie.id);
  const checkFavorite = (favorites: number[] | undefined) =>
    !!favorites?.find((id) => id === movie.id);

  const invokeToggleLike = async () => {
    if (!me) return;

    const user = await toggleLike({
      userId: me.id,
      movieId: movie.id,
    });

    if (!user) throw new Error('Not found user');
    setUserLocalStorage(user);
    getMe();
  };

  const invokeToggleFavorite = async () => {
    if (!me) return;

    const user = await toggleFavorite({
      userId: me.id,
      movieId: movie.id,
    });

    if (!user) throw new Error('Not found user');
    setUserLocalStorage(user);
    getMe();
  };

  useEffect(() => {
    if (me?.likes) {
      const hasLike = checkLike(me.likes);
      setLikes(hasLike);
    }
  }, [me?.likes]);

  useEffect(() => {
    if (me?.favorites) {
      const hasFavorite = checkFavorite(me.favorites);
      setFavorite(hasFavorite);
    }
  }, [me?.favorites]);

  useEffect(() => {
    getMe();
  }, []);

  return (
    <Container backgroundImgUrl={movie.large_cover_image}>
      <Description>
        <Controller>
          <Button
            isActivate={!!me?.email}
            isSelect={like}
            onClick={invokeToggleLike}
          >
            Like
          </Button>
          <Button
            isActivate={!!me?.email}
            isSelect={favorite}
            onClick={invokeToggleFavorite}
          >
            Favorite
          </Button>
        </Controller>
        <h2>{movie.title}</h2>
        <h3>Rating : {movie.rating}</h3>
        <h3>Genres : {movie.genres.map((genre) => genre).join(', ')}</h3>
        <h3>Runtime : {movie.runtime}minutes</h3>
        <div>
          <h3>Summary</h3>
          <p>{movie.summary ? movie.summary : 'there is no summary'}</p>
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
  display: ${(props) => !props.isActivate && 'none'};
  background-color: ${(props) => (props.isActivate ? 'black' : '#00000078')};
  color: ${(props) => (props.isSelect ? 'red' : 'gray')};
  border: none;
  border-radius: 6px;
  padding: 0.3rem 1rem;
`;
