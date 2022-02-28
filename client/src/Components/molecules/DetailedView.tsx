import { Box, Grid, Paper, Typography } from "@mui/material";
import {
  ArcElement,
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import React from "react";
import { Pie } from "react-chartjs-2";
import {
  freeToPlayImage,
  generalStoreImage,
  highAlchImage,
  lowAlchImage,
  memberImage,
  questImage,
} from "../../assets/Images";
import ItemImage from "../atoms/ItemImage";
import RegImage from "../atoms/RegImage";
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
    <Box width={"12vw"} height={"12vh"} mt={2}>
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
        <Grid
          container
          item
          display="flex"
          flexDirection="column"
          spacing={1}
          mt={1}
          mr={4}
          xs={12}
          sm={5}
        >
          {lowAlch ? (
            <Grid
              item
              display="flex"
              flexDirection="row"
              alignItems="center"
              wrap="nowrap"
            >
              <RegImage src={lowAlchImage} width={18} height={18} />
              <Typography variant="subtitle2" sx={{ ml: 1 }}>
                {lowAlch} gp
              </Typography>
            </Grid>
          ) : null}
          {highAlch ? (
            <Grid
              item
              display="flex"
              flexDirection="row"
              alignItems="center"
              wrap="nowrap"
            >
              <RegImage src={highAlchImage} width={18} height={18} />
              <Typography variant="subtitle2" sx={{ ml: 1 }}>
                {highAlch} gp
              </Typography>
            </Grid>
          ) : null}
          <Grid
            item
            display="flex"
            flexDirection="row"
            alignItems="center"
            wrap="nowrap"
          >
            <RegImage src={generalStoreImage} width={18} height={18} />
            <Typography variant="subtitle2" sx={{ ml: 1 }}>
              {itemCost} gp
            </Typography>
          </Grid>
          <Grid
            item
            display="flex"
            flexDirection="row"
            alignItems="center"
            wrap="nowrap"
          >
            <RegImage src={questImage} width={18} height={18} />
            <Typography variant="subtitle2" sx={{ ml: 1 }}>
              {questItem ? `True` : `False`}
            </Typography>
          </Grid>
          <Grid
            item
            display="flex"
            flexDirection="row"
            alignItems="center"
            wrap="nowrap"
          >
            <RegImage src={members ? memberImage : freeToPlayImage} />

            <Typography variant="subtitle2" sx={{ ml: 1 }}>
              {members ? `Members Item` : `Free To Play Item`}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default DetailedView;
