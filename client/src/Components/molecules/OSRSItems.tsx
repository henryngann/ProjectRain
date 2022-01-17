import React from "react";
import useImageApi from "../../Hooks/useImageApi";
import ItemCard from "./ItemCard";

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
              <>
                <img
                  alt="Items"
                  src={`data:image/png;base64,${result?._items[it].icon}`}
                />
              </>
            );
          })}
        </>
      )}
      <ItemCard image={`data:image/png;base64,${result?._items[0].icon}`} />
    </>
  );
};

export default OSRSItems;
