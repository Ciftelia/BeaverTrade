import "./Header.css";
import { AppBar, Toolbar, Typography, Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import SearchBar from "../Search/SearchBar";

const Header = () => {
  return (
    <AppBar position="fixed" className="toolbar">
      <Toolbar>
        <Button color="inherit" component={Link} to="/">
          BeaverTrade
        </Button>
        <Box className="search-container">
          <SearchBar />
        </Box>
        <Button color="inherit" component={Link} to="/about">
          About
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;