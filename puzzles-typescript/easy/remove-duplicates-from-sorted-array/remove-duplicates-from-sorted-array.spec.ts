import { removeDuplicates } from './remove-duplicates-from-sorted-array';

describe('remove duplicated from sorted array', () => {

  it('should remove duplicates', () => {
    // Given
    const nums: Array<number> = [0, 1, 1, 2, 3, 3, 3, 3, 4, 5, 6, 7, 8, 8, 8, 9];

    // When
    const output: number = removeDuplicates(nums);
    console.log('nums', nums);

    // Then
    expect(output).toBe(10);


    const expected: Array<number> = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (let i = 0; i < expected.length; ++i) {
      expect(nums.at(i)).toBe(expected.at(i));
    }
  });
});
