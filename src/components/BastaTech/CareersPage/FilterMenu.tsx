import React, { useState } from "react";

import CustomCheckbox from "../CustomCheckbox";
import downArrowIcon from "../../../assets/BastaTech/arrow-right 1.png"

type FilterBlockProps = {
  title: string;
  options: string[];
};

const FilterMenu: React.FC<FilterBlockProps> = ({ title, options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<string[]>([]);
  const [checkOpen, setCheckOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
    setCheckOpen(!checkOpen);
  }

  const handleCheckboxChange = (option: string) => {
    setSelected((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );
  };

  return (
    <div className="border-b pb-4 mb-4 px-2 bg-[#F6F6F6]">
      {/* Header */}
      <div
        className="flex justify-between items-center cursor-pointer "
        onClick={toggleOpen}
      >
        <h3 className={`text-[40px] font-extrabold px-[px] ${isOpen ? "text-[#004FF2]" : "text-black"}`}>
          {title}
        </h3>
        {isOpen ? <img src={downArrowIcon} /> : <img src={downArrowIcon} className="w-[31px] h-[29px]" />}
      </div>

      {/* Dropdown Options */}
      {isOpen && (
        <ul className="mt-3 space-y-2  text-[30px]">
          {options.map((opt) => (
            <li key={opt} className="flex items-center space-x-2">
              <CustomCheckbox
                label={opt}
                checked={selected.includes(opt)}
                onChange={() => handleCheckboxChange(opt)}
                checkColor="text-green-600"
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FilterMenu;
