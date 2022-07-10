import { useEffect, useState } from "react";
import styled from "styled-components";
import Movie from "../components/Movie";
import { useMovie } from "../hook/useMovie";

function Home() {
  const { getMovies, movies, getMovie } = useMovie();
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    getMovies(pageNumber);
  }, [pageNumber]);

  return (
    <Container>
      <Movies>
        {movies.length === 0 && <Worning>검색 결과가 없습니다.</Worning>}
        {movies?.map((movie, idx) => (
          <Movie
            key={movie.id + idx}
            movie={movie}
            openMovie={() => getMovie(movie.id)}
          />
        ))}
      </Movies>
    </Container>
  );
}

export default Home;

export const Container = styled.div`
  background-color: ${(props) => props.theme.bgColor.blue};
  color: ${(props) => props.theme.color.default};
`;

export const Movies = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 4rem;
  gap: 2rem;
  justify-content: center;
`;

export const Worning = styled.p`
  padding-top: 2rem;
`;
