import BodyText from "../../../typography/BodyText";

// AnswerInput Component
type AnswerInputProps = {
  answer: string;
  setAnswer: (value: string) => void;
};

const AnswerInput = ({ answer, setAnswer }: AnswerInputProps) => (
  <div className="mb-4 flex-1 p-4 text-left">
    <BodyText>Answer</BodyText>
    <textarea
      value={answer}
      onChange={(e) => setAnswer(e.target.value)}
      placeholder="Type answer here..."
      className="w-full mt-1 p-2 bg-gray-700 text-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      rows={4}
    />
  </div>
);

export default AnswerInput;
