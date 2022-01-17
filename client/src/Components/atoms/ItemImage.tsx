import React from "react";

interface itemProps {
  width?: number;
  height?: number;
  src?: string;
  id?: number;
}
const ItemImage = ({ width, height, src, id }: itemProps) => {
  return (
    <img
      alt="Media"
      key={id}
      width={width}
      height={height}
      src={`data:image/png;base64,${src}`}
    />
  );
};

export default ItemImage;
