import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const Header = () => {
  return (
    <Grid container item direction="column" justifyContent={"center"}>
      <Grid item>
        <Typography variant="bigTitle">Project</Typography>
      </Grid>
      <Box ml={1}>
        <Grid item>
          <Typography variant="subtitle1">
            Track prices, buy smarter.
          </Typography>
        </Grid>
      </Box>
    </Grid>
  );
};

export default Header;
