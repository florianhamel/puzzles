export function mergeSort(src: ReadonlyArray<number>): number[] {
  let subLists: number[][] = src.map(nbr => [nbr]);
  while (subLists.length > 1) {
    for (let i = 0; i < subLists.length - 1; i++) {
      subLists = subLists.toSpliced(i, 2, merge(subLists[i], subLists[i + 1]));
    }
  }

  return subLists.flat();
}

function merge(l1: ReadonlyArray<number>, l2: ReadonlyArray<number>): number[] {
  let mergedList = [];
  let i = 0;
  let j = 0;
  while (i < l1.length && j < l2.length) {
    if (l1[i] <= l2[j]) {
      mergedList.push(l1[i++]);
    } else {
      mergedList.push(l2[j++]);
    }
  }
  if (i < l1.length) {
    mergedList = [...mergedList, ...l1.slice(i, l1.length)];
  } else if (j < l2.length) {
    mergedList = [...mergedList, ...l2.slice(j, l2.length)];
  }

  return mergedList;
}
