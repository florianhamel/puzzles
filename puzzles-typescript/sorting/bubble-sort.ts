export function bubbleSort(src: ReadonlyArray<number>): number[] {
  let a = [...src];
  let checkNeeded = true;
  let n = a.length;
  while (checkNeeded) {
    checkNeeded = false;
    for (let i = 0; i < n - 1; i++) {
      if (a[i] > a[i + 1]) {
        const tmp = a[i + 1];
        a[i + 1] = a[i];
        a[i] = tmp;
        checkNeeded = true;
      }
    }
    n = n - 1;
  }

  return a;
}
