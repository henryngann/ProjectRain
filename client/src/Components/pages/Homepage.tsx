import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import React from "react";
import SearchBar from "../atoms/Searchbar";
import OSRSItems from "../organisms/OSRSItems";
import SideDrawer from "../organisms/SideDrawer";
import TopNavBar from "../organisms/TopNavBar";

const Homepage = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <TopNavBar />
      <SideDrawer />
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <Toolbar />

        <SearchBar />
        {/* Search Bar Content Here*/}
        <Box marginTop={30}>
          <Divider textAlign="left" sx={{ marginY: 10 }}>
            <Typography variant="h2">Home</Typography>
          </Divider>
          <Grid container direction="row" spacing={4}>
            <OSRSItems />
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};
export default Homepage;
