import React from "react";

import Word, { WordProps } from "../Word/Word";

interface WordsTeleprompterProps {
  words: Array<WordProps>;
}

function WordsTeleprompter({
  words,
}: WordsTeleprompterProps) {
  return (
    <div>
      {words.map(({children, active, state}, index) => (
        <Word key={`${children}${index}`} active={active} state={state}>
          {children}
        </Word>
      ))}
    </div>
  );
}

export default WordsTeleprompter;
