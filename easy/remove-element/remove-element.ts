export function removeElement(nums: number[], val: number): number {
  let i = 0;
  let j = nums.length - 1;
  while (nums[j] === val) {
    --j;
  }
  while (i < j) {
    if (nums[i] === val) {
      nums[i] = nums[j];
      nums[j] = val;
      while (nums[j] === val) {
        --j;
      }
    }
    ++i;
  }
  return j + 1;
}
