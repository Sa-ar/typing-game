import React from "react";

import Word, { WordType } from "../Word/Word";

import { getWordsAroundTheCurrent } from "../../utils/wordsMap";

import "./WordsTeleprompter.css";

interface WordsTeleprompterProps {
  words: Array<WordType>;
}

function WordsTeleprompter({ words }: WordsTeleprompterProps) {
  return (
    <div className="words-teleprompter">
      {getWordsAroundTheCurrent(words).map(({ id, children, active, state }, index) => (
        <React.Fragment key={`${children}${index}${id}`}>
          <Word active={active} state={state}>
            {children}
          </Word>
          {(index + 1) % 6 === 0 && <br />}
        </React.Fragment>
      ))}
    </div>
  );
}

export default WordsTeleprompter;
