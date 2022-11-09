import React, { useReducer } from "react";

import WordsTeleprompter from "./WordsTeleprompter/WordsTeleprompter";

import { getRandomWords } from "../utils/random";
import { createWordsArray } from "../utils/wordsMap";
import reducer from "../Reducers/Words";

import "./App.css";
import CurrentWordInput from './CurrentWordInput/CurrentWordInput';

function App() {
  const [words, dispatch] = useReducer(
    reducer,
    createWordsArray(getRandomWords(18))
  );

  return (
    <div className="App">
      <WordsTeleprompter words={words} />
      <CurrentWordInput words={words} dispatch={dispatch} />
    </div>
  );
}

export default App;
