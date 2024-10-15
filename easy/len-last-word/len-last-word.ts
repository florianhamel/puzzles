export function lengthOfLastWord(s: string): number {
  let len = 0;
  for (let i = 0; i < s.length; ++i) {
      if (s.at(i) !== ' ' && isNewWord(s, i)) {
          len = 1;
      } else if (s.at(i) !== ' ') {
          ++len;
      }
  }
  return len;
};

function isNewWord(s: string, index: number): boolean {
  return (index > 0 && s.at(index - 1) === ' ');
}