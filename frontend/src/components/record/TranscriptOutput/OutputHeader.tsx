import { useEffect } from "react";
import Button from "../../Button";
import { useTranscript } from "../../../hooks/useTranscript";
import Header from "../../typography/Header";


const OutputHeader = () => {
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
      <Header>Transcript Output</Header>
      <div className="flex items-center space-x-4">
        <Button
          iconSvg={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={16}
              height={16}
              color={"#18181E"}
              fill={"none"}
            >
              <path
                d="M17 7V11C17 13.7614 14.7614 16 12 16C9.23858 16 7 13.7614 7 11V7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7Z"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M17 7H14M17 11H14"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M20 11C20 15.4183 16.4183 19 12 19M12 19C7.58172 19 4 15.4183 4 11M12 19V22M12 22H15M12 22H9"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          }
          variant="primary"
          onClick={handleListening}
        >
          {isListening ? "Recording" : "Start Recording"}
        </Button>
      </div>
    </div>
  );
};

export default OutputHeader;
