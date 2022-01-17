import { CardActionArea, Stack } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import * as React from "react";
import ItemImage from "../atoms/ItemImage";

interface CardProps {
  width?: number;
  height?: number;
  image?: string;
  itemName?: string;
  itemDesc?: string;
  imageKey?: number;
}

export const ItemCard = ({
  width,
  height,
  image,
  itemName,
  imageKey,
  itemDesc,
}: CardProps) => {
  return (
    <Card sx={{ width: 164, height: 109 }}>
      <CardActionArea>
        <CardContent>
          <Stack direction="column" alignItems="center" justifyContent="center">
            <ItemImage src={image} width={50} height={50} id={imageKey} />
            <Typography gutterBottom variant="subtitle2" component="div">
              {itemName}
            </Typography>
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ItemCard;
