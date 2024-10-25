import { useTranscript } from "../../../hooks/useTranscript";
import LogListItem from "./LogListItem";

const LogList = () => {
  const { logs, logType } = useTranscript();

  return (
    <div className="overflow-y-auto grow">
      {logs[logType].map((log, index) => (
        <LogListItem key={index} timestamp={log.timestamp} content={log.log} />
      ))}
    </div>
  );
};

export default LogList;
