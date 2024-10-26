import TranscriptLogs from "../components/record/TranscriptLogs";
import TranscriptOutput from "../components/record/TranscriptOutput";
import TranscriptProvider from "../contexts/TranscriptContext";

const Record = () => {
  return (
    <TranscriptProvider>
      <div className="flex flex-col h-full gap-y-6 pb-8">
        <TranscriptOutput />
        <TranscriptLogs />
      </div>
    </TranscriptProvider>
  );
};

export default Record;
