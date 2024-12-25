import React, { useState, useEffect } from "react";
import { TextField, IconButton, Autocomplete } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = ({ setSearchQuery, options }) => {
  return (
    <form className="search-form">
      <Autocomplete
        freeSolo
        options={options.map((option) => option.name)}
        renderInput={(params) => (
          <TextField
            {...params}
            id="search-bar"
            className="text"
            onInput={(e) => {
              setSearchQuery(e.target.value);
            }}
            variant="outlined"
            placeholder="By Category, Company or Brand"
            size="small"
          />
        )}
        className="autocomplete"
      />
      <IconButton type="submit" aria-label="search">
        <SearchIcon style={{ fill: "secondary" }} />
      </IconButton>
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
      <SearchBar setSearchQuery={setSearchQuery} options={dataFiltered} />
    </div>
  );
};

export default MySearchComponent;
