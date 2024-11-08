import { addTwoNumbers, ListNode } from './add-two-numbers';

describe('add-two-numbers', () => {
  it.each([
    [[2, 4, 3], [5, 6, 4], [7, 0, 8]],
    [[2, 4, 3], [1, 5, 6, 4], [3, 9, 9, 4]],
  ])('should sum two representing numbers linked lists', (numbers1, numbers2, expected) => {
    // Given
    const l1 = toListNode(numbers1);
    const l2 = toListNode(numbers2);

    // When
    const result = addTwoNumbers(l1, l2);

    // Then
    expect(toNumbers(result)).toEqual(expected);
  });

  function toListNode(numbers: number[]): ListNode {
    const l = numbers.map((nb, i) => new ListNode(nb));
    for (let i = 0; i < l.length - 1; ++i) {
      l[i].next = l[i + 1];
    }
    return l[0];
  }

  function toNumbers(node: ListNode): number[] {
    const numbers = [];
    while (node) {
      numbers.push(node.val);
      node = node.next;
    }
    return numbers;
  }
});
