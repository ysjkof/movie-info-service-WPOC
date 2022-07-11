import { FormEvent, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useMovie } from "../hook/useMovie";
import { isZeroLengthArray } from "../utils/utils";

function SearchForm() {
  const { movieTitles, getMovies } = useMovie();
  const [autoComplete, setAutoComplete] = useState<string[]>([]);
  const navigate = useNavigate();
  const searchInputRef = useRef<HTMLInputElement>(null);

  const searchMovie = (event: FormEvent) => {
    event.preventDefault();
    closeAutoComplete();
    const term = searchInputRef.current?.value;
    navigate(`search/${term}`);
  };

  const closeAutoComplete = () => {
    setAutoComplete([]);
  };

  const filterTitle = (term: string) =>
    movieTitles.filter((title) => title.toLowerCase().includes(term));

  const getAutoComplete = (event: FormEvent) => {
    event.preventDefault();
    const term = searchInputRef.current?.value;

    if (!term) return setAutoComplete([]);
    let titles = filterTitle(term);

    if (isZeroLengthArray(titles)) titles = ["검색어 없음"];

    setAutoComplete(titles);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <Form onSubmit={searchMovie}>
      <input
        type={"search"}
        ref={searchInputRef}
        onBlur={closeAutoComplete}
        onChange={getAutoComplete}
      />
      {autoComplete.length > 0 && (
        <AutoCompleteContainer>
          {autoComplete.map((a) => (
            <p key={a}>{a}</p>
          ))}
        </AutoCompleteContainer>
      )}
    </Form>
  );
}
export default SearchForm;

const Form = styled.form`
  position: relative;
`;
const AutoCompleteContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: absolute;
  background-color: white;
  color: black;
  p {
  }
`;
