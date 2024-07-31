import React, { useState, useEffect } from "react";

type OriginalSizeImageProps = {
  src: string;
  alt: string;
};
const OriginalSizeImage = ({ src, alt }: OriginalSizeImageProps) => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setDimensions({ width: img.naturalWidth, height: img.naturalHeight });
      //   setDimensions({ width: img.naturalWidth, height: img.naturalHeight });
    };
  }, [src]);

  return (
    <img
      src={src}
      alt={alt}
      width={dimensions.width}
      height={dimensions.height}
      style={{ display: "block" }}
    />
  );
};

export default OriginalSizeImage;
