import { removeElement } from './remove-element';

describe('remove element', () => {

  it('should remove element', () => {
    // Given
    const nums: Array<number> = [1, 2, 2, 4, 1, 5, 6, 2, 7, 7, 2];
    const k: number = 2;

    // When
    const output = removeElement(nums, k);

    // Then
    expect(output).toBe(7);

    const cleanNums: Array<number> = nums.slice(0, output).sort((a, b) => a <= b ? -1 : 1);
    const expected: Array<number> = [1, 1, 4, 5, 6, 7, 7];
    for (let i = 0; i < expected.length; ++i) {
      expect(cleanNums[i]).toBe(expected[i]);
    }
  });

})
