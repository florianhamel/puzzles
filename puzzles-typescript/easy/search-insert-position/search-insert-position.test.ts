import { searchInsert } from './search-insert-position';

describe('search insert position', () => {
  it.each([
    [[1, 3, 5, 7], 3, 1],
    [[0, 12, 32, 42, 56], 41, 3],
    [[0, 7, 13, 20], 7, 1],
    [[1, 3, 5, 7], 6, 3],
    [[1, 3, 5, 6], 0, 0],
    [[1, 3], 3, 1],
    [[1], 3, 1],
    [[1], 0, 0]
  ])('should return insert position', (nums, target, expected) => {
    // When
    const result = searchInsert(nums, target);

    // Then
    expect(result).toEqual(expected);
  });
})
