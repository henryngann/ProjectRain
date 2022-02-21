import { Box, Typography } from "@mui/material";
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
      <Box sx={{ width: 500, height: 500 }}>
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
    </Box>
  );
};

export default ItemGraph;
