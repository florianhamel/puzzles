const map = new Map<string, string>([
  [')', '('],
  ['}', '{'],
  [']', '[']
]);

export function isValid(s: string): boolean {
  const stack: string[] = [];
  for (let c of s) {
    if (map.has(c)) {
      if (map.get(c) !== stack[stack.length - 1]) return false;
      else stack.pop();
    }
    else stack.push(c);
  }
  return stack.length === 0;
}
