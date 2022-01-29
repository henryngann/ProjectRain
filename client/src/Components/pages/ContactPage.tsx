import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import React from "react";
import AvatarCard from "../molecules/AvatarCard";
import FormCard from "../molecules/FormCard";
import TopNavBar from "../organisms/TopNavBar";

const ContactPage = () => {
  const ariaLabel = { "aria-label": "description" };

  return (
    <Box sx={{ display: "flex" }}>
      <TopNavBar />
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <Toolbar />
        <AvatarCard />

        {/* Search Bar Content Here*/}
        <Box>
          <Divider textAlign="left" sx={{ marginY: 10 }}>
            <Typography variant="h2">Contact Me!</Typography>
          </Divider>
          <FormCard />
        </Box>
      </Box>
    </Box>
  );
};
export default ContactPage;
