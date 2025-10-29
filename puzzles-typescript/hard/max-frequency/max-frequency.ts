type Range = { lower: number; higher: number } | null;

export function maxFrequency(nums: number[], k: number, numOperations: number): number {
  const ranges: Range[] = nums
    .sort((a, b) => a - b)
    .map((num) => ({ lower: num - k, higher: num + k }));
  let intersection: Range;
  let series: number[];
  let apparitions: Map<number, number>;
  let maxFrequency = 0;
  let operationsApplied = 0;
  let i = 0;
  let j = 0;
  while (i < ranges.length) {
    apparitions = new Map();
    apparitions.set(nums[i], 0);
    intersection = ranges[i];
    j = i + 1;
    console.log('nums[i]', nums[i]);
    while (j < ranges.length) {
      if (apparitions.has(nums[j])) {
        apparitions.set(nums[j], apparitions.get(nums[j]) + 1);
      } else {
        apparitions.set(nums[j], 0);
      }
      intersection = intersect(intersection, ranges[j]);
      if (intersection === null) {
        break;
      }
      // il faut retirer le plus grand nombre de nombres égaux dans l'intersection
      operationsApplied = series.length - sameNumbersInIntersection;
      // console.log(
      //   'series',
      //   series,
      //   ', intersection',
      //   intersection,
      //   ', operationsApplied',
      //   operationsApplied,
      // );
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
