import Paragraph from "../../../typography/Paragraph";

// AnswerInput Component
type AnswerInputProps = {
  answer: string;
  setAnswer: (value: string) => void;
};

const AnswerInput = ({ answer, setAnswer }: AnswerInputProps) => {
  return (
    <div className="flex-1 p-4 text-left">
      <Paragraph bold>Answer</Paragraph>
      <textarea
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        placeholder="Type answer here..."
        className="text-paragraph placeholder:text-input-paragraph w-full px-4 py-3 bg-transparent text-gray-300 placeholder:text-gray-400 border border-faded-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none mt-2"
        rows={9}
      />
    </div>
  );
};
export default AnswerInput;
