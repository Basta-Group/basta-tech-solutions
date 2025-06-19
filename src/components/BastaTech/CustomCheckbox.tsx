import { useState } from "react";
import { FaCheck } from "react-icons/fa";

type CustomCheckboxProps = {
  label: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  checkColor?: string; // Tailwind class, e.g. "text-blue-600"
};

const CustomCheckbox = ({
  label,
  checked = false,
  onChange,
  checkColor = "text-blue-600",
}: CustomCheckboxProps) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleToggle = () => {
    const newValue = !isChecked;
    setIsChecked(newValue);
    if (onChange) onChange(newValue);
  };

  return (
    <label className="flex items-center space-x-1 cursor-pointer select-none">
      <div
        className={`w-5 h-5 border-2 border-black  flex items-center justify-center transition-colors duration-200 ${
          isChecked ? "bg-white" : ""
        }`}
        onClick={handleToggle}
      >
        {isChecked && <FaCheck className={`text-sm ${checkColor}`} />}
      </div>
      <span className="text-[#000000] font-medium text-[16px]">{label}</span>
    </label>
  );
};

export default CustomCheckbox;
