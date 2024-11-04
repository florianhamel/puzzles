export function searchInsert(nums: number[], target: number): number {
  let lowIndex = 0;
  let upIndex = nums.length - 1;
  if (target <= nums[lowIndex]) return lowIndex
  else if (nums[upIndex] < target) {
    return upIndex + 1;
  }
  while (true) {
    console.log("[" + lowIndex + ", " + upIndex + "]");
    const mid = Math.floor((lowIndex + upIndex) / 2);
    if (nums[mid] === target) return mid;
    else if ((upIndex - lowIndex) < 2) return mid + 1;
    else if (target < nums[mid]) upIndex = mid;
    else lowIndex = mid;
  }
}
