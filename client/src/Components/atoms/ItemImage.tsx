import React from "react";

interface itemProps {
  width?: number;
  height?: number;
}
const ItemImage = ({ width, height }: itemProps) => {
  return <img width={width} height={height} src="" />;
};

export default ItemImage;
