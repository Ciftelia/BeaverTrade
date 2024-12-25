import React, { useState, useEffect } from "react";
import { TextField, IconButton, Autocomplete } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate, useLocation } from "react-router-dom";

const SearchBar = ({ setSearchQuery, options, searchQuery }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const updateState = (newState) => {
    setSearchQuery(newState);
    const newParams = new URLSearchParams(location.search);
    newParams.set("q", newState);
    navigate(`?${newParams.toString()}`);
  };

  return (
    <form className="search-form" onSubmit={(e) => e.preventDefault()}>
      <Autocomplete
        freeSolo
        options={options.map((option) => option.name)}
        renderInput={(params) => (
          <TextField
            {...params}
            id="search-bar"
            value={searchQuery}
            onChange={(e) => updateState(e.target.value)}
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <IconButton type="submit">
                  <SearchIcon />
                </IconButton>
              ),
            }}
          />
        )}
      />
    </form>
  );
};

const filterData = (query, data) => {
  return data.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );
};

export const MySearchComponent = ({ data }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const dataFiltered = filterData(searchQuery, data);

  return (
    <div>
      <SearchBar
        setSearchQuery={setSearchQuery}
        options={dataFiltered}
        searchQuery={searchQuery}
      />
    </div>
  );
};

export default MySearchComponent;
