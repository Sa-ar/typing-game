import React from "react";

import { WordType } from "../Word/Word";

import { getCurrentWordIndex } from "../../utils/wordsMap";

type CurrentWordInputProps = {
  words: Array<WordType>;
  dispatch: Function;
  onFirstKeyDown: Function;
  status: string;
}

function CurrentWordInput({ words, dispatch, onFirstKeyDown, status }: CurrentWordInputProps) {
  function handleOnKeyUp(e: React.KeyboardEvent<HTMLInputElement>) {
    if (status === "GAME_OVER") return;
    if (!e.repeat && status === "STOPPED") {
      onFirstKeyDown();
    } 
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

  return <input onKeyUp={handleOnKeyUp} readOnly={status === "GAME_OVER"} />;
}

export default CurrentWordInput;
