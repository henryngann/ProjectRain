import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

interface CardProps {
  width?: number;
  height?: number;
  image?: string;
  itemName?: string;
  itemDesc?: string;
}

export const ItemCard = ({
  width,
  height,
  image,
  itemName,
  itemDesc,
}: CardProps) => {
  return (
    <Card sx={{ maxWidth: 164 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt={`Display of ${itemName}`}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {itemName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {itemDesc}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ItemCard;
