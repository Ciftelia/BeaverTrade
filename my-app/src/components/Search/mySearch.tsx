import React, { useState } from 'react';
import { TextField, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar: React.FC<{ setSearchQuery: (query: string) => void }> = ({ setSearchQuery }) => {
  return (
    <form>
      <TextField
        id="search-bar"
        color="secondary"
        className="text"
        onInput={(e) => {
          setSearchQuery((e.target as HTMLInputElement).value);
        }}
        label="Search"
        variant="outlined"
        placeholder="By Category, Company or Brand"
        size="small"
      />
      <IconButton type="submit" aria-label="search">
        <SearchIcon />
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
      <SearchBar setSearchQuery={setSearchQuery} />
      {/* Render filtered data */}
      <ul>
        {dataFiltered.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default MySearchComponent;