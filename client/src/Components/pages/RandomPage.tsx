import CasinoIcon from "@mui/icons-material/Casino";
import { Grid, IconButton, Toolbar } from "@mui/material";
import Box from "@mui/material/Box";
import React, { useState } from "react";
import useRandomImageApi, { Root } from "../../Hooks/useRandomImageApi";
import OSRSItems from "../organisms/OSRSItems";
import TopNavBar from "../organisms/TopNavBar";

const Random = () => {
  const { doCall, error, isLoading } = useRandomImageApi();

  const [items, setItems] = useState<Root>();

  const randomButton = () => {
    doCall().then((result) => setItems(result as Root));
  };

  return (
    <Box sx={{ display: "flex" }}>
      <TopNavBar title="Random Items! Go Crazy!" />

      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        alignContent="space-between"
        height="80vh"
      >
        <Toolbar />

        <IconButton
          color="info"
          sx={{ p: "10px" }}
          aria-label="directions"
          onClick={randomButton}
        >
          <CasinoIcon sx={{ width: "10vh", height: "10vh" }} />
        </IconButton>
        <Box ml={5}>
          <Grid container direction="row" spacing={3}>
            <OSRSItems result={items} error={error} isLoading={isLoading} />
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};
export default Random;