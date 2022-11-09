import React, { useReducer, useState } from "react";
import { useTimer } from "use-timer";

import WordsTeleprompter from "./WordsTeleprompter/WordsTeleprompter";
import CurrentWordInput from "./CurrentWordInput/CurrentWordInput";

import { getRandomWords } from "../utils/random";
import { createWordsArray } from "../utils/wordsMap";
import reducer from "../Reducers/Words";

import "./App.css";
import Timer from "./Timer/Timer";

function App() {
  const [gameStatus, setGameStatus] = useState("STOPPED");
  const { time, start: startTimer, reset: resetTimer } = useTimer({
    initialTime: 60,
    endTime: 0,
    timerType: "DECREMENTAL",
    onTimeOver: () => setGameStatus("GAME_OVER")
  });
  const [words, dispatch] = useReducer(
    reducer,
    createWordsArray(getRandomWords(18))
  );

  function onReset() {
    resetTimer();
    setGameStatus("STOPPED");
    dispatch({ type: "RESET_WORDS", payload: true })
  }

  return (
    <div className="App">
      <Timer onReset={onReset} time={time} />
      <WordsTeleprompter words={words} />
      <CurrentWordInput
        words={words}
        dispatch={dispatch}
        onFirstKeyDown={startTimer}
        status={gameStatus}
      />
    </div>
  );
}

export default App;
