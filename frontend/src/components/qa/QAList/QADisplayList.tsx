import React, { useState } from "react";
import QADisplayItem from "./QADisplayItem";
import { QAItem } from "../../../types";
import QuestionEditor from "./QuestionEditor/QuestionEditor";

interface QADisplayListProps {
  qaItems: QAItem[]; // Array of Q&A items
  setQAItems: React.Dispatch<React.SetStateAction<QAItem[]>>;
}

const QADisplayList = ({ qaItems, setQAItems }: QADisplayListProps) => {
  const [editInfo, setEditInfo] = useState<QAItem | null>(null);
  
  const [open, setOpen] = useState(false);

  return (
    <>
      <QuestionEditor
        initialValues={editInfo}
        onSubmit={(updatedItem: QAItem) => {
          if (editInfo) {
            setQAItems((prevItems) => {
              return prevItems.map((item) =>
                item.id === updatedItem.id ? updatedItem : item
              );
            });
          } else {
            setQAItems((prevItems) => [...prevItems, updatedItem]);
          }
        }}
        setOpen={setOpen}
        open={open}
      />
      <div className="flex flex-col gap-y-2 pb-8">
        {qaItems.map((item, index) => (
          <QADisplayItem
            key={index}
            index={index}
            onEdit={(editInfo: QAItem) => {
              setEditInfo(editInfo);
              setOpen(true);
            }}
            setQAItems={setQAItems}
            qaItem={item}
          />
        ))}
      </div>
    </>
  );
};

export default QADisplayList;
