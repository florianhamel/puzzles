import { maxFrequency } from './max-frequency';

describe('max frequency', () => {
  it.each([
    { nums: [2], k: 42, numOperations: 42, maxFrequency: 1 },
    { nums: [2, 33], k: 47, numOperations: 0, maxFrequency: 1 },
    { nums: [1, 4, 5], k: 1, numOperations: 2, maxFrequency: 2 },
    { nums: [4, 52, 58], k: 34, numOperations: 0, maxFrequency: 1 },
    { nums: [5, 11, 20, 20], k: 5, numOperations: 1, maxFrequency: 2 },
    { nums: [66, 37, 40, 40], k: 77, numOperations: 2, maxFrequency: 4 },
    { nums: [5, 11, 16, 25, 25], k: 5, numOperations: 2, maxFrequency: 2 },
    { nums: [15, 113, 122, 102], k: 90, numOperations: 3, maxFrequency: 4 },
  ])('should return $nums max frequency', (val) => {
    const output = maxFrequency(val.nums, val.k, val.numOperations);

    expect(output).toBe(val.maxFrequency);
  });
});
