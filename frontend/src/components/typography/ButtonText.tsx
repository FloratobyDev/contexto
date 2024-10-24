import React from "react";
import classNames from "classnames";

type ButtonTextProps = {
  children: React.ReactNode;
  className?: string;
};

const ButtonText: React.FC<ButtonTextProps> = ({ children, className }) => {
  return (
    <button
      className={classNames(
        "text-sm font-bold text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded",
        className
      )}
    >
      {children}
    </button>
  );
};

export default ButtonText;
