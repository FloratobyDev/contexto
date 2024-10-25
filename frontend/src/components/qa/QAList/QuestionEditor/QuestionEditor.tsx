import { useEffect, useState } from "react";
import Button from "../../../Button";
import Modal from "../../../Modal";
import Subtitle from "../../../typography/Subtitle";
import AnswerInput from "./AnswerInput";
import QuestionInput from "./QuestionInput";
import QuestionList from "./QuestionList";
import { QAItem } from "../../../../types";

type QAHeaderProps = {
  initialValues?: QAItem | null;
  onSubmit: (updatedItem: QAItem) => void;
  open: boolean;
  setOpen: (open: boolean) => void;
};

const QuestionEditor = ({
  initialValues,
  onSubmit,
  setOpen,
  open,
}: QAHeaderProps) => {
  console.log("QuestionEditor", initialValues);

  const [qList, setQList] = useState<string[]>([]);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editingInfo, setEditingInfo] = useState({ index: -1, question: "" });

  useEffect(() => {
    if (initialValues) {
      setQList(initialValues.questions);
      setAnswer(initialValues.answer);
    }
  }, [initialValues]);

  const handleSubmit = () => {
    if (qList.length && answer) {
      onSubmit({
        id: initialValues?.id || "",
        questions: qList,
        answer,
      });
      setQList([]);
      setAnswer("");
      setOpen(false);
    }
  };

  const handleModalOpen = () => {
    setOpen(!open);
  };

  const handleAddQuestion = () => {
    if (question.trim()) {
      setQList([...qList, question]);
      setQuestion("");
    }
  };

  return (
    <Modal isOpen={open}>
      <div className="bg-gray-800 rounded-lg shadow-lg w-full max-w-[37%]">
        {/* Header */}
        <div className="flex justify-between items-center py-3 px-4 border-b border-b-faded-gray">
          <Subtitle>New Question</Subtitle>
          <button
            className="text-gray-300 hover:text-gray-100"
            onClick={() => {
              handleModalOpen();
              setOpen(false);
            }}
          >
            &times;
          </button>
        </div>
        {/* Modal Content */}
        <div className="h-80 flex gap-x-4 w-full overflow-hidden">
          <div className="flex flex-col flex-1">
            <QuestionInput
              question={question}
              setQuestion={setQuestion}
              addQuestion={handleAddQuestion}
            />
            <QuestionList
              qList={qList}
              setQList={setQList}
              isEditing={isEditing}
              setIsEditing={setIsEditing}
              editingInfo={editingInfo}
              setEditingInfo={setEditingInfo}
            />
          </div>
          <AnswerInput answer={answer} setAnswer={setAnswer} />
        </div>
        {/* Add Question Button */}
        <div className="flex justify-end p-4">
          <Button onClick={handleSubmit}>Add Question</Button>
        </div>
      </div>
    </Modal>
  );
};

export default QuestionEditor;
