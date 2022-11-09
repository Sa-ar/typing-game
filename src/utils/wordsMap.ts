import { WordType } from "../Components/Word/Word";

export function createWordsArray(words: Array<string>, indexToHighlight: number | null = 0) {
  return words.map((word, index) => ({ id: `id${Math.random().toString(16).slice(2)}`, children: word, active: index === indexToHighlight, state: null, history: '' }));
}

export function getCurrentWordIndex(words: Array<WordType>) {
  return words.findIndex(word => word.active);
}

export function updateWord(words: Array<WordType>, index: number, newValues: { active?: boolean; state?: boolean | null; history?: string; }) {
  words[index].active = getNewValue(words[index].active, newValues.active);
  words[index].state = getNewValue(words[index].state, newValues.state);
  words[index].history = getNewValue(words[index].history, newValues.history);
}

function getNewValue(oldValue: any, newValue: string | boolean | null | undefined) {
  if (newValue !== null && newValue !== undefined)
    return newValue;
  return oldValue;
}

export function getWordsAroundTheCurrent(words: Array<WordType>, lines = 3, wordsInLine = 6) {
  const currentIndex = getCurrentWordIndex(words);
  const placeInRow = currentIndex % wordsInLine;
  const currentLineNumber = Math.round((currentIndex - placeInRow) / wordsInLine) + 1;
  const halfRows = Math.round((lines - 1) / 2);

  debugger
  if (currentLineNumber <= 1)
    return words.slice(0, lines * wordsInLine);

  return words.slice((currentLineNumber - halfRows - 1) * wordsInLine, (currentLineNumber + halfRows) * wordsInLine);
}
