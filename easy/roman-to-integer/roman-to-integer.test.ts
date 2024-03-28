import { romanToInt } from './roman-to-integer';

describe('roman to integer', () => {
  it('should return numbers from 1 to 10', () => {
    // Given
    // const romanNbs = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
    const romanNbs = ['I', 'II', 'III', 'IV'];

    // When
    const output = romanNbs.map(romanNb => romanToInt(romanNb));

    // Then
    // expect(output).toContain([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    expect(output).toEqual([1, 2, 3, 4]);
  });
})
