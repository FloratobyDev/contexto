import BodyText from "../../../typography/BodyText";

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
    <BodyText>Question/s</BodyText>
    <div className="shrink-0 flex items-center gap-x-4 mt-2">
      <input
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Type question here..."
        className="w-full mt-1 p-2 bg-gray-700 text-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button onClick={addQuestion}>Add</button>
    </div>
  </div>
);

export default QuestionInput;
