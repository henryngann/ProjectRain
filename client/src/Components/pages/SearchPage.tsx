import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import React from "react";
import SearchBar from "../organisms/Searchbar";
import TopNavBar from "../organisms/TopNavBar";

const SearchPage = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <TopNavBar />
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <Toolbar />
        <SearchBar />
        {/* Search Bar Content Here*/}
      </Box>
    </Box>
  );
};
export default SearchPage;
