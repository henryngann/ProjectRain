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
}

const ItemGraph = ({
  highAlch,
  lowAlch,
  itemCost,
  chartKey,
  itemName,
  itemExamine,
}: graphProps) => {
  return (
    <Box display="flex" flexDirection="column" key={chartKey}>
      <Typography id="modal-modal-title" variant="h6" component="h2">
        {itemName}
      </Typography>
      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        {itemExamine}
      </Typography>
      <Bar
        redraw
        data={{
          labels: ["lowAlch", "highAlch", "itemCost"],
          datasets: [
            {
              label: "Coins",
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
};

export default ItemGraph;
