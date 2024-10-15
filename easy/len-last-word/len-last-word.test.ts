import { lengthOfLastWord } from './len-last-word';

describe('len last word', () => {
  it.each([
    ['Hello World', 5],
    ['   fly me   to   the moon  ', 4],
    ['luffy is still joyboy', 6]
  ])
  ('should find the length of the last word', (s, expectedLen) => {
    const len = lengthOfLastWord(s);
    expect(len).toEqual(expectedLen);
  });
});