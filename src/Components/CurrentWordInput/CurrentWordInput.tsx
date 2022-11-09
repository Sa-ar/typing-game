import React from "react";

import { WordType } from "../Word/Word";

import { getCurrentWordIndex } from "../../utils/wordsMap";

function CurrentWordInput({ words, dispatch }: { words: Array<WordType>, dispatch: Function }) {
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

      e.currentTarget.value = (currentWord && currentWord.history) || "";
    }
  }

  return <input onKeyUp={handleOnKeyUp} />;
}

export default CurrentWordInput;
