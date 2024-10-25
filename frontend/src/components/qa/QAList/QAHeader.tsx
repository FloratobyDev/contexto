import { useState } from "react";
import Button from "../../Button";
import Title from "../../typography/Title";
import QuestionEditor from "./QuestionEditor/QuestionEditor";
import { QAItem } from "../../../types";

type QAHeaderProps = {
  onSubmit: (newItem: QAItem) => void;
  onClose: () => void;
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
      <div className="flex items-center justify-between mb-4">
        <Title>Transcript Output</Title>
        <Button onClick={handleModalOpen}>New Question</Button>
      </div>
    </>
  );
};

export default QAHeader;
