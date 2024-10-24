import TranscriptLogs from "../components/record/TranscriptLogs";
import TranscriptOutput from "../components/record/TranscriptOutput";

const Record = () => {
  return (
    <div className="flex flex-col h-full">
      <TranscriptOutput />
      <TranscriptLogs />
    </div>
  );
};

export default Record;
