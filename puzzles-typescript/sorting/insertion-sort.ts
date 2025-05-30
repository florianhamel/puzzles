import { swap } from './utils';

export function insertionSort(src: ReadonlyArray<number>): number[] {
  const a = [...src];
  let j;
  for (let i = 0; i < a.length - 1; i++) {
    j = i + 1;
    while (j > 0 && a[j] < a[j - 1]) {
      swap(j - 1, j, a);
      j--;
    }
  }

  return a;
}
