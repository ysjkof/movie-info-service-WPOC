import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Thumbnails from '../components/Thumbnails';
import { useMovie } from '../hooks/useMovie';
import { Container } from './Home';

function Search() {
  const { movies, searchMovieTitle } = useMovie();
  const { term } = useParams();

  useEffect(() => {
    searchMovieTitle(term ?? '');
  }, [term]);

  return (
    <Container>
      <Thumbnails movies={movies} />
    </Container>
  );
}

export default Search;
