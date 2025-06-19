import { Listbox } from "@headlessui/react";
import { FaChevronDown } from "react-icons/fa";
import { useState } from "react";

type CustomDropdownProps = {
  options: string[];
  
  onSelect?: (value: string) => void;
};

const CustomDropdownMenu = ({ options, onSelect }: CustomDropdownProps) => {
  const [selected, setSelected] = useState(options[0]);

  const handleChange = (value: string) => {
    setSelected(value);
    if (onSelect) onSelect(value);
  };

  return (
    <div className="w-full max-w-sm">
      
      <Listbox value={selected} onChange={handleChange}>
        <div className="relative">
          <Listbox.Button className="w-full bg-[#ffffff] border-0 border-b border-gray-400   text-left font-[400] text-[#000000] flex justify-between items-center">
            {selected}
            <FaChevronDown className="text-gray-500 ml-2" />
          </Listbox.Button>

          <Listbox.Options className="absolute z-10 mt-2 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto">
            {options.map((option, index) => (
              <Listbox.Option
                key={index}
                value={option}
                className={({ active, selected }) =>
                  `cursor-pointer px-4 py-2 text-sm ${
                    active ? "bg-blue-100 text-blue-900" : "text-gray-800"
                  } ${selected ? "font-semibold" : ""}`
                }
              >
                {option}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </div>
      </Listbox>
    </div>
  );
};

export default CustomDropdownMenu;
