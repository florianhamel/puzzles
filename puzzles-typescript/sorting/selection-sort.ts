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
