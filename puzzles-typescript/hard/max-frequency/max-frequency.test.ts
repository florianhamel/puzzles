import { maxFrequency } from './max-frequency';

describe('max frequency ii', () => {
  it.each([
    { nums: [1, 4, 5], k: 1, numOperations: 2, maxF: 2 },
    { nums: [5, 11, 20, 20], k: 5, numOperations: 1, maxF: 2 },
  ])('should return max frequency', (val) => {
    const output = maxFrequency(val.nums, val.k, val.numOperations);

    expect(output).toBe(val.maxF);
  });
});
