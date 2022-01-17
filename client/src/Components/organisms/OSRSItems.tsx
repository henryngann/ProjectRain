import { Grid } from "@mui/material";
import React from "react";
import useRandomImageApi from "../../Hooks/useRandomImageApi";

import ItemCard from "../molecules/ItemCard";

const OSRSItems = () => {
  const { result, error, isLoading } = useRandomImageApi();
  return (
    <>
      {isLoading && <p>Loading data...</p>}
      {error && <p>An error occurred</p>}
      {result && (
        <>
          {result._items.map((item, it) => {
            return (
              <Grid item xs={6} sm={2} key={it}>
                <ItemCard
                  key={result?._items[it].id}
                  itemName={result?._items[it].name}
                  image={result?._items[it].icon}
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
