import { Box, Hidden, Typography } from "@mui/material";
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
}: graphProps) => {
  return (
    <Box display="flex" flexDirection="column" key={chartKey}>
      <Typography variant="h6" component="h2">
        {itemName}
      </Typography>
      <Typography sx={{ mt: 2 }}>{itemExamine}</Typography>
      <Typography variant="subtitle2" sx={{ mt: 2 }}>
        Item Last Updated On: {itemUpdated}
      </Typography>
      <Typography variant="subtitle2" sx={{ mt: 2 }}>
        Item Released On: {itemRelease}
      </Typography>
      <Hidden smDown>
        <Box width={"20vw"} height={"20vh"}>
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
      <Hidden smUp>
        <Typography variant="subtitle2" sx={{ mt: 2 }}>
          Low Alchemy: {lowAlch} -coin icon-
        </Typography>
        <Typography variant="subtitle2" sx={{ mt: 2 }}>
          High Alchemy: {highAlch} -coin icon-
        </Typography>
        <Typography variant="subtitle2" sx={{ mt: 2 }}>
          Item Cost: {itemCost} -coin icon-
        </Typography>
      </Hidden>

      <Typography variant="subtitle2" sx={{ mt: 2 }}>
        {questItem === true ? (
          <>
            This is a <span style={{ color: "orange" }}>Quest</span> Item.
          </>
        ) : (
          <>
            This is not a <span style={{ color: "red" }}>Quest Item.</span>
          </>
        )}
      </Typography>
      <Typography variant="subtitle2" sx={{ mt: 2 }}>
        {tradeableGe === true ? (
          <>
            This is <span style={{ color: "green" }}>tradable.</span>
          </>
        ) : (
          <>
            This is <span style={{ color: "red" }}> not tradable.</span>
          </>
        )}
      </Typography>
    </Box>
  );
};

export default ItemGraph;
