export function maxPartitionsAfterOperations(s: string, k: number): number {
  const replaceIndex = findReplaceIndex(s, k);
  console.log('replaceIndex', replaceIndex);
  const sReplaced = replaceChar(s, k, replaceIndex);
  console.log('sReplaced', sReplaced);
  const partitions = runOperations(sReplaced, k);
  console.log(partitions);
  return partitions.length;
}

function findReplaceIndex(s: string, k: number) {
  let distinctChars = '';
  let i = 0,
    j = 0;
  while (j < s.length) {
    // first repetition of the current partition
    if (distinctChars.includes(s.at(j)) && j - i <= k) {
      return j;
    }
    // there was no repetition the partition ends
    if (j - i === k) {
      distinctChars = '';
      i = j;
    }
    if (!distinctChars.includes(s.at(j))) {
      distinctChars += s.at(j);
    }
    j++;
  }
  return null;
}

function replaceChar(s: string, k: number, index: number) {
  if (!index) {
    return s;
  }
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let distinctChars = '';
  let nextIndex = index + 1;
  while (nextIndex < s.length && distinctChars.length < k) {
    if (!distinctChars.includes(s.at(nextIndex))) {
      distinctChars += s.at(nextIndex);
    }
    nextIndex++;
  }
  const prevLetters = s.substring(index - k, index);
  const nextLetters = s.substring(index, nextIndex);
  const differentChar = alphabet.split('').find((l) => !prevLetters.includes(l) && !nextLetters.includes(l)) ?? 'a';
  return s.substring(0, index) + differentChar + s.substring(index + 1);
}

function runOperations(s: string, k: number) {
  const partitions = [];
  let distinctChars = '';
  let i = 0;
  let j = 0;
  while (j < s.length) {
    if (!distinctChars.includes(s.at(j)) && distinctChars.length === k) {
      partitions.push(s.slice(i, j));
      distinctChars = '';
      i = j;
      continue;
    }
    if (!distinctChars.includes(s.at(j))) {
      distinctChars += s.at(j);
    }
    j++;
  }
  partitions.push(s.slice(i, j));
  return partitions;
}
