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
    [LogTypes.TEN_MIN]: [
      {
        timestamp: "2024-10-23T14:30:00Z",
        log: `However, minor fluctuations in data synchronization between servers were observed. These are within acceptable margins but should be monitored to ensure no further drift occurs. The system’s auto-scaling configurations were not triggered, indicating the load is well within the current system’s capacity.
        
Moving forward, this data will serve as a comparative reference for subsequent 10-minute intervals. Any deviation from these initial metrics could signal potential bottlenecks or areas where optimization may be required.`,
      },
      {
        timestamp: "2024-10-23T14:30:00Z",
        log: `The second 10-minute interval shows a slight increase in system resource utilization, possibly due to a rise in user engagement. CPU usage increased by 5%, and memory utilization is approaching the halfway mark, suggesting that we may need to prepare for additional load if this trend continues.
  
The request-response time has remained stable, averaging around 250 milliseconds per request. This is a good indication that the application is handling requests efficiently, although we noticed a few isolated instances of minor delays in response times. These delays are attributed to occasional spikes in database query times, which may benefit from optimization.
  
Error logs show a slight increase in network-related issues, primarily in specific regions, likely due to external factors rather than system limitations. Monitoring will continue to ensure these issues do not escalate or spread to other regions, as such instances can impact user experience if they become more frequent.
  
Overall, the second collection reaffirms the system’s stability, though continuous monitoring is advised to preemptively catch any potential issues before they affect the broader user base.`,
      },
    ],
    [LogTypes.THIRTY_MIN]: [
      {
        timestamp: "2024-10-23T14:30:00Z",
        log: `
          Error tracking tools detected a small number of HTTP 500 errors, predominantly from regions with slower network connections. These errors account for less than 0.01% of total requests and have minimal impact on the overall experience. However, we will continue to monitor these instances to ensure no underlying issues are contributing to the errors.
  
          In conclusion, the 30-minute data points suggest the system is handling user traffic well, though minor tweaks in database optimization may enhance performance under prolonged high-load conditions.`,
      },
      {
        timestamp: "2024-10-23T14:30:00Z",
        log: `
          The second 30-minute interval saw an unexpected rise in error logs associated with network instability in specific zones. Despite this, the general system performance remains robust, with no critical errors reported. Response times held steady, and the server utilization stayed consistent with earlier metrics.
  
          Additionally, we noticed a slight increase in cache hit rates, which positively impacted load times for frequently accessed data. The caching mechanism appears to be functioning as expected, though adjusting cache expiration intervals might further reduce database query load during peak times. Memory consumption plateaued, suggesting that resource reallocation might not be necessary in the short term.
  
          CPU usage, however, exhibited a 7% increase during this period, possibly due to more intensive backend processes. We may explore options for process optimization to keep CPU usage within lower thresholds, preventing potential overheating issues in high-traffic scenarios.
  
          Future assessments will focus on improving regional network reliability and fine-tuning cache strategies, ensuring that the application remains performant even under sudden traffic surges.`,
      },
    ],
    [LogTypes.ONE_HOUR]: [
      {
        timestamp: "2024-10-23T14:30:00Z",
        log: `
          At the one-hour mark, the system has proven capable of sustaining a steady load, with no significant performance degradation observed. CPU and memory usage are stable, and request handling remains efficient, with minimal delays across all endpoints. However, we’ve recorded a slight uptick in response times during brief, high-activity periods.
  
          Further inspection shows that these brief slowdowns coincide with times of increased database access. This reinforces the need to streamline our database queries and possibly introduce more advanced indexing techniques to enhance retrieval speeds. The auto-scaling mechanisms remain inactive, suggesting that we are well within resource capacity.
  
          In terms of error logs, there has been a minor increase in authentication-related issues, specifically with token validation. These errors are isolated and limited to specific users, indicating that they may stem from external factors like user configuration or network issues rather than any systemic failure.
  
          Moving forward, our priority will be to closely monitor database performance, particularly under load, and proactively address any factors that may influence token validation issues. The hour’s worth of data confirms a reliable system foundation but identifies areas where preemptive optimizations could be beneficial.`,
      },
      {
        timestamp: "2024-10-23T14:30:00Z",
        log: `
          The second hourly log collection indicates a stable performance trend, albeit with slight memory consumption growth, possibly due to prolonged cache retention. This interval also showed a mild increase in response times, particularly during high-query operations, emphasizing the need for query efficiency improvements.
  
          Additional monitoring tools have flagged a few instances of delayed responses in specific regions, possibly due to intermittent ISP issues. While this hasn’t impacted the broader user base, attention will be given to any changes in network latency that could affect future user interactions.
  
          The error log frequency remains low, though several cases of invalid token errors were noted, likely related to user session expiration. Addressing these with improved session handling could streamline the user experience by minimizing session-related disruptions.
  
          In summary, the hour-long review supports the system’s robustness under consistent load while suggesting targeted improvements to database efficiency and network reliability in specific regions. These refinements will help maintain a seamless experience as user demand continues to rise.`,
      },
    ],
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
