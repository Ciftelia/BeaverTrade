import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import SearchResultCard from "../SearchResultCard/SearchResultCard";

const baseURL = "localhost:3000";

const SearchResults = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const fetchResults = async () => {
      setLoading(true);
      setError(null);
      const query = new URLSearchParams(location.search).get("q");
      try {
        const response = await fetch(`http://${baseURL}/search?q=${query}`);
        const data = await response.json();
        setResults(data);
      } catch (err) {
        setError("Failed to fetch results");
      }
      setLoading(false);
    };

    fetchResults();
  }, [location.search]);

  return (
    <>
      <div className="results-container">
        {loading && <p>Loading...</p>}
        {error && <p className="error">{error}</p>}
        {results.length > 0 ? (
          <ul className="results-list">
            {results.map((result, index) => (
              <SearchResultCard key={index} result={result} />
            ))}
          </ul>
        ) : (
          <p>No results found</p>
        )}
      </div>
    </>
  );
};

export default SearchResults;
