import React from "react";

interface Props {
  children: React.ReactNode;
  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
  h4?: boolean;
  h5?: boolean;
}
export default function Header({ children, h1, h2, h3, h4, h5 }: Props) {
  console.log(h1);
  if (h1) return <h1>{children}</h1>;
  if (h2) return <h2>{children}</h2>;
  if (h3) return <h3>{children}</h3>;
  if (h4) return <h4>{children}</h4>;
  if (h5) return <h5>{children}</h5>;
}
