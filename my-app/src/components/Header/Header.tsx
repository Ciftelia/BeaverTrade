import React from "react";
import "./Header.css";
import { AppBar, Toolbar, Typography } from "@mui/material";
import MySearchComponent from "../Search/mySearch";

export const Header: React.FC = () => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h5" className="title">
          BeaverTrade
        </Typography>
        <div className="search-container">
          <MySearchComponent data={[]} />
        </div>
      </Toolbar>
    </AppBar>
  );
};
