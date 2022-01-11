import React from "react";

interface itemProps {
  width?: number;
  height?: number;
  src?: string;
}
const ItemImage = ({ width, height, src }: itemProps) => {
  return (
    <img width={width} height={height} src={`data:image/png;base64,${src}`} />
  );
};

export default ItemImage;
