import cloneDeep from "lodash/cloneDeep";

import { WordType } from "../Components/Word/Word";
import { getRandomWords } from "../utils/random";

import { createWordsArray, getCurrentWordIndex, updateWord } from "../utils/wordsMap";

type actionType = {
  type: string;
  payload: boolean | null;
  history?: string;
}

export default function reducer(state:Array<WordType>, action: actionType) {
  const newState = cloneDeep(state);

  switch(action.type) {
    case 'CHANGE_WORD_STATE':
      newState[getCurrentWordIndex(newState)].state = action.payload;
      break;
    case 'CHANGE_CURRENT_WORD':
      const currentIndex = getCurrentWordIndex(newState);
      updateWord(newState, currentIndex, { active: false, history: action.history || "" });

      let nextIndex = 0;
      if (action.payload) {
        nextIndex = currentIndex + 1;

        if (nextIndex === newState.length - 13) {
          newState.push(...createWordsArray(getRandomWords(), null))
        }
      } else if (currentIndex > 0) {
        nextIndex = currentIndex - 1;
      }
      updateWord(newState, nextIndex, { active: true });
      break;
  }

  return newState;
}