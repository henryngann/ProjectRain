import { Box, Grid, Modal } from "@mui/material";
import React, { useState } from "react";
import { isMobile } from "react-device-detect";
import { Item, Root } from "../../Hooks/useRandomImageApi";
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
  width: isMobile ? "60vw" : "35vw",
  height: isMobile ? "60vh" : "30vh",
  bgcolor: "white",
  border: "2px solid #000",
  opacity: 1,
  boxShadow: 1,
  p: 4,
};
const OSRSItems = ({ result, isLoading, error }: osrsItemProps) => {
  const [modalOpen, setmodalOpen] = useState(false);
  const [modalItem, setModalItem] = useState<Item>();
  const handleOpen = () => {
    setmodalOpen(true);
  };
  const handleClose = () => setmodalOpen(false);

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
                  onClick={() => {
                    handleOpen();
                    setModalItem(item);
                  }}
                  itemName={item?.name}
                  image={item?.icon}
                />
              </Grid>
            );
          })}
          <Modal
            sx={{
              "& .MuiBackdrop-root": {
                backgroundColor: "transparent",
              },
            }}
            open={modalOpen}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={modalStyle}>
              <ItemGraph
                itemImage={modalItem?.icon}
                tradeableGe={modalItem?.tradeable_on_ge}
                questItem={modalItem?.quest_item}
                itemName={modalItem?.name}
                itemExamine={modalItem?.examine}
                lowAlch={modalItem?.lowalch}
                highAlch={modalItem?.highalch}
                itemCost={modalItem?.cost}
                itemRelease={modalItem?.release_date}
                itemUpdated={modalItem?.last_updated}
                wikiLink={modalItem?.wiki_url}
                members={modalItem?.members}
              />
            </Box>
          </Modal>
        </>
      )}
    </>
  );
};

export default OSRSItems;
