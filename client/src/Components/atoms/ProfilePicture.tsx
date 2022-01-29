import { Avatar } from "@mui/material";
import React from "react";
//https://avatars.githubusercontent.com/u/64046050?v=4

const ProfilePicture = () => {
  return (
    <Avatar
      alt="Henry Ngan"
      src="https://avatars.githubusercontent.com/u/64046050?v=4"
      sx={{ width: 300, height: 300 }}
    />
  );
};

export default ProfilePicture;
