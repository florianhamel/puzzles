import { swap } from './utils';

export function selectionSort(src: ReadonlyArray<number>): number[] {
  const a = [...src];
  let sortedList: number[] = [];
  while(a.length > 0) {
    for (let i = 0; i < a.length; i++) {
      if (a[i] < a[0]) {
        const tmp = a[0];
        a[0] = a[i];
        a[i] = tmp;
      }
    }
    sortedList = [...sortedList, a.shift()];
  }

  return sortedList;
}

export function selectionSort_v2(src: ReadonlyArray<number>): number[] {
  const a = [...src];
  let jMin;
  for (let i = 0; i < a.length - 1; i++) {
    jMin = i;
    for (let j = i + 1; j < a.length; j++) {
      if (a[j] < a[jMin]) {
        jMin = j;
      }
    }
    if (jMin !== i) {
      swap(i, jMin, a);
    }
  }

  return a;
}
