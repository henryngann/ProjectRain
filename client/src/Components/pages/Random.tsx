import CasinoIcon from "@mui/icons-material/Casino";
import { Grid, IconButton, Toolbar } from "@mui/material";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import React from "react";
import OSRSItems from "../organisms/OSRSItems";
import TopNavBar from "../organisms/TopNavBar";

const Random = () => {
  const randomButton = () => {
    console.log("pressed");
  };

  return (
    <Box sx={{ display: "flex" }}>
      <TopNavBar title="Random Items! Go Crazy!" />

      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <Toolbar />
        {/* Search Bar Content Here*/}

        <IconButton
          color="info"
          sx={{ p: "10px" }}
          aria-label="directions"
          onClick={randomButton}
        >
          <CasinoIcon />
        </IconButton>
        <Grid container direction="row" spacing={4}>
          <OSRSItems />
        </Grid>
      </Box>
    </Box>
  );
};
export default Random;
