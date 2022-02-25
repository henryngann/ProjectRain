import { Box, Grid, Hidden, Stack, Typography } from "@mui/material";
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import React from "react";
import { Bar } from "react-chartjs-2";
import { isMobile } from "react-device-detect";
import { Link } from "react-router-dom";
import RegImage from "../atoms/RegImage";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
export interface graphProps {
  highAlch?: number;
  lowAlch?: number;
  itemCost?: number;
  chartKey?: string;
  itemName?: string;
  itemExamine?: string;
  itemRelease?: string;
  itemUpdated?: string;
  questItem?: boolean;
  tradeableGe?: boolean;
  wikiLink?: string;
  members?: boolean;
}

const ItemGraph = ({
  highAlch,
  lowAlch,
  itemCost,
  chartKey,
  itemName,
  itemExamine,
  itemUpdated,
  itemRelease,
  questItem,
  tradeableGe,
  wikiLink,
  members,
}: graphProps) => {
  const lowAlchImage = `https://static.wikia.nocookie.net/2007scape/images/a/ab/Low_level_alchemy_icon.png/revision/latest?cb=20130802134837`;
  const coinsImage =
    "https://raw.githubusercontent.com/henryngann/ProjectRain/main/client/src/assets/coins.png";
  return (
    <Grid container display="flex" flexDirection="column" key={chartKey}>
      <Grid
        container
        item
        direction="row"
        justifyContent="space-between"
        alignItems="baseline"
      >
        <Grid item>
          <a href={wikiLink} style={{ textDecoration: "none" }}>
            <Typography
              variant="h6"
              component="h2"
              style={{ textDecoration: "none" }}
            >
              {itemName}
            </Typography>
          </a>

          <Typography sx={{ mt: 2 }}>{itemExamine}</Typography>
        </Grid>
        <Hidden smDown>
          <Grid item>
            <Typography variant="subtitle2" sx={{ mt: 2 }}>
              Item Last Updated On: {itemUpdated}
            </Typography>
            <Typography variant="subtitle2" sx={{ mt: 2, mb: 1 }}>
              Item Released On: {itemRelease}
            </Typography>
          </Grid>
        </Hidden>
      </Grid>
      <Grid>
        <Hidden smDown>
          <Box width={"20vw"} height={"20vh"} mt={5}>
            <Bar
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
        </Hidden>
      </Grid>
      <Hidden smUp>
        <Stack display="flex" flexDirection="row" alignItems="center">
          <RegImage src={lowAlchImage} width={18} height={18} />
          <Typography variant="subtitle2" sx={{ mt: 0.9, mr: 1 }}>
            : {lowAlch}
          </Typography>
        </Stack>
        <Stack display="flex" flexDirection="row" alignItems="center">
          <Typography variant="subtitle2" sx={{ mt: 0.9, mr: 1 }}>
            High Alchemy: {highAlch}
          </Typography>

          <RegImage src={coinsImage} width={18} height={18} />
        </Stack>
        <Stack display="flex" flexDirection="row" alignItems="center">
          <Typography variant="subtitle2" sx={{ mt: 0.9, mr: 1 }}>
            Item Cost: {itemCost}
          </Typography>
          <RegImage src={coinsImage} width={18} height={18} />
        </Stack>
      </Hidden>

      {/* <Typography variant="subtitle2" sx={{ mt: 2 }}>
        {questItem === true ? (
          <>
            This is a <span style={{ color: "orange" }}>Quest</span> Item!
          </>
        ) : (
          <>
            This is not a <span style={{ color: "red" }}>Quest Item!</span>
          </>
        )}
      </Typography>
      <Typography variant="subtitle2" sx={{ mt: 2 }}>
        {tradeableGe === true ? (
          <>
            This is <span style={{ color: "green" }}>tradable!</span>
          </>
        ) : (
          <>
            This is <span style={{ color: "red" }}> not tradable!</span>
          </>
        )}
      </Typography>
      <Typography variant="subtitle2" sx={{ mt: 2 }}>
        {members === true ? (
          <>
            This is <span style={{ color: "green" }}>a Members Item!</span>
          </>
        ) : (
          <>
            This is <span style={{ color: "red" }}>a Free to Play Item!</span>
          </>
        )}
      </Typography> */}
    </Grid>
  );
};

export default ItemGraph;
