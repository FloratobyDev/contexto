import TranscriptLogs from "../components/record/TranscriptLogs";
import TranscriptOutput from "../components/record/TranscriptOutput";
import TranscriptProvider from "../contexts/TranscriptContext";

const Record = () => {
  return (
    <div className="flex flex-col h-full">
      <TranscriptProvider>
        <TranscriptOutput />
        <TranscriptLogs />
      </TranscriptProvider>
    </div>
  );
};

export default Record;
