import React from "react";
import ButtonText from "./typography/ButtonText";
import classNames from "classnames";

type ButtonProps = {
  variant: "primary" | "secondary" | "ghost" | "link";
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  children: React.ReactNode;
  iconSvg?: React.ReactNode;
  active?: boolean;
};

const Button = ({
  variant,
  iconSvg,
  onClick,
  children,
  active = false,
}: ButtonProps) => {
  const buttonClasses = classNames(
    "px-4 py-3 rounded-lg flex items-center gap-2",
    {
      "bg-primary hover:bg-button-hover text-black  shadow-custom-shadow font-medium":
        variant === "primary",
      "bg-secondary hover:bg-secondary-hover text-black  shadow-custom-shadow":
        variant === "secondary",
      "bg-transparent hover:bg-black text-white": variant === "ghost",
      "hover:text-gray-400": variant === "link",
      "text-white": variant === "link" && !active,
      "text-primary font-bold": variant === "link" && active,
    }
  );

  return (
    <button onClick={onClick} className={buttonClasses}>
      {iconSvg}
      <ButtonText>{children}</ButtonText>
    </button>
  );
};

export default Button;
