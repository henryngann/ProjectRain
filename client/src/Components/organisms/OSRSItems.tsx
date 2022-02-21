import { Box, Button, Grid, Modal, Typography } from "@mui/material";
import React, { useState } from "react";
import { Root } from "../../Hooks/useRandomImageApi";
import ItemCard from "../molecules/ItemCard";
import ItemGraph from "../molecules/ItemGraph";

interface osrsItemProps {
  result?: Root;
  isLoading?: boolean;
  error?: string;
}
//Modal OnClick

const modalStyle = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "55%",
  transform: "translate(-50%, -50%)",
  width: "70vw",
  height: "80vh",
  bgcolor: "white",
  border: "2px solid #000",
  opacity: 1,
  boxShadow: 1,
  p: 4,
};
const OSRSItems = ({ result, isLoading, error }: osrsItemProps) => {
  return (
    <>
      {isLoading && <p>Loading data...</p>}
      {error && <p>An error occurred</p>}
      {result && (
        <>
          {result._items.slice(1).map((item, it) => {
            return (
              <Grid item xs={6} sm key={it}>
                <ItemCard
                  key={result._items[it]._id}
                  itemName={item?.name}
                  image={item?.icon}
                />
              </Grid>
            );
          })}
        </>
      )}
    </>
  );
};

export default OSRSItems;
