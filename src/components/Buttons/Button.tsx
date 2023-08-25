import React from "react";

interface Props {
  func: () => void;
  children: React.ReactNode;
}
export const Button = ({ func, children }: Props) => {
  return (
    <div className="flex justify-center">
      <button
        onClick={func}
        className="border border-indigo-500 bg-indigo-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline"
      >
        {children}
      </button>
    </div>
  );
};
