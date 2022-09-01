import { useEffect } from 'react';
import { useMe } from '../hooks/useUser';
import { useMovie } from '../hooks/useMovie';
import { Container } from './Home';
import Thumbnails from '../components/Thumbnails';

function Favorite() {
  const { likeMovies, getFavorites } = useMovie();
  const { me, getMe } = useMe();

  useEffect(() => {
    getMe();
  }, []);

  useEffect(() => {
    if (me?.favorites) getFavorites(me.favorites ?? [0]);
  }, [me]);

  return (
    <Container>
      <Thumbnails movies={likeMovies} />
    </Container>
  );
}

export default Favorite;
