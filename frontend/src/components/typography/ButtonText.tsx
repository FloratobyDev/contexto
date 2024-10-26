import React from "react";
import classNames from "classnames";

type ButtonTextProps = {
  children: React.ReactNode;
  className?: string;
};

const ButtonText = ({ children, className }: ButtonTextProps) => {

  return (
    <button className={classNames("text-button-paragraph", className)}>
      {children}
    </button>
  );
};

export default ButtonText;
