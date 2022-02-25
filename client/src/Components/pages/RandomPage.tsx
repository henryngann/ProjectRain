import CasinoIcon from "@mui/icons-material/Casino";
import { Grid, IconButton, Toolbar, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import React, { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";
import useRandomImageApi, { Root } from "../../Hooks/useRandomImageApi";
import OSRSItems from "../organisms/OSRSItems";
import TopNavBar from "../organisms/TopNavBar";

const Random = () => {
  const { doCall, error, isLoading } = useRandomImageApi();

  const [items, setItems] = useState<Root>();

  useEffect(() => {
    doCall().then((result) => setItems(result as Root)); // eslint-disable-next-line
  }, []);

  const randomButton = () => {
    doCall().then((result) => setItems(result as Root));
  };

  return (
    <Box sx={{ display: "flex" }}>
      <TopNavBar title="Random set of Runescape items. Check it out!" />
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        alignContent="center"
        height="80vh"
      >
        <Toolbar />
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          mr={isMobile ? 0 : 2}
        >
          <Typography variant="h4">
            Not sure what you're looking for?
          </Typography>
          <Typography mt={3} variant="h6">
            Try rolling the dice
          </Typography>
          <IconButton
            color="info"
            aria-label="directions"
            onClick={randomButton}
          >
            <CasinoIcon sx={{ width: "5vh", height: "5vh" }} />
          </IconButton>
        </Box>
        <Box ml={isMobile ? 0 : 5} mr={isMobile ? 0 : 5}>
          <Grid container direction="row" spacing={3}>
            <OSRSItems result={items} error={error} isLoading={isLoading} />
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};
export default Random;
