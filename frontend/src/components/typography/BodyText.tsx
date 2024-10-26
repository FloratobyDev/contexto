import React from "react";
import classNames from "classnames";

type BodyTextProps = {
  children: React.ReactNode;
  className?: string;
};

const BodyText: React.FC<BodyTextProps> = ({ children, className }) => {
  return (
    <p className={classNames("text-base font-normal text-gray-400 text-pretty", className)}>
      {children}
    </p>
  );
};

export default BodyText;
