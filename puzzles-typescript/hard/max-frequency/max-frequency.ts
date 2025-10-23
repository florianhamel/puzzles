export function maxFrequency(nums: number[], k: number, numOperations: number): number {
  nums.sort((a, b) => a - b);
  let maxFrequency = 0;
  let currFrequency = 0;
  let i = 0;
  let j = 1;
  let currNumOperations = numOperations;
  while (j < nums.length) {
    if (nums[j] - nums[i] <= k) {
      currFrequency++;
      if (nums[j] !== nums[i]) {
        currNumOperations--;
      }
    }
    if (currNumOperations < 0) {
      if (currFrequency > maxFrequency) {
        maxFrequency = currFrequency;
      }
      i = j;
      currNumOperations = numOperations;
    }
    j++;
  }
  return 0;
}
