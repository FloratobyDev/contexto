import React from "react";
import classNames from "classnames";

type HeaderProps = {
  children: React.ReactNode;
  className?: string;
};

const Header: React.FC<HeaderProps> = ({ children, className }) => {
  return (
    <h2 className={classNames("text-header font-bold text-gray-300", className)}>
      {children}
    </h2>
  );
};

export default Header;
