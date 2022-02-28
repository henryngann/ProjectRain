import { Grid, Hidden, Paper, Typography } from "@mui/material";
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
import { isMobile } from "react-device-detect";
import {
  buyLimitImage,
  coinsImage,
  freeToPlayImage,
  generalStoreImage,
  grandExchangeImage,
  highAlchImage,
  lowAlchImage,
  memberImage,
  natureImage,
  noteImage,
  questImage,
  tradeImage,
  weightImage,
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
  stackable?: boolean;
  weight?: number;
  notable?: boolean;
  equipable?: boolean;
  members?: boolean;
  buyLimit?: number;
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
  buyLimit,
  itemUpdated,
  itemRelease,
  lowAlch,
  highAlch,
  itemCost,
  questItem,
  tradeableGe,
  wikiLink,
  members,
  notable,
  stackable,
  weight,
  equipable,
}: PaperProps) => {
  //This view has an unused graph, and repeated code.
  //Things to do :
  //Extract grid items into reusable components
  //Create a responsive graph for Alchable items
  // const graph = (
  //   <Box width="14vw" height="10vh">
  //     <Pie
  //       redraw
  //       data={{
  //         labels: ["Low Alchemy", "High Alchemy", "Total Value"],
  //         datasets: [
  //           {
  //             label: "GP",
  //             data: [lowAlch, highAlch, itemCost],
  //             backgroundColor: [
  //               "rgba(255, 206, 86, 0.6)",
  //               "rgba(54, 162, 235, 0.6)",
  //               "rgba(255, 99, 132, 0.6)",
  //             ],
  //           },
  //         ],
  //       }}
  //       options={{
  //         responsive: true,

  //         plugins: {
  //           legend: {
  //             position: "right",
  //           },
  //         },
  //       }}
  //     />
  //   </Box>
  // );
  return (
    <Paper
      elevation={20}
      sx={{ width: "50vw", height: isMobile ? "75vh" : "55vh", p: 1 }}
    >
      <Grid
        container
        display="flex"
        flexDirection="column"
        alignItems="center"
        mt={1}
      >
        <Grid item>
          <ItemImage src={image} width={55} height={55} />
        </Grid>
        <Grid item>
          <a href={wikiLink} style={{ textDecoration: "none" }}>
            <Typography variant="h4">{itemName}</Typography>
          </a>
        </Grid>
        <Grid item>
          <Typography variant="subtitle2">{itemDesc}</Typography>
        </Grid>
      </Grid>
      <Grid
        item
        ml={1}
        mt={1}
        mr={1}
        spacing={4}
        container
        display="flex"
        flexDirection="row"
        alignItems="baseline"
      >
        <Grid
          container
          item
          display="flex"
          flexDirection="column"
          spacing={1}
          mt={1}
          xs={12}
          sm={3}
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
        </Grid>
        <Grid
          container
          item
          display="flex"
          flexDirection="column"
          spacing={1}
          mt={1}
          xs={12}
          sm={3}
        >
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
          <Grid
            item
            display="flex"
            flexDirection="row"
            alignItems="center"
            wrap="nowrap"
          >
            <RegImage src={grandExchangeImage} width={18} height={18} />
            <Typography variant="subtitle2" sx={{ ml: 1 }}>
              {tradeableGe ? `True` : `False`}
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          item
          display="flex"
          flexDirection="column"
          spacing={1}
          mt={1}
          xs={12}
          sm={3}
        >
          <Grid
            item
            display="flex"
            flexDirection="row"
            alignItems="center"
            wrap="nowrap"
          >
            <RegImage src={coinsImage} width={18} height={18} />
            <Typography variant="subtitle2" sx={{ ml: 1 }}>
              {stackable ? `Stackable` : `Not Stackable`}
            </Typography>
          </Grid>
          <Grid
            item
            display="flex"
            flexDirection="row"
            alignItems="center"
            wrap="nowrap"
          >
            <RegImage src={tradeImage} />

            <Typography variant="subtitle2" sx={{ ml: 1 }}>
              {equipable ? `Equipable` : `Unequipable`}
            </Typography>
          </Grid>
          <Grid
            item
            display="flex"
            flexDirection="row"
            alignItems="center"
            wrap="nowrap"
          >
            <RegImage src={weightImage} width={18} height={18} />
            <Typography variant="subtitle2" sx={{ ml: 1 }}>
              {weight ? weight : `No Weight`}
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          item
          display="flex"
          flexDirection="column"
          spacing={1}
          mt={1}
          xs={12}
          sm={3}
        >
          <Grid
            item
            display="flex"
            flexDirection="row"
            alignItems="center"
            wrap="nowrap"
          >
            <RegImage src={noteImage} width={18} height={18} />
            <Typography variant="subtitle2" sx={{ ml: 1 }}>
              {notable ? `Noteable` : `Unnoteable`}
            </Typography>
          </Grid>
          <Grid
            item
            display="flex"
            flexDirection="row"
            alignItems="center"
            wrap="nowrap"
          >
            <RegImage src={natureImage} width={18} height={18} />

            <Typography variant="subtitle2" sx={{ ml: 1 }}>
              202 gp
            </Typography>
          </Grid>
          <Grid
            item
            display="flex"
            flexDirection="row"
            alignItems="center"
            wrap="nowrap"
          >
            <RegImage src={buyLimitImage} width={18} height={18} />
            <Typography variant="subtitle2" sx={{ ml: 1 }}>
              {buyLimit ? `Buy Limit ${buyLimit}` : `No Buy Limit`}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Hidden smDown>
        <Grid
          container
          item
          display="flex"
          justifyContent="space-between"
          mt={5}
          p={5}
        >
          <Grid item xs sm={4}>
            <Typography variant="subtitle2" sx={{ mt: 2 }}>
              Item Last Updated On: {itemUpdated}
            </Typography>
            <Typography variant="subtitle2" sx={{ mt: 2, mb: 1 }}>
              Item Released On: {itemRelease}
            </Typography>
          </Grid>
          <Grid item xs sm={6}>
            <Typography variant="subtitle2" sx={{ mt: 2 }}>
              <a href={wikiLink} style={{ textDecoration: "none" }}>
                For more information, click here to be sent to the item's
                wikipedia page.
              </a>
            </Typography>
          </Grid>
        </Grid>
      </Hidden>
    </Paper>
  );
};

export default DetailedView;
