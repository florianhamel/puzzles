import { plusOne } from './plus-one';

describe('plus one', () => {
  it.each([
    [[1, 2, 3], [1, 2, 4]],
    [[9, 9, 9], [1, 0, 0, 0]],
    [[9], [1, 0]],
    [[8], [9]]
  ])('should sum and add one', (digits: number[], expected: number[]) => {
    // When
    const result = plusOne(digits);

    // Then
    expect(result).toEqual(expected);
  });
});
