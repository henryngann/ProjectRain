import { Grid } from "@mui/material";
import React from "react";
import { Root } from "../../Hooks/useRandomImageApi";
import ItemCard from "../molecules/ItemCard";

interface osrsItemProps {
  result?: Root;
  isLoading?: boolean;
  error?: string;
}

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
