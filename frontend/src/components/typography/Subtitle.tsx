import React from "react";
import classNames from "classnames";

type SubtitleProps = {
  children: React.ReactNode;
  className?: string;
};

const Subtitle: React.FC<SubtitleProps> = ({ children, className }) => {
  return (
    <h2 className={classNames("text-lg font-medium text-gray-300", className)}>
      {children}
    </h2>
  );
};

export default Subtitle;
