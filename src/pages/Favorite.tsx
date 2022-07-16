import { useEffect } from "react";
import { useMe } from "../hook/useUser";
import { useMovie } from "../hook/useMovie";
import { Container } from "./Home";
import Thumbnails from "../components/Thumbnails";

function Favorite() {
  const { likeMovies, getLikes } = useMovie();
  const { me, getMe } = useMe();

  useEffect(() => {
    getMe();
  }, []);

  useEffect(() => {
    if (me?.likes) getLikes(me.likes ?? [0]);
  }, [me?.likes]);

  return (
    <Container>
      <Thumbnails movies={likeMovies} />
    </Container>
  );
}

export default Favorite;
