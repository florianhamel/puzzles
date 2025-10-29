type Range = { lower: number; higher: number } | null;

export function maxFrequency(nums: number[], k: number, numOperations: number): number {
  const ranges: Range[] = nums
    .sort((a, b) => a - b)
    .map((num) => ({ lower: num - k, higher: num + k }));
  let intersection: Range;
  let series: Set<number>;
  let maxFrequency = 0;
  let inRange = false;
  let operationsApplied = 0;
  let i = 0;
  let j = 0;
  while (i < ranges.length) {
    series = new Set();
    series.add(nums[i]);
    intersection = ranges[i];
    j = i + 1;
    console.log('nums[i]', nums[i]);
    while (j < ranges.length) {
      series.add(nums[j]);
      intersection = intersect(intersection, ranges[j]);
      if (intersection === null) {
        break;
      }
      inRange = nums.slice(i, j + 1).filter((v) => isIncludedIn(v, intersection)).length >= 1;
      operationsApplied = series.size - (inRange ? 1 : 0);
      console.log('inRange', inRange, '| operationsApplied', operationsApplied);
      // petit message pour me souvenir de ce qu'il se passe : le dernier 25 est comptabilisé comme OK
      // alors qu'il ne devrait pas, car l'intersection entre 16 et le premier 25 est [20, 21]
      // or 25 n'en fait pas partie et il serait nécessaire de faire une opération,
      // le problème étant qu'on en a 0 lol
      if (operationsApplied > numOperations) {
        break;
      }
      j++;
    }
    if (j - i > maxFrequency) {
      maxFrequency = j - i;
    }
    i++;
  }
  return maxFrequency;
}

function isIncludedIn(x: number, interval: Range) {
  if (interval.lower <= x && x <= interval.higher) {
    return true;
  }

  return false;
}

function intersect(r1: Range, r2: Range): Range {
  if (r1.higher < r2.lower || r2.higher < r1.lower) {
    return null;
  }

  return {
    lower: Math.max(r1.lower, r2.lower),
    higher: Math.min(r1.higher, r2.higher),
  };
}
