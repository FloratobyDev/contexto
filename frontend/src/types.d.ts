import { MutableRefObject } from 'react';

export interface QAItem {
  id: string;
  questions: string[];
  answer: string;
}

export type LogType = {
  timestamp: string;
  log: string;
};

export type LogContainerType = {
  [key: string]: LogType[];
};

export type TranscriptContextType = {
  logs: LogContainerType;
  transcript: string;
  isListening: boolean;
  setIsListening: (isListening: boolean) => void;
  setTranscript: (transcript: string) => void;
  logType: string;
  setLogType: (logType: string) => void;
  recognitionRef?: MutableRefObject<SpeechRecognition | null>;
};