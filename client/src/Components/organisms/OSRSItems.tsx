import { Box, Grid, Modal, Typography } from "@mui/material";
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
  const [modalOpen, setmodalOpen] = useState(false);
  const handleOpen = () => setmodalOpen(true);
  const handleClose = () => setmodalOpen(false);

  return (
    <>
      {isLoading && <p>Loading data...</p>}
      {error && <p>An error occurred</p>}
      {result && (
        <>
          {result._items.slice(1).map((item, it) => {
            return (
              <>
                {console.log(item)}
                <Grid item xs={6} sm key={it}>
                  <ItemCard
                    onClick={handleOpen}
                    key={result?._items[it].id}
                    itemName={result?._items[it].name}
                    image={result?._items[it].icon}
                  />
                </Grid>
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
                    <Box display="flex" flexDirection="column">
                      <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                      >
                        {result?._items[it].name}
                      </Typography>
                      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        {result._items[it].examine}
                      </Typography>
                      <ItemGraph
                        chartKey={result?._items[it].id}
                        lowAlch={result._items[it].lowalch}
                        highAlch={result._items[it].highalch}
                        itemCost={result._items[it].cost}
                      />
                    </Box>
                  </Box>
                </Modal>
              </>
            );
          })}
        </>
      )}
    </>
  );
};

export default OSRSItems;
