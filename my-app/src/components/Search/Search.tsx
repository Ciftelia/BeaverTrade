import { useState } from "react";
import { SearchBar } from "./SearchBar";
import { SearchResultsList } from "./SearchResultsList";
import "./Search.css";

export const Search = () => {
  const [results, setResults] = useState([]);

  return (
    <>
      <div className="search-container">
        <div className="search-bar-container">
          <SearchBar setResults={setResults} />
        </div>
        <div className="search-bar-results">
          <SearchResultsList results={results} />
        </div>
      </div>
    </>
  );
};
