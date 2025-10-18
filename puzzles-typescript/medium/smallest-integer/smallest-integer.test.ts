import { findSmallestInteger } from './smallest-integer';

it.each([
  [[1, -10, 7, 13, 6, 8], 5, 4],
  [[1, -10, 7, 13, 6, 8], 7, 2],
  [[3, 0, 3, 2, 4, 2, 1, 1, 0, 4], 5, 10],
])('smallest integer', (nums, value, expected) => {
  // when
  const result = findSmallestInteger(nums, value);

  // then
  expect(result).toBe(expected);
});
