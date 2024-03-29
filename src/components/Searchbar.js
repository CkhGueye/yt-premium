import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";

const Searchbar = ({ handleMenu }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      const encodedTerm = encodeURIComponent(searchTerm);
      navigate(`/search/${encodedTerm}`);
    }
  };

  return (
    <Paper
      className="form-wrapper"
      sx={{
        maxWidth: { xs: "100%", md: "400px" },
      }}
    >
      <IconButton
        className="btn-menu"
        sx={{ p: 1.5, color: "red" }}
        aria-label="menu button"
        onClick={(e) => handleMenu(e)}
      >
        <MenuIcon />
      </IconButton>
      <Box
        component="form"
        onSubmit={handleSubmit}
        autoComplete="off"
        sx={{
          flex: 1,
          display: "flex",
        }}
      >
        <label htmlFor="search-input">Search</label>
        <input
          id="search-input"
          name="search"
          placeholder="Search..."
          type="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <IconButton
          type="submit"
          sx={{ p: 1.5, color: "red" }}
          aria-label="search button"
        >
          <SearchIcon />
        </IconButton>
      </Box>
    </Paper>
  );
};

export default Searchbar;
