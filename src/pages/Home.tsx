import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Thumbnails from '../components/Thumbnails';
import { useMovie } from '../hooks/useMovie';

function Home() {
  const { getMovies, movies } = useMovie();
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    getMovies(pageNumber);
  }, [pageNumber]);

  return (
    <Container>
      <Thumbnails movies={movies} setPageNumber={setPageNumber} />
    </Container>
  );
}

export default Home;

export const Container = styled.div`
  background-color: ${(props) => props.theme.bgColor.blue};
  color: ${(props) => props.theme.color.default};
  height: 100vh;
`;
