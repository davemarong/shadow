import React from "react";

interface Props {
  children: React.ReactNode;
}
export default function Header({ children }: Props) {
  return <p className="text-xl text-center">{children}</p>;
}
