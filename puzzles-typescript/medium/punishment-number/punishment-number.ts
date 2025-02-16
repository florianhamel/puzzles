/**
 * - The punishment number of n is defined as the sum of the squares of all integers i such that: 1 <= i <= n
 * - The decimal representation of i * i can be partitioned into contiguous substrings such that the sum of the integer values of these substrings equals i.
 */


export function punishmentNumber(n: number): number {
  let sum = 0;
  for (let i = 0; i <= n; ++i) {
    sum += sumRecursion(0, 0, i);
  }

  return sum;
}

function sumRecursion(start: number, sum: number, target: number): number {
  const squareTarget = target ** 2;
  if (start >= squareTarget.toString().length && sum === target) {
    return squareTarget;
  }
  for (let i = start; i < squareTarget.toString().length; ++i) {
    const partition = +squareTarget.toString().substring(start, i + 1);
    const result = sumRecursion(i + 1, sum + partition, target);
    if (result > 0) {
      return result;
    }
  }

  return 0;
}
