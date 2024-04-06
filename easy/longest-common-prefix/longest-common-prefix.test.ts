import { longestCommonPrefix } from './longest-common-prefix';

describe('longest common prefix', () => {

  it.each([
    [['flower', 'flow', 'flight'], 'fl'],
    [['hello world', 'hello', 'helllllll'], 'hell']
  ])('should find the longest common prefix', (input, expected) => {
    // Given

    // When
    const output = longestCommonPrefix(input);

    // Then
    expect(output).toBe(expected);
  });

});
