import React, { useEffect } from "react";
import Title from "../../typography/Title";
import Dropdown from "../../Dropdown";
import Button from "../../Button";
import { useTranscript } from "../../../hooks/useTranscript";

type OutputHeaderProps = {
  onSelectTime: (value: string) => void;
  selectedTime: string;
};

const OutputHeader: React.FC<OutputHeaderProps> = ({
  onSelectTime,
  selectedTime,
}) => {
  const { isListening, setIsListening, setTranscript, recognitionRef } =
    useTranscript();

  useEffect(() => {
    if (!isListening || !recognitionRef?.current) return;

    if (!recognitionRef) {
      alert("Speech RecognitionRef API is not supported in this browser.");
      return;
    }

    const handleStart = () => {
      console.log("Speech recognitionRef started");
    };

    const handleEnd = () => {
      console.log("Speech recognitionRef stopped");
      if (isListening) recognitionRef?.current?.start(); // Restart if still listening
    };

    const handleResult = (event: SpeechRecognitionEvent) => {
      const currentTranscript = Array.from(event.results)
        .map((result) => result[0].transcript)
        .join("");

      setTranscript(currentTranscript);
    };

    const handleError = (event: SpeechRecognitionErrorEvent) => {
      console.error("Error occurred in speech recognitionRef: ", event.error);
    };

    recognitionRef.current.onstart = handleStart;
    recognitionRef.current.onend = handleEnd;
    recognitionRef.current.onresult = handleResult;
    recognitionRef.current.onerror = handleError;
  }, [recognitionRef, isListening, setTranscript]);

  const handleListening = () => {
    if (!recognitionRef?.current) return;
    if (!isListening) {
      setIsListening(true);
      recognitionRef.current.start();
    } else {
      recognitionRef.current.stop();
      recognitionRef.current.onstart = null;
      recognitionRef.current.onend = null;
      recognitionRef.current.onresult = null;
      recognitionRef.current.onerror = null;
      setTranscript("");
      setIsListening(false);
    }
  };

  return (
    <div className="flex items-center justify-between mb-4">
      <Title>Transcript Output</Title>
      <div className="flex items-center space-x-4">
        <Dropdown
          options={["10m", "1hr", "3hr"]}
          onSelect={onSelectTime}
          selectedOption={selectedTime}
        />
        <Button onClick={handleListening}>
          {isListening ? "Recording" : "Start Recording"}
        </Button>
      </div>
    </div>
  );
};

export default OutputHeader;
