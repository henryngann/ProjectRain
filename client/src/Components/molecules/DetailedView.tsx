import { Box, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import ItemImage from "../atoms/ItemImage";
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
interface PaperProps {
  image?: string;
  itemName?: string;
  itemDesc?: string;
  imageKey?: number;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const DetailedView = ({ itemDesc, itemName, imageKey, image }: PaperProps) => {
  return (
    <Paper
      variant="outlined"
      elevation={24}
      sx={{ width: "50vw", height: "50vh" }}
    >
      <Grid container display="flex" flexDirection="column" alignItems="center">
        <Grid item>
          <ItemImage src={image} width={55} height={55} />
        </Grid>
        <Grid item>
          <Typography variant="h4">{itemName}</Typography>
        </Grid>
        <Grid item>
          <Typography variant="subtitle2">{itemDesc}</Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default DetailedView;
