import React, { useState, useRef, useEffect } from "react";

type CustomDropdownProps = {
  options: string[];
  placeholder?: string;
  onChange?: (selected: string) => void;
  arrowIcon: string; // Image path
};

const CareerDropdown: React.FC<CustomDropdownProps> = ({
  options,
  placeholder = "Select an option",
  onChange,
  arrowIcon,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleSelect = (option: string) => {
    setSelected(option);
    setIsOpen(false);
    if (onChange) onChange(option);
  };

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative w-full" ref={dropdownRef}>
      {/* Display box */}
      <div
        className="w-full border-b border-[#CFCFCF]  py-2 text-[30px] text-black flex items-center justify-between cursor-pointer "
        onClick={toggleDropdown}
      >
        <span>{selected || placeholder}</span>
        <img src={arrowIcon} alt="Arrow" className="w-[24px] h-[24px]" />
      </div>

      {/* Dropdown options */}
      {isOpen && (
        <ul className="absolute z-50 w-full mt-2 bg-white border-[1px] border-black overflow-hidden">
          {options.map((opt) => (
            <li
              key={opt}
              onClick={() => handleSelect(opt)}
              className="px-5 py-2 hover:bg-green-600 text-[30px] cursor-pointer text-black"
            >
              {opt}
            </li>
          ))}
        </ul>
      )}

      
    </div>
  );
};

export default CareerDropdown;
