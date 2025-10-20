import { maxPartitionsAfterOperations } from './max-partitions';

type TestCase = { s: string; k: number; max: number };

describe('max partitions', () => {
  it.each([
    // { s: 'c', k: 3, max: 1 },
    // { s: 'ba', k: 1, max: 2 },
    // { s: 'aca', k: 2, max: 2 },
    // { s: 'acb', k: 2, max: 2 },
    // { s: 'abb', k: 1, max: 3 },
    { s: 'baacccb', k: 1, max: 6 },
    // { s: 'abbaaca', k: 2, max: 3 },
    // { s: 'abacdef', k: 3, max: 3 }, //[abac][def] -> [abz][cde][f]
    // { s: 'abcabcabc', k: 3, max: 3 },
    // { s: 'accca', k: 2, max: 3 },
    // { s: 'aabaab', k: 3, max: 1 },
    // { s: 'xxyz', k: 1, max: 4 },
    // { s: 'abccdeffffghi', k: 3, max: 4 }, // base 3 -> 'abczdeffffghi' 4 | 'abccdefzffghi
    // { s: 'aaaaabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz', k: 26, max: 1 },
  ])('should return "$s" max partitions', (testCase: TestCase) => {
    // when
    const output = maxPartitionsAfterOperations(testCase.s, testCase.k);

    // then
    expect(output).toBe(testCase.max);
  });
});
