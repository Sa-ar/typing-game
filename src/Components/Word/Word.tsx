import React from "react";

import "./Word.css";


export type WordType = WordProps & { id: string };

type WordProps = {
  children: string;
  active: boolean;
  state: boolean | null;
  history?: string;
}

function Word({ children, active, state }: WordProps) {
  return (
    <span className={`word ${active ? "active" : ""} ${state !== null ? state : ""}`}>
      {children}
    </span>
  );
}

export default Word;
