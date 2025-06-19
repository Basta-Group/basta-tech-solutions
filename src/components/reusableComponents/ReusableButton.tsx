import React from "react";
import classNames from "classnames";

interface ReusableButtonProps {
  label: string;
  onClick?: () => void;
  color?: string;         // background color (e.g., "bg-blue-500")
  textColor?: string;     // text color (e.g., "text-white")
  fontSize?: string;      // font size (e.g., "text-base")
  padding?: string;       // padding (e.g., "px-4 py-2")
  rounded?: string;       // rounding (e.g., "rounded-lg")
  className?: string;     // additional tailwind classes
}

const ReusableButton: React.FC<ReusableButtonProps> = ({
  label,
  onClick,
  color = "bg-[#004FF2]",
  textColor = "text-white",
  fontSize = "text-[22px]",
  padding = "px-4 py-2",
  rounded = "none",
  className = "",
}) => {
  return (
    <button
      onClick={onClick}
      className={classNames(
        color,
        textColor,
        fontSize,
        padding,
        rounded,
       
        className
      )}
    >
      {label}
    </button>
  );
};

export default ReusableButton;
