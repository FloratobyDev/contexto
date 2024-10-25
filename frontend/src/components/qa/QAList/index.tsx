import { useState } from "react";
import { QAItem } from "../../../types";
import QADisplayList from "./QADisplayList";
import QAHeader from "./QAHeader";

const QAList = () => {
  const [qaItems, setQAItems] = useState<QAItem[]>([
    {
      id: "aaslkdjiou",
      questions: [
        "What is the capital of France?",
        "Paris is the capital of France.",
        "It is located in the north-central part of the country.",
        "The city is known for its art, culture, and history.",
      ],
      answer: "Paris",
    },
    {
      id: "asldkajsd",
      questions: [
        "What is the largest planet in our solar system?",
        "Jupiter is the largest planet in our solar system.",
        "It is known for its massive size and strong magnetic field.",
        "Jupiter has a total of 79 moons.",
      ],
      answer: "Jupiter",
    },
    {
      id: "aslpoidkajsd",
      questions: [
        "What is the capital of Japan?",
        "Tokyo is the capital of Japan.",
        "It is one of the most populous cities in the world.",
        "Tokyo is known for its technology, fashion, and cuisine.",
      ],
      answer: "Tokyo",
    },
  ]);

  return (
    <div>
      <QAHeader
        onSubmit={(newItem: QAItem) => {
          setQAItems([...qaItems, newItem]);
        }}
        onClose={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
      <QADisplayList setQAItems={setQAItems} qaItems={qaItems} />
    </div>
  );
};

export default QAList;
