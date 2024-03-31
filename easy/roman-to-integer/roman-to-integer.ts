const map: Map<string, number> = new Map<string, number>([
  ['I', 1],
  ['V', 5],
  ['X', 10],
  ['L', 50],
  ['C', 100],
  ['D', 500],
  ['M', 1000],
]);

export function romanToInt(s: string): number {
  let output = 0;
  for (let i = 0; i < s.length; ++i) {
    const curr = map.get(s.charAt(i))
    const next = map.get(s.charAt(i + 1));
    if (i < s.length - 1 && curr < next) output -= curr;
    else output += curr;
  }
  return output;
}
