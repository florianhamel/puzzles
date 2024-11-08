import { isValid } from './valid-parenthesis';

describe('valid parenthesis', () => {
  it.each([
    ['()[]{}', true],
    ['{[]}', true]
  ])
  ('should be valid', (input) => {
    // When
    const output = isValid(input);

    // Then
    expect(output).toBe(true);
  });

  it.each([
    ['([)]', false]
  ])
  ('should NOT be valid', (input) => {
    // When
    const output = isValid(input);

    // Then
    expect(output).toBe(false);
  });
});
