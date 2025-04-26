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
        d="M50,0 L63,37 L100,50 L63,63 L50,100 L37,63 L0,50 L37,37 Z"
      />
    </svg>
  );
};
