import React, { BaseSyntheticEvent } from "react";

interface IButton {
  variant: "primary";
  type: "filled" | "outline" | "text";
  onClick: (e: BaseSyntheticEvent) => void;
  className?: string;
  children: React.ReactNode;
  isDisable?: boolean
}

const Button: React.FC<IButton> = ({
  variant,
  type,
  onClick,
  className = "",
  children,
  isDisable = false
}) => {
  className += ` btn btn-${variant} ${type}`;
  return (
    <button onClick={onClick} className={className} disabled={isDisable}>
      {children}
    </button>
  );
};

export default Button;
