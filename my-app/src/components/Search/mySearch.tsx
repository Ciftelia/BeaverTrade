import React, { useState } from 'react';
import { TextField, IconButton, Autocomplete } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';


const SearchBar: React.FC<{ setSearchQuery: (query: string) => void, options: any[] }> = ({ setSearchQuery, options }) => {
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
              setSearchQuery((e.target as HTMLInputElement).value);
            }}
            variant="outlined"
            placeholder="By Category, Company or Brand"
            size="small"
          />
        )}
        className="autocomplete"
      />
      <IconButton type="submit" aria-label="search">
        <SearchIcon style={{ fill: 'blue' }} />
      </IconButton>
    </form>
  );
};

const filterData = (query: string, data: any[]) => {
  return data.filter((item) => item.name.toLowerCase().includes(query.toLowerCase()));
};

const MySearchComponent: React.FC<{ data: any[] }> = ({ data }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const dataFiltered = filterData(searchQuery, data);

  return (
    <div>
      <SearchBar setSearchQuery={setSearchQuery} options={dataFiltered} />
    </div>
  );
};

export default MySearchComponent;