import React from "react";
import { useTranscript } from "../../../hooks/useTranscript";
import Paragraph from "../../typography/Paragraph";

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
    <div className="bg-[#25252E] py-3 px-4 rounded-lg text-white border border-[#2B2B34]">
      {!transcript.length && (
        <div className="flex justify-center items-center min-h-72 overflow-auto">
          <Paragraph muted>No transcript available.</Paragraph>
        </div>
      )}
      {transcript.length > 0 && (
        <div className="h-72 overflow-auto">
          <Paragraph>{transcript}</Paragraph>
        </div>
      )}
      <div className="flex justify-end text-gray-400 mt-2">
        <Paragraph muted>
          {progress}/{totalWords}
        </Paragraph>
      </div>
    </div>
  );
};

export default OutputDisplay;
