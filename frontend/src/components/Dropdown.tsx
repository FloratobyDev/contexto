import React from 'react';

type DropdownProps = {
  options: string[];
  onSelect: (value: string) => void;
  selectedOption: string;
};

const Dropdown: React.FC<DropdownProps> = ({ options, onSelect, selectedOption }) => {
  return (
    <select
      value={selectedOption}
      onChange={(e) => onSelect(e.target.value)}
      className="bg-gray-800 text-white px-3 py-1 rounded"
    >
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
