import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

export const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="border-2 hover:bg-orange-primary transition-all hover:text-dark-primary px-14 md:px-20 py-2 font-semibold text-lg md:text-2xl bg-dark-primary border-orange-primary"
    >
      {children}
    </button>
  );
};
