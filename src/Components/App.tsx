import React, { useReducer } from "react";

import WordsTeleprompter from "./WordsTeleprompter/WordsTeleprompter";

import { getRandomWords } from "../utils/random";
import { createWordsArray, getCurrentWordIndex } from "../utils/wordsMap";
import reducer from "../Reducers/Words";

import "./App.css";

function App() {
  const [words, dispatch] = useReducer(
    reducer,
    createWordsArray(getRandomWords(18))
  );

  function handleOnKeyUp(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === " ") {
      const value = e.currentTarget.value.slice(0, -1);
      const currentWord = words[getCurrentWordIndex(words)];

      dispatch({
        type: "CHANGE_WORD_STATE",
        payload: value === currentWord.children,
      });
      dispatch({ type: "CHANGE_CURRENT_WORD", payload: true, history: value });

      e.currentTarget.value = "";
    } else if (e.code === "Backspace" && e.currentTarget.value === "") {
      const currentWordIndex = getCurrentWordIndex(words);

      dispatch({ type: "CHANGE_WORD_STATE", payload: null });
      dispatch({ type: "CHANGE_CURRENT_WORD", payload: false, history: "" });

      const currentWord = words[currentWordIndex - 1];

      e.currentTarget.value = currentWord && currentWord.history || "";
    }
  }

  return (
    <div className="App">
      <WordsTeleprompter words={words} />
      <input onKeyUp={handleOnKeyUp} />
    </div>
  );
}

export default App;
