import { FormEvent, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useMovie } from '../hooks/useMovie';
import debouunce from '../utils/debounce';
import { getRegex, isZeroLengthArray } from '../utils/utils';
import HighlightText from './HighlightText';

function SearchForm() {
  const { movieTitles, getMovies } = useMovie();
  const [autoComplete, setAutoComplete] = useState<string[]>([]);
  const navigate = useNavigate();
  const searchInputRef = useRef<HTMLInputElement>(null);

  const searchMovie = (event: FormEvent) => {
    event.preventDefault();
    const term = searchInputRef.current?.value;
    if (term) {
      closeAutoComplete();
      navigate(`search/${term}`);
    }
  };

  const closeAutoComplete = () => setAutoComplete([]);

  const checkFuzzyStringMatch = (term: string) => {
    return movieTitles.filter((title) => getRegex(term).test(title));
  };

  const invokeAutoComplete = (term: string | undefined) => {
    if (!term) return setAutoComplete([]);
    let titles = checkFuzzyStringMatch(term);
    if (isZeroLengthArray(titles)) titles = ['검색어 없음'];
    setAutoComplete(titles);
  };

  const getAutoComplete = (event: FormEvent) => {
    event.preventDefault();
    const term = searchInputRef.current?.value;
    debouunce(() => invokeAutoComplete(term), { timeout: 200 });
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <Form onSubmit={searchMovie}>
      <input
        type={'search'}
        ref={searchInputRef}
        onBlur={closeAutoComplete}
        onChange={getAutoComplete}
      />
      {autoComplete.length > 0 && (
        <AutoCompleteContainer>
          {autoComplete.map((title, idx) => (
            <HighlightText
              key={idx}
              title={title}
              term={searchInputRef.current?.value!}
            />
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
  position: absolute;
  z-index: 15;
  width: 100%;
  display: flex;
  flex-direction: column;
  color: black;
  background-color: white;
`;
