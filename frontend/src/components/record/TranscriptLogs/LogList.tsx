import React from 'react';
import LogListItem from './LogListItem';

type LogListProps = {
  logs: Array<{ timestamp: string; content: string }>;
};

const LogList: React.FC<LogListProps> = ({ logs }) => {
  return (
    <div className="overflow-y-auto grow">
      {logs.map((log, index) => (
        <LogListItem key={index} timestamp={log.timestamp} content={log.content} />
      ))}
    </div>
  );
};

export default LogList;
