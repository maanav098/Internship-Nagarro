import React from "react";

interface ImgComponentProps {
  keyProp: string | number;
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
}

const ImgComponent: React.FC<ImgComponentProps> = ({
  keyProp,
  src,
  alt,
  className = "",
  style = {},
}) => {
  return (
    <img
      key={keyProp}
      src={src}
      alt={alt}
      className={`App-logo ${className}`}
      style={style}
    />
  );
};

export default ImgComponent;
