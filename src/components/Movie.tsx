import styled from "styled-components";

function Movie({ movie }) {
  return (
    <Container>
      <CoverImg src={movie.medium_cover_image} />
      <Title>{movie.title}</Title>
    </Container>
  );
}
export default Movie;

const Container = styled.div`
  width: 240px;
`;
const Title = styled.h2`
  width: 100%;
  word-wrap: break-word;
`;
const CoverImg = styled.img``;
