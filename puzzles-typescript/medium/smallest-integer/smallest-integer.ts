export function findSmallestInteger(nums: number[], value: number) {
  const modFrequencies = new Uint32Array(value);
  let mex = 0;
  for (let i = 0; i < nums.length; i++) {
    const normalizedMod = ((nums[i] % value) + value) % value;
    modFrequencies[normalizedMod]++;
  }
  while (modFrequencies[mex % value] > 0) {
    modFrequencies[mex % value]--;
    mex++;
  }
  return mex;
}

// my O(n^2) solution, couldn't find the O(n) solution
export function o2FindSmallestInteger(nums: number[], value: number): number {
  let mex = 0;
  let i = 0;
  while (i < nums.length) {
    let current = nums[i];
    const isNextMex =
      mex === current ||
      (mex < current && (current - mex) % value === 0) ||
      (mex > current && (mex - current) % value === 0);
    if (isNextMex) {
      mex++;
      nums.splice(i, 1);
      i = 0;
    } else {
      i++;
    }
  }
  return mex;
}