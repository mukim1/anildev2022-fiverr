import React from "react";

export const Tab = ({ items, value, setValue }: TabsProp) => {
  return (
    <div className="flex mb-3 text-xl font-semibold">
      {items.map((item) => (
        <p
          key={item}
          onClick={() => setValue(item)}
          className={`flex-1 border-b-2 cursor-pointer ${
            value === item
              ? "text-[#2CE080] border-[#2CE080] pb-2"
              : "text-gray-500"
          }`}
        >
          {item}
        </p>
      ))}
    </div>
  );
};

interface TabsProp {
  items: string[];
  value: string;
  setValue: (value: string) => void;
}
