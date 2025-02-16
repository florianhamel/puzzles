import { constructDistancedSequence } from './lexico-largest';

describe('lexico largest sequence', () => {
  it.each([
    [3, [3, 1, 2, 3, 2]],
    [5, [5, 3, 1, 4, 3, 5, 2, 4, 2]]
  ])('should construct the largest lexico sequence', (input, expected) => {
    // when
    const output = constructDistancedSequence(input);

    // then
    expect(output).toEqual(expected);
  });
});
