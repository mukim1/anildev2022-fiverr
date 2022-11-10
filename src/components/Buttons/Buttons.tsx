import React from "react";

export const AddBook = ({ children, handleClick, type, cls }: Props) => (
  <button
    type={type}
    onClick={handleClick}
    className={`bg-[#2CE080] rounded-sm px-4 py-2 font-semibold ${cls}`}
  >
    {children}
  </button>
);

export const Cancel = () => (
  <button className="px-4 py-2 font-semibold border border-gray-300 rounded-sm">
    Cancel
  </button>
);

interface Props {
  children: React.ReactNode;
  handleClick?: () => void;
  type?: "button" | "submit" | "reset" | undefined;
  cls?: string;
}
