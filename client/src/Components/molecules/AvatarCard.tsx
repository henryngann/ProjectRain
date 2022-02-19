import { Box, Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import * as React from "react";
import ImageGif from "../atoms/ImageGif";
import ProfilePicture from "../atoms/ProfilePicture";

export default function AvatarCard() {
  return (
    <Card sx={{ display: "flex" }} elevation={24}>
      <CardMedia sx={{ padding: 1 }}>
        <ProfilePicture />
      </CardMedia>

      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Grid container direction="column">
            <Grid item mb={3}>
              <Typography variant="h3">Hey! I'm Henry!</Typography>
            </Grid>

            <Grid item mb={3} mt={2}>
              <Typography variant="h6">
                I've been actively developing websites ever since I was a kid
                and it is still what I love to do in my free time! I'm an avid
                hackathon enthusiast so you might find me participating in the
                same ones you do! Aside from coding, one of my favourite
                past-times is that I enjoy barking at other dogs. Just kidding,
                but if you want to get to know me, shoot me a message!
              </Typography>
            </Grid>
            <Grid item mt={5}>
              <Typography variant="subtitle2" color="text.secondary">
                Find more of my work here!
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Box>
    </Card>
  );
}
