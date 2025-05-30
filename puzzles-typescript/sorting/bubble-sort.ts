import { swap } from './utils';

export function bubbleSort(src: ReadonlyArray<number>): number[] {
  let a = [...src];
  let checkNeeded = true;
  let n = a.length;
  while (checkNeeded) {
    checkNeeded = false;
    for (let i = 0; i < n - 1; i++) {
      if (a[i] > a[i + 1]) {
        swap(i , i + 1, a);
        checkNeeded = true;
      }
    }
    n = n - 1;
  }

  return a;
}
