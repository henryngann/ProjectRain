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
  ArcElement,
  Tooltip,
} from "chart.js";
import { Bar, Pie } from "react-chartjs-2";
interface PaperProps {
  image?: string;
  itemName?: string;
  itemDesc?: string;
  imageKey?: number;
  highAlch?: number;
  lowAlch?: number;
  itemRelease?: string;
  itemUpdated?: string;
  itemCost?: number;
  questItem?: boolean;
  tradeableGe?: boolean;
  wikiLink?: string;
  members?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  ArcElement,
  Legend
);

const DetailedView = ({
  itemDesc,
  itemName,
  image,
  itemUpdated,
  itemRelease,
  lowAlch,
  highAlch,
  itemCost,
  questItem,
  tradeableGe,
  wikiLink,
  members,
}: PaperProps) => {
  const graph = (
    <Box width={"15vw"} height={"15vh"} mt={7}>
      <Pie
        redraw
        data={{
          labels: ["Low Alchemy", "High Alchemy", "Total Value"],
          datasets: [
            {
              label: "GP",
              data: [lowAlch, highAlch, itemCost],
              backgroundColor: [
                "rgba(255, 206, 86, 0.6)",
                "rgba(54, 162, 235, 0.6)",
                "rgba(255, 99, 132, 0.6)",
              ],
            },
          ],
        }}
        options={{
          maintainAspectRatio: true,
        }}
      />
    </Box>
  );
  return (
    <Paper
      variant="outlined"
      elevation={24}
      sx={{ width: "50vw", height: "50vh", p: 2 }}
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
      <Grid container display="flex" flexDirection="row" alignItems="center">
        <Grid item xs sm={6}>
          <Typography variant="subtitle2" sx={{ mt: 2 }}>
            Item Last Updated On: {itemUpdated}
          </Typography>
          <Typography variant="subtitle2" sx={{ mt: 2, mb: 1 }}>
            Item Released On: {itemRelease}
          </Typography>
        </Grid>
        <Grid item>{graph}</Grid>
      </Grid>
    </Paper>
  );
};

export default DetailedView;
