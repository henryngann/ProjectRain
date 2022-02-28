import { Box, Grid } from "@mui/material";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import * as React from "react";
import ProfilePicture from "../atoms/ProfilePicture";

export default function AvatarCard() {
  return (
    <Card sx={{ display: "flex" }} elevation={24}>
      <Grid
        container
        item
        direction="column"
        xs
        sm={12}
        p={3}
        spacing={1}
        justifyContent="center"
        alignItems="baseline"
      >
        <Grid item mb={3}>
          <Typography variant="h3">Hey! I'm Henry!</Typography>
        </Grid>

        <Grid item mb={4}>
          <Typography variant="h6">
            I've been actively developing websites ever since I was a kid and it
            is still what I love to do in my free time! I'm an avid hackathon
            enthusiast so you might find me participating in the same ones you
            do! Aside from coding, one of my favourite past-times is that I
            enjoy barking at other dogs. Just kidding, but if you want to get to
            know me, shoot me a message!
          </Typography>
        </Grid>
        <Grid item mt={4}>
          <Typography variant="subtitle2" color="text.secondary">
            Find more of my work
            <a
              style={{ textDecoration: "none" }}
              href="https://github.com/henryngann"
            >
              {" "}
              here!
            </a>
          </Typography>
        </Grid>
      </Grid>
    </Card>
  );
}
