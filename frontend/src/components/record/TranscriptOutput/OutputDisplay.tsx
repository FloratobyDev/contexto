import React from "react";
import BodyText from "../../typography/BodyText";
import { useTranscript } from "../../../hooks/useTranscript";

type OutputDisplayProps = {
  progress: number;
  totalWords: number;
};

const OutputDisplay: React.FC<OutputDisplayProps> = ({
  progress,
  totalWords,
}) => {
  const { transcript } = useTranscript();

  return (
    <div className="bg-[#25252E] p-4 rounded-lg text-white">
      {!transcript.length && (
        <div className="flex justify-center items-center min-h-40">
          <BodyText>No transcript available</BodyText>
        </div>
      )}
      {transcript.length > 0 && 
      <div className="min-h-40">
        <BodyText>{transcript}</BodyText>
      </div>
      }
      <div className="flex justify-end text-gray-400 mt-2">
        <span>
          {progress} / {totalWords}
        </span>
      </div>
    </div>
  );
};

export default OutputDisplay;
