export class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
  }
}

export function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  let first: ListNode;
  let current: ListNode | null = null;
  let prev: ListNode | null = null;
  let carrying = false;
  while (l1 || l2) {
    current = new ListNode(0);
    const baseSum = (l1?.val ?? 0) + (l2?.val ?? 0);
    current.val = carrying ? baseSum + 1 : baseSum;
    if (current.val > 9) {
      current.val = current.val % 10;
      carrying = true;
    } else {
      carrying = false;
    }
    if (prev) {
      prev.next = current;
    } else {
      first = current;
    }
    prev = current;
    l1 = l1?.next;
    l2 = l2?.next;
  }
  if (carrying) {
    current = new ListNode(1);
    prev.next = current;
  }
  return first;
}

/**
 *
 * reverse a linked list
 *
 * function reverseListNode(l: ListNode): ListNode {
 *   let prev = null;
 *   let current = l;
 *   let next = null;
 *   while (current) {
 *     next = current.next;
 *     current.next = prev;
 *     prev = current;
 *     current = next;
 *   }
 *   return prev;
 * }
 */
