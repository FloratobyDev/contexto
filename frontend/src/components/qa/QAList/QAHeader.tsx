import { useState } from "react";
import Button from "../../Button";
import Header from "../../typography/Header";
import QuestionEditor from "./QuestionEditor/QuestionEditor";
import { QAItem } from "../../../types";

type QAHeaderProps = {
  onSubmit: (newItem: QAItem) => void;
};

const QAHeader = ({ onSubmit }: QAHeaderProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleModalOpen = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <QuestionEditor
        onSubmit={onSubmit}
        open={isModalOpen}
        setOpen={setIsModalOpen}
      />
      <div className="flex items-center justify-between mb-4 shrink-0">
        <Header>Transcript Output</Header>
        <Button
          iconSvg={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={16}
              height={16}
              color={"#18181e"}
              fill={"none"}
            >
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M10 9C10 7.89543 10.8954 7 12 7C13.1046 7 14 7.89543 14 9C14 9.39815 13.8837 9.76913 13.6831 10.0808C13.0854 11.0097 12 11.8954 12 13V13.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M11.992 17H12.001"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          }
          variant="primary"
          onClick={handleModalOpen}
        >
          New Question
        </Button>
      </div>
    </>
  );
};

export default QAHeader;
