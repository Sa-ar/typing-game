import { WordProps } from "../Components/Word/Word";

export function createWordsArray(words: Array<string>, indexToHighlight: number | null = 0) {
  return words.map((word, index) => ({ children: word, active: index === indexToHighlight, state: null, history: '' }));
}

export function getCurrentWordIndex(words: Array<WordProps>) {
  return words.findIndex(word => word.active);
}

export function updateWord(words: Array<WordProps>, index: number, newValues: { active?: boolean; state?: boolean | null; history?: string; }) {
  words[index].active = getNewValue(words[index].active, newValues.active);
  words[index].state = getNewValue(words[index].state, newValues.state);
  words[index].history = getNewValue(words[index].history, newValues.history);
}

function getNewValue(oldValue: any, newValue: string | boolean | null | undefined) {
  if (newValue !== null && newValue !== undefined)
    return newValue;
  return oldValue;
}