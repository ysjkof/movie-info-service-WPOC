import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Movie from "../components/Movie";
import useIntersectionObserver from "../hook/useIntersectionObserver";
import { useMovie } from "../hook/useMovie";

function Home() {
  const { getMovies, movies, getMovie } = useMovie();
  const [pageNumber, setPageNumber] = useState(1);

  const intersectionRef = useRef<HTMLDivElement>(null);
  const intersectionCalback = () => {
    setPageNumber((prev) => prev + 1);
  };
  useIntersectionObserver(intersectionRef, intersectionCalback);

  useEffect(() => {
    getMovies(pageNumber);
  }, [pageNumber]);

  return (
    <Container>
      <Movies>
        {movies.length === 0 && <Worning>검색 결과가 없습니다.</Worning>}
        {movies?.map((movie) => (
          <Movie
            key={movie.id + Date.now()}
            movie={movie}
            openMovie={() => getMovie(movie.id)}
          />
        ))}
      </Movies>
      <Intersection ref={intersectionRef} />
    </Container>
  );
}

export default Home;

export const Container = styled.div`
  background-color: ${(props) => props.theme.bgColor.blue};
  color: ${(props) => props.theme.color.default};
  height: 100vh;
`;

export const Movies = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 4rem;
  gap: 2rem;
  min-height: 100%;
  justify-content: center;
`;

export const Worning = styled.p`
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
