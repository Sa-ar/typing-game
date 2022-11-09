import wordsBank from "../words.json";

export function getRandomWords(amount = 6) {
  const shuffled = wordsBank.sort(() => 0.5 - Math.random());

  return shuffled.slice(0, amount);
}
