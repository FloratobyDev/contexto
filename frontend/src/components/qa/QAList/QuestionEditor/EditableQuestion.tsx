import { useRef, useLayoutEffect } from "react";

type Props = {
  isEditing: boolean;
  editingInfo: { index: number; question: string };
  index: number;
  setEditingInfo: (info: { index: number; question: string }) => void;
};

const EditableQuestion = ({
  isEditing,
  editingInfo,
  index,
  setEditingInfo,
}: Props) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const autoResizeTextarea = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto"; // Reset the height
      textarea.style.height = `${textarea.scrollHeight}px`; // Set to the scroll height
    }
  };

  useLayoutEffect(() => {
    if (isEditing && editingInfo.index === index) {
      autoResizeTextarea();

      // Scroll the element into view, specifically for the last item
      const isLastItem = index === editingInfo.index;
      if (textareaRef.current && isLastItem) {
        textareaRef.current.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    }
  }, [isEditing, editingInfo.index, editingInfo.question, index]);

  return (
    <>
      {isEditing && editingInfo.index === index && (
        <textarea
          ref={textareaRef}
          autoFocus
          value={editingInfo.question}
          onChange={(e) => {
            setEditingInfo({
              ...editingInfo,
              question: e.target.value,
            });
          }}
          placeholder="Type question here..."
            className="text-paragraph placeholder:text-input-paragraph w-full p-1 bg-transparent text-gray-300 placeholder:text-gray-400 border border-faded-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-primary overflow-hidden resize-none"
          // className="w-full p-1 bg-gray-700 text-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none overflow-hidden"
          rows={1}
        />
      )}
    </>
  );
};

export default EditableQuestion;
