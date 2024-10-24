import React from 'react';
import BodyText from '../../typography/BodyText';

type OutputDisplayProps = {
  content: string;
  progress: number;
  totalWords: number;
};

const OutputDisplay: React.FC<OutputDisplayProps> = ({ content, progress, totalWords }) => {
  return (
    <div className="bg-[#25252E] p-4 rounded-lg text-white">
      <BodyText>{content}</BodyText>
      <div className="flex justify-end text-gray-400 mt-2">
        <span>{progress} / {totalWords}</span>
      </div>
    </div>
  );
};

export default OutputDisplay;
