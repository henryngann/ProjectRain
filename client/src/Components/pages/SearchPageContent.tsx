import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import React from "react";
import SearchBar from "../organisms/Searchbar";
import TopNavBar from "../organisms/TopNavBar";

const SearchPageContent = () => {
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
export default SearchPageContent;
