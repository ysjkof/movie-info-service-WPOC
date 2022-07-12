import { FormEvent, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useMovie } from "../hook/useMovie";
import debouunce from "../utils/debounce";
import { isZeroLengthArray } from "../utils/utils";
import HighlightText from "./HighlightText";

function SearchForm() {
  const { movieTitles, getMovies } = useMovie();
  const [autoComplete, setAutoComplete] = useState<string[]>([]);
  const navigate = useNavigate();
  const searchInputRef = useRef<HTMLInputElement>(null);
  const term = searchInputRef.current?.value;

  const searchMovie = (event: FormEvent) => {
    event.preventDefault();
    closeAutoComplete();
    navigate(`search/${term}`);
  };

  const closeAutoComplete = () => setAutoComplete([]);

  const checkFuzzyStringMatch = (term: string) => {
    const regex = new RegExp(term);
    return movieTitles.filter((title) => regex.test(title.toLowerCase()));
  };

  const getAutoComplete = (event: FormEvent) => {
    event.preventDefault();

    function invokeAutoComplete() {
      if (!term) return setAutoComplete([]);

      let titles = checkFuzzyStringMatch(term);
      if (isZeroLengthArray(titles)) titles = ["검색어 없음"];
      setAutoComplete(titles);
    }

    debouunce(invokeAutoComplete, { timeout: 200 });
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
          {autoComplete.map((title) => (
            <HighlightText title={title} term={term!} />
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
