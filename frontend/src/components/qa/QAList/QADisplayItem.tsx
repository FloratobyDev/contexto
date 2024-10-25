import React, { useState } from "react";
import classNames from "classnames";
import BodyText from "../../typography/BodyText";
import Subtitle from "../../typography/Subtitle";
import LinkText from "../../typography/LinkText";
import { QAItem } from "../../../types";

interface QADisplayItemProps {
  index: number;
  qaItem: QAItem;
  onEdit: (editInfo: QAItem) => void;
  setQAItems: React.Dispatch<React.SetStateAction<QAItem[]>>;
}

const QADisplayItem = ({
  index,
  setQAItems,
  onEdit,
  qaItem,
}: QADisplayItemProps) => {
  const { questions, answer } = qaItem;
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const handleEdit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    e.stopPropagation();
    onEdit(qaItem);
  };

  const handleRemove = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    e.stopPropagation();

    setQAItems((prevItems) => {
      return prevItems.filter((_item: QAItem, i: number) => i !== index);
    });
  };

  return (
    <div className="mb-4 p-4 bg-gray-800 rounded-lg">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={toggleExpand}
      >
        <Subtitle>{questions[0]}</Subtitle>
        <div className="flex space-x-4">
          <button onClick={handleEdit}>
            <LinkText>Edit</LinkText>
          </button>
          <button onClick={handleRemove}>
            <LinkText>Remove</LinkText>
          </button>
        </div>
      </div>

      <div
        className={classNames(
          "mt-2 transition-max-height duration-300 ease-in-out overflow-hidden",
          isExpanded ? "max-h-screen" : "max-h-0"
        )}
      >
        {questions.slice(1).map((qItem, index) => (
          <BodyText key={index} className="mt-2">
            {qItem}
          </BodyText>
        ))}
        <BodyText>{answer}</BodyText>
      </div>
    </div>
  );
};

export default QADisplayItem;
