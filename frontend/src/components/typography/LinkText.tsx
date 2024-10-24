import React from "react";
import classNames from "classnames";

type LinkTextProps = {
  children: React.ReactNode;
  className?: string;
};

const LinkText: React.FC<LinkTextProps> = ({ children, className }) => {
  return (
    <span
      className={classNames(
        "text-xs font-normal text-gray-300 hover:text-gray-200 cursor-pointer",
        className
      )}
    >
      {children}
    </span>
  );
};

export default LinkText;
