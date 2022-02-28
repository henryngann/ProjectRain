import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import React from "react";
import RegImage from "../atoms/RegImage";
import AvatarCard from "../molecules/AvatarCard";
import FormCard from "../molecules/FormCard";
import TopNavBar from "../organisms/TopNavBar";

const ContactPage = () => {
  const gnomeImage =
    "https://raw.githubusercontent.com/henryngann/ProjectRain/main/client/src/assets/gnomechild.png";

  return (
    <Box sx={{ display: "flex" }}>
      <TopNavBar title="Feel free to critique and break my website! " />
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <Toolbar />
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          spacing={3}
        >
          <Grid item xs sm={2}>
            <FormCard />
          </Grid>
          <Grid item xs sm={10}>
            <AvatarCard />
          </Grid>
        </Grid>

        <Divider textAlign="center" sx={{ marginY: 5 }}>
          <Typography variant="h2">Have an idea? Lets talk. </Typography>
        </Divider>
        {/* Search Bar Content Here*/}
        <Box display="flex" justifyContent="space-between">
          <RegImage src={gnomeImage} />
          <FormCard />
          <RegImage src={gnomeImage} flipped />
        </Box>
      </Box>
    </Box>
  );
};
export default ContactPage;
