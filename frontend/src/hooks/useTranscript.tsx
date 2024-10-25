import { useContext } from "react";
import { TranscriptContext } from "../contexts/TranscriptContext";

const useTranscript = () => {
  const transcript = useContext(TranscriptContext);

  if (!transcript) {
    throw new Error("useTranscript must be used within a TranscriptProvider");
  }

  return transcript;
};

export { useTranscript };
