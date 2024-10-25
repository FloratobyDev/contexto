import OutputDisplay from "./OutputDisplay";
import OutputHeader from "./OutputHeader";

const TranscriptOutput = () => {

  return (
    <div className="shrink-0">
      <OutputHeader
        onSelectTime={function (value: string): void {
          console.log("Selected time:", value);
          throw new Error("Function not implemented.");
        }}
        selectedTime={""}
      />
      <OutputDisplay progress={100} totalWords={400} />
    </div>
  );
};

export default TranscriptOutput;
