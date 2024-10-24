import React from 'react';
import BodyText from '../../typography/BodyText';

type LogListItemProps = {
  timestamp: string;
  content: string;
};

const LogListItem: React.FC<LogListItemProps> = ({ timestamp, content }) => {
  return (
    <div className="mb-4">
      <p className="text-sm font-medium text-gray-400">{timestamp}</p>
      <BodyText>{content}</BodyText>
    </div>
  );
};

export default LogListItem;
