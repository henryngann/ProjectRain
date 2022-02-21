import { Box, CardActionArea, Modal, Stack } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useState } from "react";
import ItemImage from "../atoms/ItemImage";
import ItemGraph, { graphProps } from "./ItemGraph";

interface CardProps extends graphProps {
  width?: number;
  height?: number;
  image?: string;
  itemName?: string;
  itemDesc?: string;
  imageKey?: number;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const ItemCard = ({
  width,
  height,
  image,
  itemName,
  imageKey,
  itemDesc,
  onClick,
}: CardProps) => {
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

  return (
    <Card sx={{ width: 164, height: 109 }}>
      <CardActionArea onClick={onClick}>
        <CardContent>
          <Stack direction="column" alignItems="center" justifyContent="center">
            <ItemImage src={image} width={50} height={50} id={imageKey} />
            <Typography gutterBottom variant="subtitle2" component="div">
              {itemName}
            </Typography>
          </Stack>
        </CardContent>

        <Box sx={modalStyle}>
          <ItemGraph itemName={itemName} />
        </Box>
      </CardActionArea>
    </Card>
  );
};

export default ItemCard;
