import { Grid } from "@mui/material";
import React from "react";
import useImageApi from "../../Hooks/useImageApi";
import ItemCard from "../molecules/ItemCard";

const OSRSItems = () => {
  const { result, error, isLoading } = useImageApi();
  return (
    <>
      {isLoading && <p>Loading data...</p>}
      {error && <p>An error occurred</p>}
      {result && (
        <>
          {result._items.map((item, it) => {
            return (
              <Grid item xs sm>
                <ItemCard
                  image={`data:image/png;base64,${result?._items[it].icon}`}
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
