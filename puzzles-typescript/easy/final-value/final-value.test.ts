import { finalValueAfterOperations } from './final-value';

describe('final value after operations', () => {
  it.each([
    { operations: ['--X', 'X++', 'X++'], expected: 1 },
    { operations: ['++X', '++X', 'X++'], expected: 3 },
    { operations: ['X++', '++X', '--X', 'X--'], expected: 0 },
  ])('should return final value', (testCase) => {
    // when
    const output = finalValueAfterOperations(testCase.operations);

    // then
    expect(output).toBe(testCase.expected);
  });
});
