export function longestCommonPrefix(strs: string[]): string {
  return strs.reduce((prev, curr) => {
    let i = 0;
    while (i < prev.length && i < curr.length && prev.charAt(i) === curr.charAt(i)) ++i;
    return prev.substring(0, i);
  }, strs[0]);
}
