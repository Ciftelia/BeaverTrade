import React from "react";
import "./Header.css";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import MySearchComponent from "../Search/mySearch";

const data = [
  { name: 'Option 1' },
  { name: 'Option 2' },
  { name: 'Option 3' },
  { name: 'Option 4' },
  { name: 'Option 5' },
];

export const Header: React.FC = () => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h5" className="title">
          BeaverTrade
        </Typography>
        <Box className="search-container">
          <MySearchComponent data={data} />
        </Box>
      </Toolbar>
    </AppBar>
  );
};
