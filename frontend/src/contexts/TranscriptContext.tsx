import React, {
  createContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { LogTypes } from "../consts";
import { TranscriptContextType, LogContainerType } from "../types";

type Props = {
  children: React.ReactNode;
};

export const TranscriptContext = createContext<
  TranscriptContextType | undefined
>(undefined);

export default function TranscriptProvider({ children }: Props) {
  const [logs, setLogs] = useState<LogContainerType>({
    [LogTypes.TEN_MIN]: [],
    [LogTypes.THIRTY_MIN]: [],
    [LogTypes.ONE_HOUR]: [],
  });
  const [logType, setLogType] = useState<string>(LogTypes.TEN_MIN);
  const [transcript, setTranscript] = useState<string>("");
  const [isListening, setIsListening] = useState<boolean>(false); // Hook to control listening state
  const recognitionRef = useRef<SpeechRecognition | null>(null); // Use a ref to store the recognition object
  const valueRef = useRef(transcript);

  useEffect(() => {
    if (!("webkitSpeechRecognition" in window)) {
      alert("Speech Recognition API is not supported in this browser.");
      return;
    }

    const recognition = new window.webkitSpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = "en-US";

    recognitionRef.current = recognition;
  }, []);

  useEffect(() => {
    valueRef.current = transcript;
  }, [transcript]);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | null = null; // Declare interval outside to manage its lifecycle

    const sendHeartbeat = async () => {
      console.log("Sending heartbeat", valueRef.current);
      if (!recognitionRef?.current) return;

      setTranscript(""); // Reset transcript to an empty string or initial value
      recognitionRef?.current.stop();
      const newLog = {
        [LogTypes.TEN_MIN]: [
          {
            timestamp: new Date().toLocaleTimeString("en-US", {
              hour12: false,
            }), // 24-hour format
            log: "Collected data after 10 minutes",
          },
        ],
        [LogTypes.THIRTY_MIN]: [
          {
            timestamp: new Date().toLocaleTimeString("en-US", {
              hour12: false,
            }), // 24-hour format
            log: "Collected data after 30 minutes",
          },
        ],
        [LogTypes.ONE_HOUR]: [
          {
            timestamp: new Date().toLocaleTimeString("en-US", {
              hour12: false,
            }), // 24-hour format
            log: "Collected data after 1 hour",
          },
        ],
      };

      setLogs((prevLogs) => {
        return {
          [LogTypes.TEN_MIN]: [
            ...newLog[LogTypes.TEN_MIN],
            ...prevLogs[LogTypes.TEN_MIN],
          ],
          [LogTypes.THIRTY_MIN]: [
            ...newLog[LogTypes.THIRTY_MIN],
            ...prevLogs[LogTypes.THIRTY_MIN],
          ],
          [LogTypes.ONE_HOUR]: [
            ...newLog[LogTypes.ONE_HOUR],
            ...prevLogs[LogTypes.ONE_HOUR],
          ],
        };
      });

      // try {
      //   const response = await fetch("/your-endpoint", {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify({
      //       value: valueRef.current, // Use the ref to get the latest value
      //     }),
      //   });n

      //   if (!response.ok) {
      //     console.error("Failed to send heartbeat");
      //   } else {
      //     console.log("Heartbeat sent successfully");

      //     // Reset the transcript value after sending the heartbeat
      //     setTranscript(""); // Reset transcript to an empty string or initial value
      //   }
      // } catch (error) {
      //   console.error("Error while sending heartbeat:", error);
      // }
    };

    if (isListening) {
      // Start heartbeat only when isListening is true
      const TEN_MINUTES = 10000; // 10 minutes in milliseconds

      interval = setInterval(() => {
        sendHeartbeat();
      }, TEN_MINUTES);

      console.log("Heartbeat started.");
    } else if (interval) {
      // Stop the heartbeat when isListening becomes false
      clearInterval(interval);
      console.log("Heartbeat stopped.");
    }

    // Cleanup on unmount or when isListening changes
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isListening, recognitionRef]);

  const value = useMemo(() => {
    return {
      logs,
      transcript,
      isListening,
      setIsListening,
      logType,
      setLogType,
      setTranscript,
      recognitionRef,
    };
  }, [isListening, logType, logs, transcript]);

  return (
    <TranscriptContext.Provider value={value}>
      {children}
    </TranscriptContext.Provider>
  );
}
