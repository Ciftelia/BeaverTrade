import "./Header.css";
import { AppBar, Toolbar, Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import SearchBar from "../Search/SearchBar";

const Header = () => {
  return (
    <AppBar position="fixed" className="toolbar">
      <Toolbar>
        <Button color="inherit" component={Link} to="/">
          <Typography variant="h6" sx={{ textTransform: "capitalize" }}>
            BeaverTrade
          </Typography>
        </Button>
        <Button color="inherit" component={Link} to="/about">
          <Typography variant="h6" sx={{ textTransform: "capitalize" }}>
            About
          </Typography>
        </Button>
        <Box className="search-container">
          <SearchBar />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
