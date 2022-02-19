import React from "react";

interface imageProps {
  width?: number;
  height?: number;
  src?: string;
  id?: number;
  flipped?: boolean;
}

const RegImage = ({ width, height, src, id, flipped }: imageProps) => {
  return (
    <img
      alt=""
      src={src}
      width={width}
      height={height}
      key={id}
      style={flipped ? { transform: `scaleX(-1)` } : { transform: "0" }}
    />
  );
};

export default RegImage;
