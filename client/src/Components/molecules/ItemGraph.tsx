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
interface graphProps {
  highAlch?: number;
  lowAlch?: number;
  itemCost?: number;
  chartKey?: string;
  itemName?: string;
}

const ItemGraph = ({ highAlch, lowAlch, itemCost, chartKey }: graphProps) => {
  return (
    <Bar
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
  );
};

export default ItemGraph;
