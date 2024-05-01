export class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
  }
}

export function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  let output: ListNode | null = null;
  let last: ListNode | null = null;

  while (list1 || list2) {
    let node: ListNode;
    if (!list2 || list1 && list1.val <= list2.val) {
      node = new ListNode(list1.val, null);
      list1 = list1.next;
    } else {
      node = new ListNode(list2.val, null);
      list2 = list2.next;
    }
    if (output) {
      let tmp = output;
      while (tmp.next) {
        tmp = tmp.next;
      }
      tmp.next = node;
    } else {
      output = node;
    }
    if (last) last.next = node;
    last = node;
  }

  return output;
}
