import OutputDisplay from "./OutputDisplay";
import OutputHeader from "./OutputHeader";

const TranscriptOutput = () => {
  return (
    <div className="shrink-0">
      <OutputHeader
        onRecord={function (): void {
          throw new Error("Function not implemented.");
        }}
        onSelectTime={function (value: string): void {
          console.log("Selected time:", value);

          throw new Error("Function not implemented.");
        }}
        selectedTime={""}
      />
      <OutputDisplay
        content={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
        progress={100}
        totalWords={400}
      />
    </div>
  );
};

export default TranscriptOutput;
