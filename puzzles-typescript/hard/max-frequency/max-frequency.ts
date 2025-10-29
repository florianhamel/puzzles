type Range = { lower: number; higher: number } | null;

export function maxFrequency(nums: number[], k: number, numOperations: number): number {
  const ranges: Range[] = nums
    .sort((a, b) => a - b)
    .map((num) => ({ lower: num - k, higher: num + k }));
  let intersection: Range;
  let series: number[];
  let maxFrequency = 0;
  let operationsApplied = 0;
  let i = 0;
  let j = 0;
  while (i < ranges.length) {
    series = [];
    series.push(nums[i]);
    intersection = ranges[i];
    j = i + 1;
    while (j < ranges.length) {
      series.push(nums[j]);
      intersection = intersect(intersection, ranges[j]);
      if (intersection === null) {
        break;
      }
      operationsApplied = series.length - getMaxCountOfNumberInIntersection(series, intersection);
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

function getMaxCountOfNumberInIntersection(series: number[], intersection: Range) {
  const alreadyChecked = new Set<number>();
  let max = 0;
  for (const nb of series) {
    if (!alreadyChecked.has(nb) && isIncludedIn(nb, intersection)) {
      const count = series.filter(v => v === nb).length;
      if (count > max) {
        max = count;
      }
    }
  }
  return max;
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
