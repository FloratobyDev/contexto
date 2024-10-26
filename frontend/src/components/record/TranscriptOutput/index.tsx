import OutputDisplay from "./OutputDisplay";
import OutputHeader from "./OutputHeader";

const TranscriptOutput = () => {
  return (
    <div>
      <OutputHeader />
      <OutputDisplay progress={100} totalWords={400} />
    </div>
  );
};

export default TranscriptOutput;
