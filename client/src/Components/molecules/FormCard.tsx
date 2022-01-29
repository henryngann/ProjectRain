import { Button, Stack, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import * as React from "react";

export default function MediaControlCard() {
  return (
    <Card sx={{ display: "flex", width: "50rem", height: "20rem" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Stack
            direction="column"
            spacing={3}
            alignContent="flex-start"
            justifyContent="flex-start"
          >
            <Stack direction="row" spacing={8}>
              <TextField id="outlined-basic" label="Name" variant="outlined" />
              <TextField
                id="outlined-basic"
                label="Subject"
                variant="outlined"
              />
            </Stack>
            <TextField
              sx={{ width: "48rem" }}
              id="filled-multiline-flexible"
              label="Multiline"
              rows={5}
              multiline
            />
            <Button variant="outlined" sx={{ width: 100, height: 35 }}>
              Submit
            </Button>
          </Stack>
        </CardContent>
      </Box>
    </Card>
  );
}
