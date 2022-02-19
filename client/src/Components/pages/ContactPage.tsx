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
      <TopNavBar />
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <Toolbar />
        <AvatarCard />
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
