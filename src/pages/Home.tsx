import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Movie from "../components/Movie";
import { useMovie } from "../hook/useMovie";

function Home() {
  const { getMovies, movies, getMovie } = useMovie();
  const [pageNumber, setPageNumber] = useState(1);

  const intersectionRef = useRef<HTMLDivElement>(null);
  const intersectionCalback = () => {
    setPageNumber((prev) => prev + 1);
  };

  const options = {
    root: null, // 뷰포트로 사용할 요소, 기본값은 브라우저의 뷰포트
    rootMargin: "0px", // root의 마진, 기본값은 0. px나 % 사용
    threshold: 0.5, // 요소의 몇%가 보일때 작동할 것인지
  };
  const observer = new IntersectionObserver(intersectionCalback, options);

  useEffect(() => {
    if (intersectionRef.current) {
      observer.observe(intersectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    getMovies(pageNumber);
  }, [pageNumber]);

  return (
    <Container>
      <Movies>
        {movies.length === 0 && <Worning>검색 결과가 없습니다.</Worning>}
        {movies?.map((movie, idx) => (
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
  background-color: red;
  height: 100px;
`;
