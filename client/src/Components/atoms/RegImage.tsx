import React from "react";

interface imageProps {
  width?: number;
  height?: number;
  src?: string;
  id?: number;
}

const RegImage = ({ width, height, src, id }: imageProps) => {
  return <img src={src} width={width} height={height} key={id} />;
};

export default RegImage;
