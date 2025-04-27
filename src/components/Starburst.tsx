import React from "react";

interface StarburstProps {
  size?: number;
  color?: string;
  className?: string;
  onClick?: () => void;
}

export const Starburst: React.FC<StarburstProps> = ({
  size = 40,
  color = "#4B6F2E",
  className = "",
  onClick,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      onClick={onClick}
      aria-hidden="true"
    >
      <path
        fill={color}
        d="M100,50 L76.14,41.42 L90.45,22.45 L66.23,27.44 L65.45,2.45 L50,22.5 L34.55,2.45 L33.77,27.44 L9.55,22.45 L23.86,41.42 L0,50 L23.86,58.58 L9.55,77.55 L33.77,72.56 L34.55,97.55 L50,77.5 L65.45,97.55 L66.23,72.56 L90.45,77.55 L76.14,58.58 Z"
      />
    </svg>
  );
};
