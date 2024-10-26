import React from "react";
import Paragraph from "../../typography/Paragraph";
import SubParagraph from "../../typography/SubParagraph";

type LogListItemProps = {
  timestamp: string;
  content: string;
};

const formatDateTime = (timestamp: string) => {
  const date = new Date(timestamp);

  const formattedDate = date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const formattedTime = date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  return { date: formattedDate, time: formattedTime };
};

const LogListItem: React.FC<LogListItemProps> = ({ timestamp, content }) => {
  const { date, time } = formatDateTime(timestamp);
  console.log(timestamp);

  return (
    <div className="flex flex-col gap-y-2 py-4 pr-4">
      <SubParagraph muted>
        {date} • {time}
      </SubParagraph>
      <Paragraph>{content}</Paragraph>
    </div>
  );
};

export default LogListItem;
