import { getDigit, palindrome } from './palindrome';

describe('palindrome', () => {
  it('should not be a palindrome', () => {
    // given
    const nbs: Array<number> = [234, 134451, 42, -1, -1221];

    // when
    const results: Array<boolean> = nbs.map((nb) => palindrome(nb));

    // then
    results.forEach((result) => expect(result).toBe(false));
  });

  it('should be a palindrome', () => {
    // given
    const nbs: Array<number> = [1221, 4221224, 0];

    // when
    const results: Array<boolean> = nbs.map((nb) => palindrome(nb));

    // then
    results.forEach((result) => expect(result).toBe(true));
  });

  it('should find next number', () => {
    // given
    const nbs: Array<number> = [6328, 531345];

    // when
    const [result1, result2]: Array<number> = nbs.map((nb) => getDigit(nb, 3));

    // then
    expect(result1).toBe(6);
    expect(result2).toBe(1);
  });
});
