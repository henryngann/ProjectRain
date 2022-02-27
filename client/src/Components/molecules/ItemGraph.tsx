import { Box, Grid, Hidden, Typography } from "@mui/material";
import React from "react";
import ItemImage from "../atoms/ItemImage";
import RegImage from "../atoms/RegImage";

export interface graphProps {
  highAlch?: number;
  lowAlch?: number;
  itemCost?: number;
  chartKey?: string;
  itemName?: string;
  itemExamine?: string;
  itemRelease?: string;
  itemUpdated?: string;
  itemImage?: string;
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
  itemImage,
  itemExamine,
  itemUpdated,
  itemRelease,
  questItem,
  tradeableGe,
  wikiLink,
  members,
}: graphProps) => {
  const lowAlchImage = `https://raw.githubusercontent.com/henryngann/ProjectRain/main/client/src/assets/Low_level_alchemy_icon.png`;
  const highAlchImage = `https://raw.githubusercontent.com/henryngann/ProjectRain/main/client/src/assets/High_Level_Alchemy_icon.png`;
  const generalStoreImage = `https://raw.githubusercontent.com/henryngann/ProjectRain/main/client/src/assets/General_store_icon.png`;
  return (
    <Grid container display="flex" flexDirection="column" key={chartKey}>
      <Grid
        container
        item
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sm
        xs={12}
      >
        <Grid item xs={12} sm={6}>
          <a href={wikiLink} style={{ textDecoration: "none" }}>
            <Box display="flex" alignItems="center">
              <ItemImage src={itemImage} />
              <Typography variant="h6" style={{ textDecoration: "none" }}>
                {itemName}
              </Typography>
            </Box>
          </a>

          <Typography variant="subtitle2" sx={{ mt: 2 }}>
            {itemExamine}
          </Typography>
        </Grid>
        <Hidden smDown>
          <Grid item xs sm={6}>
            <Typography variant="subtitle2" sx={{ mt: 2 }}>
              Item Last Updated On: {itemUpdated}
            </Typography>
            <Typography variant="subtitle2" sx={{ mt: 2, mb: 1 }}>
              Item Released On: {itemRelease}
            </Typography>
          </Grid>
        </Hidden>
        <Grid item xs sm={4}>
          <Typography variant="subtitle2" sx={{ mt: 2 }}>
            {questItem === true ? (
              <>
                This is a <span style={{ color: "orange" }}>Quest</span> Item!
              </>
            ) : (
              <>
                This is not a{" "}
                <span style={{ color: "orange" }}>Quest Item!</span>
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
                This is{" "}
                <span style={{ color: "orange" }}>a Free to Play Item!</span>
              </>
            )}
          </Typography>
        </Grid>
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
        </Grid>
      </Grid>

      <Grid item>
        {/* <Hidden smDown>
            <Box width={"15vw"} height={"15vh"} mt={7}>
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
          </Hidden> */}
      </Grid>
    </Grid>
  );
};

export default ItemGraph;
