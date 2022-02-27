import { Grid } from "@mui/material";
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
        <Grid container display="flex" flexDirection="column">
          <Grid item xs>
            <SearchBar />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
export default SearchPage;
