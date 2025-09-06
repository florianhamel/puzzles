import { numberOfPairs } from './number-of-pairs';

describe('Number of Pairs', () => {
  it.each([
    { points: [[1, 1], [2, 2], [3, 3]], expected: 0 },
    { points: [[6, 2], [4, 4], [2, 6]], expected: 2 },
    { points: [[3, 1], [1, 3], [1, 1]], expected: 2 },
    { points: [[0, 0], [0, 3]], expected: 1 },
    { points: [[0, 1], [1, 3], [6, 1]], expected: 2 }
  ])('should pass', ({ points, expected }) => {
    // when
    const output = numberOfPairs(points);

    // then
    expect(output).toEqual(expected);
  });
});
