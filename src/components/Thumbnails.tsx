import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import { MovieType } from '../controllers/movieController';
import { ToDoInModal } from './Modal';
import MovieThumbnail from './Thumbnail';

interface MovieProps {
  movies: MovieType[];
  setPageNumber?: React.Dispatch<React.SetStateAction<number>>;
}

function Thumbnails({ movies, setPageNumber }: MovieProps) {
  const navigate = useNavigate();
  const [thumbnailMovies, setThumbnailMovies] = useState(movies);

  const openMovie = (movieId: number) => {
    navigate('', {
      state: {
        hasModal: true,
        todo: ToDoInModal.openMovie,
        movieId,
      },
    });
  };

  const intersectionRef = useRef<HTMLDivElement>(null);
  const intersectionCalback = () => {
    setPageNumber && setPageNumber((prev) => prev + 1);
  };
  useIntersectionObserver(intersectionRef, intersectionCalback);

  useEffect(() => {
    setThumbnailMovies(movies);
  }, [movies]);
  return (
    <>
      <ContainerThumbnail>
        {thumbnailMovies.length === 0 && (
          <Worning>검색 결과가 없습니다.</Worning>
        )}
        {thumbnailMovies.map(
          (movie) =>
            movie && (
              <MovieThumbnail
                key={movie.id + Date.now()}
                movie={movie}
                openMovie={() => openMovie(movie.id)}
              />
            )
        )}
      </ContainerThumbnail>
      {setPageNumber && <Intersection ref={intersectionRef} />}
    </>
  );
}
export default Thumbnails;

export const ContainerThumbnail = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 4rem;
  gap: 2rem;
  min-height: 100%;
  justify-content: center;
`;

const Worning = styled.p`
  padding-top: 2rem;
`;

export const Intersection = styled.div`
  background-color: #282828;
  height: 100px;
  @keyframes appear {
    from {
      height: 0px;
    }
    99% {
      height: 0px;
    }
    to {
      height: 100px;
    }
  }
  animation-name: appear;
  animation-duration: 1s;
  animation-iteration-count: 1;
`;
