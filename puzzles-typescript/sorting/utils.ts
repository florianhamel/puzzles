export function swap(i0: number, i1: number, a: number[]) {
  const tmp = a[i0];
  a[i0] = a[i1];
  a[i1] = tmp;
}
