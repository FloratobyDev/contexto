import React from 'react';
import ButtonText from './typography/ButtonText';

type ButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  return (
    <button onClick={onClick} className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded">
      <ButtonText>{children}</ButtonText>
    </button>
  );
};

export default Button;
