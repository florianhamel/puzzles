import { punishmentNumber } from './punishment-number';

describe('punishment-number', () => {
  it.each([
    [10, 182],
    [37, 1478],
  ])('should return the punishment number', (input, expected) => {
    // when
    const output = punishmentNumber(input);

    // then
    expect(output).toBe(expected);
  });
});
