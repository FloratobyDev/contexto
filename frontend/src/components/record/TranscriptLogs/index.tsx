import React, { useMemo } from "react";
import LogHeader from "./LogHeader";
import LogList from "./LogList";
import { LogTypes } from "../../../consts";
import { useTranscript } from "../../../hooks/useTranscript";

const TranscriptLogs: React.FC = () => {
  const { logType, setLogType } = useTranscript();

  const tabs = useMemo(() => {
    return [LogTypes.TEN_MIN, LogTypes.THIRTY_MIN, LogTypes.ONE_HOUR];
  }, []);

  const onTabChange = (value: LogTypes) => {
    setLogType(value);
  };

  return (
    <div className="flex flex-col h-full overflow-y-auto">
      <LogHeader tabs={tabs} onTabChange={onTabChange} selectedTab={logType} />
      <LogList />
    </div>
  );
};

export default TranscriptLogs;
