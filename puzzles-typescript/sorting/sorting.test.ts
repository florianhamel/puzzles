import { bubbleSort } from './bubble-sort';
import { selectionSort, selectionSort_v2 } from './selection-sort';
import { insertionSort } from './insertion-sort';

describe('sorting', () => {
  const inputArrays = [
    [[], []],
    [[42], [42]],
    [[-1, 0, 1, 2, 3], [-1, 0, 1, 2, 3]],
    [[2, 2, 2, 2, 2], [2, 2, 2, 2, 2]],
    [[3, 2, 1, 0, -1], [-1, 0, 1, 2, 3]],
    [[42, 12, 32, 34, 8], [8, 12, 32, 34, 42]]
  ];

  it.each(inputArrays)('bubble sort %p', (input: number[], expected: number[]) => {
    // when
    const output = bubbleSort(input);

    // expect
    expect(output).toEqual(expected);
  });

  describe('selection sort', () => {
    it.each(inputArrays)('selection sort %p', (input: number[], expected: number[]) => {
      // when
      const output = selectionSort(input);

      // expect
      expect(output).toEqual(expected);
    });

    it.each(inputArrays)('selection sort v2 %p', (input: number[], expected: number[]) => {
      // when
      const output_v2 = selectionSort_v2(input);

      // expect
      expect(output_v2).toEqual(expected);
    });
  });

  it.each(inputArrays)('insertion sort %p', (input: number[], expected: number[]) => {
    // when
    const output = insertionSort(input);

    // expect
    expect(output).toEqual(expected);
  });
});
