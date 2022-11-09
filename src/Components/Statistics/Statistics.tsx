import React from "react";

import { WordType } from "../Word/Word";

import { getCurrentWordIndex } from "../../utils/wordsMap";

import "./Statistics.css";

type StatisticsProps = {
  words: Array<WordType>;
};

function Statistics({ words }: StatisticsProps) {
  const currentIndex = getCurrentWordIndex(words);
  const wordsWritten = words.slice(0, currentIndex + 1);
  const badWords = wordsWritten.filter(
    (word) => word.children !== word.history
  );
  return (
    <div className="statistics-panel">
      <h2>Statistics</h2>
      <dl>
        <dt>Words Per Minute</dt>
        <dd>{currentIndex + 1}</dd>
        <dt>Mistakes:</dt>
        <dd>
          <h3>Amount: {badWords.length}</h3>
          <ul className="bad-words-list">
            {badWords.map((word) => (
              <li key={word.id}>
                Written {word.history || <strong>nothing</strong>} instead of{" "}
                {word.children}
              </li>
            ))}
          </ul>
        </dd>
      </dl>
    </div>
  );
}

export default Statistics;
