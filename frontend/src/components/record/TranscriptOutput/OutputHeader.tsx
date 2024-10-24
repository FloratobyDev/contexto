import React from 'react';
import Title from '../../typography/Title';
import Dropdown from '../../Dropdown';
import Button from '../../Button';

type OutputHeaderProps = {
  onRecord: () => void;
  onSelectTime: (value: string) => void;
  selectedTime: string;
};

const OutputHeader: React.FC<OutputHeaderProps> = ({ onRecord, onSelectTime, selectedTime }) => {
  return (
    <div className="flex items-center justify-between mb-4">
      <Title>Transcript Output</Title>
      <div className="flex items-center space-x-4">
        <Dropdown options={['10m', '1hr', '3hr']} onSelect={onSelectTime} selectedOption={selectedTime} />
        <Button onClick={onRecord}>Start Recording</Button>
      </div>
    </div>
  );
};

export default OutputHeader;
