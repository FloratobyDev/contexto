import React from "react";

type DropdownProps = {
  options: string[];
  onSelect: (value: string) => void;
  selectedOption: string;
};

const Dropdown: React.FC<DropdownProps> = ({
  options,
  onSelect,
  selectedOption,
}) => {
  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-gray-800 text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
          id="options-menu"
          aria-haspopup="true"
          aria-expanded="true"
          onClick={() => {}}
        >
          {selectedOption}
        </button>
      </div>

      <div
        className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-gray-800 ring-1 ring-black ring-opacity-5 focus:outline-none"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="options-menu"
      >
        <div className="py-1" role="none">
          {options.map((option) => (
            <button
              key={option}
              onClick={() => onSelect(option)}
              className="block px-4 py-2 text-sm text-white hover:bg-gray-700 hover:text-white"
              role="menuitem"
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
    // <select
    //   value={selectedOption}
    //   onChange={(e) => onSelect(e.target.value)}
    //   className="bg-gray-800 text-white px-4 py-3 rounded-lg"
    // >
    //   {options.map((option) => (
    //     <option key={option} value={option}>
    //       {option}
    //     </option>
    //   ))}
    // </select>
  );
};

export default Dropdown;
