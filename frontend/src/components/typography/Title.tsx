import React from "react";
import classNames from "classnames";

type TitleProps = {
  children: React.ReactNode;
  className?: string;
};

const Title: React.FC<TitleProps> = ({ children, className }) => {
  return (
    <h1 className={classNames("text-2xl font-bold text-white", className)}>
      {children}
    </h1>
  );
};

export default Title;
