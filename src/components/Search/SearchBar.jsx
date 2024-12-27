import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import "./SearchBar.css";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/search?q=${query}`); // Update the URL with the search query
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
        className="search-input"
      />
      <IconButton
        type="submit"
        onClick={handleSearch}
        className="search-button"
      >
        <SearchIcon />
      </IconButton>
    </div>
  );
};

export default SearchBar;
