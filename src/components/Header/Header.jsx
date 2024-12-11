import React, { useEffect, useState } from "react";
import "./Header.css";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import { MySearchComponent } from "../Search/mySearch";


export const Header = () => {
  const [backendData, setBackendData] = useState([]); // Initialize as an array

  useEffect(() => {
    fetch("http://localhost:4500/name")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setBackendData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error); // Handle fetch errors
      });
  }, []);

  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h5" className="title" color="secondary">
          BeaverTrade
        </Typography>
        <Box className="search-container">
          <MySearchComponent data={backendData} />
        </Box>
      </Toolbar>
    </AppBar>
  );
};
