import { FormEvent, useRef } from "react";
import { useNavigate } from "react-router-dom";

function SearchForm() {
  const navigate = useNavigate();
  const searchRef = useRef<HTMLInputElement>(null);

  const searchMovie = (event: FormEvent) => {
    event.preventDefault();
    const title = searchRef.current?.value;
    navigate(`search/${title}`);
  };

  return (
    <form onSubmit={searchMovie}>
      <input type={"search"} ref={searchRef} />
    </form>
  );
}
export default SearchForm;
