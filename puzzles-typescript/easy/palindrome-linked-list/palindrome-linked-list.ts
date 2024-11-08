export class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
  }
}

export function isPalindrome(head: ListNode | null): boolean {
  let fast = head;
  let slow = head;

  let next;
  let prev = null;

  while (fast && fast.next) {
    fast = fast.next?.next;
    next = slow.next;
    slow.next = prev;
    prev = slow;
    slow = next;
  }
  let backward = prev;
  let forward =  fast ? next.next : next;
  while (backward && forward) {
    console.log('backward | forward:', backward.val, '|', forward.val);
    if (backward.val !== forward.val) return false;
    backward = backward.next;
    forward = forward.next;
  }

  return true;
}
