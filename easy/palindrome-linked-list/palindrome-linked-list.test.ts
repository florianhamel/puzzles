import { isPalindrome, ListNode } from './palindrome-linked-list';

describe('palindrome linked list', () => {

  it.each([
    [[1, 2, 2, 1]],
    [[1, 2, 3, 2, 1]]
  ])('are palindromes', (values) => {
    // given
    const nodes = values.map(val => new ListNode(val, null));
    for (let i = 0; i < nodes.length - 1; i++) {
      nodes[i].next = nodes[i + 1];
    }

    // when
    const result = isPalindrome(nodes[0]);

    // then
    expect(result).toBe(true);
  });

  it.each([
    [[1, 2, 3, 4, 5, 6]],
    [[1, 2, 3]],
    [[0, 1, 2, 0]]
  ])('are not palindromes', (values) => {
    // given
    const nodes = values.map(val => new ListNode(val, null));
    for (let i = 0; i < nodes.length - 1; i++) {
      nodes[i].next = nodes[i + 1];
    }

    // when
    const result = isPalindrome(nodes[0]);

    // then
    expect(result).toBe(false);
  });

});

function reverse(head: ListNode) {
  let curr = head;
  let prev = null;
  let trueNext;

  while (curr) {
    trueNext = curr.next;
    curr.next = prev;
    prev = curr;
    curr = trueNext;
  }
  return prev;
}
