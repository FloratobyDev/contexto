import Button from "../../../Button";
import Paragraph from "../../../typography/Paragraph";

// QuestionInput Component
type QuestionInputProps = {
  question: string;
  setQuestion: (value: string) => void;
  addQuestion: () => void;
};

const QuestionInput = ({
  question,
  setQuestion,
  addQuestion,
}: QuestionInputProps) => (
  <div className="text-left h-full flex-1 p-4">
    <Paragraph bold>Question/s</Paragraph>
    <div className="flex gap-x-2 mt-2">
      <input
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Type question here..."
        className="text-input-paragraph placeholder:text-input-paragraph w-full px-4 py-3 bg-transparent text-gray-400 border border-faded-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
      />
      <Button variant="secondary" onClick={addQuestion}>
        Add
      </Button>
    </div>
  </div>
);

export default QuestionInput;
