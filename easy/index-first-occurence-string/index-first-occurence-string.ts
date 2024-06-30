export function strStr(haystack: string, needle: string): number {
  for (let i = 0; i < haystack.length; ++i) {
    let j = i;
    let k = 0;
    while (needle.at(k) === haystack.at(j) && j < haystack.length && k < needle.length) {
      ++j;
      ++k;
    }
    if (k === needle.length) return i;
  }
  return -1;
};